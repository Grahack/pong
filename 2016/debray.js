var x;
var y;
var vitesse_h;
var vitesse_v;
var canvas_h;
var canvas_v;
var ball_h;
var ball_v;
var raquette1_h;
var raquette1_v;
 vitesse_h = 3;
 vitesse_v = 3;
 canvas_h = 640;
 canvas_v = 480;
 ball_h = 40;
 ball_v = 40;
 raquette1_h = 10;
 raquette1_v = 50;


function setup() {
  createCanvas(canvas_h, canvas_v);
  background(0,0,0);
  fill(255,255,255);
  x = canvas_h/2;
  y = canvas_v/2;
}

function draw() {
	//balle
  ellipse(x, y, ball_h, ball_v);
if ((x >= canvas_h - ball_h/2) || (x <= ball_h/2)) {
  vitesse_h = -vitesse_h;
}
if ((y >= canvas_v - ball_h/2) || (y <= ball_v/2)) {
  vitesse_v = -vitesse_v;
}
  x = x + vitesse_h;
  y = y + vitesse_v;
  
	//raquette
	rect(50, mouseY, raquette1_h, raquette1_v)
}