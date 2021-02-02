let buttonList = [] //按鈕陣列

buttonList.push(
    play = new Button({
        text: 'PLAY',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: -10 * scale,
        instruction: function () {
            modeFlag = 'mode2';
            modeConfig[modeFlag]();
        }
    }),
    appearanceSetting = new Button({
        text: 'APPEARANCE SETTING',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 50 * scale,
        instruction: function () {
            modeFlag = 'mode3';
            modeConfig[modeFlag]();
        }
    }),
    producerList = new Button({
        text: 'PRODUCER LIST',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 110 * scale,
        instruction: function () {
            modeFlag = 'mode8';
            modeConfig[modeFlag]();
        }
    }),
    easy = new Button({
        text: 'EASY',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 10 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 1.6;
            laserFrequence = 200
        }
    }),
    normal = new Button({
        text: 'NORMAL',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 60 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 1.8;
            laserFrequence = 190
        }
    }),
    difficult = new Button({
        text: 'DIFFICULT',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 110 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 2;
            laserFrequence = 175
        }
    }),
    colorSetting = new Button({
        text: 'COLOR SETTING',
        fontSize: 30 * scale,
        x: 0 * scale,
        y: -20 * scale,
        instruction: function () {
            modeFlag = 'mode7';
            modeConfig[modeFlag]();
        }
    }),
    patternSetting = new Button({
        text: 'PATTERN SETTING',
        fontSize: 30 * scale,
        x: 0 * scale,
        y: 50 * scale,
        instruction: function () {
            modeFlag = 'mode6';
            modeConfig[modeFlag]();
        }
    }),
    round = new Button({
        text: 'ROUND',
        fontSize: 21 * scale,
        x: -80 * scale,
        y: 35 * scale,
        instruction: function () {
            patternFlag = 'round'
        }
    }),
    heart = new Button({
        text: 'HEART',
        fontSize: 21 * scale,
        x: -80 * scale,
        y: 95 * scale,
        instruction: function () {
            patternFlag = 'heart'
        }
    }),
    star = new Button({
        text: 'STAR',
        fontSize: 21 * scale,
        x: 80 * scale,
        y: 35 * scale,
        instruction: function () {
            patternFlag = 'star'
        }
    }),
    hexagon = new Button({
        text: 'HEXAGON',
        fontSize: 21 * scale,
        x: 80 * scale,
        y: 95 * scale,
        instruction: function () {
            patternFlag = 'hexagon'
        }
    }),
    menu = new Button({
        text: 'MENU',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 105 * scale,
        instruction: function () {
            modeFlag = modeStack[modeStack.length - 4];
            modeStack.splice(modeStack.length - 4, 4);
            modeConfig[modeFlag]();
        }
    }),
    again = new Button({
        text: 'AGAIN',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 55 * scale,
        instruction: function () {
            modeFlag = modeStack[modeStack.length - 2];
            modeStack.splice(modeStack.length - 2, 2);
            modeConfig[modeFlag]();
        }
    }),
    yes = new Button({
        text: 'YES',
        fontSize: 21 * scale,
        x: -50 * scale,
        y: 55 * scale,
        instruction: function () {
            window.close();
        }
    }),
    no = new Button({
        text: 'NO',
        fontSize: 21 * scale,
        x: 50 * scale,
        y: 55 * scale,
        instruction: function () {
            modeFlag = 'mode1';
            modeConfig[modeFlag]();
        }
    }),
    exit = new Button({
        text: 'EXIT',
        fontSize: 21 * scale,
        x: 207 * scale,
        y: 167 * scale,
        instruction: function () {
            modeFlag = modeStack[modeStack.length - 2];
            modeStack.splice(modeStack.length - 2, 2);
            modeConfig[modeFlag]();
        }
    }),
)