function afficherListe(meteo, destination) {
    let affaires;

    if (meteo === "beau") {
        affaires = [
            ["Lunettes de soleil", "🕶️"],
            ["T-shirt", "👕"],
            ["Short", "🩳"],
            ["Crème solaire", "🧴"],
            ["Bouteille d'eau", "💧"],
            ["Chaussures confortables", "👟"],
            ["Casquette", "🧢"]
        ];
    } else {
        affaires = [
            ["Parapluie", "☂️"],
            ["Veste imperméable", "🧥"],
            ["Pantalon", "👖"],
            ["Pull chaud", "🧶"],
            ["Chaussures fermées", "👟"],
            ["Écharpe", "🧣"],
            ["Chaussettes", "🧦"]
        ];
    }

    const noms = {
        paris: "Paris",
        naples: "Naples",
        bruxelles: "Bruxelles"
    };

    const suffixes = {
        paris: "",
        naples: "-naples",
        bruxelles: "-bruxelles"
    };

    const suffixe = suffixes[destination];
    const message = document.getElementById("message" + suffixe);
    const liste = document.getElementById("liste" + suffixe);

    if (meteo === "beau") {
        message.textContent =
            "☀️ Beau temps à " + noms[destination] +
            " ! Voici les affaires à emporter.";
    } else {
        message.textContent =
            "🌧️ Temps pluvieux à " + noms[destination] +
            " ! Voici les affaires à emporter.";
    }

    liste.innerHTML = "";

    affaires.forEach(function(item) {
        liste.innerHTML += `
            <div class="affaire">
                <h2>${item[1]}</h2>
                <h3>${item[0]}</h3>
            </div>
        `;
    });
}


document.getElementById("beau").addEventListener("click", function() {
    afficherListe("beau", "paris");
});

document.getElementById("moche").addEventListener("click", function() {
    afficherListe("moche", "paris");
});



document.getElementById("beau-naples").addEventListener("click", function() {
    afficherListe("beau", "naples");
});

document.getElementById("moche-naples").addEventListener("click", function() {
    afficherListe("moche", "naples");
});


document.getElementById("beau-bruxelles").addEventListener("click", function() {
    afficherListe("beau", "bruxelles");
});

document.getElementById("moche-bruxelles").addEventListener("click", function() {
    afficherListe("moche", "bruxelles");
});


function afficherDestination(id) {
    document.getElementById("accueil").hidden = true;
    document.getElementById("paris").hidden = true;
    document.getElementById("naples").hidden = true;
    document.getElementById("bruxelles").hidden = true;

    document.getElementById(id).hidden = false;

    window.scrollTo(0, 0);
}



document.getElementById("destinations").addEventListener("click", function() {
    afficherDestination("paris");
});



document.getElementById("vers-naples").addEventListener("click", function() {
    afficherDestination("naples");
});

document.getElementById("vers-bruxelles").addEventListener("click", function() {
    afficherDestination("bruxelles");
});

document.getElementById("retour-accueil").addEventListener("click", function() {
    afficherDestination("accueil");
});


document.getElementById("retour-paris").addEventListener("click", function() {
    afficherDestination("paris");
});

document.getElementById("vers-bruxelles-naples").addEventListener("click", function() {
    afficherDestination("bruxelles");
});

document.getElementById("retour-accueil-naples").addEventListener("click", function() {
    afficherDestination("accueil");
});



document.getElementById("retour-paris-bruxelles").addEventListener("click", function() {
    afficherDestination("paris");
});

document.getElementById("retour-naples-bruxelles").addEventListener("click", function() {
    afficherDestination("naples");
});

document.getElementById("retour-accueil-bruxelles").addEventListener("click", function() {
    afficherDestination("accueil");
});



document.getElementById("bouton-surprise").addEventListener("click", function() {
    const destinations = [
        "🇫🇷 Paris ! Prépare-toi à découvrir la tour Eiffel !",
        "🇮🇹 Naples ! À toi les pizzas et les jolies ruelles !",
        "🇧🇪 Bruxelles ! À toi les gaufres et les belles places !"
    ];

    const hasard = Math.floor(Math.random() * destinations.length);

    document.getElementById("resultat-surprise").textContent =
        "Ta destination est : " + destinations[hasard];
});


