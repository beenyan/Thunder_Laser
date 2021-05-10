// 玩家可自訂之參數
let laserSpeed = 0; //雷射移動距離
let laserFrequence = 130; // 未完成 雷射頻率
let laserLength = 90; // 雷射長度
let playerR = 22; // 玩家大圓半徑

let modeFlag = 'mode1'; // 模式旗標
let patternFlag = localStorage.getItem('patternFlag') ? localStorage.getItem('patternFlag') : 'round'; // 玩家圖標參數

// 紀錄器及開關
let laserSwitch = false; // 雷射開關
let laserList = []; // 雷射陣列 儲存雷射
let modeStack = ['mode9'] // 模式旗標堆疊
let time = 0; // 時間紀錄器
let scoreCount = 0; // 分數紀錄器
let nowColor = colorConfig[localStorage.getItem('colorFlag') ? localStorage.getItem('colorFlag') : 'blue']; // 顏色紀錄器
let difficulty = ''; //難度紀錄器

// 聲音
let BGM = new Audio('Audio/BGM.mp3'); // 背景音樂
BGM.loop = true; //開啟循環
BGM.volume = 0; //音量調整

let shootSoundEffect = new Audio('Audio/ThunderLaser.ogg'); // 發出雷射
let clickButtonSoundEffect = new Audio('Audio/TouchButton.ogg'); // 玩家覆蓋按鈕
shootSoundEffect.volume = 0.6; //音量調整
clickButtonSoundEffect.volume = 1; //音量調整
clickButtonSoundEffect.replay = function () {
    this.load();
    this.currentTime = 0;
    this.play();
}