var x; // abscisse du centre de l’ellipse
var y; // ordonnée

function setup() {
  createCanvas(640, 480);
  background(0,0,255);
  fill(255,0,0);
  x = 320;
  y = 240;
}

function draw() {
  ellipse(x, y, 40, 40);
  x = x + 3;
  y = y - 3;
}