let backGround = new Background(); //創建背景

let outerBorder = new Border({ //創建視窗外框
   borderLeft: 0,
   borderTop: 0,
   lineWidth: 6 * scale,
   display: true
});

let insideBorder = new Border({ //創建邊界
   display: true
});

let player = new Player({ //創建玩家
   r: playerR * scale,
   limitMode: 'outside'
});

modeConfig[modeFlag](); //初始化
requestAnimationFrame(draw); //重繪畫布
setInterval(update, 0); //更新物件數據