var vmModule = require("../view-models/main-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var services = require('../services/global-leaderboards-service');
var helpers = require('../helpers').helpers;
var topmost;
var startBtn;
var leaderboardBtn;
var settingsBtn;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";
var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";

var localScoresService = require('../services/local-scores-service');
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
    topmost = frame.topmost();
    startBtn = view.getViewById(page, "startBtn");
    leaderboardBtn = view.getViewById(page, "leaderboardBtn");
    settingsBtn = view.getViewById(page, "settingsBtn");

    console.log('lol');
    localScoresService.getAllLocalScores()
    .then(function(asd) {
      console.log('done');
    });
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

function onSettingsBtnTapped() {
  settingsBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(settingsBtn);
  // topmost.navigate("./views/settings-page");
  topmost.navigate("./views/end-screen-page");
}

exports.pageLoaded = pageLoaded;
exports.onStartBtnTapped = onStartBtnTapped;
exports.onLeaderboardBtnTapped = onLeaderboardBtnTapped;
exports.onSettingsBtnTapped = onSettingsBtnTapped;
