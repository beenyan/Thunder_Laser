function draw() { // 繪圖
   backGround.draw(); // 繪製背景
   insideBorder.draw(); // 繪製邊界
   if (laserSwitch === true) {
      laserList.forEach(e => e.draw()); // 繪製每個雷射
   }
   Object.entries(textList).filter(e => e[1].display).forEach(e => e[1].draw()); // 繪製每個文字
   Object.entries(buttonList).filter(e => e[1].display).forEach(e => e[1].draw()); // 繪製每個按鈕
   colorTicketList.filter(e => e.display).forEach(e => e.draw()); // 繪製每個色票
   player.draw(patternConfig[patternFlag]); // 繪製玩家
   outerBorder.draw(); // 繪製外邊界
   requestAnimationFrame(draw); // 再次要求重繪
}