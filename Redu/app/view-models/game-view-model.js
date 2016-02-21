var observable = require("data/observable");
var GameModel = (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        _super.call(this);
        this.set("points", 0);
    }

    GameModel.prototype.setPoints = function(value) {
      this.set("points", value);
    };

    return GameModel;
})(observable.Observable);

exports.GameModel = GameModel;
exports.gameViewModel = new GameModel();
