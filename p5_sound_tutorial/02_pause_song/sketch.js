// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

// Global variables
let song;
let button;

// Ensure that a sound is completely loaded
// before setup() is called
function preload() {
    song = loadSound('data/Toussaint_Morrison.mp3');
}

function setup() {
    createCanvas(200, 200);
    button = createButton('play');
    button.mousePressed(triggerPlaying);
    background(51);
}


function triggerPlaying() {
    if (!song.isPlaying()) {
        song.play();
        song.setVolume(0.3);
        button.html('pause');
    } else {
        song.stop();
        button.html('play');
    }
}


