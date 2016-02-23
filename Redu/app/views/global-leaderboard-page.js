var frame = require('ui/frame'),
    vmModule = require("../view-models/global-leaderboard-view-model"),
    leaderboardService = require("../services/global-leaderboards-service"),
    loader = require("nativescript-loading-indicator"),
    orientationModule = require("nativescript-screen-orientation"),
    page,
    list,
    top10 = 10;

function pageLoaded(args) {
  page = args.object;
  page.bindingContext = vmModule.leaderboardViewModel;
  getHighscores();
}

function getHighscores(){
  orientationModule.setCurrentOrientation("portrait");
  loader.show();
  leaderboardService.getAllHighscores()
    .then(function(data){
      loader.hide();
      page.bindingContext.highscores.splice(0);
      for (var i = 0; i < top10; i++) {
        var currentLine = (i + 1) + '. ' +  data[i].name + ' ' + data[i].score;
        page.bindingContext.highscores.push(currentLine);
      }
    }, function(err) {
      console.log(err.message);
    });
}

exports.pageLoaded = pageLoaded;
