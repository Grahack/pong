// Pong

var XCanvas; // largeur du cadre d'affichage
var YCanvas; // longueur du cadre d'affichage
var x; // abscisse
var y; // ordonnée
var vitesse_h; // vitesse horizontal
var vitesse_v; // vitesse verticale
var diametre; // diametre du cercle
var largeurRaquette; // largeur de la raquette
var longueurRaquette; // longueur de la raquette
var positionRaquetteSouris; // position de la raquette en fonction de son centre
var positionRaquetteBordur; // position d ela raquette en fonction de la bordur
var augmentationVitesse; // augmentation de la vitesse si hit raquette
var score1; // score j1
var score2; // score j2
var lose; // teste si perdu

function setup() {
	XCanvas = 640;
	YCanvas = 480;
	x = 320;
	y = 240;
	vitesse_h = 5;
	vitesse_v = 5;
	diametre = 20;
	largeurRaquette = 10;
	longueurRaquette = 60;
	positionRaquetteBordur = 40;
	augmentationVitesse = 0;
	score1 = 0;
	score2 = 0;
	lose = false;
	createCanvas(XCanvas, YCanvas);
	background(0);
	fill(0);
	if (random() <= 0.5)
	{
		vitesse_h = -vitesse_h;
	}
	if (random() <= 0.5)
	{
		vitesse_v = -vitesse_v;
	}
}

function draw() {
	background(0,255,255);
		// Test lose
		if((x > XCanvas-diametre/2) || (x < diametre/2))
		{
			
		}
		// Collision mur
		if((y > YCanvas-diametre/2) || (y < diametre/2))
		{
			vitesse_h = -vitesse_h;
		}
		
		positionRaquetteSouris = mouseY;
		if(mouseY < longueurRaquette/2)
		{
			positionRaquetteSouris = longueurRaquette/2;
		}
		if(mouseY > YCanvas-longueurRaquette/2)
		{
			positionRaquetteSouris = YCanvas-longueurRaquette/2;
		}
		
		// Joueur 1
		rect(positionRaquetteBordur, positionRaquetteSouris, largeurRaquette, -longueurRaquette/2);
		rect(positionRaquetteBordur, positionRaquetteSouris, largeurRaquette, longueurRaquette/2);
		if((x < positionRaquetteBordur+largeurRaquette+diametre/2) && ((y > positionRaquetteSouris-longueurRaquette/2) && (y < positionRaquetteSouris+longueurRaquette/2)))
		{
			vitesse_v = -vitesse_v;
			if(vitesse_v>0)
			{
				vitesse_v = vitesse_v+augmentationVitesse;
			}
			else
			{
				vitesse_v = vitesse_v-augmentationVitesse;
			}
		}
		
		// Joueur 2
		rect(XCanvas-positionRaquetteBordur-largeurRaquette, positionRaquetteSouris, largeurRaquette, -longueurRaquette/2);
		rect(XCanvas-positionRaquetteBordur-largeurRaquette, positionRaquetteSouris, largeurRaquette, longueurRaquette/2);
		if((x > XCanvas-positionRaquetteBordur-largeurRaquette-diametre/2) && ((y > positionRaquetteSouris-longueurRaquette/2) && (y < positionRaquetteSouris+longueurRaquette/2)))
		{
			vitesse_v = -vitesse_v;
			if(vitesse_v>0)
			{
				vitesse_v = vitesse_v+augmentationVitesse;
			}
			else
			{
				vitesse_v = vitesse_v-augmentationVitesse;
			}
		}
		
		x = x + vitesse_v;
		y = y + vitesse_h;
		ellipse(x, y, diametre, diametre);
}