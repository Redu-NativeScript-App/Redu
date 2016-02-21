var vmModule = require("../view-models/end-screen-view-model");
var dialogs = require("ui/dialogs");
var helpers = require('../helpers').helpers;
var servises = require("../services/global-leaderboards-service");
var geolocation = require("nativescript-geolocation");
var shareBtn;
var page;
var nickname;
var score;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";
var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";

function pageLoaded(args) {
    page = args.object;
    shareBtn = page.getViewById("shareBtn");

  //  page.bindingContext = vmModule.endScreenViewModel;s
}

function onLocationTapped(args) {
    if (!geolocation.isEnabled()) {
        geolocation.enableLocationRequest();
    }
}

function onShareTapped(){
  shareBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(shareBtn);


  geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
   then(function(loc) {
       if (loc) {
           console.log("Current location is: " + loc);
       }
   }, function(e){
       console.log("Error: " + e.message);
   });


  dialogs.prompt("Enter you name:", "").then(function (r) {
    score = +page.getViewById("score").text;
    helpers.validateNickname(r.text);
    nickname = r.text;
    //var location =
    //services.addNewHighscore()
    console.log("Dialog result: " + r.result + ", text: " + r.text);
  });


}

exports.onLocationTapped = onLocationTapped;
exports.pageLoaded = pageLoaded;
exports.onShareTapped = onShareTapped;
