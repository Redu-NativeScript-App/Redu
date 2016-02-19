var vmModule = require("../view-models/main-view-model");
var frame = require('ui/frame');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

exports.pageLoaded = pageLoaded;