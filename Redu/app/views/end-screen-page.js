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

function pageLoaded(args) {
    page = args.object;
    shareBtn = page.getViewById("shareBtn");
    selfieBtn = page.getViewById("selfieBtn");

  //  page.bindingContext = vmModule.endScreenViewModel;s
}

function onSelfieTapped(args) {
    selfieBtn.style.backgroundImage = btnPressed;
    helpers.changeButtonStateIfPressed(selfieBtn);

    cameraModule.takePicture().then(function(picture) {
    console.log("Result is an image source instance");
    var image = new imageModule.Image();
    image.imageSource = picture;
});
}

function onShareTapped(){
  shareBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(shareBtn);

  dialogs.prompt("Enter you name:", "").then(function (r) {
    score = +page.getViewById("score").text;
    helpers.validateNickname(r.text);
    nickname = r.text;

    //services.addNewHighscore()
    console.log("Dialog result: " + r.result + ", text: " + r.text);
  });


}

exports.onSelfieTapped = onSelfieTapped;
exports.pageLoaded = pageLoaded;
exports.onShareTapped = onShareTapped;
