var y;
var x;
var vitesse_v;
var vitesse_h;

function setup()
{
createCanvas(1000,650);
background(348,100,80);
fill(31,100,85);
x=320;
y=240;
vitesse_v=-4;
vitesse_h=4;
}

function draw()
{
ellipse(X,Y,50,50);
x=x+4;
y=y-4;
y=y+vitesse_v;
x=x+vitesse_h;
}