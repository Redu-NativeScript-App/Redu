var observable = require("data/observable");
var EndScreenModel = (function (_super) {
    __extends(EndScreenModel, _super);
    function EndScreenModel() {
      _super.call(this);
    }

    return EndScreenModel;
})(observable.Observable);

exports.EndScreenModel = EndScreenModel;
exports.endScreenViewModel = new EndScreenModel();
