var sound = require("nativescript-sound");

exports.sounds = {
  playSound: function(name) {
      sounds = {
      	"Click": sound.create("~/sounds/gun-click.mp3")      
      };

  	sounds[name].play();
  }
};
