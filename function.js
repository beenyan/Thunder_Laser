'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
function rand(min, max) { // 隨機整數，含最大值、最小值
    return Math.floor(Math.random() * (max - min + 1)) + min
};

function init() {
    ctx.textBaseline = 'top'
    time = 0;
    Lasers = [];
}
function update() {
    if (++time % 50 === 0) Lasers.push(new Laser());
    while (Lasers.length >= 10) Lasers.splice(0, 1);
    Lasers.forEach(e => e.update());
    player.update();
};
function draw() {
    let view = Object.entries(windows).find(e => e[1].display)[1];
    view.draw();
    player.draw();
    for (const [key, val] of Object.entries(view.item)) {
        val.forEach(e => e.draw());
    }
    Lasers.forEach(e => e.draw());
    player.touch();
    requestAnimationFrame(draw);
};