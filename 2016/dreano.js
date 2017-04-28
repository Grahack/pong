// Pong

var x;
var y;
var vitesse_h;
var vitesse_v;
var longueur;
var largeur;

function setup() {
largeur =768;
longueur = 1024;
  createCanvas(longueur, largeur);
  background(0,0,0);
  fill(255,255,255);
  x = 20;
  y = 460;
  vitesse_h = 8;
  vitesse_v = -8;
}

function draw() {
background(0,0,0);

  ellipse(x, y, 40, 40);
  if (x >= longueur) {
      vitesse_h = -8;
  }
  if (y >= largeur) {
      vitesse_v = -8;
  }
  if (x <= 0) {
      vitesse_h = 8;
  }
  if (y <= 0) {
      vitesse_v = 8;
  }
  if (x<=50&& y<=mouseY+50 && y >= mouseY){
 vitesse_v = vitesse_v *-1;
 vitesse_h = vitesse_h *-1;

 }
  x = x + vitesse_h;
  y = y + vitesse_v;
  rect(20, mouseY, 10, 50)
  
 
 
}