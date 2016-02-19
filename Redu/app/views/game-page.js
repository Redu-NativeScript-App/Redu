var vmModule = require("../view-models/game-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.gameViewModel;
}

exports.pageLoaded = pageLoaded;