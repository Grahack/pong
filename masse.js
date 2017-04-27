var x;
var y;
var vitesse_h;
var vitesse_v;

function setup() {
	createCanvas(1264, 900);
	background(0,0,255);
	fill(255,0,0);
	x = 632;
    y = 450;
	vitesse_h = 25;
    vitesse_v = -25;
	}
	
function draw() {
	background(0)
	ellipse (x, y, 100, 100);
	  if (x >= 1264) {
      vitesse_h = -25;
  }
  if (y >= 900) {
      vitesse_v = -25;
  }
  if (x <= 0) {
      vitesse_h = 25;
  }
  if (y <= 0) {
      vitesse_v = 25;
  }
  x = x + vitesse_h;
  y = y + vitesse_v;
	}