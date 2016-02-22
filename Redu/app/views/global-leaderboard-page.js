var frame = require('ui/frame');
var vmModule = require("../view-models/global-leaderboard-view-model");
var leaderboardService = require("../services/global-leaderboards-service");
var loader = require("nativescript-loading-indicator");
var page;
var list;
var top10 = 10;

function pageLoaded(args) {
  page = args.object;
  page.bindingContext = vmModule.leaderboardViewModel;
  getHighscores();
}

function getHighscores(){
  loader.show();
  leaderboardService.getAllHighscores()
    .then(function(data){
      loader.hide();
      page.bindingContext.highscores.splice(0);
      for (var i = 0; i < top10; i++) {
          var currentLine = (i + 1) + '. ' +  data[i].name + ' ' + data[i].score;
      //  var currentLine = data[i].name + '|' + data[i].score + '|' + data[i].selfie;
        page.bindingContext.highscores.push(currentLine);
      }
    }, function(err) {
      console.log(err.message);
    });
}

exports.pageLoaded = pageLoaded;
