# Jeu des allumettes (web) - Solution

!!! warning "Solution de référence"

    Cette page contient une solution complète de l'atelier du mardi après-midi.
    Consulter uniquement après avoir tenté l'exercice.

## Jouer

=== "Joueuse contre joueuse"

    <iframe style="width: 100%; height: 480px; border: 1px solid #ddd; border-radius: 8px;" src="demo.html" title="Jeu des allumettes - joueuse contre joueuse"></iframe>

    [:material-open-in-new: Ouvrir en plein écran](demo.html){ .md-button target="_blank" }

=== "Contre l'ordinateur (Aller plus loin)"

    <iframe style="width: 100%; height: 480px; border: 1px solid #ddd; border-radius: 8px;" src="demo-ordinateur.html" title="Jeu des allumettes - contre l'ordinateur"></iframe>

    [:material-open-in-new: Ouvrir en plein écran](demo-ordinateur.html){ .md-button target="_blank" }

## Le code

Chaque bloc se colle dans la zone correspondante de [MDN Playground](https://developer.mozilla.org/fr/play){target="_blank"}. Le HTML et le CSS sont les mêmes pour les deux versions.

=== "HTML"

    ```html
    <h1>Jeu des allumettes</h1>
    <p class="equipe">Équipe Pomme</p>

    <p id="message">Au tour de la joueuse 1</p>
    <div id="tas"></div>
    <p>Il reste <span id="compteur"></span> allumettes.</p>

    <div class="boutons">
      <button id="retirer1">Retirer 1</button>
      <button id="retirer2">Retirer 2</button>
      <button id="retirer3">Retirer 3</button>
    </div>

    <button id="rejouer">Rejouer</button>
    ```

=== "CSS"

    ```css
    body {
      font-family: sans-serif;
      background-color: #fff5f7;
      max-width: 700px;
      margin: 0 auto;
      padding: 16px;
      text-align: center;
    }

    h1 {
      color: deeppink;
      margin-bottom: 0;
    }

    .equipe {
      color: gray;
      margin-top: 4px;
    }

    #message {
      font-size: 22px;
      font-weight: bold;
    }

    #tas {
      min-height: 80px;
      margin: 16px 0;
    }

    .allumette {
      display: inline-block;
      width: 8px;
      height: 60px;
      margin: 0 4px;
      background-color: burlywood;
      border-top: 14px solid crimson;
      border-radius: 6px 6px 2px 2px;
    }

    button {
      font-size: 18px;
      padding: 8px 16px;
      margin: 4px;
      border: none;
      border-radius: 8px;
      background-color: deeppink;
      color: white;
      cursor: pointer;
    }

    button:disabled {
      background-color: lightgray;
      cursor: not-allowed;
    }

    #rejouer {
      background-color: teal;
      margin-top: 16px;
    }
    ```

=== "JavaScript (deux joueuses)"

    ```js
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
    ```

=== "JavaScript (contre l'ordinateur)"

    ```js
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
    ```

## Points clés de la solution

### Les concepts de l'après-midi

| Concept | Dans la solution |
|---------|------------------|
| **Variables** | `allumettes` (le nombre restant) et `joueuse` (1 ou 2), créées avec `let` parce qu'elles changent |
| **Événements** | Un `addEventListener("click", ...)` par bouton : Retirer 1, 2, 3 et Rejouer |
| **Conditions** | Fin de partie (`allumettes === 0`), changement de joueuse (`joueuse === 1`) |
| **Boucles** | Le dessin des allumettes dans `dessiner()` |

### Deux fonctions pour éviter les répétitions

| Fonction | Rôle |
|----------|------|
| `dessiner()` | Vide le tas, redessine les allumettes restantes, met à jour le compteur et désactive les boutons impossibles |
| `retirer(nombre)` | Un coup de la joueuse : retire `nombre` allumettes, vérifie la fin de partie, change de joueuse, puis redessine |

Grâce à `retirer(nombre)`, les trois boutons ne contiennent qu'une ligne chacun : `retirer(1)`, `retirer(2)` ou `retirer(3)`.

### Les coups impossibles

Dans `dessiner()`, les boutons **Retirer 2** et **Retirer 3** sont désactivés quand il ne reste pas assez d'allumettes (`retirer3.disabled = allumettes < 3;`). Le nombre d'allumettes ne peut donc jamais devenir négatif, et la condition `allumettes === 0` suffit.

### Contre l'ordinateur

L'ordinateur applique la stratégie gagnante du lundi : retirer `(allumettes - 1) % 4` allumettes pour laisser un multiple de 4, plus 1 (et 1 seule si le résultat vaut 0). `setTimeout(tourOrdinateur, 1000)` le fait « réfléchir » une seconde avant de jouer ; pendant ce temps, les boutons sont désactivés.

---

[← Retour à l'atelier](../../programme/mardi/apres-midi.md#atelier-linterface-du-jeu-des-allumettes){target="_blank"}
