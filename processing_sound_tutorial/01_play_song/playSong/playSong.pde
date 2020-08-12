// Processing Foundation Sound librarie
// https://processing.org/reference/libraries/sound/index.html
import processing.sound.*; 
SoundFile file;
Scrollbar bar1, bar2;

void setup() {
  size(500, 500);
  // Inputs: x, y, width, height, minVal, maxVal
  bar1 = new Scrollbar(100, 200, 300, 25, 0.1, 2.0); 
  bar2 = new Scrollbar(100, 250, 300, 25, -1.0, 1.0); 
  // Load a soundfile from the /data folder of the sketch and play it back
  file = new SoundFile(this, "Toussaint_Morrison.wav");
  file.play();
  //file.pan(-1.0); 
}

void draw() {
  background(255);
  fill(0);
  // To control rate
  float pos1 = bar1.getPos();
  file.rate(pos1);
  // To control pan
  float pos2 = bar2.getPos();
  file.pan(pos2);
  bar1.update(mouseX, mouseY);
  bar2.update(mouseX, mouseY);
  bar1.display();
  bar2.display();
}

void mousePressed() {
  bar1.press(mouseX, mouseY); 
  bar2.press(mouseX, mouseY); 
}

void mouseReleased() {
  bar1.release(); 
  bar2.release();
}
