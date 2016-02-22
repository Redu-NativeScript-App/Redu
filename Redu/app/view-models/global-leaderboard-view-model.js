var observable = require("data/observable");

var observableArray = require("data/observable-array");

var LeaderboardModel = (function (_super) {
    __extends(LeaderboardModel, _super);
    function LeaderboardModel() {
        _super.call(this);
    }

    LeaderboardModel.prototype.highscores = new observableArray.ObservableArray([]);

    return LeaderboardModel;
})(observable.Observable);

exports.LeaderboardViewModel = LeaderboardModel;
exports.leaderboardViewModel = new LeaderboardModel();
