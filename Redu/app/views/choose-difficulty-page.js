var frame = require('ui/frame');
var topmost = frame.topmost();

function pageLoaded(args) {
    var page = args.object;
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
  navigateWithColumnCount(4);
}

function onMediumBtnTapped() {
  navigateWithColumnCount(5);
}

function onHardBtnTapped() {
  navigateWithColumnCount(6);
}
exports.pageLoaded = pageLoaded;
exports.onEasyBtnTapped = onEasyBtnTapped;
exports.onMediumBtnTapped = onMediumBtnTapped;
exports.onHardBtnTapped = onHardBtnTapped;
