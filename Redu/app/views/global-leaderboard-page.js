var vmModule = require("../view-models/global-leaderboard-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.globalLeaderboardViewModel;
}

exports.pageLoaded = pageLoaded;