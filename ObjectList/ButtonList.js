let play = new Button({ // 開始遊玩
    text: 'PLAY',
    fontSize: 28 * scale,
    x: 0 * scale,
    y: 10 * scale,
    instruction() {
        modeFlag = 'mode2';
        modeConfig[modeFlag]();
    }
});
let setting = new Button({ // 設定
    text: 'SETTING',
    fontSize: 28 * scale,
    x: 0 * scale,
    y: 80 * scale,
    instruction() {
        modeFlag = 'mode3';
        modeConfig[modeFlag]();
    }
});
let producer = new Button({ // 製作人員清單
    text: 'PRODUCER',
    fontSize: 16 * scale,
    x: -183 * scale,
    y: 170 * scale,
    instruction() {
        modeFlag = 'mode8';
        modeConfig[modeFlag]();
    }
});
let easy = new Button({ // 簡單模式
    text: 'EASY',
    fontSize: 21 * scale,
    x: 0 * scale,
    y: 10 * scale,
    instruction() {
        difficulty = 'easy';
        modeFlag = 'mode4';
        modeConfig[modeFlag]();
        laserSpeed = 1.6;
        laserFrequence = 200;
    }
});
let normal = new Button({ // 普通模式
    text: 'NORMAL',
    fontSize: 21 * scale,
    x: 0 * scale,
    y: 60 * scale,
    instruction() {
        difficulty = 'normal';
        modeFlag = 'mode4';
        modeConfig[modeFlag]();
        laserSpeed = 1.75;
        laserFrequence = 190;
    }
});
let hard = new Button({ // 困難模式
    text: 'Hard',
    fontSize: 21 * scale,
    x: 0 * scale,
    y: 110 * scale,
    instruction() {
        difficulty = 'hard';
        modeFlag = 'mode4';
        modeConfig[modeFlag]();
        laserSpeed = 1.9;
        laserFrequence = 180;
    }
});
let colorSetting = new Button({ // 顏色選擇
    text: 'COLOR SETTING',
    fontSize: 30 * scale,
    x: 0 * scale,
    y: -20 * scale,
    instruction() {
        modeFlag = 'mode7';
        modeConfig[modeFlag]();
    }
});
let patternSetting = new Button({ // 皮膚選擇
    text: 'PATTERN SETTING',
    fontSize: 30 * scale,
    x: 0 * scale,
    y: 50 * scale,
    instruction() {
        modeFlag = 'mode6';
        modeConfig[modeFlag]();
    }
});
let menu = new Button({ // 主畫面
    text: 'MENU',
    fontSize: 21 * scale,
    x: 0 * scale,
    y: 105 * scale,
    instruction() {
        BGM.play();
        modeFlag = modeStack.last(3);
        modeConfig[modeFlag]();
    }
});
let again = new Button({ // 再次遊玩
    text: 'AGAIN',
    fontSize: 21 * scale,
    x: 0 * scale,
    y: 55 * scale,
    instruction() {
        BGM.play();
        modeFlag = modeStack.last();
        modeConfig[modeFlag]();
    }
});
let yes = new Button({ // 確認離開
    text: 'YES',
    fontSize: 21 * scale,
    x: -50 * scale,
    y: 55 * scale,
    instruction() {
        window.close();
    }
});
let no = new Button({ // 取消離還
    text: 'NO',
    fontSize: 21 * scale,
    x: 50 * scale,
    y: 55 * scale,
    key: 'Escape',
    instruction() {
        modeFlag = 'mode1';
        modeConfig[modeFlag]();
    }
});
let exit = new Button({ // 返回上個畫面
    text: 'EXIT',
    fontSize: 16 * scale,
    x: 215 * scale,
    y: 170 * scale,
    key: 'Escape',
    instruction() {
        modeFlag = modeStack.last();
        modeConfig[modeFlag]();
    }
});
let round = new Button({ // 圓形
    text: 'ROUND',
    fontSize: 21 * scale,
    x: -80 * scale,
    y: 35 * scale,
    instruction() {
        patternFlag = 'round';
        localStorage.setItem('patternFlag', patternFlag);
    }
});
let heart = new Button({ // 心形
    text: 'HEART',
    fontSize: 21 * scale,
    x: -80 * scale,
    y: 95 * scale,
    instruction() {
        patternFlag = 'heart';
        localStorage.setItem('patternFlag', patternFlag);
    }
});
let star = new Button({ // 星形
    text: 'STAR',
    fontSize: 21 * scale,
    x: 80 * scale,
    y: 35 * scale,
    instruction() {
        patternFlag = 'star';
        localStorage.setItem('patternFlag', patternFlag);
    }
});
let hexagon = new Button({ // 六角形
    text: 'HEXAGON',
    fontSize: 21 * scale,
    x: 80 * scale,
    y: 95 * scale,
    instruction() {
        patternFlag = 'hexagon';
        localStorage.setItem('patternFlag', patternFlag);
    }
})
let homeButtonList = [play, setting, producer, exit];
let chooseModeButtonList = [easy, normal, hard, exit];
let settingButtonList = [colorSetting, patternSetting, exit];
let menuOrAgainButtonList = [menu, again];
let quitGameButtonList = [yes, no];
let choosePatternButtonList = [round, heart, star, hexagon, exit];
let chooseColorButtonList = [exit];
let producerListButtonList = [exit]