window.addEventListener('mousemove', e => { // 電腦移動事件
    player.x = player.x + (e.pageX - canvas_offset.x - player.originX); // 更動變化量
    player.y = player.y + (e.pageY - canvas_offset.y - player.originY); // 更動變化量
    player.originX = e.pageX - canvas_offset.x; // 設定此刻位置為下刻位置的origin參數
    player.originY = e.pageY - canvas_offset.y; // 設定此刻位置為下課位置的origin參數
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.Mousemove()); // 檢查button是否被碰到
    colorTicketList.filter(e => e.display).forEach(e => e.Mousemove());  // 檢查color是否被碰到
});

canvas.addEventListener('touchmove', e => { // 手機移動事件
    player.x = player.x + (e.touches[0].pageX - canvas_offset.x - player.originX); // 更動變化量
    player.y = player.y + (e.touches[0].pageY - canvas_offset.y - player.originY); // 更動變化量
    player.originX = e.touches[0].pageX - canvas_offset.x; // 設定此刻位置為下刻位置的origin參數
    player.originY = e.touches[0].pageY - canvas_offset.y; // 設定此刻位置為下課位置的origin參數
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.Mousemove()); // 檢查button是否被碰到
    colorTicketList.filter(e => e.display).forEach(e => e.Mousemove());  // 檢查color是否被碰到
});

window.addEventListener('click', () => { // 滑鼠點擊事件
    buttonList.forEach(e => e.ColliDetect()); // 檢查button的碰撞
    colorTicketList.filter(e => e.display).forEach(e => e.ColliDetect()); // 檢查color的碰撞
});

window.addEventListener('keydown', keydown => {
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