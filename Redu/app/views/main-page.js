var vmModule = require("../view-models/main-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var services = require('../services/global-leaderboards-service');
var helpers = require('../helpers').helpers;
var sounds = require('../sounds').sounds;
var orientationModule = require("nativescript-screen-orientation");

var page;
var topmost;
var tada;
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
  sounds.playSound("Click");
  startBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(startBtn);

  var navigationEntry = {
    moduleName: "./views/game-page",
    backstackVisible: false
  };

  topmost.navigate(navigationEntry);
}

function onLeaderboardBtnTapped() {
  sounds.playSound("Click");
  leaderboardBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(leaderboardBtn);

  topmost.navigate("./views/global-leaderboard-page");
}

function onLocalScoresBtnTapped() {
  sounds.playSound("Click");
  localScoresBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(localScoresBtn);

  topmost.navigate("./views/local-highscores-page");
}

function onSettingsBtnTapped() {
  sounds.playSound("Click");
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
