class Button { // 按鈕類別
   constructor(args) {
      let def = {
         x: 0, // X位置
         y: 0, // Y位置
         font: `${args.fontSize}px Virgo`, // 設定字元大小及字體
         text: '', // 輸入文字內容
         instruction() { }, // 按鈕對應的指令
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { // 繪圖動作
      ctx.save();

      ctx.font = this.font;
      this.w = 0;
      // ctx.beginPath();
      // ctx.arc(this.t1x + 240 * scale, this.t1y + 180 * scale, 10, 0, Math.PI * 2);
      // ctx.stroke();
      // ctx.arc(this.t2x + 240 * scale, this.t2y + 180 * scale, 10, 0, Math.PI * 2);
      // ctx.stroke();
      // ctx.arc(this.t3x + 240 * scale, this.t3y + 180 * scale, 10, 0, Math.PI * 2);
      // ctx.stroke();
      // ctx.arc(this.t4x + 240 * scale, this.t4y + 180 * scale, 10, 0, Math.PI * 2);
      // ctx.stroke();
      // ctx.closePath();

      ctx.fillStyle = nowColor.darkColor;
      ctx.font = this.font;
      const deviation = {
         x: 240 * scale,
         y: 180 * scale
      }
      this.text.split('\n').forEach((text, index) => {
         this.w = Math.max(this.w, ctx.measureText(text).width);
         this.h = parseInt(this.font.match(/\d+/));
         ctx.save();

         ctx.fillStyle = nowColor.darkColor;
         ctx.font = this.font;
         ctx.fillText(text, this.x - this.w / 2 + deviation.x, this.y - this.h / 2 + (this.h * index) + deviation.y);

         ctx.restore();
      });
      this.h = parseInt(this.font.match(/\d+/)) * this.text.split('\n').length;
      this.left = this.x - this.w / 2 + deviation.x; // 左
      this.right = this.x + this.w / 2 + deviation.x; // 右
      this.top = this.y - this.h / 2 + deviation.y; // 上
      this.bottom = this.y + this.h * 0.3 + deviation.y; // 下

      ctx.restore();
   }
   Touch(x = player.x, y = player.y) {
      // located 右 左 下 上
      return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom; // 碰撞到 = true
   }
   ColliDetect() { // 線性規劃檢查
      if (this.Touch()) { // 如果有碰撞就執行按鈕的指令
         this.font = `${this.fontSize}px Virgo`;
         this.instruction();
      }
   }
   Mousemove() {
      this.font = `${this.fontSize * (this.Touch() ? 1.2 : 1)}px Virgo`;// 如果有碰撞就執行字體放大
   }
}