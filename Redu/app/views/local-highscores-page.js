var vmModule = require("../view-models/local-highscore-view-model");
var localScoresService = require("../services/local-scores-service");
function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = vmModule.localHighscoreViewModel;
  getLocalScores();
}

function getLocalScores(){
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
