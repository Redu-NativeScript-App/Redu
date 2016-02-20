var observable = require("data/observable");
var MainModel = (function (_super) {
    __extends(MainModel, _super);
    function MainModel() {
        _super.call(this);
    }

    return MainModel;
})(observable.Observable);

exports.MainModel = MainModel;
exports.mainViewModel = new MainModel();
