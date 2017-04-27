// Pong

var XCanvas;
var YCanvas;
var x; // abscisse
var y; // ordonnée
var vitesse_h; // vitesse horizontal
var vitesse_v; // vitesse verticale
var diametre; // diametre du cercle

function setup() {
	XCanvas = 640;
	YCanvas = 480;
	x = 320;
	y = 240;
	vitesse_h = 3;
	vitesse_v = 3;
	diametre = 30
	createCanvas(XCanvas, YCanvas);
	background(0,0,255);
	fill(255,0,0);
}

function draw() {
	background(0,0,255);
	ellipse(x, y, diametre, diametre);
	if((x > XCanvas-diametre/2) || (x < diametre/2))
	{
		vitesse_h = -vitesse_h;
	}
	if((y > YCanvas-diametre/2) || (y < diametre/2))
	{
		vitesse_v = -vitesse_v;
	}
	x = x + vitesse_h;
	y = y + vitesse_v;
	console.log(x);
}