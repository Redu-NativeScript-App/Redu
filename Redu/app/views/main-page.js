var vmModule = require("../view-models/main-view-model");
var frame = require('ui/frame');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function onStartBtnTapped() {
  console.log("start button tapped");
  //change backgroud image to pressed;

  // frame.topmost()
  //   .navigate('game-page');
}

function onLeaderboardBtnTapped() {
  console.log("leaderboard button tapped");
  //change backgroud image to pressed;

  // frame.topmost()
  //   .navigate('global-leaderboard-page');
}

function onSettingsBtnTapped() {
  console.log("settings button tapped");
  //change backgroud image to pressed;

  // frame.topmost()
  //   .navigate('settings-page');
}


exports.pageLoaded = pageLoaded;
exports.onStartBtnTapped = onStartBtnTapped;
exports.onLeaderboardBtnTapped = onLeaderboardBtnTapped;
exports.onSettingsBtnTapped = onSettingsBtnTapped;
