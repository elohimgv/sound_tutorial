// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

let osc;

let button;
let slider;
let playing = false;

function setup() {
    createCanvas(100, 100);
    osc = new p5.Oscillator('square');
    slider = createSlider(100, 1200, 440);

    //osc.setType('square');
    osc.start();
    osc.freq(440);
    osc.amp(0);

    button = createButton('play/pause');
    button.mousePressed(triggerEvent);
}

function draw() {
    osc.freq(slider.value());
    if (playing) {
        background(255, 0, slider.value());
    } else {
        background(51);
    }
}

function triggerEvent() {
    if (!playing) {
        osc.amp(0.5, 1);
        playing = true;
    } else {
        osc.amp(0, 1);
        playing = false;
    }
}