var x; // abscisse du centre de l’ellipse
var y; // ordonnée
var vitesse_h;
var vitesse_v;

function setup() {
	createCanvas(570, 500);
	background(240, 195, 0);
	fill(0, 204, 203);
	x = 320;
	y = 240;
	vitesse_h = 3;
    vitesse_v = -3;
}

function draw() {
	ellipse(x, y, 20, 20);
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