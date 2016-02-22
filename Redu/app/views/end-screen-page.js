var vmModule = require("../view-models/end-screen-view-model");
var dialogs = require("ui/dialogs");
var helpers = require('../helpers').helpers;
var servises = require("../services/global-leaderboards-service");
var cameraModule = require("camera");
var imageModule = require("ui/image");
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
    page = args.object;
    shareBtn = page.getViewById("shareBtn");
    selfieBtn = page.getViewById("selfieBtn");
    imageContainer = page.getViewById("selfieContainer");
    scoreLabel = page.getViewById("scoreLabel");
    scoreLabel.text = 50;
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
  });


}

exports.onSelfieTapped = onSelfieTapped;
exports.pageLoaded = pageLoaded;
exports.onShareTapped = onShareTapped;
