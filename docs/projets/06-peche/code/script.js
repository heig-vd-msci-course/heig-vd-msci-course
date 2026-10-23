const cartes = document.querySelectorAll(".carte");
const boutonRecommencer = document.getElementById("recommencer");
const compteur = document.getElementById("compteur");
const chronometre = document.getElementById("chronometre");

let images = ["🍑", "🌸", "🦋", "💗",
"🍑", "🌸", "🦋", "💗"];

let premiereCarte = -1;
let bloque = false;
let partie = 0;
let coups = 0;

let secondes = 0;
let temps = null;

let trouvees = [false, false, false, false,
false, false, false, false];

function melanger() {
for (let i = 7; i > 0; i--) {
let hasard = Math.floor(Math.random() * (i + 1));

let temporaire = images[i];
images[i] = images[hasard];
images[hasard] = temporaire;
}
}

melanger();

for (let i = 0; i < 8; i++) {
cartes[i].addEventListener("click", function() {

if (bloque == true || i == premiereCarte ||
trouvees[i] == true) {
return;
}

if (temps == null) {
temps = setInterval(function() {
secondes = secondes + 1;
chronometre.textContent = "Temps : " + secondes + " secondes";
}, 1000);
}

cartes[i].textContent = images[i];

if (premiereCarte == -1) {
premiereCarte = i;
} else {
bloque = true;

coups = coups + 1;
compteur.textContent = "Nombre de coups : " + coups;

if (images[premiereCarte] == images[i]) {
trouvees[premiereCarte] = true;
trouvees[i] = true;

premiereCarte = -1;
bloque = false;

let victoire = true;

for (let j = 0; j < 8; j++) {
if (trouvees[j] == false) {
victoire = false;
}
}

if (victoire == true) {
clearInterval(temps);
temps = null;
bloque = true;
}

} else {
let partieActuelle = partie;

setTimeout(function() {
if (partieActuelle != partie) {
return;
}

cartes[premiereCarte].textContent = "";
cartes[i].textContent = "";

premiereCarte = -1;
bloque = false;
}, 1000);
}
}
});
}

boutonRecommencer.addEventListener("click", function() {
partie = partie + 1;

clearInterval(temps);
temps = null;
secondes = 0;
chronometre.textContent = "Temps : 0 seconde";

for (let i = 0; i < 8; i++) {
cartes[i].textContent = "";
trouvees[i] = false;
}

premiereCarte = -1;
bloque = false;

coups = 0;
compteur.textContent = "Nombre de coups : 0";

melanger();
});
