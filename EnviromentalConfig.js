'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

const scale = window.innerHeight * 0.9 / 360; //設定單位
const ww = 480 * scale; //設定著色區寬度
const wh = 360 * scale; //設定著色區高度
const deviationX = (window.innerWidth - ww) / 2 //偏移置中
const deviationY = (window.innerHeight - wh) / 2 //偏移置中

canvas.width = window.innerWidth; //設定畫布寬度
canvas.height = window.innerHeight; //設定畫布高度

ctx.translate(deviationX, deviationY); //畫布偏移
ctx.fillRect(0, 0, ww, wh); //設定繪圖區域

ctx.globalCompositeOperation = 'source-atop'; //設定圖片合成效果
ctx.textBaseline = 'top' //設定文字呈現方式