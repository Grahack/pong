var x; // abscisse du centre de l’ellipse
var y; // ordonnée
var hauteurmax;
var longeurmax;
var vitessey;
var vitessex;

function setup () {
hauteurmax = 800;
longeurmax = 800;
createCanvas (hauteurmax, longeurmax);
background (0,0,180);
fill (200,192,0);
 x = 320;
  y = 240;
  vitessey = 3;
  vitessex = 10;
}

function draw () {
background (0,0,180);
rect(longeurmax - 50, mouseY, 10, 60);
ellipse (x, y, 30, 30);
if (y >= hauteurmax ){
	vitessey = -3;
}
if (y <= 0){
	vitessey = 3;
}
if (x <= 0){
	vitessex = 10;
}
if ( y = (longeurmax - 50)){
	if (x >= longeurmax || x >= mouseY){
	vitessex = -3;
}
}
x = x + vitessex;
y = y + vitessey;
}

