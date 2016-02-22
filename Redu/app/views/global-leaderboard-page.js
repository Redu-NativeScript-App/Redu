var frame = require('ui/frame');
var vmModule = require("../view-models/global-leaderboard-view-model");
var leaderboardService = require("../services/global-leaderboards-service");
var page;

var list;

function pageLoaded(args) {
  page = args.object;
  page.bindingContext = vmModule.leaderboardViewModel;
  getHighscores();
}

function getHighscores(){
  leaderboardService.getAllHighscores()
    .then(function(data){
      for (var i = 0; i < data.length; i++) {
        var currentLine = data[i].name + '|' + data[i].score + '|' + data[i].location;
        page.bindingContext.highscores.push(currentLine);
      }
    }, function(err) {
      console.log(err.message);
    });
}

exports.pageLoaded = pageLoaded;
