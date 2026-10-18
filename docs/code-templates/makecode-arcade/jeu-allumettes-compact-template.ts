// ============================================================
// JEU DES ALLUMETTES
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
            // ============================================
            // À COMPLÉTER : game.over(false)
            // ============================================

        } else {
            // Tour de l'ordinateur
            monTour = false
            pause(1000)

            let ordiRetire = 1
            // ============================================
            // À COMPLÉTER : Stratégie gagnante
            // ordiRetire = (allumettes - 1) % 4
            // if (ordiRetire == 0) { ordiRetire = 1 }
            // ============================================

            if (ordiRetire > allumettes) { ordiRetire = allumettes }
            allumettes = allumettes - ordiRetire
            info.setScore(allumettes)

            if (allumettes <= 0) {
                // ============================================
                // À COMPLÉTER : game.over(true)
                // ============================================

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
            // ============================================
            // À COMPLÉTER : game.over(false)
            // ============================================

        } else {
            // Tour de l'ordinateur
            monTour = false
            pause(1000)

            let ordiRetire = 1
            // ============================================
            // À COMPLÉTER : Stratégie gagnante
            // ordiRetire = (allumettes - 1) % 4
            // if (ordiRetire == 0) { ordiRetire = 1 }
            // ============================================

            if (ordiRetire > allumettes) { ordiRetire = allumettes }
            allumettes = allumettes - ordiRetire
            info.setScore(allumettes)

            if (allumettes <= 0) {
                // ============================================
                // À COMPLÉTER : game.over(true)
                // ============================================

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
            // ============================================
            // À COMPLÉTER : game.over(false)
            // ============================================

        } else {
            // Tour de l'ordinateur
            monTour = false
            pause(1000)

            let ordiRetire = 1
            // ============================================
            // À COMPLÉTER : Stratégie gagnante
            // ordiRetire = (allumettes - 1) % 4
            // if (ordiRetire == 0) { ordiRetire = 1 }
            // ============================================

            if (ordiRetire > allumettes) { ordiRetire = allumettes }
            allumettes = allumettes - ordiRetire
            info.setScore(allumettes)

            if (allumettes <= 0) {
                // ============================================
                // À COMPLÉTER : game.over(true)
                // ============================================

            } else {
                monTour = true
            }
        }
    }
})
