function update() { // 更新數據
   if (laserSwitch) { //如果雷射為開啟狀態
      laserList.forEach(e => e.update()); // 更新每個雷射位
      gamingScoreCounter.text = `SCORE：${scoreCount}`; // 變更score的分數
      menuOrAgainScoreCounter.text = `SCORE：${scoreCount}`; //變更score的分數
      if (++time % laserFrequence === 0) { // 每隔一段時間加入一個雷射
         scoreCount += 1; //分數+1
         time = 0; // 雷射計時器間重置
         laserList.push(new Laser({ // 新增雷射
            speed: laserSpeed * scale,
            length: laserLength * scale,
         }));
      };
      laserList = laserList.filter(e => e.outscreen()); // 刪除超出螢幕的雷射
      laserList.forEach(e => e.colliDetect(player.x, player.y, player.r)); // 檢查雷射碰撞
   };
}