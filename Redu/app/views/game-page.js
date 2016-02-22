var vmModule = require("../view-models/game-view-model"),
    frame = require("ui/frame"),
    topmost = frame.topmost(),
    labelModule = require("ui/label"),
    layout = require("ui/layouts/grid-layout"),
    colorModule = require("color"),
    globals = require("../globals").globals,
    helpers = require("../helpers").helpers,
    animationModule = require("ui/animation"),
    platformModule = require("platform"),
    screenWidth,
    screenHeight,
    numberOfColumns = 6,
    numberOfRows = 5,
    gameSpeed = 7000,
    gridHeight = 0,
    rowHeight = 120,
    mainColorLabel,
    points,
    nextColor,
    mainColorTimerId,
    mainAnimationTimerId,
    firstGrid,
    secondGrid,
    invulnerabilityTime = 2000,
    isCurrentlyInvulnerable = false;

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = vmModule.gameViewModel;
  firstGrid = page.getViewById("firstGrid");
  secondGrid = page.getViewById("secondGrid");
  mainColorLabel = page.getViewById("pointsLabel");
  screenWidth = platformModule.screen.mainScreen.widthDIPs;
  screenHeight = platformModule.screen.mainScreen.heightDIPs;
  points = 0;
  nextColor = helpers.getRandomElement(globals.colors);
  numberOfColumns = page.navigationContext.numberOfColumns;
  initializeComponents(numberOfColumns, numberOfRows);
}

function initializeComponents(numberOfColumns, numberOfRows) {
  populateGrid(firstGrid, numberOfColumns, numberOfRows);
  populateGrid(secondGrid, numberOfColumns, numberOfRows);
  gridHeight = rowHeight * numberOfRows;

  changeMainColor();
  mainColorTimerId = setInterval(changeMainColor, 10000);
  mainAnimationTimerId = setInterval(mainAnimation, gameSpeed);
}

function mainAnimation() {
  animateGrid(secondGrid);
  setTimeout(function() {
    animateGrid(firstGrid);
  }, gameSpeed / 2);
}

function changeMainColor() {
  isCurrentlyInvulnerable = true;
  setTimeout(function() {
    isCurrentlyInvulnerable = false;
  }, invulnerabilityTime);
  mainColorLabel.style.backgroundColor = nextColor;
  mainColorLabel.clickColor = nextColor;
  do {
    nextColor = helpers.getRandomElement(globals.colors);
  } while(nextColor.localeCompare(mainColorLabel.clickColor) === 0);

  mainColorLabel.style.color = nextColor;
}

function onTap(args) {
  handleGesture(args, 1);
}

function onDoubleTap(args) {
  handleGesture(args, 5);
}

function handleGesture(args, numberOfPoints) {
  if (!isCurrentlyInvulnerable && (args.object.clickColor.localeCompare(mainColorLabel.clickColor) !== 0)) {
    endGame(points);
    return;
  }

  if (!args.object.clicked) {
    points += numberOfPoints;
    vmModule.gameViewModel.setPoints(points);
    args.object.clicked = true;
    args.object.style.backgroundColor = 'White';
  }
}

function recolorGrid(grid) {
  for (var i = 0, length = grid.getChildrenCount(); i < length; i += 1) {
    var child = grid.getChildAt(i);
    var color = helpers.getRandomElement(globals.colors);
    child.style.backgroundColor = color;
    child.clicked = false;
    child.clickColor = color;
    child.text = '';
  }
}

function animateGrid(grid) {
  grid.animate({
    duration: 0,
    translate: {
      x: 0,
      y: -gridHeight
    }
  })
  .then(function() {
      return grid.animate({
      duration: gameSpeed,
      translate: {
        x: 0,
        y: gridHeight
      },
      curve: 'linear'
    });
  })
  .then(function() {
    recolorGrid(grid);
  });
}

function endGame(points) {
  clearInterval(mainAnimationTimerId);
  clearInterval(mainColorTimerId);

  var navigationEntry = {
    moduleName: "./views/end-screen-page",
    context: { points: points },
    animated: true,
  };

  topmost.navigate(navigationEntry);
}

function populateGrid(grid, numberOfColumns, numberOfRows) {
  var i;
  for (i = 0; i < numberOfColumns; i++) {
    grid.addColumn(new layout.ItemSpec(screenWidth / numberOfColumns, layout.GridUnitType.pixel));
  }

  for (i = 0; i < numberOfRows; i++) {
    grid.addRow(new layout.ItemSpec(rowHeight, layout.GridUnitType.pixel));
    for (var j = 0; j < numberOfColumns; j++) {
        var element = new labelModule.Label();
        var color = helpers.getRandomElement(globals.colors);
        element.style.backgroundColor = color;
        element.clickColor = color;
        element.clicked = false;
        element.className = 'gameBlock';
        var number = helpers.getRandomNumberInRange(1, 15);
        console.log(number);
        if (number == 2) {
          element.on('doubleTap', onDoubleTap);
          element.text = '!';
        } else {
          element.on('tap', onTap);
        }
        layout.GridLayout.setColumn(element, j);
        layout.GridLayout.setRow(element, i);
        grid.addChild(element);
    }
  }
}

exports.pageLoaded = pageLoaded;
