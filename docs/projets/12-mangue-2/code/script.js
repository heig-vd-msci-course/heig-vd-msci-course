let joueur = [];
let croupier = [];
let partieFinie = true;

let argent = 100;
let mise = 0;


function carteAleatoire() {
  return Math.floor(Math.random() * 10) + 1;
}


function calculerPoints(cartes) {
  let total = 0;

  for (let carte of cartes) {
    total = total + carte;
  }

  return total;
}


function afficher() {
  let texteJoueur = "";
  let texteCroupier = "";

  for (let carte of joueur) {
    texteJoueur +=
      '<span class="carte">' + carte + '</span>';
  }

  for (let i = 0; i < croupier.length; i++) {
    if (i === 1 && !partieFinie) {
      texteCroupier +=
        '<span class="carte cachee">?</span>';
    } else {
      texteCroupier +=
        '<span class="carte">' + croupier[i] + '</span>';
    }
  }

  document.getElementById("cartesJoueur").innerHTML =
    texteJoueur;

  document.getElementById("cartesCroupier").innerHTML =
    texteCroupier;

  document.getElementById("scoreJoueur").textContent =
    "Points : " + calculerPoints(joueur);

  if (partieFinie) {
    document.getElementById("scoreCroupier").textContent =
      "Points : " + calculerPoints(croupier);
  } else {
    document.getElementById("scoreCroupier").textContent =
      "Points : ?";
  }

  document.getElementById("argent").textContent =
    "Argent : " + argent + " CHF";

  document.getElementById("tirer").disabled = partieFinie;
  document.getElementById("rester").disabled = partieFinie;

  document.getElementById("rejouer").disabled = !partieFinie;

  document.getElementById("mise").disabled = !partieFinie;
}


function nouvellePartie() {

  if (!partieFinie) {
    return;
  }

  let montant = Number(
    document.getElementById("mise").value
  );

  if (
    !Number.isInteger(montant) ||
    montant <= 0 ||
    montant > argent
  ) {
    document.getElementById("message").textContent =
      "Mise invalide ou argent insuffisant !";
    return;
  }

  mise = montant;
  argent = argent - mise;

  joueur = [carteAleatoire(), carteAleatoire()];
  croupier = [carteAleatoire(), carteAleatoire()];

  partieFinie = false;

  document.getElementById("message").textContent =
    "Tu as misé " + mise + " CHF. À toi de jouer !";

  afficher();
}


function tirerCarte() {

  if (partieFinie) {
    return;
  }

  joueur.push(carteAleatoire());

  afficher();

  if (calculerPoints(joueur) > 21) {
    terminerPartie();
  }
}


function rester() {

  if (partieFinie) {
    return;
  }

  while (calculerPoints(croupier) < 17) {
    croupier.push(carteAleatoire());
  }

  terminerPartie();
}


function terminerPartie() {

  if (partieFinie) {
    return;
  }

  partieFinie = true;

  let pointsJoueur = calculerPoints(joueur);
  let pointsCroupier = calculerPoints(croupier);

  let message = "";

  if (pointsJoueur > 21) {
    message = "Tu as dépassé 21. Perdu !";

  } else if (pointsCroupier > 21) {
    argent = argent + mise * 2;
    message = "Le croupier dépasse 21. Gagné !";

  } else if (pointsJoueur > pointsCroupier) {
    argent = argent + mise * 2;
    message = "Bravo, tu as gagné !";

  } else if (pointsJoueur === pointsCroupier) {
    argent = argent + mise;
    message = "Égalité ! Mise remboursée.";

  } else {
    message = "Le croupier a gagné !";
  }

  if (argent === 0) {
    message += " Tu n'as plus d'argent !";
  }

  document.getElementById("message").textContent =
    message;


  afficher();
}


afficher();