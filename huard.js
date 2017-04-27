var x;
var y;
var vitesse_h;
var vitesse_v;

function setup() {
  createCanvas(640, 480);
  background(0,0,0);
  fill(255,255,255);
  x = 20;
  y = 460;
  vitesse_h = 3;
  vitesse_v = -3; 
  

}

function draw() {
  ellipse(x, y, 40, 40);
    x = x + vitesse_h;
	y = y + vitesse_v;
		
    if (x >= 640) {
      vitesse_h = -3;
	  fill(255,255,0);
  }
  
  if (y >= 480) {
      vitesse_v = -3;
	  fill(0,255,0);
  }
    if (x <= 0) {
      vitesse_h = 3;
	  fill(255,0,0)
  }
  if (y <= 0) {
      vitesse_v = 3;
  }
  x = x + vitesse_h;
  y = y + vitesse_v;


}
