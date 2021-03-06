function update() { // 更新數據
   if (laserSwitch === true) {
      laserList.forEach(e => e.update()); // 更新每個雷射位
      TXT.scoreCounter.text = `SCORE：${scoreCount}`; // 變更score的分數
      if (++time % laserFrequence === 0) { // 每隔一段時間加入一個雷射
         Thunder_Laser_Music.pause();
         Thunder_Laser_Music.currentTime = 0;
         time = 0; // 時間重置
         laserList.push(new Laser({ // 新增雷射
            speed: laserSpeed * scale,
            length: laserLength * scale,
         }));
         Thunder_Laser_Music.play();
      };
      laserList = laserList.filter(e => e.outscreen()); // 刪除超出螢幕的雷射
      laserList.forEach(e => e.ColliDetect(player.x, player.y, player.r)); // 檢查雷射碰撞
   };
}