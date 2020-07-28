// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

// Global variables
let song;
let button;
let amp;

function preload() {
    song = loadSound('data/Toussaint_Morrison.mp3');
}

function setup() {
    createCanvas(300, 300);
    amp = new p5.Amplitude(); // Object amplitude
    button = createButton('play');
    button.mousePressed(triggerPlaying);
}

function draw() {
    let vol = amp.getLevel();
    let diam = map(vol, 0, 0.3, 10, 200);
    background(diam);
    fill(200, 0, 200);
    ellipse(width/2, height/2, diam, diam);
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