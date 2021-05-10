class Button { // 按鈕類別
   constructor(args) {
      let def = {
         x: 0, // X位置
         y: 0, // Y位置
         font: `${args.fontSize}px Virgo`, // 設定字元大小及字體
         text: '', // 輸入文字內容
         instruction: () => { }, // 按鈕對應的指令
         ishold: false
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { // 繪圖動作
      ctx.save();

      ctx.font = this.font;
      this.w = 0;

      ctx.fillStyle = nowColor.darkColor;
      ctx.font = this.font;

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

      ctx.restore();

      //位置參數
      this.left = this.x - this.w / 2 + deviation.x; // 左
      this.right = this.x + this.w / 2 + deviation.x; // 右
      this.top = this.y - this.h / 2 + deviation.y; // 上
      this.bottom = this.y + this.h * 0.3 + deviation.y; // 下
   }
   touch(x = player.x, y = player.y) { //檢查碰撞
      // located 右 左 下 上
      return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom; // 碰撞到 = true
   }
   colliDetect() { // 碰撞執行指令
      if (this.touch()) { // 如果有碰撞就執行按鈕的指令
         this.ishold = false;
         this.instruction();
         clickButtonSoundEffect.replay(); // 重播
      }
   }
   mouseHoverDetect() { //當游標放在按鈕上...
      if (this.touch()) {
         if (this.ishold) return;
         this.ishold = true;
         clickButtonSoundEffect.replay(); // 重播
      } else {
         this.ishold = false;
      }
      this.font = `${this.fontSize * (this.ishold ? 1.2 : 1)}px Virgo`; // 如果有碰撞就字體放大
   }
}