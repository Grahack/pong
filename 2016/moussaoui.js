var vitesseX;
var vitesseY;
var largeur;
var hauteur;
var screenX;
var screenY;
function setup () {
vitesseX = 7;
vitesseY = 7;
largeur = 50;
hauteur = 10;
screenX = 1080;
screenY = 720;
createCanvas(screenX, screenY);
background (187,219,232);
fill(random(255),random(255),random(255));
}

function draw () {
background (187,219,232);
rect(100, mouseY, 10, 70);
largeur = largeur + vitesseX;
hauteur = hauteur + vitesseY;
if (largeur > screenX -1) {vitesseX = -7;}
if (largeur < 1) {vitesseX = 7;}
if (hauteur > screenY -1) {vitesseY = -7;}
if (hauteur < 1) {vitesseY = 7;}
ellipse(largeur, hauteur, 12, 12);
rect(100, mouseY, 10, 70);
}

