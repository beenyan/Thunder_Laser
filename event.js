'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
canvas.addEventListener('mousemove', e => {
    player.move({ x: e.offsetX - orgpos.x - deviation, y: e.offsetY - orgpos.y });
    orgpos = { x: e.offsetX - deviation, y: e.offsetY };
})
canvas.addEventListener('click', () => {
    let view = Object.entries(windows).find(e => e[1].display)[1].item;
    if (view.hasOwnProperty('Texts')) {
        view.Texts.forEach(e => {
            console.log(e);
        });
    }
})