var vmModule = require("../view-models/settings-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.settingsViewModel;
}

exports.pageLoaded = pageLoaded;