document.getElementById("bouton-surprise-bruxelles").addEventListener("click", function() {
    const destinations = [
        "🇫🇷 Paris ! Prépare-toi à découvrir la tour Eiffel !",
        "🇮🇹 Naples ! À toi les pizzas et les jolies ruelles !",
        "🇧🇪 Bruxelles ! À toi les gaufres et les belles places !"
    ];

    const hasard = Math.floor(Math.random() * destinations.length);

    document.getElementById("resultat-surprise-bruxelles").textContent =
        "Ta destination est : " + destinations[hasard];
});


/* ===================================
QUIZ INTERACTIF : PARIS, NAPLES,
ET BRUXELLES
=================================== */
const questionsQuiz = [
{
ville: "🇫🇷 Paris",
question: "Quel monument est le plus célèbre de Paris ?",
reponses: [
"La tour Eiffel",
"L'Atomium",
"Le Vésuve",
"Le Colisée"
],
correcte: 0,
explication: "La tour Eiffel est l'un des symboles les plus connus de Paris !"
},
{
ville: "🇮🇹 Naples",
question: "Quelle spécialité culinaire est célèbre à Naples ?",
reponses: [
"Les gaufres",
"La pizza napolitaine",
"Les crêpes bretonnes",
"Le fish and chips"
],
correcte: 1,
explication: "Naples est réputée pour sa délicieuse pizza napolitaine !"
},
{
ville: "🇧🇪 Bruxelles",
question: "Quel monument emblématique peut-on visiter à Bruxelles ?",
reponses: [
"La tour de Pise",
"La tour Eiffel",
"L'Atomium",
"Le Vésuve"
],
correcte: 2,
explication: "L'Atomium est l'un des monuments emblématiques de Bruxelles !"
},
{
ville: "🇫🇷 Paris",
question: "Dans quel musée peut-on admirer la Joconde ?",
reponses: [
"Le musée du Louvre",
"Le musée d'Orsay",
"Le musée des sciences",
"Le musée Magritte"
],
correcte: 0,
explication: "La Joconde est exposée au musée du Louvre, à Paris !"
},
{
ville: "🇮🇹 Naples",
question: "Quel volcan célèbre se trouve près de Naples ?",
reponses: [
"L'Etna uniquement",
"Le Vésuve",
"Le mont Blanc",
"Le Stromboli"
],
correcte: 1,
explication: "Le Vésuve domine la baie de Naples et se trouve près de Pompéi."
},
{
ville: "🇧🇪 Bruxelles",
question: "Comment s'appelle la célèbre petite statue de Bruxelles ?",
reponses: [
"Le Petit Prince",
"Le Penseur",
"Manneken-Pis",
"Le Petit Nicolas"
],
correcte: 2,
explication: "Manneken-Pis est une petite statue très connue de Bruxelles !"
},
{
ville: "🇫🇷 Paris",
question: "Quel fleuve traverse Paris ?",
reponses: [
"Le Rhône",
"La Seine",
"La Loire",
"Le Rhin"
],
correcte: 1,
explication: "La Seine traverse Paris et permet de jolies balades en bateau."
},
{
ville: "🇮🇹 Naples",
question: "Quel site historique peut-on visiter près de Naples ?",
reponses: [
"Pompéi",
"Stonehenge",
"Le château de Versailles",
"L'Acropole d'Athènes"
],
correcte: 0,
explication: "Pompéi est une ancienne ville romaine ensevelie lors de l'éruption du Vésuve."
},
{
ville: "🇧🇪 Bruxelles",
question: "Quelle gourmandise est particulièrement célèbre en Belgique ?",
reponses: [
"Les macarons uniquement",
"Les churros",
"Les gaufres belges",
"Les cannoli"
],
correcte: 2,
explication: "Les gaufres belges sont incontournables lors d'une visite à Bruxelles !"
}
];
/* ÉLÉMENTS DU QUIZ */
const quizDebut = document.getElementById("quiz-debut");
const quizJeu = document.getElementById("quiz-jeu");
const quizFin = document.getElementById("quiz-fin");
const quizProgression = document.getElementById("quiz-progression");
const quizQuestion = document.getElementById("quiz-question");
const quizReponses = document.getElementById("quiz-reponses");
const quizFeedback = document.getElementById("quiz-feedback");
const quizSuivant = document.getElementById("quiz-suivant");
let numeroQuestion = 0;
let scoreQuiz = 0;
let reponseDonnee = false;
/* MÉLANGER LES QUESTIONS */
function melangerQuestions(tableau) {
const resultat = [...tableau];
for (let i = resultat.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[resultat[i], resultat[j]] =
[resultat[j], resultat[i]];
}
return resultat;
}
let questionsMelangees = [];
/* DÉMARRER LE QUIZ */
document.getElementById("commencer-quiz")
.addEventListener("click", function() {
numeroQuestion = 0;
scoreQuiz = 0;
reponseDonnee = false;
questionsMelangees = melangerQuestions(questionsQuiz);
quizDebut.hidden = true;
quizFin.hidden = true;
quizJeu.hidden = false;
afficherQuestionQuiz();
});
/* AFFICHER UNE QUESTION */
function afficherQuestionQuiz() {
const question = questionsMelangees[numeroQuestion];
reponseDonnee = false;
quizProgression.textContent =
question.ville + " — Question " +
(numeroQuestion + 1) + " sur " +
questionsMelangees.length;
quizQuestion.textContent = question.question;
quizFeedback.textContent = "";
quizSuivant.hidden = true;
quizSuivant.textContent =
numeroQuestion === questionsMelangees.length - 1
? "Voir mon résultat 🏆"
: "Question suivante ➜";
quizReponses.replaceChildren();
question.reponses.forEach(function(reponse, index) {
const bouton = document.createElement("button");
bouton.textContent = reponse;
bouton.type = "button";
bouton.addEventListener("click", function() {
verifierReponseQuiz(index);
});
quizReponses.appendChild(bouton);
});
}
/* VÉRIFIER LA RÉPONSE */
function verifierReponseQuiz(index) {
if (reponseDonnee) return;
reponseDonnee = true;
const question = questionsMelangees[numeroQuestion];
const boutons = quizReponses.querySelectorAll("button");
boutons.forEach(function(bouton, i) {
bouton.disabled = true;
if (i === question.correcte) {
bouton.classList.add("bonne-reponse");
}
});
if (index === question.correcte) {
scoreQuiz++;
quizFeedback.textContent =
"✅ Bravo ! Bonne réponse. " + question.explication;
} else {
boutons[index].classList.add("mauvaise-reponse");
quizFeedback.textContent =
"❌ Pas tout à fait ! " + question.explication;
}
quizSuivant.hidden = false;
}
/* PASSER À LA QUESTION SUIVANTE */
quizSuivant.addEventListener("click", function() {
if (!reponseDonnee) return;
numeroQuestion++;
if (numeroQuestion < questionsMelangees.length) {
afficherQuestionQuiz();
} else {
afficherResultatQuiz();
}
});
/* AFFICHER LE SCORE FINAL */
function afficherResultatQuiz() {
quizJeu.hidden = true;
quizFin.hidden = false;
quizProgression.textContent = "";
quizFeedback.textContent = "";
document.getElementById("quiz-score").textContent =
"🏆 Ton score : " + scoreQuiz + " / " +
questionsMelangees.length;
let messageFinal;
if (scoreQuiz === 9) {
messageFinal =
"Incroyable ! Tu es un véritable expert des trois villes ! 🌟";
} else if (scoreQuiz >= 7) {
messageFinal =
"Excellent ! Tu connais très bien Paris, Naples et Bruxelles ! ✈️";
} else if (scoreQuiz >= 4) {
messageFinal =
"Bravo ! Tu connais déjà plusieurs secrets de ces destinations. 🌍";
} else {
messageFinal =
"Continue à explorer notre site pour devenir un vrai voyageur ! 🧳";
}
document.getElementById("quiz-message-final").textContent =
messageFinal;
}
/* RECOMMENCER LE QUIZ */
document.getElementById("rejouer-quiz")
.addEventListener("click", function() {
quizFin.hidden = true;
quizDebut.hidden = false;
numeroQuestion = 0;
scoreQuiz = 0;
reponseDonnee = false;
});
