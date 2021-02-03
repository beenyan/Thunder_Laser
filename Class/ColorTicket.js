class ColorTicket { // 色票類別
    constructor(args) {
        let def = {
            scale: 1,
            display: false, // 顯示開關
            x: 0, // X位置
            y: 0, // Y位置
            r: 15 * scale, // 色票圓半徑
            colorFlag: 'color1' // 回應的顏色
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() { // 繪圖動作
        ctx.save();

        ctx.fillStyle = colorConfig[this.colorFlag].lightColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * this.scale, Math.PI * 1.5, Math.PI * 0.5);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = colorConfig[this.colorFlag].darkColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * this.scale, Math.PI * 0.5, Math.PI * 1.5);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
    Touch() {
        return Math.sqrt(Math.pow(player.x - this.x, 2) + Math.pow(player.y - this.y, 2)) < this.r;
    }
    Mousemove() {
        // 碰到放大
        this.scale = this.Touch() ? 1.6 : 1;
    }
    ColliDetect() { // 線性規劃檢查
        if (this.Touch()) { // 如果碰撞到就更新顏色
            nowColor = colorConfig[this.colorFlag];
            localStorage.setItem('colorFlag', this.colorFlag);
        }
    }
}