var fs = require("file-system");

var scoresFileName = 'Redu-Local-Scores-File3.txt';
var documents = fs.knownFolders.documents();
var file = documents.getFile(scoresFileName);

function getAllLocalScores() {
  return new Promise(function(resolve, reject) {
    file.readText()
    .then(function(text) {
      var scores = text.split(',');
      scores.sort(function(a, b) {
        return b - a;
      });
      resolve(scores);
    });
  });
}

function addNewLocalScore(score) {
  return new Promise(function(resolve, reject) {
    file.readText()
    .then(function(text) {
      if (text.split(',').indexOf("" + score) > -1) {
        reject();
        return;
      }

      var newValue = '';
      if (text) {
        newValue = ',';
      }
      newValue += score;
      file.writeText(text + newValue)
      .then(function() {
        return new Promise(function(resolve, reject) {
          resolve(score);
        });
      });
    });
  });
}

module.exports = {
  getAllLocalScores: getAllLocalScores,
  addNewLocalScore: addNewLocalScore
};
