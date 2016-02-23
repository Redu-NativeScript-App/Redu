var vmModule = require("../view-models/about-view-model");
var orientationModule = require("nativescript-screen-orientation");

function pageLoaded(args) {
    orientationModule.setCurrentOrientation("portrait");
    var page = args.object;
    page.bindingContext = vmModule.settingsViewModel;
}

exports.pageLoaded = pageLoaded;
