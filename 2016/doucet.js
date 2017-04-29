var x;
var y;
var R;
var a;
var boty;


var vitesse_x;
var vitesse_y;

function setup() {
  createCanvas(640, 480);
  background(0,0,0);
  fill(255,255,255);
  x = 320;
  y = 240;
  vitesse_x = 5;
  vitesse_y = -5;
  R = 5;
  a = 20;
  
 
}

function draw() {
	
 
	
  
  background(0,0,0);
  rect(315,0,10,640)
  rect(R, mouseY , 10,60);
  ellipse(x, y, 30, 30);
  if (x >= 630) {
      vitesse_x = 0;
  }
  if (y >= 480) {
      vitesse_y = -5;
  }
  if (x <= R) {
      vitesse_x = 0;
	  vitesse_y = 0;
	 
	  
  }
  if (y <= 0) {
      vitesse_y = 5;
  }
  if ( x<=30 && y<=mouseY+60 && y>=mouseY) {
	  
  vitesse_x = 5 
  
  }
  if ( x>=630 && y<=boty+60 && y>=boty) {
	  
  vitesse_x = -5;
  
  }
 
  boty=y-30;
  rect(630,boty,10,60)
  x = x + vitesse_x;
  y = y + vitesse_y;

  }





