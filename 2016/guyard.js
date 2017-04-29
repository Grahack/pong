var x;
var y;
var vitesse_h;
var vitesse_v;

function setup() {
  createCanvas(640, 480);

  fill(255,0,200);
  x =320;
  y = 240;
  vitesse_h = 10;
  vitesse_v = -10;
}

function draw() {
	background(000,200,105);
  ellipse(x, y, 40, 40);
  if (x >= 640) {
      vitesse_h = -10;
  }
  if (y >= 480) {
      vitesse_v = -10;
  }
  if (x <= 0) {
      vitesse_h = 10;
  }
  if (y <= 0) {
      vitesse_v = 10;
  }
  x = x + vitesse_h;
  y = y + vitesse_v;
  
  
 
}