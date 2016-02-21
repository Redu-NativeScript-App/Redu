exports.helpers = {
  getRandomElement: function(items) {
    return items[Math.floor(Math.random()*items.length)];
  },
  hitTest(layout, location, numberOfColumns) {
    // TODO: Optimize. Hint: width abs(cy - y > width)
    for (var i = 0, length = layout.getChildrenCount(); i < length; i += 1) {
      var viewIndexOnRow = i % numberOfColumns;
      var rowIndex = (i - viewIndexOnRow) / numberOfColumns;
      var view = layout.getChildAt(i);

      if (view.width * viewIndexOnRow < location.y &&
          view.width * (viewIndexOnRow + 1) > location.y &&
          view.height * rowIndex < location.x &&
          view.height * (rowIndex + 1) > location.x) {
        return i;
      }
    }
    return undefined;
  },
  changeButtonStateIfPressed: function(button) {
    var btnUnpressed = "url('~/images/green-rect-btn-unpressed.png')";
    setTimeout(function() {
        button.style.backgroundImage = btnUnpressed;
    }, 200);
  },
  validateNickname: function(nickname) {
    if (!nickname) {
      alert("The nickname cannot be empty!");
      return;
    }
  }
};
