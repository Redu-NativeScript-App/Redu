var vmModule = require("../view-models/end-screen-view-model");
var dialogs = require("ui/dialogs");
var helpers = require('../helpers').helpers;
var globalScoreService = require("../services/global-leaderboards-service");
var localScoreService = require("../services/local-scores-service");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var orientationModule = require("nativescript-screen-orientation");

var shareBtn;
var selfieBtn;
var page;
var nickname;
var score;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";
var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";
var imageContainer;
var scoreLabel;

function pageLoaded(args) {
    orientationModule.setCurrentOrientation("portrait");
    page = args.object;
    shareBtn = page.getViewById("shareBtn");
    selfieBtn = page.getViewById("selfieBtn");
    imageContainer = page.getViewById("selfieContainer");
    scoreLabel = page.getViewById("scoreLabel");
    var playerScore = args.object.navigationContext.points;
    scoreLabel.text = playerScore;
    localScoreService.addNewLocalScore(playerScore);
}

function onSelfieTapped(args) {
    selfieBtn.style.backgroundImage = btnPressed;
    helpers.changeButtonStateIfPressed(selfieBtn);

    cameraModule.takePicture()
    .then(function(picture) {
      imageContainer.imageSource = picture;
      selfieBtn.text = "Take another";
    });
}

function onShareTapped(){
  shareBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(shareBtn);

  dialogs.prompt("Enter you name:", "").then(function (res) {
    score = +page.getViewById("score").text;
    helpers.validateNickname(res.text);
    nickname = res.text;

    console.log("Dialog result: " + res.result + ", text: " + res.text);
  })
  .then(function () {

    score = +page.getViewById("score").text;
    console.log("-----------------------------");
    console.log(selfie);
    console.log(score);
    console.log(nickname);


    var currentHighscore = {
      score: "23",
      name: "peshoooooo",
      selfie: "sadsadsad"
    };

    services.addNewHighscore(currentHighscore);
  });


}

exports.onSelfieTapped = onSelfieTapped;
exports.pageLoaded = pageLoaded;
exports.onShareTapped = onShareTapped;
