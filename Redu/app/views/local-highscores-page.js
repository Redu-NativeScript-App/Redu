var vmModule = require("../view-models/local-highscores-view-model");
var localScoresService = require("../services/local-scores-service");
var orientationModule = require("nativescript-screen-orientation");

var page;

function pageLoaded(args) {
  orientationModule.setCurrentOrientation("portrait");
  page = args.object;
  page.bindingContext = vmModule.localHighscoresViewModel;
  getLocalScores();
}

function getLocalScores(){
  localScoresService.getAllLocalScores()
    .then(function(data){
      page.bindingContext.localScores.push(data);
    }, function(err) {
      console.log(err.message);
    });
}


exports.pageLoaded = pageLoaded;
