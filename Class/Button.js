/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Button { //按鈕類別
   constructor(args) {
      let def = {
         display: false, //顯示開關
         x: 0, //X位置
         y: 0, //Y位置
         font: `${args.fontSize}px Virgo`, //設定字元大小及字體
         text: '', //輸入文字內容
         instruction: function () {}, //按鈕對應的指令
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { //繪圖動作
      if (this.display === true) {
         ctx.save();

         ctx.font = this.font;
         this.w = ctx.measureText(this.text).width;
         this.h = parseInt(this.font.match(/\d+/));
         this.t1x = this.x - this.w / 2 + 240 * scale;
         this.t1y = this.y - this.h / 2 + 180 * scale;
         this.t2x = this.x + this.w / 2 + 240 * scale;
         this.t2y = this.y - this.h / 2 + 180 * scale
         this.t3x = this.x + this.w / 2 + 240 * scale;
         this.t3y = this.y + this.h * 0.3 + 180 * scale;
         this.t4x = this.x - this.w / 2 + 240 * scale;
         this.t4y = this.y + this.h * 0.3 + 180 * scale;

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
         ctx.fillText(this.text, this.t1x, this.t1y);

         ctx.restore();
      }
   }
   ColliDetect(x, y) { //線性規劃檢查
      if (this.display === true) {
         let topLineLeftRight = ((y - this.t1y) * (this.t1x - this.t2x) - (x - this.t1x) * (this.t1y - this.t2y) > 0 ? 1 : -1);
         let rightLineLeftRight = ((y - this.t2y) * (this.t2x - this.t3x) - (x - this.t2x) * (this.t2y - this.t3y) > 0 ? 1 : -1);
         let botLineLeftRight = (-(y - this.t3y) * (this.t3x - this.t4x) + (x - this.t3x) * (this.t3y - this.t4y) > 0 ? 1 : -1);
         let leftLineLeftRight = (-(y - this.t4y) * (this.t4x - this.t1x) + (x - this.t4x) * (this.t4y - this.t1y) > 0 ? 1 : -1);
         if (topLineLeftRight * botLineLeftRight === -1 && rightLineLeftRight * leftLineLeftRight === -1) { //如果有碰撞就執行按鈕的指令
            this.instruction();
         }
      }
   }
}