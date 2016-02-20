var vmModule = require("../view-models/main-view-model");
var frame = require('ui/frame');
var topmost;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
    topmost = frame.topmost();
}

function onStartBtnTapped() {
  //change background image to pressed;

  topmost.navigate("./views/game-page");
}

function onLeaderboardBtnTapped() {
  //change background image to pressed;

  topmost.navigate("./views/global-leaderboard-page");
}

function onSettingsBtnTapped() {
  //change backgroud image to pressed;

  topmost.navigate("./views/settings-page");}


exports.pageLoaded = pageLoaded;
exports.onStartBtnTapped = onStartBtnTapped;
exports.onLeaderboardBtnTapped = onLeaderboardBtnTapped;
exports.onSettingsBtnTapped = onSettingsBtnTapped;
