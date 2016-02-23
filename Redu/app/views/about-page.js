var absoluteLayout = require("ui/layouts/absolute-layout");
var orientationModule = require("nativescript-screen-orientation");
var image;

function pageLoaded(args) {
    orientationModule.setCurrentOrientation("portrait");
    var page = args.object;
    image = page.getViewById("ninja");

}

function onPan(eventData) {
  var deltaX = eventData.deltaX,
      deltaY = eventData.deltaY;

  var newTop = absoluteLayout.AbsoluteLayout.getTop(eventData.object) + deltaY,
      newLeft = absoluteLayout.AbsoluteLayout.getLeft(eventData.object) + deltaX;

  if(newTop < 0 || newTop + imageHeight > screenHeight) {
    return;
  }

  if(newLeft < 0 || newLeft + imageWidth > screenWidth) {
    return;
  }

  absoluteLayout.AbsoluteLayout.setTop(eventData.object, newTop);
  absoluteLayout.AbsoluteLayout.setLeft(eventData.object, newLeft);
}

exports.pageLoaded = pageLoaded;
exports.onPan = onPan;
