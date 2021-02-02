/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Text { //文字類別
   constructor(args) {
      let def = {
         display: false, //顯示開關
         x: ww / 2, //X位置
         y: wh / 2, //Y位置
         font: `${args.fontSize}px Virgo`, //設定字元大小及字體
         text: '', //輸入文字內容
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { //繪圖動作
      if (this.display === true) {
         ctx.font = this.font;
         this.w = ctx.measureText(this.text).width;
         this.h = parseInt(this.font.match(/\d+/));

         ctx.save();

         ctx.fillStyle = nowColor.darkColor;
         ctx.font = this.font;

         ctx.fillText(this.text, this.x - this.w / 2 + 240 * scale, this.y - this.h / 2 + 180 * scale);

         ctx.restore();
      }
   }
}