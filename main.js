'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

class Laser {
    constructor(args) {
        let def = {
            background_color: '#FEC400',
            w: 80,
            h: 6
        }
        Object.assign(def, args);
        Object.assign(this, def);
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
        this.x += this.vx;
        this.y += this.vy;
    }
}
class Player {
    constructor(args) {
        let def = {
            size_out: 21 * pow,
            size_in: 13 * pow,
            x: ww / 2,
            y: wh / 2,
            background_color: '#FDE17C',
            border_color: '#FEC400',
            lineWidth: 2 * pow
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
}
class Gui {
    constructor(args) {
        let def = {
            background_color: '#FDE17C',
            border_color: '#FEC508',
            lineWidth: 5,
            border_left: 30 * pow
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.fillStyle = this.background_color;
        ctx.fillRect(0, 0, ww, wh);
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.border_color;
        ctx.strokeRect(this.border_left, this.border_left, ww - this.border_left * 2, wh - this.border_left * 2)
    }
}

let windows = window;
let pow = windows.innerHeight / 360;
let ww = 480 * pow;
let wh = 360 * pow;
canvas.width = windows.innerWidth;
canvas.height = windows.innerHeight;
let deviation = (canvas.width - ww) / 2;
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
    if (time % 80 === 0) {
    }
    Lasers.forEach(e => e.update());
}

function draw() {
    gui.draw();
    player.draw();
    Lasers.forEach(e => e.draw());
    requestAnimationFrame(draw);
}
canvas.addEventListener('mousemove', e => {
    let limit_move = gui.border_left + player.size_out + gui.lineWidth
    player.x = Math.min(Math.max(e.offsetX - deviation, limit_move), ww - limit_move);
    player.y = Math.min(Math.max(e.offsetY, limit_move), wh - limit_move);
})
requestAnimationFrame(draw);
setInterval(update, 1000 / 60);

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }; // 隨機整數，含最大值、最小值 