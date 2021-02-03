window.addEventListener('mousemove', e => { // 電腦移動事件
    player.x = player.x + (e.pageX - player.originX); // 更動變化量
    player.y = player.y + (e.pageY - player.originY); // 更動變化量
    player.originX = e.pageX; // 設定此刻位置為下刻位置的origin參數
    player.originY = e.pageY; // 設定此刻位置為下課位置的origin參數
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.Mousemove()); // 檢查每一個button是否被碰到
});

canvas.addEventListener('touchmove', e => { // 手機移動事件
    const offset = {
        x: e.touches[0].clientX - canvas_offset.x,
        y: e.touches[0].clientY - canvas_offset.y
    }
    player.x = player.originX = player.x + (offset.x - player.originX); // 更動變化量
    player.y = player.originY = player.y + (offset.y - player.originY); // 更動變化量
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.Mousemove()); // 檢查每一個button是否被碰到
});

canvas.addEventListener('click', () => { // 滑鼠點擊事件
    buttonList.forEach(e => e.ColliDetect()); // 檢查每一個button的碰撞
    colorTicketList.filter(e => e.display).forEach(e => e.ColliDetect()); // 檢查每一個button的碰撞
});

window.addEventListener('keydown', (keydown) => {
    if (keydown.repeat) return;　// 不執行持續壓的按鍵
    switch (keydown.code) {
        case 'Escape': // Esc
            let Exit = buttonList.filter(e => e.key === 'Escape');
            if (!Exit.length) break;
            else Exit[0].instruction();
            break;
        default:
            break;
    }
});