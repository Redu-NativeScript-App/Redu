var vmModule = require("../view-models/end-screen-view-model");
var dialogs = require("ui/dialogs");
var helpers = require('../helpers').helpers;
var shareBtn;
var page;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";
var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";

function pageLoaded(args) {
    page = args.object;
    shareBtn = page.getViewById("shareBtn");


  //  page.bindingContext = vmModule.endScreenViewModel;
}

function onShareTapped(){
    shareBtn.style.backgroundImage = btnPressed;
    helpers.changeButtonStateIfPressed(shareBtn);

  dialogs.prompt("Enter you name:", "").then(function (r) {
    console.log("Dialog result: " + r.result + ", text: " + r.text);
  });
}

exports.pageLoaded = pageLoaded;
exports.onShareTapped = onShareTapped;
