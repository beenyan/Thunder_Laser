canvas.addEventListener('mousemove', e => { // 滑鼠移動事件
    player.x = player.x + (e.offsetX - player.originX); // 更動變化量
    player.y = player.y + (e.offsetY - player.originY); // 更動變化量
    player.originX = e.offsetX; // 設定此刻位置為下刻位置的origin參數
    player.originY = e.offsetY; // 設定此刻位置為下課位置的origin參數
    player.move(); // 玩家修正及更改位置
    buttonList.forEach(e => e.Mousemove()); // 檢查每一個button是否被碰到
});

canvas.addEventListener('click', () => { // 滑鼠點擊事件
    buttonList.forEach(e => e.ColliDetect()); // 檢查每一個button的碰撞
    colorTicketList.filter(e => e.display).forEach(e => e.ColliDetect()); // 檢查每一個button的碰撞
});