var observable = require("data/observable");
var observableArray = require("data/observable-array");

var LocalHighscoresModel = (function (_super) {
    __extends(LocalHighscoresModel, _super);
    function LocalHighscoresModel() {
        _super.call(this);
    }

    LocalHighscoresModel.prototype.localScores = new observableArray.ObservableArray([]);

    return LocalHighscoresModel;
})(observable.Observable);

exports.LocalHighscoresModel = LocalHighscoresModel;
exports.localHighscoresViewModel = new LocalHighscoresModel();
