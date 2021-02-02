/** @type {HTMLCanvasElement} */ // 宣告作業環境

class ColorTicket { //色票類別
    constructor(args) {
        let def = {
            display: false, //顯示開關
            x: 0, //X位置
            y: 0, //Y位置
            r: 15 * scale, //色票圓半徑
            colorFlag: 'color1' //回應的顏色
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() { //繪圖動作
        if (this.display === true) {
            ctx.save();

            ctx.fillStyle = colorConfig[this.colorFlag].lightColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, Math.PI * 1.5, Math.PI * 0.5)
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = colorConfig[this.colorFlag].darkColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, Math.PI * 0.5, Math.PI * 1.5)
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }
    }
    ColliDetect(x, y) { //線性規劃檢查
        if (this.display === true) {
            if (Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) < this.r) { //如果碰撞到就更新顏色
                nowColor = colorConfig[this.colorFlag];
            }
        }
    }
}