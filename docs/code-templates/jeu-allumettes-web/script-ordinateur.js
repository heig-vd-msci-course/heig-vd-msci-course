// ============================================================
// JEU DES ALLUMETTES - SOLUTION « Aller plus loin » (contre l'ordinateur)
// ============================================================
// Même HTML et même CSS que la version à deux joueuses.
// L'ordinateur utilise la stratégie gagnante du lundi :
// laisser un multiple de 4, plus 1 allumettes.

// --- Variables ---
let allumettes = 20;

// --- Éléments de la page ---
const tas = document.querySelector("#tas");
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const retirer1 = document.querySelector("#retirer1");
const retirer2 = document.querySelector("#retirer2");
const retirer3 = document.querySelector("#retirer3");
const rejouer = document.querySelector("#rejouer");

// --- Activer ou désactiver les boutons de jeu ---
function boutonsActifs(actifs) {
  retirer1.disabled = !actifs;
  retirer2.disabled = !actifs || allumettes < 2;
  retirer3.disabled = !actifs || allumettes < 3;
}

// --- Dessiner les allumettes restantes (boucle) ---
function dessiner() {
  tas.innerHTML = "";
  for (let i = 0; i < allumettes; i++) {
    tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
  }
  compteur.textContent = allumettes;
}

// --- Le tour de l'ordinateur ---
function tourOrdinateur() {
  // Stratégie gagnante : (allumettes - 1) % 4, ou 1 si la position est perdante
  let ordiRetire = (allumettes - 1) % 4;
  if (ordiRetire === 0) {
    ordiRetire = 1;
  }

  allumettes = allumettes - ordiRetire;
  dessiner();

  if (allumettes === 0) {
    message.textContent = "L'ordinateur a pris la dernière allumette : vous avez gagné !";
  } else {
    message.textContent = "L'ordinateur a retiré " + ordiRetire + ". À vous de jouer !";
    boutonsActifs(true);
  }
}

// --- Le coup de la joueuse ---
function retirer(nombre) {
  allumettes = allumettes - nombre;
  dessiner();
  boutonsActifs(false);

  if (allumettes === 0) {
    message.textContent = "Vous avez pris la dernière allumette : perdu !";
  } else {
    message.textContent = "L'ordinateur réfléchit...";
    // Attendre 1 seconde (1000 millisecondes) avant que l'ordinateur joue
    setTimeout(tourOrdinateur, 1000);
  }
}

// --- Les boutons (événements) ---
retirer1.addEventListener("click", function () {
  retirer(1);
});

retirer2.addEventListener("click", function () {
  retirer(2);
});

retirer3.addEventListener("click", function () {
  retirer(3);
});

rejouer.addEventListener("click", function () {
  allumettes = 20;
  message.textContent = "À vous de jouer !";
  dessiner();
  boutonsActifs(true);
});

// --- Au démarrage ---
message.textContent = "À vous de jouer !";
dessiner();
boutonsActifs(true);
