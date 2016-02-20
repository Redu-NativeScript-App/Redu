var vmModule = require("../view-models/game-view-model");
var frame = require("ui/frame");
var buttonModule = require("ui/label");
var layout = require("ui/layouts/grid-layout");
var colorModule = require("color");
var globals = require("../globals").globals;
var helpers = require("../helpers").helpers;
var platformModule = require("platform");

var screenWidth;
var screenHeight;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.gameViewModel;
    screenWidth = platformModule.screen.mainScreen.widthPixels;
    screenHeight = platformModule.screen.mainScreen.heightPixels;
    var grid = page.getViewById("grid");
    if (grid) {
      populateGrid(grid, 4, 5);
      console.log(grid.getChildAt(4).text);
    }
}

function populateGrid(grid, numberOfColumns, numberOfRows) {
  var rowHeight = Math.ceil(screenHeight / numberOfRows);
  var i;
  for (i = 0; i < numberOfColumns; i++) {
    grid.addColumn(new layout.ItemSpec(1, layout.GridUnitType.star));
  }

  for (i = 0; i < numberOfRows; i++) {
    grid.addRow(new layout.ItemSpec(1, layout.GridUnitType.star));
    for (var j = 0; j < numberOfColumns; j++) {
        var element = new buttonModule.Label();
        element.style.backgroundColor = helpers.getRandomElement(globals.colors);
        element.style.height = rowHeight;
        element.text = i + " " + j;
        element.tap = gridTapped;
        layout.GridLayout.setColumn(element, j);
        layout.GridLayout.setRow(element, i);
        grid.addChild(element);
    }
  }

  function gridTapped(args) {
  }
}

exports.pageLoaded = pageLoaded;
