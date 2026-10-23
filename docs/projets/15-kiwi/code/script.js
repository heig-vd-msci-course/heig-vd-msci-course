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
