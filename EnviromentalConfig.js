'use strict';

const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

const scale = Math.min(window.innerHeight, window.innerWidth * 0.75) * 0.9 / 360; // 設定單位
const ww = 480 * scale; // 設定著色區寬度
const wh = 360 * scale; // 設定著色區高度
canvas.width = ww; // 設定畫布寬度
canvas.height = wh; // 設定畫布高度
const canvas_offset = {
    x: canvas.getBoundingClientRect().x,
    y: canvas.getBoundingClientRect().y
}

ctx.fillRect(0, 0, ww, wh); // 設定繪圖區域

ctx.globalCompositeOperation = 'source-atop'; // 設定圖片合成效果
ctx.textBaseline = 'top' // 設定文字呈現方式