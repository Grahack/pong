  var y;
  var x;
  var longueur;
  var largeur;
function setup() {
  longueur = 640;
  largeur = 480;
  createCanvas(longueur, largeur);
  background(0,0,0);
  fill(255,255,255);
  x=320;
  y=240;
  vitesse_h = 3;
  vitesse_v = -3;

}

function draw() {
  background(0,0,0);
  ellipse(x, y, 40, 40);
  if (x >= longueur) {
      vitesse_h = -3;
  }
  if (y >= largeur) {
      vitesse_v = -20;
  }
  if (x <= longueur) {
      vitesse_h = 20;
  }
  if (y <= largeur) {
      vitesse_v = 3;
  }
  x = x + vitesse_h;
  y = y + vitesse_v;
  rect(5, mouseY, 10, 50);
}
