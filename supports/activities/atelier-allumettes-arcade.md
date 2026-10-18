---
icon: lucide/gamepad-2
---

# Atelier : Jeu des allumettes sur MakeCode Arcade

> *Programmer une version jouable du jeu des allumettes*

---

## Objectif

Créer une version fonctionnelle du jeu des allumettes en programmant sur MakeCode Arcade. Le code de base est fourni avec trois zones à compléter pour rendre le jeu jouable.

---

## Rappel des règles

| Élément | Valeur |
|---------|--------|
| Allumettes au départ | 20 |
| Retrait par tour | 1, 2 ou 3 |
| Condition de défaite | Prendre la dernière allumette |

---

## La stratégie gagnante

La formule mathématique pour toujours gagner a été découverte le matin. Elle permet de calculer combien d'allumettes retirer pour forcer l'adversaire dans une position perdante.

### Principe : les multiples de 4

Pour gagner, il faut laisser un nombre d'allumettes égal à un **multiple de 4, plus 1** :

```
20 → 17 → 13 → 9 → 5 → 1 → Victoire
```

### La formule

```
allumettes_à_retirer = (allumettes - 1) % 4
```

L'opérateur `%` (modulo) retourne le **reste de la division entière**.

| Exemple | Calcul | Résultat |
|---------|--------|----------|
| 20 allumettes | (20 - 1) % 4 = 19 % 4 | 3 (retirer 3 pour laisser 17) |
| 17 allumettes | (17 - 1) % 4 = 16 % 4 | 0 (retirer 1 par défaut) |
| 15 allumettes | (15 - 1) % 4 = 14 % 4 | 2 |
| 11 allumettes | (11 - 1) % 4 = 10 % 4 | 2 |

!!! info "Cas spécial"

    Si le résultat est 0, retirer 1 allumette par défaut. Cela signifie que la position est déjà perdante — l'adversaire a bien joué.

---

## Démarrage sur MakeCode Arcade

### Étape 1 : Accéder à MakeCode Arcade

