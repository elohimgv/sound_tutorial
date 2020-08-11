// Original code by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// With slightly differences by Elohim Guevara

// Global variable
let mic;

function setup() {
    createCanvas(220, 200);
    mic = new p5.AudioIn(error);
    mic.start();
}

function draw() {
    background(0);
    let vol = mic.getLevel();
    ellipse(100, 100, vol, vol);
}

function error() {
    console.log("Is an error accessing the AudioIn");
}