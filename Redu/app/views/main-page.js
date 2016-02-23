var vmModule = require("../view-models/main-view-model"),
    view = require("ui/core/view"),
    frame = require("ui/frame"),
    services = require('../services/global-leaderboards-service'),
    helpers = require('../helpers').helpers,
    sounds = require('../sounds').sounds,
    orientationModule = require("nativescript-screen-orientation"),
    page,
    topmost,
    tada,
    startBtn,
    leaderboardBtn,
    aboutBtn,
    localScoresBtn,
    btnPressed = "url('~/images/green-rect-btn-pressed.png')",
    btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";

var localScoresService = require('../services/local-scores-service');
function pageLoaded(args) {
  orientationModule.setCurrentOrientation("portrait");
  page = args.object;
  page.bindingContext = vmModule.mainViewModel;
  topmost = frame.topmost();
  startBtn = view.getViewById(page, "startBtn");
  leaderboardBtn = view.getViewById(page, "leaderboardBtn");
  aboutBtn = view.getViewById(page, "aboutBtn");
  localScoresBtn = view.getViewById(page, "localScoresBtn");
}

function onStartBtnTapped() {
  sounds.playSound("Click");
  startBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(startBtn);

  var navigationEntry = {
    moduleName: "./views/choose-difficulty-page",
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

function onAboutBtnTapped() {
  sounds.playSound("Click");
  aboutBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(aboutBtn);
  topmost.navigate("./views/about-page");
  //topmost.navigate("./views/end-screen-page");
}

exports.pageLoaded = pageLoaded;
exports.onStartBtnTapped = onStartBtnTapped;
exports.onLeaderboardBtnTapped = onLeaderboardBtnTapped;
exports.onLocalScoresBtnTapped = onLocalScoresBtnTapped;
exports.onAboutBtnTapped = onAboutBtnTapped;
