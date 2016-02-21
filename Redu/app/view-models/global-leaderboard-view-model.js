var observable = require("data/observable");

var ObservableArray = require("data/observable-array")
  .ObservableArray;

var services = require('../services/global-leaderboards-service');

var LeaderboardModel = (function (_super) {
    __extends(LeaderboardModel, _super);
    function LeaderboardModel() {
        _super.call(this);
        this.set("highscores", new ObservableArray(["asd"]));
        this.page = 0;
        this.loadHighscores();
    }

    LeaderboardModel.prototype.highscores = new ObservableArray(["äsd", "asd"]);
    LeaderboardModel.prototype.setHighscores = function(highscores) {
        this.set("highscores", highscores);
    };

    LeaderboardModel.prototype.loadHighscores = function() {
      this.page += 1;

      services.getAllHighscores()
        .then((data) => {
          console.log(JSON.stringify(data, null, 2));
          data.forEach(highscore => this.highscores.push(highscore));

          // console.log(this.highscores);asd

        });

      return this;
    };

    return LeaderboardModel;
})(observable.Observable);

exports.LeaderboardViewModel = LeaderboardModel;
exports.leaderboardViewModel = new LeaderboardModel();
