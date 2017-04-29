var x;
var y;
var R;
var vitesse_h;
var vitesse_v;

function setup() {
  createCanvas(640, 480);
  background(0,0,255);
  fill(255,0,0);
  x = 320;
  y = 240;
  vitesse_h = 5;
  vitesse_v = -5;
  R = 5
 
}

function draw() {
background(0,0,255);
  ellipse(x, y, 40, 40);
  if (x >= 640) {
      vitesse_h = -5;
  }
  if (y >= 480) {
      vitesse_v = -5;
  }
  if (x <= R) {
      vitesse_h = 0;
  }
  if (y <= 0) {
      vitesse_v = 5;
  }
  x = x + vitesse_h;
  y = y + vitesse_v;

rect(R, mouseY , 10,60)

if (x == R+40 && y <= mouseY+30 && y >= mouseY-30) {
vitesse_h = 5 
}


}
