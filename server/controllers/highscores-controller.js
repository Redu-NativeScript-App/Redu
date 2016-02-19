'use strict';

let mongoose = require('mongoose'),
  Highscore = mongoose.model('Highscore');

var controller = {
  all: function(req, res) {
    let filter = {};

    Highscore.find(filter, function(err, highscores) {
      if (err) {
        throw err;
      }

      res.json({
        result: highscores
      });
    });
  },
  add: function(req, res, next) {
    let highscore = req.body;
    // highscore.type = highscore.type || 'uncategorized';
    // let user = req.user;
    // highscore.date = new Date();
    // highscore.user = user._id;
    

    var dbHighscore = new Highscore(highscore);
    dbHighscore.save(function(err) {
      if (err) {
        next(err);
        return;
      }

      res.status(201)
        .json({
          result: dbHighscore
        });
    });
  }
};

module.exports = controller;
