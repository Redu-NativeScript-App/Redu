var Toast = require("nativescript-toast");

function show(text) {
  Toast.makeText(text).show();
}

exports.show = show;
