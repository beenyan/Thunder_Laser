class Laser { // 雷射類別
   constructor(args) {
      let def = {
         length: 90 * scale, // 長度
         lineWidth: 3 * scale, // 高度
         speed: 2, // 移動係數
      }
      Object.assign(def, args);
      Object.assign(this, def);
      Object.assign(this, [{ // 隨機定址
         t1x: [-this.length, ww + this.length][rand(0, 1)],
         t1y: rand(-this.length, wh + this.length)
      }, {
         t1x: rand(-this.length, ww + this.length),
         t1y: [-this.length, wh + this.length][rand(0, 1)]
      }][rand(0, 1)]);
      this.t2x = this.t1x + Math.cos(this.deg) * this.length; // 設定t2點
      this.t2y = this.t1y + Math.sin(this.deg) * this.length; // 設定t2點

      this.deg = Math.atan2(player.y - this.t1y, player.x - this.t1x); // 透過斜率取得朝向角度
      this.vx = Math.cos(this.deg); // 設定單位向量
      this.vy = Math.sin(this.deg); // 設定單位向量
      shootSoundEffect.pause(); //聲音暫停
      shootSoundEffect.currentTime = 0; //重製聲音
      shootSoundEffect.play(); //播放聲音
   }
   draw() { // 繪圖動作
      ctx.save();

      ctx.translate(this.t1x, this.t1y);
      ctx.rotate(this.deg);
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.lineTo(this.length, 0);
      ctx.strokeStyle = nowColor.darkColor;
      ctx.stroke();
      ctx.closePath();

      // 彩蛋 如果顏色是粉紅色 & 形狀為愛心則改為箭矢圖案
      if (patternFlag === 'heart' && nowColor === colorConfig['pink']) {
         ctx.lineWidth = this.lineWidth * 2;
         ctx.beginPath();
         ctx.moveTo(0, 0);
         ctx.lineTo(-this.length / 15, this.lineWidth);
         ctx.lineTo(this.length / 4, this.lineWidth);
         ctx.lineTo(this.length / 3.5, 0);
         ctx.lineTo(this.length / 4, -this.lineWidth);
         ctx.lineTo(-this.length / 15, -this.lineWidth);
         ctx.fillStyle = nowColor.darkColor;
         ctx.fill();
         ctx.closePath();

         ctx.beginPath();
         ctx.lineTo(this.length * 1.1, 0);
         ctx.lineTo(this.length * 0.96, this.lineWidth * 2);
         ctx.lineTo(this.length * 0.96, -this.lineWidth * 2);
         ctx.fillStyle = nowColor.darkColor;
         ctx.fill();
         ctx.closePath();
      }

      ctx.restore();
   }
   update() { // 更新位置
      this.t1x += this.vx * this.speed; // 單位向量乘上移動係數
      this.t1y += this.vy * this.speed; // 單位向量乘上移動係數
      this.t2x = this.t1x + Math.cos(this.deg) * this.length; // 更新t2點
      this.t2y = this.t1y + Math.sin(this.deg) * this.length; // 更新t2點
   }
   colliDetect(x, y, r) { // 碰撞檢測
      let t1LeftRight = ((y - this.t1y) * (this.t1y - this.t2y) - (x - this.t1x) * (this.t2x - this.t1x) > 0 ? 1 : -1); // 偵測t1左右
      let t2LeftRight = ((y - this.t2y) * (this.t1y - this.t2y) - (x - this.t2x) * (this.t2x - this.t1x) > 0 ? 1 : -1); // 偵測t2左右
      let lineBetween = t1LeftRight * t2LeftRight === -1; // 偵測是否在t1t2之間
      let collision = false;
      if (lineBetween) {
         if (Math.abs((y - this.t1y) * (this.t1x - this.t2x) - (x - this.t1x) * (this.t1y - this.t2y)) / Math.sqrt(Math.pow(this.t1x - this.t2x, 2) + Math.pow(this.t1y - this.t2y, 2)) <= r) {
            collision = true;
         }
      } else {
         if (Math.sqrt(Math.pow(x - this.t1x, 2) + Math.pow(y - this.t1y, 2)) <= r || Math.sqrt(Math.pow(x - this.t2x, 2) + Math.pow(y - this.t2y, 2)) <= r) {
            collision = true;
         }
      }
      if (collision === true) { // 如果碰撞到就初始化並且更改旗標
         modeFlag = 'mode5';
         modeConfig[modeFlag]();
      }
   }
   outscreen() { // 超出螢幕
      // 左 上 右 下
      if (this.t1x < -this.length && this.t2x < -this.length || this.t1y < -this.length && this.t2y < -this.length || this.t1x > ww + this.length && this.t2x > ww + this.length || this.t1y > wh + this.length && this.t2y > wh + this.length) {
         return false;
      } else return true;
   }
}