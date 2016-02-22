var vmModule = require("../view-models/main-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var services = require('../services/global-leaderboards-service');
var helpers = require('../helpers').helpers;
var orientationModule = require("nativescript-screen-orientation");

var page;
var topmost;
var startBtn;
var leaderboardBtn;
var settingsBtn;
var localScoresBtn;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";
var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";

var localScoresService = require('../services/local-scores-service');
function pageLoaded(args) {
    orientationModule.setCurrentOrientation("portrait");
    page = args.object;
    page.bindingContext = vmModule.mainViewModel;
    topmost = frame.topmost();
    startBtn = view.getViewById(page, "startBtn");
    leaderboardBtn = view.getViewById(page, "leaderboardBtn");
    settingsBtn = view.getViewById(page, "settingsBtn");
    localScoresBtn = view.getViewById(page, "localScoresBtn");
}

function onStartBtnTapped() {
  startBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(startBtn);
  topmost.navigate("./views/game-page");
}

function onLeaderboardBtnTapped() {
  leaderboardBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(leaderboardBtn);

  topmost.navigate("./views/global-leaderboard-page");
}

function onLocalScoresBtnTapped() {
  localScoresBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(localScoresBtn);

  topmost.navigate("./views/local-highscores-page");
}

function onSettingsBtnTapped() {
  settingsBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(settingsBtn);
  topmost.navigate("./views/settings-page");
  //topmost.navigate("./views/end-screen-page");
}

exports.pageLoaded = pageLoaded;
exports.onStartBtnTapped = onStartBtnTapped;
exports.onLeaderboardBtnTapped = onLeaderboardBtnTapped;
exports.onSettingsBtnTapped = onSettingsBtnTapped;
exports.onLocalScoresBtnTapped = onLocalScoresBtnTapped;
