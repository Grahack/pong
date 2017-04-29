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
var score1;
vitesse_h = 3;
vitesse_v = 3;
canvas_h = 640;
canvas_v = 480;
ball_h = 20;
ball_v = 20;
raquette1_h = 10;
raquette1_v = 50;
raquette1_ecart = 60;
score1 = 0;


function setup() {
  frameRate(60);
  createCanvas(canvas_h, canvas_v);
  background(0,0,0);
  fill(255,255,255);
  x = canvas_h/2;
  y = canvas_v/2;
}

function draw() {
	clear();
	background(0,0,0);
	//balle
  ellipse(x, y, ball_h, ball_v);
if ((x >= canvas_h - ball_h/2) || (x <= ball_h/2)){
  vitesse_h = -vitesse_h;
}
if ((y >= canvas_v - ball_v/2) || (y <= ball_v/2)) {
  vitesse_v = -vitesse_v;
}
if (((y + ball_v/2 >= mouseY - raquette1_h/2) && (y - ball_v/2 <= mouseY + raquette1_h/2) && (x + ball_h/2 >= raquette1_ecart) && (x - ball_h/2 <= raquette1_ecart + raquette1_h))){
  vitesse_h = -vitesse_h;
  score1 = score1 + 1;
  vitesse_h = vitesse_h + 0.5;
  vitesse_v = vitesse_v + 0.5;
}
if (x <= raquette1_ecart + raquette1_h - 2){
  document.write("GAME OVER \nPress F5 to restart \nYou scored : " + score1);
  x = canvas_h/2;
  y = canvas_v/2;
  vitesse_h = 0;
  vitesse_v = 0;
}
  x = x + vitesse_h;
  y = y + vitesse_v;


	//raquette
	rect(raquette1_ecart, mouseY - raquette1_v / 2, raquette1_h, raquette1_v);
}