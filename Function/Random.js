function rand(min, max) { // 取得min~max中的隨機整數
    return Math.floor(Math.random() * (max - min + 1)) + min;
}