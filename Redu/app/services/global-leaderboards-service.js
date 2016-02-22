var fetch = require('fetch').fetch;
var baseUrl = "https://calm-ravine-43473.herokuapp.com";

function getAllHighscores() {
  var url = baseUrl + '/api/highscores';
  return fetch(url)
    .then(function(response) {
      return new Promise(function(resolve, reject) {
        console.log('here');
        resolve(response.json());
      });
    })
    .then(function(json) {
      return json.result;
    });
}

function addNewHighscore(highscore) {
  var url = baseUrl + '/api/highscores';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(highscore)
  })
  .then(function(response) {
    return new Promise(function(resolve, reject) {
      resolve(response.json());
    });
  })
  .then(function(json) {
    return json.result;
  });
}

module.exports = {
  getAllHighscores: getAllHighscores,
  addNewHighscore: addNewHighscore
};
