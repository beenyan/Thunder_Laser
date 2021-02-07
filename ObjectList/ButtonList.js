let buttonList = [];
let BTS = {
    play: new Button({ // 開始遊玩
        text: 'PLAY',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: -10 * scale,
        instruction() {
            modeFlag = 'mode2';
            modeConfig[modeFlag]();
        }
    }),
    setting: new Button({ // 設定
        text: 'SETTING',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 50 * scale,
        instruction() {
            modeFlag = 'mode3';
            modeConfig[modeFlag]();
        }
    }),
    producerList: new Button({ // 製作人員清單
        text: 'PRODUCER LIST',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 110 * scale,
        instruction() {
            modeFlag = 'mode8';
            modeConfig[modeFlag]();
        }
    }),
    easy: new Button({ // 簡單模式
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
    }),
    normal: new Button({ // 普通模式
        text: 'NORMAL',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 60 * scale,
        instruction() {
            difficulty = 'normal';
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 1.8;
            laserFrequence = 190;
        }
    }),
    hard: new Button({ // 困難模式
        text: 'Hard',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 110 * scale,
        instruction() {
            difficulty = 'hard';
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 2;
            laserFrequence = 175;
        }
    }),
    colorSetting: new Button({ // 顏色選擇
        text: 'COLOR SETTING',
        fontSize: 30 * scale,
        x: 0 * scale,
        y: -20 * scale,
        instruction() {
            modeFlag = 'mode7';
            modeConfig[modeFlag]();
        }
    }),
    patternSetting: new Button({ // 皮膚選擇
        text: 'PATTERN SETTING',
        fontSize: 30 * scale,
        x: 0 * scale,
        y: 50 * scale,
        instruction() {
            modeFlag = 'mode6';
            modeConfig[modeFlag]();
        }
    }),
    round: new Button({ // 圓形
        text: 'ROUND',
        fontSize: 21 * scale,
        x: -80 * scale,
        y: 35 * scale,
        instruction() {
            patternFlag = 'round';
            localStorage.setItem('patternFlag', patternFlag);
        }
    }),
    heart: new Button({ // 心形
        text: 'HEART',
        fontSize: 21 * scale,
        x: -80 * scale,
        y: 95 * scale,
        instruction() {
            patternFlag = 'heart';
            localStorage.setItem('patternFlag', patternFlag);
        }
    }),
    star: new Button({ // 星形
        text: 'STAR',
        fontSize: 21 * scale,
        x: 80 * scale,
        y: 35 * scale,
        instruction() {
            patternFlag = 'star';
            localStorage.setItem('patternFlag', patternFlag);
        }
    }),
    hexagon: new Button({ // 六角形
        text: 'HEXAGON',
        fontSize: 21 * scale,
        x: 80 * scale,
        y: 95 * scale,
        instruction() {
            patternFlag = 'hexagon';
            localStorage.setItem('patternFlag', patternFlag);
        }
    }),
    menu: new Button({ // 主畫面
        text: 'MENU',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 105 * scale,
        instruction() {
            Lose.pause();
            Lose.currentTime = BGM.currentTime = 0;
            BGM.play();
            modeFlag = modeStack.last(3);
            modeConfig[modeFlag]();
        }
    }),
    again: new Button({ // 再次遊玩
        text: 'AGAIN',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 55 * scale,
        instruction() {
            Lose.pause();
            Lose.currentTime = BGM.currentTime = 0;
            BGM.play();
            modeFlag = modeStack.last();
            modeConfig[modeFlag]();
        }
    }),
    yes: new Button({ // 確認離開
        text: 'YES',
        fontSize: 21 * scale,
        x: -50 * scale,
        y: 55 * scale,
        key: 'Escape',
        instruction() { close() }
    }),
    no: new Button({ // 取消離還
        text: 'NO',
        fontSize: 21 * scale,
        x: 50 * scale,
        y: 55 * scale,
        instruction() {
            modeFlag = 'mode1';
            modeConfig[modeFlag]();
        }
    }),
    exit: new Button({ // 返回上個畫面
        text: 'EXIT',
        fontSize: 21 * scale,
        x: 207 * scale,
        y: 167 * scale,
        key: 'Escape',
        instruction() {
            modeFlag = modeStack.last();
            modeConfig[modeFlag]();
        }
    }),
}