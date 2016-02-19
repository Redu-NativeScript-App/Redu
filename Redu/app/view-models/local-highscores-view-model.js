var observable = require("data/observable");
var LocalHighscoresModel = (function (_super) {
    __extends(LocalHighscoresModel, _super);
    function LocalHighscoresModel() {
        _super.call(this);

    }
})(observable.Observable);

exports.LocalHighscoresModel = LocalHighscoresModel;
exports.localHighscoresViewModel = new LocalHighscoresModel();
