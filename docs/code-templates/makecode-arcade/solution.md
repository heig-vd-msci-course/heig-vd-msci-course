# Jeu des Allumettes - Solution

!!! warning "Solution de référence"

    Cette page contient une solution complète du jeu des allumettes.
    Consulter uniquement après avoir tenté l'exercice.

## Code JavaScript (MakeCode Arcade)

Ce code peut être copié-collé dans l'éditeur JavaScript de MakeCode Arcade.

```typescript
// Variables
let allumettes = 0
let monTour = false
let ordiRetire = 0

// Initialisation
allumettes = 20
monTour = true
game.splash("20 allumettes - A:1 B:2 Haut:3")

// Bouton A - Retirer 1 allumette
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monTour == true) {
        allumettes += -1
        game.splash("" + allumettes + " allumettes")
        if (allumettes <= 0) {
            game.over(false)
        }
        monTour = false
        pause(1000)
        // Stratégie de l'ordinateur
        ordiRetire = (allumettes - 1) % 4
        if (ordiRetire == 0) {
            ordiRetire = 1
        }
        allumettes += 0 - ordiRetire
        game.splash("Ordi retire " + ordiRetire)
        if (allumettes <= 0) {
            game.over(true)
        }
        monTour = true
        game.splash("" + allumettes + " allumettes")
    }
})

// Bouton B - Retirer 2 allumettes
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monTour == true) {
        allumettes += -2
        game.splash("" + allumettes + " allumettes")
        if (allumettes <= 0) {
            game.over(false)
        }
        monTour = false
        pause(1000)
        ordiRetire = (allumettes - 1) % 4
        if (ordiRetire == 0) {
            ordiRetire = 1
        }
        allumettes += 0 - ordiRetire
        game.splash("Ordi retire " + ordiRetire)
        if (allumettes <= 0) {
            game.over(true)
        }
        monTour = true
        game.splash("" + allumettes + " allumettes")
    }
})

// Flèche haut - Retirer 3 allumettes
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monTour == true) {
        allumettes += -3
        game.splash("" + allumettes + " allumettes")
        if (allumettes <= 0) {
            game.over(false)
        }
        monTour = false
        pause(1000)
        ordiRetire = (allumettes - 1) % 4
        if (ordiRetire == 0) {
            ordiRetire = 1
        }
        allumettes += 0 - ordiRetire
        game.splash("Ordi retire " + ordiRetire)
        if (allumettes <= 0) {
            game.over(true)
        }
        monTour = true
        game.splash("" + allumettes + " allumettes")
    }
})
```

## Comment utiliser cette solution

1. Ouvrir [arcade.makecode.com](https://arcade.makecode.com)
2. Créer un **nouveau projet**
3. Cliquer sur **JavaScript** en haut de l'écran (à côté de "Blocs")
4. Effacer tout le code existant
5. Coller le code ci-dessus
6. Cliquer sur **Blocs** pour voir la version visuelle

## Points clés de la solution

### Variables utilisées

| Variable | Type | Rôle |
|----------|------|------|
| `allumettes` | Nombre | Nombre d'allumettes restantes |
| `monTour` | Booléen | Indique si c'est au tour du joueur |
| `ordiRetire` | Nombre | Nombre d'allumettes retirées par l'ordinateur |

### Stratégie de l'ordinateur

L'ordinateur utilise la formule `(allumettes - 1) % 4` pour calculer combien d'allumettes retirer. Cette stratégie lui permet de toujours laisser un nombre d'allumettes tel que le joueur ne peut pas gagner (si l'ordinateur joue parfaitement depuis le début).

### Structure du programme

```
Au démarrage
    └── Initialiser : 20 allumettes, monTour = vrai

Bouton A / B / Haut
    ├── Si c'est mon tour
    │   ├── Retirer 1/2/3 allumettes
    │   ├── Afficher le nombre restant
    │   ├── Si allumettes ≤ 0 → J'ai perdu
    │   ├── Tour de l'ordinateur
    │   │   ├── Calculer combien retirer (stratégie)
    │   │   ├── Retirer les allumettes
    │   │   └── Si allumettes ≤ 0 → J'ai gagné
    │   └── Rendre la main au joueur
```

---

[← Retour aux instructions](jeu-allumettes-compact-instructions.md)
