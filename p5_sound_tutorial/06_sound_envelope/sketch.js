// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

// Global variables
let osc;
let button;
let playing = false;

let env;

function setup() {
    createCanvas(100, 100);

    env = new p5.Env();
    env.setADSR(0.05, 0.1, 0.5, 1);
    env.setRange(1.2, 0);

    osc = new p5.Oscillator('triangle');
    osc.start();
    osc.freq(550);
    osc.amp(env);

    button = createButton('play');
    button.mousePressed(triggerEvent);
}

function draw() {
    if (playing) {
        background(255, 0, 255);
    } else {
        background(51);
    }
}

function triggerEvent() {
    if (!playing) {
        env.play();
        playing = true;
    } else {
        playing = false;
    }
}