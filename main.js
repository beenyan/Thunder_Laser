'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

class Player {
    constructor(args) {
        let def = {
            size_out: Math.floor(canvas.height / 25),
            size_in: Math.floor(canvas.height / 50),
            x: canvas.width / 2,
            y: canvas.height / 2,
            background_color: '#D4F685',
            border_color: '#ABEC1C',
            lineWidth: 4
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.fillStyle = 'this.background_color';
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
            background_color: '#D7F692',
            border_color: '#FEC508',
            lineWidth: canvas.height * 0.01,
            border_left: Math.floor(canvas.height * 0.1)
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.fillStyle = this.background_color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = this.lineWidth
        ctx.strokeStyle = this.border_color;
        ctx.strokeRect(this.border_left, this.border_left, canvas.width - this.border_left * 2, canvas.height - this.border_left * 2)
    }
    update() {
        this.lineWidth = canvas.height * 0.01;
        this.border_left = Math.floor(canvas.height * 0.1);
    }
}
let windows = window;
let ww = windows.innerWidth;
let wh = windows.innerHeight;
canvas.width = ww;
canvas.height = wh;
let gui = new Gui();
let player = new Player();
function init() {

}

function update() {

}

function draw() {
    gui.draw();
    player.draw();
    requestAnimationFrame(draw);
}
canvas.addEventListener('mousemove', e => {
    player.x = e.offsetX;
    player.y = e.offsetY
})
requestAnimationFrame(draw);