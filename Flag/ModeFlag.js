let modeConfig = {
    mode1() { // mode1 = 開始頁面
        modeStack.push(modeFlag);
        init();
        textList = homeTextList;
        buttonList = homeButtonList;
    },
    mode2() { // mode2 = 進入玩選單
        modeStack.push(modeFlag);
        init();
        textList = chooseModeTextList;
        buttonList = chooseModeButtonList;
    },
    mode3() { // mode3 = 進入設定
        modeStack.push(modeFlag);
        init();
        textList = [];
        buttonList = settingButtonList;
    },
    mode4() { // mode4 = 開始遊戲
        modeStack.push(modeFlag);
        init();
        textList = gamingTextList;
        buttonList = [];
        insideBorder.display = true;
        laserSwitch = true;
        gamingMvp.text = `MVP：${localStorage.getItem(difficulty) ? localStorage.getItem(difficulty) : 0}`; // 顯示歷史最高分
        gamingDifficulty.text = 'DIFFICULT：' + difficulty; // 顯示難度
        player.limitMode = 'inside';
    },
    mode5() { // mode5 = 遊戲結束並且出現選單及再一次
        modeStack.push(modeFlag);
        init();
        if (!localStorage.getItem(difficulty) || localStorage.getItem(difficulty) < scoreCount) {
            localStorage.setItem(difficulty, scoreCount);
        }
        menuOrAgainMvp.text = `MVP：${localStorage.getItem(difficulty)}`; //更改分數最高的MVP數值
        if (scoreCount >= 10 && difficulty == 'hard') {
            textList = menuOrAgainTextList.concat([easterEgg]);
        } else {
            textList = menuOrAgainTextList;
        }
        buttonList = menuOrAgainButtonList;
        scoreCount = 0; // 分數重置
    },
    mode6() { // mode6 = 圖案選擇介面
        modeStack.push(modeFlag);
        init();
        textList = choosePatternTextList;
        buttonList = choosePatternButtonList;
    },
    mode7() { // mode7 = 顏色選擇介面
        modeStack.push(modeFlag);
        init();
        textList = chooseColorTextList;
        buttonList = chooseColorButtonList;
        colorTicketList.forEach(e => e.display = true);
    },
    mode8() { // mode8 = 觀看製作人名單
        modeStack.push(modeFlag);
        init();
        textList = producerListTextList;
        buttonList = producerListButtonList;
    },
    mode9() { // mode9 = 詢問是否退出遊戲
        modeStack.push(modeFlag);
        init();
        textList = quitGameTextList;
        buttonList = quitGameButtonList;
    },
}