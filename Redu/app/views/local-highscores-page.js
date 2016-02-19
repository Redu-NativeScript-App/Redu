var vmModule = require("../view-models/local-highscore-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.localHighscoreViewModel;
}

exports.pageLoaded = pageLoaded;