var vmModule = require("../view-models/main-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var topmost;
var startBtn;
var leaderboardBtn;
var settingsBtn;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";
var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
    topmost = frame.topmost();
    startBtn = view.getViewById(page, "startBtn");
    leaderboardBtn = view.getViewById(page, "leaderboardBtn");
    settingsBtn = view.getViewById(page, "settingsBtn");
    changeButtonStateIfPressed(startBtn);
    changeButtonStateIfPressed(leaderboardBtn);
    changeButtonStateIfPressed(settingsBtn);
}

function onStartBtnTapped() {
  startBtn.style.backgroundImage = btnPressed;
  topmost.navigate("./views/game-page");
}

function onLeaderboardBtnTapped() {
  leaderboardBtn.style.backgroundImage = btnPressed;
  topmost.navigate("./views/global-leaderboard-page");
}

function onSettingsBtnTapped() {
  settingsBtn.style.backgroundImage = btnPressed;
  topmost.navigate("./views/settings-page");
}

function changeButtonStateIfPressed(button) {
  if (button.style.backgroundImage === btnPressed) {
    button.style.backgroundImage = btnUnpressed;
  }
}

exports.pageLoaded = pageLoaded;
exports.onStartBtnTapped = onStartBtnTapped;
exports.onLeaderboardBtnTapped = onLeaderboardBtnTapped;
exports.onSettingsBtnTapped = onSettingsBtnTapped;
