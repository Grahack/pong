var hauteur;
var largeur;
var vitesse_h;
var vitesse_l;
var largecran = 640;
var hautecran = 480;
var w = 15;

function setup () {
createCanvas (hautecran, largecran);
background (240,240,240);
vitesse = 3;
vitesse_h = vitesse;
vitesse_l = vitesse;
hauteur = 50;
largeur = 50;

}

function draw () {
fill (255, 255, 255)

background (240,240,240);
rect(w, z, 25, 25)
fill(random(255), random(255), random(255));
ellipse (hauteur, largeur, 30, 30);
if (largeur >= largecran) {
	vitesse_h = - vitesse;
	}
if (hauteur >= hautecran) {
	vitesse_l = - vitesse;
	}
if (largeur <= largecran - largecran) {
	vitesse_h = vitesse;
	}
if (hauteur <= hautecran - hautecran) {
	vitesse_l = vitesse;
	}
largeur = largeur + vitesse_h;
hauteur = hauteur + vitesse_l;


console.log(hauteur);
}

