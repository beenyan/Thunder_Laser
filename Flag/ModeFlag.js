// mode1 = 開始頁面
// mode2 = 進入玩選單
// mode3 = 進入外觀設定
// mode4 = 開始遊戲
// mode5 = 遊戲結束並且出現選單及再一次
// mode6 = 圖案選擇介面
// mode7 = 顏色選擇介面
// mode8 = 觀看製作人名單
// mode9 = 詢問是否退出遊戲

let modeConfig = {
    mode1: () => {
        modeStack.push(modeFlag);
        init();
        textList['TLTitle'].display = true;
        buttonList['play'].display = true;
        buttonList['appearanceSetting'].display = true;
        buttonList['producerList'].display = true;
        buttonList['exit'].display = true;
    },
    mode2: () => {
        modeStack.push(modeFlag);
        init();
        textList['howToPlay'].display = true;
        textList['chooseMod'].display = true;
        buttonList['easy'].display = true;
        buttonList['normal'].display = true;
        buttonList['difficult'].display = true;
        buttonList['exit'].display = true;
    },
    mode3: () => {
        modeStack.push(modeFlag);
        init();
        buttonList['colorSetting'].display = true;
        buttonList['patternSetting'].display = true;
        buttonList['exit'].display = true;
    },
    mode4: () => {
        modeStack.push(modeFlag);
        init();
        Object.assign(textList['scoreCounter'], {
            x: 70 * scale,
            y: -162.5 * scale,
            font: 15 * scale + 'px Virgo',
            display: true
        });
        Object.assign(textList['MVP'], {
            x: -70 * scale,
            y: -162.5 * scale,
            font: 15 * scale + 'px Virgo',
            display: true
        });
        insideBorder.display = true;
        laserSwitch = true;
        player.limitMode = 'inside';
    },
    mode5: () => {
        modeStack.push(modeFlag);
        init();
        Object.assign(textList['scoreCounter'], {
            x: 0 * scale,
            y: -15 * scale,
            font: 40 * scale + 'px Virgo',
            display: true
        })
        Object.assign(textList['MVP'], {
            x: 0 * scale,
            y: -70 * scale,
            font: 50 * scale + 'px Virgo',
            display: true
        });
        if (textList['scoreCounter'].text.match(/\d+/) >= 100 && laserSpeed === 2.2) {
            textList['easterEgg'].display = true;
        };
        buttonList['menu'].display = true;
        buttonList['again'].display = true;
    },
    mode6: () => {
        modeStack.push(modeFlag);
        init();
        textList['choosePattern1'].display = true;
        textList['choosePattern2'].display = true;
        buttonList['round'].display = true;
        buttonList['heart'].display = true;
        buttonList['star'].display = true;
        buttonList['hexagon'].display = true;
        buttonList['exit'].display = true;
    },
    mode7: () => {
        modeStack.push(modeFlag);
        init();

        // Color Words
        ['chooseColorComb', 'yellow', 'pink', 'blue',
            'cyan', 'purple', 'gray', 'castella'].forEach(e => textList[e].display = true);
        colorTicketList.forEach(e => e.display = true)
        buttonList['exit'].display = true;
    },
    mode8: () => {
        modeStack.push(modeFlag);
        init();
        buttonList['exit'].display = true;
        buttonList['exit'].display = true;
    },
    mode9: () => {
        modeStack.push(modeFlag);
        init();
        textList['quitGame'].display = true;
        buttonList['yes'].display = true;
        buttonList['no'].display = true;
    },
}