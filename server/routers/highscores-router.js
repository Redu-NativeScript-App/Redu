'use strict';

let express = require('express'),
  router = express.Router(),
  passport = require('passport');

let controller = require('./../controllers/highscores-controller');

router.get('/', controller.all)
      .post('/', controller.add);

module.exports = function(app) {
  app.use('/api/highscores', router);
};
