var vmModule = require("../view-models/game-view-model");
var frame = require("ui/frame");
var buttonModule = require("ui/label");
var layout = require("ui/layouts/grid-layout");
var colorModule = require("color");
var globals = require("../globals").globals;
var helpers = require("../helpers").helpers;
var animationModule = require("ui/animation");
var platformModule = require("platform");

var screenWidth;
var screenHeight;

var numberOfColumns = 4;
var numberOfRows = 5;

var gameSpeed = 4000;
var gridHeight = 0;

var rowHeight = 120;
var mainColorLabel;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.gameViewModel;
    var firstGrid = page.getViewById("firstGrid");
    var secondGrid = page.getViewById("secondGrid");
    mainColorLabel = page.getViewById("pointsLabel");
    screenWidth = platformModule.screen.mainScreen.widthDIPs;
    screenHeight = platformModule.screen.mainScreen.heightDIPs;
    initializeComponents(firstGrid, secondGrid, numberOfColumns, numberOfRows, gameSpeed);
}

function initializeComponents(firstGrid, secondGrid, numberOfColumns, numberOfRows, gameSpeed) {
  populateGrid(firstGrid, numberOfColumns, numberOfRows);
  populateGrid(secondGrid, numberOfColumns, numberOfRows);
  gridHeight = rowHeight * numberOfRows;

  setInterval(function() {
    changeMainColor();
  }, 10000);

  animateGrid(secondGrid, gameSpeed);
  setTimeout(function() {
    animateGrid(firstGrid, gameSpeed);
  }, gameSpeed / 2);
}

var points = 0;

function changeMainColor() {
  mainColorLabel.style.backgroundColor = helpers.getRandomElement(globals.colors);
}

function onTap(args) {
  vmModule.gameViewModel.setPoints(++points);
  args.object.style.backgroundColor = 'White';
  args.object.style.backgroundImage = '../images/broken.png';
}

function onDoubleTap(args) {
}

function onLongPress(args) {
}

function recolorGrid(grid) {
  for (var i = 0, length = grid.getChildrenCount(); i < length; i += 1) {
    grid.getChildAt(i).style.backgroundColor = helpers.getRandomElement(globals.colors);
  }
}

function animateGrid(grid, duration) {
  grid.animate({
    duration: 0,
    translate: {
      x: 0,
      y: -gridHeight
    }
  })
  .then(function() {
      return grid.animate({
      duration: duration,
      translate: {
        x: 0,
        y: gridHeight
      },
      iterations: Number.POSITIVE_INFINITY,
      curve: 'linear'
    });
  });
}

function populateGrid(grid, numberOfColumns, numberOfRows) {
  var i;
  for (i = 0; i < numberOfColumns; i++) {
    grid.addColumn(new layout.ItemSpec(screenWidth / numberOfColumns, layout.GridUnitType.pixel));
  }

  for (i = 0; i < numberOfRows; i++) {
    grid.addRow(new layout.ItemSpec(rowHeight, layout.GridUnitType.pixel));
    for (var j = 0; j < numberOfColumns; j++) {
        var element = new buttonModule.Label();
        element.style.backgroundColor = helpers.getRandomElement(globals.colors);
        element.on('tap', onTap);
        element.on('doubleTap', onDoubleTap);
        element.on('longPress', onLongPress);
        layout.GridLayout.setColumn(element, j);
        layout.GridLayout.setRow(element, i);
        grid.addChild(element);
    }
  }
}

exports.pageLoaded = pageLoaded;
