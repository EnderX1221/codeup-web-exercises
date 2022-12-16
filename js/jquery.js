"use strict";
$(document).keyup(function(event){
    console.log(event.keyCode);
});
var allowedKeys = {
    // a key map of allowed keys
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'enter'
};
// the Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;
document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey) {
        konamiCodePosition++;

        // a variable to remember the 'position' the user has reached so far.
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});