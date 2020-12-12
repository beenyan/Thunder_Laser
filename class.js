'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
class Text {
    constructor(args) {
        let def = {
            x: 30 * scale,
            y: 30 * scale,
            color: 'aqua',
            font: `${40 * scale}px Arial`,
            text: ''
        }
        Object.assign(def, args);
        Object.assign(this, def);
        ctx.font = this.font;
        this.w = ctx.measureText(this.text).width;
        this.h = parseInt(this.font.match(/\d+/));
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        ctx.fillText(this.text, this.x, this.y);
        ctx.strokeStyle = 'red';
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}
class Border {
    constructor(args) {
        let def = {
            background_color: '#FDE17C',
            border_color: '#FEC508',
            lineWidth: 5,
            border_left: 30 * scale,
            w: ww,
            h: wh
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.fillStyle = this.background_color;
        ctx.fillRect(0, 0, this.w, this.h);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.border_color;
        ctx.strokeRect(this.border_left, this.border_left, this.w - this.border_left * 2, this.h - this.border_left * 2)
    }
}
class Laser {
    constructor() {
        let def = {
            background_color: '#FEC400',
            w: 77 * scale,
            h: 3 * scale,
            speed: 8,
            r: Math.max(ww, wh),
            transform: {}
        }
        Object.assign(this, def);
        // 圓形生成法
        // this.x = rand(-this.r, this.r) + ww / 2;
        // this.y = Math.sqrt(this.r ** 2 - (this.x - ww / 2) ** 2) * [1, -1][rand(0, 1)] + wh / 2;

        // 矩形生成法
        Object.assign(this, [{
            x: [-this.w, ww + this.w][rand(0, 1)],
            y: rand(-this.w, wh + this.w)
        }, {
            x: rand(-this.w, ww + this.w),
            y: [-this.w, wh + this.w][rand(0, 1)]
        }][rand(0, 1)]);
        this.deg = Math.atan2(player.y - this.y, player.x - this.x);
        this.vx = Math.cos(this.deg);
        this.vy = Math.sin(this.deg);
        this.transform.h = this.w * Math.sin(this.deg);
        this.transform.w = Math.sqrt(this.w ** 2 - this.transform.h ** 2, 2) * (Math.abs(this.deg * 180 / Math.PI) >= 90 ? -1 : 1);
    }
    draw() {
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.deg);
        ctx.fillStyle = this.background_color;
        ctx.fillRect(0, 0, this.w, this.h);

        ctx.closePath();
        ctx.restore();
    }
    update() {
        this.x += this.vx * this.speed;
        this.y += this.vy * this.speed;
    }
}
class Player {
    constructor(args) {
        let def = {
            size_out: 21 * scale,
            size_in: 13 * scale,
            x: ww / 2,
            y: wh / 2,
            background_color: '#FDE17C',
            border_color: '#FEC400',
            lineWidth: 2 * scale
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.fillStyle = this.background_color;
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.border_color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_in, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }
    update() {
        this.size_in = (this.size_in + 0.5) % this.size_out;
    }
    move(move) {
        let border_left = 30 * scale;
        let limit_move = border_left + player.size_out + 5;
        this.x = Math.min(Math.max(this.x + move.x, limit_move), ww - limit_move);
        this.y = Math.min(Math.max(this.y + move.y, limit_move), wh - limit_move);
    }
    touch() {
        canvas_touch.width = this.size_out * 2 + this.lineWidth;
        canvas_touch.height = this.size_out * 2 + this.lineWidth;
        ctx.beginPath();
        ctx_touch.arc(this.size_out, this.size_out, this.size_out, 0, Math.PI * 2);
        ctx_touch.stroke();
        ctx.closePath();
        let ans = ctx_touch.getImageData(0, 0, canvas_touch.width, canvas_touch.height).data.filter((e, i) => i % 4 === 3 && e !== 0).length;
        if (Lasers.find(e => {
            if (Math.sqrt(Math.pow(this.x - e.x - e.transform.w / 2, 2) + Math.pow(this.y - e.y - e.transform.h / 2, 2)) <= this.size_out + e.w / 2) {
                ctx_touch.globalCompositeOperation = 'destination-out';
                ctx_touch.translate(e.x - this.x + this.size_out, e.y - this.y + this.size_out);
                ctx_touch.rotate(e.deg);
                ctx_touch.fillRect(0, 0, e.w, e.h);
                ctx_touch.restore();
                // 碰撞
                if (ans !== ctx_touch.getImageData(0, 0, canvas_touch.width, canvas_touch.height).data.filter((e, i) => i % 4 === 3 && e !== 0).length)
                    return true;
            }
        }) !== undefined) {
            init();
        }
    }
}
class Gui {
    constructor(args) {
        let def = {
            display: false,
            background_color: '#FDE17C',
            border_color: '#FEC508',
            lineWidth: 5,
            border_left: 30 * scale,
            item: {}
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.fillStyle = this.background_color;
        ctx.fillRect(0, 0, ww, wh);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.border_color;
        ctx.strokeRect(this.border_left, this.border_left, ww - this.border_left * 2, wh - this.border_left * 2)
    }
}