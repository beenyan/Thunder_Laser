let modeConfig = {
    mode1() { // mode1 = 開始頁面
        modeStack.push(modeFlag);
        init();
        textList = [TXT.TLTitle];
        buttonList = [BTS.play, BTS.setting, BTS.producerList, BTS.exit];
    },
    mode2() { // mode2 = 進入玩選單
        modeStack.push(modeFlag);
        init();
        textList = [TXT.howToPlay, TXT.chooseMod];
        buttonList = [BTS.easy, BTS.normal, BTS.hard, BTS.exit];
    },
    mode3() { // mode3 = 進入設定
        modeStack.push(modeFlag);
        init();
        textList = [];
        buttonList = [BTS.colorSetting, BTS.patternSetting, BTS.exit];
    },
    mode4() { // mode4 = 開始遊戲
        modeStack.push(modeFlag);
        init();
        TXT.scoreCounter.unshow();
        TXT.MVP.unshow();
        insideBorder.display = true;
        laserSwitch = true;
        TXT.MVP.text = `MVP：${localStorage.getItem(difficulty) ? localStorage.getItem(difficulty) : 0}`;// 顯示歷史最高分
        TXT.difficulty.text = 'DIFFICULT：' + difficulty; // 顯示難度
        textList = [TXT.scoreCounter, TXT.MVP, TXT.difficulty];
        buttonList = [];
        player.limitMode = 'inside';
    },
    mode5() { // mode5 = 遊戲結束並且出現選單及再一次
        modeStack.push(modeFlag);
        init();
        TXT.scoreCounter.show();
        TXT.MVP.show();
        if (TXT.scoreCounter.text.match(/\d+/) >= 100 && laserSpeed >= 2) {
            textList.push(TXT.easterEgg);
        };
        textList.splice(textList.indexOf(TXT.difficulty), 1);  // 刪除顯示難度
        buttonList = [BTS.menu, BTS.again];
    },
    mode6() { // mode6 = 圖案選擇介面
        modeStack.push(modeFlag);
        init();
        textList = [TXT.choosePattern];
        buttonList = [BTS.round, BTS.heart, BTS.star, BTS.hexagon, BTS.exit];
    },
    mode7() { // mode7 = 顏色選擇介面
        modeStack.push(modeFlag);
        init();
        textList = [TXT.chooseColorComb, TXT.yellow, TXT.pink, TXT.blue, TXT.cyan, TXT.purple, TXT.gray, TXT.castella];
        buttonList = [BTS.exit];
        colorTicketList.forEach(e => e.display = true);
    },
    mode8() { // mode8 = 觀看製作人名單
        modeStack.push(modeFlag);
        init();
        textList = [TXT.producerList];
        buttonList = [BTS.exit];
    },
    mode9() { // mode9 = 詢問是否退出遊戲
        modeStack.push(modeFlag);
        init();
        textList = [TXT.quitGame];
        buttonList = [BTS.yes, BTS.no];
    },
}