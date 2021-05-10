class Text { // 文字類別
   constructor(args) {
      let def = {
         x: ww / 2, // X位置
         y: wh / 2, // Y位置
         font: `${args.fontSize}px Virgo`, // 設定字元大小及字體
         text: '', // 輸入文字內容
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { // 繪圖動作
      ctx.font = this.font;
      this.text.split('\n').forEach((text, index) => {
         this.w = ctx.measureText(text).width;
         this.h = parseInt(this.font.match(/\d+/));
         ctx.save();

         ctx.fillStyle = nowColor.darkColor;
         ctx.font = this.font;
         ctx.fillText(text, this.x - this.w / 2 + deviation.x, this.y - this.h / 2 + this.h * index + deviation.y);

         ctx.restore();
      });
   }
}