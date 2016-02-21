// var vmModule = require("../view-models/global-leaderboard-view-model");
//
// function pageLoaded(args) {
//     var page = args.object;
//     page.bindingContext = vmModule.globalLeaderboardViewModel;
// }
//
// exports.pageLoaded = pageLoaded;

var ObservableArray = require('data/observable-array')
  .ObservableArray;

var frame = require('ui/frame');
var vmModule = require("../view-models/global-leaderboard-view-model");
var page;

function pageLoaded(args) {
  page = args.object;

  page.bindingContext = vmModule.leaderboardViewModel;
}

function navigatedToPage(args) {
 var data = args.object.navigationContext.data;
 console.log(data);
 args.object.bindingContext.setHighscores(["asd"]);
}
