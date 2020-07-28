// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

// Global variables 
let song;
let button;
let jumpButton;

function preload() {
    song = loadSound('data/Toussaint_Morrison.mp3');
}

function setup() {
    createCanvas(200, 200);
    button = createButton('play');
    button.mousePressed(triggerPlaying);
    jumpButton = createButton('jump');
    jumpButton.mousePressed(jumpSong);
    background(51);

    // Cues 
    //song.addCue(2, changeBackground, color(0, 0, 255));
    //song.addCue(4, changeBackground, color(0, 255, 255));
    //song.addCue(6, changeBackground, color(255, 255, 255));
}

function changeBackground(col) {
    background(col);
}

function jumpSong() {
    let len = song.duration();
    let t = 0; 
    //let t = random(len);
    console.log(t);
    song.jump(t);
}

function draw() {
    if (song.currentTime() > 5) {
        background(song.currentTime() * 10, 0, 255);
    }
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