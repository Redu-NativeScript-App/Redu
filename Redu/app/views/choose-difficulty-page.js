var frame = require('ui/frame');
var sounds = require('../sounds').sounds;
var helpers = require('../helpers').helpers;
var topmost = frame.topmost();
var easyBtn;
var mediumBtn;
var hardBtn;
var btnPressed = "url('~/images/green-rect-btn-pressed.png')";

function pageLoaded(args) {
  var page = args.object;
  easyBtn = page.getViewById("easyBtn");
  mediumBtn = page.getViewById("mediumBtn");
  hardBtn = page.getViewById("hardBtn");

}

function navigateWithColumnCount(numberOfColumns) {
  var navigationEntry = {
    moduleName: "./views/game-page",
    context: { numberOfColumns: numberOfColumns },
    animated: true,
    backstackVisible: false
  };

  topmost.navigate(navigationEntry);
}

function onEasyBtnTapped() {
  sounds.playSound("Click");
  easyBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(easyBtn);
  navigateWithColumnCount(4);
}

function onMediumBtnTapped() {
  sounds.playSound("Click");
  mediumBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(mediumBtn);
  navigateWithColumnCount(5);
}

function onHardBtnTapped() {
  hardBtn.style.backgroundImage = btnPressed;
  helpers.changeButtonStateIfPressed(hardBtn);
  sounds.playSound("Click");
  navigateWithColumnCount(6);
}
exports.pageLoaded = pageLoaded;
exports.onEasyBtnTapped = onEasyBtnTapped;
exports.onMediumBtnTapped = onMediumBtnTapped;
exports.onHardBtnTapped = onHardBtnTapped;
