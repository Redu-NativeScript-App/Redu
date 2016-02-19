'use strict';

let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  score: { type: Number, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true }
});

mongoose.model('Highscore', schema);
