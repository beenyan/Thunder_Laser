/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Player { //玩家標點物件
    constructor(args) {
        let def = {
            r: 22 * scale, //標點半徑
            limitMode: 'inside', //移動限制模式：inside 內框 outside 外框

            x: ww / 2, //初始點為中心
            y: wh / 2, //初始點為中心
            originX: ww / 2, //向量計算 計算原本位置
            originY: wh / 2, //向量計算 計算原本位置

            lineWidth: 2 * scale, //線寬

            leftLimit: 28 * scale, //設定左右限制
            topLimit: 28 * scale, //設定上下限制
        }
        Object.assign(def, args);
        Object.assign(this, def);
        this.topLimitMove = this.topLimit + this.r + this.lineWidth; //設定移動限制範圍
        this.leftLimitMove = this.leftLimit + this.r + this.lineWidth; //設定移動限制範圍
    }
    draw(drawPattern) { //繪圖動作
        ctx.save();

        ctx.lineWidth = this.lineWidth;

        ctx.fillStyle = nowColor.lightColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = nowColor.darkColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        drawPattern(this);

        ctx.restore();
    }
    move() { //修正及移動座標
        switch (this.limitMode) {
            case 'inside': //內框限制
                this.x = Math.min(Math.max(this.x, this.leftLimitMove), ww - this.leftLimitMove); //修正X
                this.y = Math.min(Math.max(this.y, this.topLimitMove), wh - this.topLimitMove); //修正Y
                break;
            case 'outside': //外框限制
                this.x = Math.min(Math.max(this.x, 0), ww); //修正X
                this.y = Math.min(Math.max(this.y, 0), wh); //修正Y
                break;
        }
    }
}