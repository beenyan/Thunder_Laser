class Background { // 背景類別
   draw() { // 繪圖動作
      ctx.save();

      ctx.fillStyle = nowColor.lightColor;
      ctx.fillRect(0, 0, ww, wh);

      ctx.restore();
   }
}