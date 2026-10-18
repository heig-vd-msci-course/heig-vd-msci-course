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
