var vmModule = require("../view-models/end-screen-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.endScreenViewModel;
}

exports.pageLoaded = pageLoaded;