1. Ouvrir un navigateur web
2. Accéder à **[arcade.makecode.com](https://arcade.makecode.com)**
3. Cliquer sur **"New Project"**
4. Nommer le projet **"Jeu-Allumettes"**

### Étape 2 : Passer en mode JavaScript

MakeCode Arcade propose deux modes de programmation : **Blocks** (blocs visuels) et **JavaScript** (code textuel). Pour cet atelier, le mode JavaScript est utilisé.

1. En haut de l'écran, cliquer sur l'onglet **"JavaScript"**
2. Supprimer tout le code existant dans l'éditeur

### Étape 3 : Copier le template

Copier l'intégralité du code ci-dessous et le coller dans l'éditeur MakeCode Arcade.

---

## Le code template

```typescript
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
```

---

## Les zones à compléter

Le code contient des zones marquées `À COMPLÉTER` dans **chaque bouton** (A, B, et flèche haut). Les mêmes modifications doivent être faites dans les trois boutons.

### 1. Message de défaite

Quand la personne joueuse prend la dernière allumette, ajouter :

```typescript
game.over(false)
```

!!! tip "Explication"

    `game.over(false)` termine la partie et affiche "GAME OVER".

---

### 2. Stratégie de l'ordinateur

Remplacer `let ordiRetire = 1` par la stratégie gagnante :

```typescript
let ordiRetire = (allumettes - 1) % 4
if (ordiRetire == 0) { ordiRetire = 1 }
```

!!! tip "Explication"

    - `(allumettes - 1) % 4` calcule le nombre optimal d'allumettes à retirer
    - Si le résultat est 0, l'ordinateur retire 1 par défaut
    - Cette formule permet à l'ordinateur de toujours laisser un multiple de 4 + 1

---

### 3. Message de victoire

Quand l'ordinateur prend la dernière allumette, ajouter :

```typescript
game.over(true)
```

!!! tip "Explication"

    `game.over(true)` termine la partie et affiche "YOU WIN!".

---

!!! warning "Important"

    Ces trois modifications doivent être faites **dans chaque bouton** (A, B, et flèche haut) pour que le jeu fonctionne correctement quel que soit le bouton utilisé.

---

## Tester le jeu

Une fois les trois zones complétées :

1. **Observer le simulateur** à gauche de l'écran — le jeu démarre automatiquement
2. **Cliquer sur le simulateur** pour l'activer
3. **Utiliser les contrôles** :
   - Touche `Z` ou bouton `A` : retirer 1 allumette
   - Touche `X` ou bouton `B` : retirer 2 allumettes
   - Flèche `↑` : retirer 3 allumettes

### Vérifications

| Test | Résultat attendu |
|------|------------------|
| Prendre la dernière allumette | "GAME OVER" s'affiche |
| Forcer l'ordinateur à prendre la dernière | "YOU WIN!" s'affiche |
| L'ordinateur joue intelligemment | Laisse toujours 17, 13, 9, 5 ou 1 allumettes |

---

## Comprendre le code

### Les variables

```typescript
let allumettes = 20    // Compteur d'allumettes
let monTour = true     // Qui joue ? true = humain, false = ordinateur
```

### Les événements

Le jeu réagit à trois événements :

| Événement | Action |
|-----------|--------|
| Bouton A pressé | Retirer 1 allumette |
| Bouton B pressé | Retirer 2 allumettes |
| Flèche haut pressée | Retirer 3 allumettes |

### Le flux de jeu

```
┌─────────────────────────────────────┐
│         DÉPART (20 allumettes)      │
└─────────────────┬───────────────────┘
                  ▼
┌─────────────────────────────────────┐
│   TOUR HUMAIN                       │
│   A = 1, B = 2, ↑ = 3               │
└─────────────────┬───────────────────┘
                  ▼
         ┌────────────────┐
         │ allumettes = 0 ?│
         └────────┬───────┘
           OUI    │    NON
             ▼    │      ▼
        GAME OVER │ ┌─────────────────────────────────────┐
                  │ │   TOUR ORDINATEUR                   │
                  │ │   - Calcule avec la formule         │
                  │ │   - Retire les allumettes           │
                  │ └─────────────────┬───────────────────┘
                  │                   ▼
                  │          ┌────────────────┐
                  │          │ allumettes = 0 ?│
                  │          └────────┬───────┘
                  │            OUI    │    NON
                  │              ▼    │      ▼
                  │          YOU WIN  │   Retour au
                  │                   │   tour humain
                  │                   │      │
                  └───────────────────┴──────┘
```

---

## Bonus : Améliorer le jeu

Une fois le jeu de base fonctionnel, voici des améliorations possibles.

### Niveau 1 : Afficher les allumettes visuellement

Remplacer le simple score par une représentation graphique des allumettes.

```typescript
// Ajouter cette fonction au début du code
function afficherAllumettes() {
    let texte = ""
    for (let i = 0; i < allumettes; i++) {
        texte = texte + "|"
    }
    game.splash(texte)
}
```

### Niveau 2 : Rendre l'ordinateur faillible

Ajouter une chance que l'ordinateur fasse une erreur.

```typescript
// Remplacer la stratégie par :
if (Math.percentChance(20)) {
    // 20% de chance de jouer au hasard
    ordiRetire = randint(1, 3)
} else {
    // 80% de chance de jouer parfaitement
    ordiRetire = (allumettes - 1) % 4
    if (ordiRetire == 0) {
        ordiRetire = 1
    }
}
```

### Niveau 3 : Mode deux personnes

Permettre de jouer à deux en désactivant l'ordinateur.

```typescript
// Ajouter une variable pour le mode
let modeDeuxJoueurs = false

// Ajouter au début : Bouton B pour changer de mode
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    modeDeuxJoueurs = !modeDeuxJoueurs
    if (modeDeuxJoueurs) {
        game.splash("Mode 2 joueurs")
    } else {
        game.splash("Mode vs Ordi")
    }
})
```

---

## Partager le projet

Pour conserver ou partager le jeu terminé :

1. Cliquer sur le bouton **"Share"** en haut à droite
2. Cliquer sur **"Publish project"**
3. Copier l'URL générée

L'URL permet d'ouvrir le projet dans un navigateur et de jouer directement.

---

## Questions fréquentes

??? question "Le simulateur ne réagit pas aux touches"

    - Cliquer une fois sur le simulateur pour l'activer
    - Utiliser la touche `Z` pour le bouton A
    - Vérifier que le code ne contient pas d'erreurs (pas de soulignements rouges)

??? question "Le jeu affiche une erreur"

    - Vérifier que le code a été copié intégralement
    - S'assurer que les zones complétées sont bien à l'intérieur des blocs `if`
    - Comparer avec le code solution si disponible

??? question "L'ordinateur retire toujours 1"

    La zone 2 n'a pas été complétée correctement. Vérifier que la formule est bien :

    ```typescript
    ordiRetire = (allumettes - 1) % 4
    if (ordiRetire == 0) {
        ordiRetire = 1
    }
    ```

??? question "Comment recommencer la partie ?"

    - Cliquer sur l'icône de redémarrage (flèche circulaire) sous le simulateur
    - Ou appuyer sur la touche `Entrée`

---

## Récapitulatif

| Élément | Valeur |
|---------|--------|
| **Langage** | TypeScript (JavaScript pour MakeCode) |
| **Concepts** | Variables, conditions, événements, modulo |
| **Zones complétées** | 3 |

---

## Navigation

- [← Retour au programme du Lundi après-midi](apres-midi.md)
- [← Retour au programme du Lundi](index.md)
