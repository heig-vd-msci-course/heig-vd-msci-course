// ============================================================
// JEU DES ALLUMETTES - SOLUTION (joueuse contre joueuse)
// ============================================================
// 20 allumettes, chaque joueuse retire 1, 2 ou 3 allumettes,
// celle qui prend la dernière a perdu.

// --- Variables ---
let allumettes = 20;
let joueuse = 1;

// --- Éléments de la page ---
const tas = document.querySelector("#tas");
const compteur = document.querySelector("#compteur");
const message = document.querySelector("#message");
const retirer1 = document.querySelector("#retirer1");
const retirer2 = document.querySelector("#retirer2");
const retirer3 = document.querySelector("#retirer3");
const rejouer = document.querySelector("#rejouer");

// --- Dessiner les allumettes restantes (boucle) ---
function dessiner() {
  tas.innerHTML = "";
  for (let i = 0; i < allumettes; i++) {
    tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
  }
  compteur.textContent = allumettes;

  // On ne peut pas retirer plus d'allumettes qu'il n'en reste
  retirer2.disabled = allumettes < 2;
  retirer3.disabled = allumettes < 3;
}

// --- Un coup de la joueuse (conditions) ---
function retirer(nombre) {
  allumettes = allumettes - nombre;

  if (allumettes === 0) {
    message.textContent = "La joueuse " + joueuse + " a perdu !";
  } else {
    if (joueuse === 1) {
      joueuse = 2;
    } else {
      joueuse = 1;
    }
    message.textContent = "Au tour de la joueuse " + joueuse;
  }

  dessiner();

  // Partie terminée : plus aucun bouton ne fonctionne
  if (allumettes === 0) {
    retirer1.disabled = true;
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
  joueuse = 1;
  retirer1.disabled = false;
  message.textContent = "Au tour de la joueuse 1";
  dessiner();
});

// --- Au démarrage ---
dessiner();
