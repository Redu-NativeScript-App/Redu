'use strict';

var everlive = require("../../node_modules/src/Everlive.js")('hmuukwji3f65rk8j');

function login(username, password) {
  everlive.authentication.login(username, password)
          .then(function (data) {
            console.log('Logged in.');
          },
          function(error) {
              alert(JSON.stringify(error));
          });

}

function register(username, password) {
  everlive.authentication.register(username, password)
      .then(function (data) {
            console.log('Registered successfully.');
      }),
      function(error) {
        alert(JSON.stringify(error));
      });
}

module.exports = {
  all,
  byId
};