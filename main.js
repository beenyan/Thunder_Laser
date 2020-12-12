'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

let scale = window.innerHeight / 360;
let ww = 480 * scale;
let wh = 360 * scale;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let deviation = (canvas.width - ww) / 2;
let orgpos = { x: ww / 2, y: wh / 2 };
let player = new Player();
let Lasers = [];
let time = 0;
// 鎖定螢幕
ctx.translate(deviation, 0);
ctx.fillRect(0, 0, ww, wh);
ctx.globalCompositeOperation = 'source-atop';

// 新建畫面
let windows = {
    Lobby: new Gui({ display: true }),
    Play: new Gui(),
};
// (() => {
//     windows.Lobby.item.Texts = [
//         new Text({
//             text: 'Start',
//             click: () => {
//                 windows.Lobby.display = false;
//                 windows.Play.display = true;
//             }
//         })
//     ];
//     windows.Play.item.Lasers = [];
// })();

init();
requestAnimationFrame(draw);
setInterval(update, 1000 / 60);