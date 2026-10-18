# Jeu des Allumettes - Solution

!!! warning "Solution de référence"

    Cette page contient une solution complète du jeu des allumettes.
    Consulter uniquement après avoir tenté l'exercice.

## Code JavaScript (MakeCode Arcade)

Ce code peut être copié-collé dans l'éditeur JavaScript de MakeCode Arcade.

Deux versions sont disponibles : la version de base (deux joueuses) et la version « Aller plus loin » (contre l'ordinateur).

=== "Joueuse contre joueuse"

    ```typescript
    // ============================================================
    // JEU DES ALLUMETTES - SOLUTION (joueuse contre joueuse)
    // ============================================================
    //
    // RÈGLES :
    // - 20 allumettes au départ
    // - Retirer 1, 2 ou 3 allumettes par tour
    // - Qui prend la dernière PERD
    //
    // CONTRÔLES (les deux joueuses se passent le clavier) :
    // - Bouton A : Retirer 1 allumette
    // - Bouton B : Retirer 2 allumettes
    // - Flèche HAUT : Retirer 3 allumettes
    //
    // À coller dans l'onglet JavaScript de MakeCode Arcade,
    // puis revenir sur Blocs pour voir la version visuelle.
    // ============================================================

    // Bouton A : retirer 1 allumette
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        allumettes += -1
        info.setScore(allumettes)
        // Redessiner les allumettes
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        for (let index = 0; index <= allumettes - 1; index++) {
            allumette = sprites.create(imageAllumette, SpriteKind.Food)
            allumette.setPosition(14 + index * 7, 60)
        }
        if (allumettes <= 0) {
            game.splash("Joueuse " + joueuse + " a perdu !")
            game.reset()
        } else {
            if (joueuse == 1) {
                joueuse = 2
            } else {
                joueuse = 1
            }
            game.splash("Au tour de joueuse " + joueuse)
        }
    })

    // Bouton B : retirer 2 allumettes
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        allumettes += -2
        info.setScore(allumettes)
        // Redessiner les allumettes
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        for (let index = 0; index <= allumettes - 1; index++) {
            allumette = sprites.create(imageAllumette, SpriteKind.Food)
            allumette.setPosition(14 + index * 7, 60)
        }
        if (allumettes <= 0) {
            game.splash("Joueuse " + joueuse + " a perdu !")
            game.reset()
        } else {
            if (joueuse == 1) {
                joueuse = 2
            } else {
                joueuse = 1
            }
            game.splash("Au tour de joueuse " + joueuse)
        }
    })

    // Flèche haut : retirer 3 allumettes
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        allumettes += -3
        info.setScore(allumettes)
        // Redessiner les allumettes
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        for (let index = 0; index <= allumettes - 1; index++) {
            allumette = sprites.create(imageAllumette, SpriteKind.Food)
            allumette.setPosition(14 + index * 7, 60)
        }
        if (allumettes <= 0) {
            game.splash("Joueuse " + joueuse + " a perdu !")
            game.reset()
        } else {
            if (joueuse == 1) {
                joueuse = 2
            } else {
                joueuse = 1
            }
            game.splash("Au tour de joueuse " + joueuse)
        }
    })

    // Au démarrage
    let allumette: Sprite = null
    let imageAllumette: Image = null
    let joueuse = 0
    let allumettes = 0
    allumettes = 20
    joueuse = 1
    imageAllumette = img`
        . 2 2 .
        2 2 2 2
        2 2 2 2
        . 2 2 .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        . d d .
        `
    scene.setBackgroundColor(15)
    info.setScore(allumettes)
    // Dessiner les 20 allumettes
    for (let index = 0; index <= allumettes - 1; index++) {
        allumette = sprites.create(imageAllumette, SpriteKind.Food)
        allumette.setPosition(14 + index * 7, 60)
    }
    game.splash("20 allumettes", "A:1  B:2  Haut:3")
    game.splash("Joueuse 1 commence")
    ```

=== "Contre l'ordinateur"

    ```typescript
    // ============================================================
    // JEU DES ALLUMETTES - SOLUTION
    // ============================================================
    //
    // RÈGLES :
    // - 20 allumettes au départ
    // - Retirer 1, 2 ou 3 allumettes par tour
    // - Qui prend la dernière PERD
    //
    // CONTRÔLES :
    // - Bouton A : Retirer 1 allumette
    // - Bouton B : Retirer 2 allumettes
    // - Flèche HAUT : Retirer 3 allumettes
    //
    // ============================================================

    // --- VARIABLES ---
    let allumettes = 20
    let monTour = true

    // --- DÉMARRAGE ---
    scene.setBackgroundColor(15)
    info.setScore(allumettes)

    // ============================================================
    // BOUTON A : Retirer 1 allumette
    // ============================================================
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (monTour && allumettes > 0) {
            // Retirer 1 allumette
            allumettes = allumettes - 1
            info.setScore(allumettes)

            // Vérifier si j'ai perdu
            if (allumettes <= 0) {
                game.over(false)
            } else {
                // Tour de l'ordinateur
                monTour = false
                pause(1000)

                let ordiRetire = (allumettes - 1) % 4
                if (ordiRetire == 0) { ordiRetire = 1 }

                if (ordiRetire > allumettes) { ordiRetire = allumettes }
                allumettes = allumettes - ordiRetire
                info.setScore(allumettes)

                if (allumettes <= 0) {
                    game.over(true)
                } else {
                    monTour = true
                }
            }
        }
    })

    // ============================================================
    // BOUTON B : Retirer 2 allumettes
    // ============================================================
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        if (monTour && allumettes > 0) {
            // Retirer 2 allumettes (ou moins)
            let retirer = 2
            if (retirer > allumettes) { retirer = allumettes }
            allumettes = allumettes - retirer
            info.setScore(allumettes)

            // Vérifier si j'ai perdu
            if (allumettes <= 0) {
                game.over(false)
            } else {
                // Tour de l'ordinateur
                monTour = false
                pause(1000)

                let ordiRetire = (allumettes - 1) % 4
                if (ordiRetire == 0) { ordiRetire = 1 }

                if (ordiRetire > allumettes) { ordiRetire = allumettes }
                allumettes = allumettes - ordiRetire
                info.setScore(allumettes)

                if (allumettes <= 0) {
                    game.over(true)
                } else {
                    monTour = true
                }
            }
        }
    })

    // ============================================================
    // FLÈCHE HAUT : Retirer 3 allumettes
    // ============================================================
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        if (monTour && allumettes > 0) {
            // Retirer 3 allumettes (ou moins)
            let retirer = 3
            if (retirer > allumettes) { retirer = allumettes }
            allumettes = allumettes - retirer
            info.setScore(allumettes)

            // Vérifier si j'ai perdu
            if (allumettes <= 0) {
                game.over(false)
            } else {
                // Tour de l'ordinateur
                monTour = false
                pause(1000)

                let ordiRetire = (allumettes - 1) % 4
                if (ordiRetire == 0) { ordiRetire = 1 }

                if (ordiRetire > allumettes) { ordiRetire = allumettes }
                allumettes = allumettes - ordiRetire
                info.setScore(allumettes)

                if (allumettes <= 0) {
                    game.over(true)
                } else {
                    monTour = true
                }
            }
        }
    })
    ```

## Comment utiliser cette solution

1. Ouvrir [arcade.makecode.com](https://arcade.makecode.com){target="_blank"}
2. Créer un **nouveau projet**
3. Cliquer sur **JavaScript** en haut de l'écran (à côté de "Blocs")
4. Effacer tout le code existant
5. Coller le code ci-dessus
6. Cliquer sur **Blocs** pour voir la version visuelle

## Points clés de la solution

### Variables utilisées

| Variable | Type | Rôle |
|----------|------|------|
| `allumettes` | Nombre | Nombre d'allumettes restantes (affiché en haut à droite) |
| `joueuse` | Nombre | Joueuse dont c'est le tour : 1 ou 2 |
| `imageAllumette` | Image | Dessin d'une allumette (4 × 16 pixels) |
| `allumette` | Sprite | Allumette affichée à l'écran |
| `monTour` | Booléen | Version ordinateur : `vrai` quand c'est au tour de la joueuse |
| `ordiRetire` | Nombre | Version ordinateur : allumettes retirées par l'ordinateur |

### Afficher les allumettes

Après chaque coup, toutes les allumettes sont effacées puis redessinées avec une boucle :

```
détruire tous les sprites de type Food
pour index de 0 à (allumettes - 1)
    définir allumette à sprite imageAllumette de type Food
    définir position de allumette à x (14 + index × 7) y 60
```

### Changer de joueuse

Après chaque coup, la variable `joueuse` passe de 1 à 2, ou de 2 à 1 :

```
si joueuse = 1 alors
    définir joueuse à 2
sinon
    définir joueuse à 1
```

### Stratégie de l'ordinateur

L'ordinateur utilise la formule `(allumettes - 1) % 4` pour calculer combien d'allumettes retirer. Il laisse ainsi toujours un multiple de 4, plus 1 : la joueuse ne peut plus gagner (si l'ordinateur joue parfaitement depuis le début).

### Structure du programme

```
Au démarrage
    ├── Initialiser : 20 allumettes, joueuse = 1
    └── Dessiner les allumettes (boucle)

Bouton A / B / Haut
    ├── Retirer 1 / 2 / 3 allumettes
    ├── Redessiner les allumettes
    ├── Si allumettes ≤ 0 → la joueuse actuelle a perdu, on recommence
    └── Sinon → changer de joueuse
```

---

[← Retour aux instructions](jeu-allumettes-compact-instructions.md){target="_blank"}
