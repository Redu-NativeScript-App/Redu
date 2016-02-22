var vmModule = require("../view-models/end-screen-view-model"),
    dialogs = require("ui/dialogs"),
    helpers = require('../helpers').helpers,
    topmost = require('ui/frame').topmost(),
    globalScoreService = require("../services/global-leaderboards-service"),
    localScoreService = require("../services/local-scores-service"),
    cameraModule = require("camera"),
    imageModule = require("ui/image"),
    orientationModule = require("nativescript-screen-orientation"),
    notifier = require("../notification-manager"),
    shareBtn,
    selfieBtn,
    page,
    nickname,
    score,
    btnPressed = "url('~/images/green-rect-btn-pressed.png')",
    btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')",
    imageContainer,
    scoreLabel,
    selfieAsBase64,
    playerScore;

function pageLoaded(args) {
    orientationModule.setCurrentOrientation("portrait");
    page = args.object;
    shareBtn = page.getViewById("shareBtn");
    selfieBtn = page.getViewById("selfieBtn");
    imageContainer = page.getViewById("selfieContainer");
    scoreLabel = page.getViewById("scoreLabel");
    playerScore = args.object.navigationContext.points;
    scoreLabel.text = playerScore;
    localScoreService.addNewLocalScore(playerScore);
}

function onSelfieTapped(args) {
    selfieBtn.style.backgroundImage = btnPressed;
    helpers.changeButtonStateIfPressed(selfieBtn);

    cameraModule.takePicture()
    .then(function(picture) {
      imageContainer.imageSource = picture;
      selfieAsBase64 = picture.toBase64String();
      selfieBtn.text = "Take another";
    });
}

function onShareTapped() {
  shareBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(shareBtn);

  dialogs.prompt("Enter your name: ", "")
  .then(function (res) {
    var isValid = helpers.isNameValid(res.text);
    if (!isValid) {
      notifier.show("Invalid name!");
      return;
    }

    console.log("Dialog result: " + res.result + ", text: " + res.text);

    return new Promise(function(resolve, reject) {
      resolve({
        score: playerScore,
        name: res.text,
        selfie: selfieAsBase64
      });
    });
  })
  .then(function (highscore) {
    if (!highscore.selfie) {
      notifier.show("You must take a victory selfie");
      return;
    }

    globalScoreService.addNewHighscore(highscore)
    .then(function() {
      topmost.goBack();
    });
  });

}

exports.onSelfieTapped = onSelfieTapped;
exports.pageLoaded = pageLoaded;
exports.onShareTapped = onShareTapped;
