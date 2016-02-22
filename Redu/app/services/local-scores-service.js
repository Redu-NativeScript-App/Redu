var fs = require("file-system");

var scoresFileName = 'Redu-Local-Scores-File.txt';

function getAllLocalScores() {
  var documents = fs.knownFolders.documents();
  var file = documents.getFile(scoresFileName);
  console.log(1);
  return new Promise(function(resolve, reject) {
  console.log(1);
    file.writeText("1\n,2\n\n\n, 3, 4, 5, \n ,6 42 f\nfa")
    .then(function() {
    console.log(1);
      myFile.readText()
      .then(function(fileContent) {
        console.log('asd: ' + fileContent);
      });
    });
  });
}

function addNewLocalScore(score) {
}

module.exports = {
  getAllLocalScores: getAllLocalScores,
  addNewLocalScore: addNewLocalScore
};
