window.addEventListener('mousemove', e => { // 電腦滑鼠移動事件
    player.x = player.x + (e.pageX - canvas_offset.x - player.originX); // 更動變化量
    player.y = player.y + (e.pageY - canvas_offset.y - player.originY); // 更動變化量
    player.originX = e.pageX - canvas_offset.x; // 設定此刻位置為下刻位置的origin參數
    player.originY = e.pageY - canvas_offset.y; // 設定此刻位置為下課位置的origin參數
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.mouseHoverDetect()); // 檢查button是否被碰到
    colorTicketList.filter(e => e.display).forEach(e => e.mouseHoverDetect()); // 檢查color是否被碰到
});

canvas.addEventListener('touchmove', e => { // 手機移動事件
    player.x = player.x + (e.touches[0].pageX - canvas_offset.x - player.originX); // 更動變化量
    player.y = player.y + (e.touches[0].pageY - canvas_offset.y - player.originY); // 更動變化量
    player.originX = e.touches[0].pageX - canvas_offset.x; // 設定此刻位置為下刻位置的origin參數
    player.originY = e.touches[0].pageY - canvas_offset.y; // 設定此刻位置為下課位置的origin參數
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.mouseHoverDetect()); // 檢查button是否被碰到
    colorTicketList.filter(e => e.display).forEach(e => e.mouseHoverDetect()); // 檢查color是否被碰到
});

window.addEventListener('click', () => { // 滑鼠點擊事件
    BGM.play();
    buttonList.forEach(e => e.colliDetect()); // 檢查button的碰撞並且執行指令
    colorTicketList.filter(e => e.display).forEach(e => e.colliDetect()); // 檢查color的碰撞
});

window.addEventListener('keydown', (keydown) => { //鍵盤按下事件
    if (keydown.repeat) return; // 不執行持續壓的按鍵
    switch (keydown.code) {
        case 'Escape': //如果按下的按鍵為ESC
            let Exit = buttonList.filter(e => e.key === 'Escape'); //執行exit button
            if (!Exit.length) break; //如果該頁面沒有exit button就忽略
            else Exit[0].instruction(); //跳離
            break;
    }
});