'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

class Laser {
    constructor() {
        let def = {
            background_color: '#FEC400',
            w: 77 * scale,
            h: 3 * scale,
            speed: 8,
            r: Math.max(ww, wh)
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
        this.deg = Math.atan2(player.y - this.y, player.x - this.x) * 180 / Math.PI
        this.vx = Math.cos(Math.PI / 180 * this.deg)
        this.vy = Math.sin(Math.PI / 180 * this.deg)
    }
    draw() {
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 180 * this.deg);
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
        let limit_move = gui.border_left + player.size_out + gui.lineWidth;
        this.x = Math.min(Math.max(this.x + move.x, limit_move), ww - limit_move);
        this.y = Math.min(Math.max(this.y + move.y, limit_move), wh - limit_move);
    }
}
class Gui {
    constructor(args) {
        let def = {
            background_color: '#FDE17C',
            border_color: '#FEC508',
            lineWidth: 5,
            border_left: 30 * scale
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

let windows = window;
let scale = windows.innerHeight / 360;
let ww = 480 * scale;
let wh = 360 * scale;
canvas.width = windows.innerWidth;
canvas.height = windows.innerHeight;
let deviation = (canvas.width - ww) / 2;
let orgpos = { x: ww / 2, y: wh / 2 };
ctx.translate(deviation, 0)
let gui = new Gui();
let player = new Player();
let Lasers = [];
let time = 0;

function init() {
    gui.draw();
    ctx.globalCompositeOperation = 'source-atop';
}
init();
function update() {
    ++time;
    if (time % 50 === 0) {
        Lasers.push(new Laser());
    }
    while (Lasers.length >= 20) Lasers.splice(0, 1)
    Lasers.forEach(e => e.update());
    player.update();
}
function draw() {
    gui.draw();
    player.draw();
    Lasers.forEach(e => e.draw());
    requestAnimationFrame(draw);
}
canvas.addEventListener('mousemove', e => {
    player.move({ x: e.offsetX - orgpos.x - deviation, y: e.offsetY - orgpos.y });
    orgpos = { x: e.offsetX - deviation, y: e.offsetY };
})
requestAnimationFrame(draw);
setInterval(update, 1000 / 60);

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }; // 隨機整數，含最大值、最小值 