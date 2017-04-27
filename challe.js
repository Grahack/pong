var x;
var y;
var vitesse_h;
var vitesse_v;

function setup() {
  createCanvas(640, 480);
  background(0,0,255);
  fill(255,0,0);
  x = 20;
  y = 460;
  vitesse_h = 3;
  vitesse_v = -3; 
  if ((x >= 620) || (x <= 20)) {
  vitesse_h = -vitesse_h;
}
}

function draw() {
  ellipse(x, y, 40, 40);
  if (x >= 640) {
      vitesse_h = -3;
  }
  if (y >= 480) {
      vitesse_v = -3;
  }
  if (x <= 0) {
      vitesse_h = 3;
  }
  if (y <= 0) {
      vitesse_v = 3;
  }
  x = x + vitesse_h;
  y = y + vitesse_v;

}
