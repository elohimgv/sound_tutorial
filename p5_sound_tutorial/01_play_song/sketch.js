// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

// Global variables
let song;
let sliderRate;
let sliderPan;
let xoff = 0.0;

function setup() {
    createCanvas(200, 200); 
    // loadSound returns a nes P5.SoundFile from a specific path
    song = loadSound('data/Toussaint_Morrison.mp3');
    song.setVolume(0.5);
    sliderRate = createSlider(0, 1.5, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
}

function draw() {
    xoff = xoff + 0.01;
    let n = noise(xoff) * width;
    background(n);
    song.pan(sliderPan.value());
    song.rate(sliderRate.value());
}

function mousePressed() {
    song.play();
}


