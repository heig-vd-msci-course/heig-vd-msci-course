# Jeu des Allumettes - MakeCode Arcade

> *Crée ton premier jeu vidéo avec des blocs !*

---

## Informations

| Élément | Description |
|---------|-------------|
| **Plateforme** | MakeCode Arcade (https://arcade.makecode.com) |
| **Durée** | 2 × 45 minutes |
| **Niveau** | Débutant |
| **Prérequis** | Aucun |

---

## Objectifs

À la fin de cet atelier, tu seras capable de :

1. Créer un projet MakeCode Arcade
2. Utiliser des **variables** pour stocker des données
3. Gérer des **événements** (appui sur boutons)
4. Afficher des informations à l'écran
5. Utiliser des **conditions** pour détecter la fin du jeu

---

## Introduction à MakeCode Arcade

### C'est quoi MakeCode Arcade ?

MakeCode Arcade est un outil qui permet de créer des **jeux 2D rétro** (style Game Boy) avec des blocs visuels. Pas besoin d'écrire de code !

### L'interface

```
┌─────────────────────────────────────────────────────────────┐
│  [Catégories]  │  [Zone de code (blocs)]  │  [Simulateur]  │
│                │                          │                │
│  - Loops       │   ┌──────────────────┐   │   ┌────────┐   │
│  - Logic       │   │ on start         │   │   │  ÉCRAN │   │
│  - Variables   │   │   ...            │   │   │   DU   │   │
│  - Sprites     │   └──────────────────┘   │   │   JEU  │   │
│  - Controller  │                          │   └────────┘   │
│  - Game        │                          │                │
│  - ...         │                          │   [A]    [B]   │
└─────────────────────────────────────────────────────────────┘
```

---

## Étape 1 : Créer le projet (5 min)

### Instructions

1. Ouvre ton navigateur
2. Va sur **https://arcade.makecode.com**
3. Clique sur **"New Project"** (Nouveau Projet)
4. Nomme ton projet : **"Jeu-Allumettes"**
5. Clique sur **"Create"** (Créer)

### Résultat attendu

Tu vois l'éditeur MakeCode avec un écran de jeu noir sur la droite.

---

## Étape 2 : Créer la variable "allumettes" (10 min)

### Concept

Une **variable** est comme une boîte qui contient une valeur. Notre boîte s'appelle `allumettes` et contient le nombre `21`.

### Instructions

1. Clique sur **"Variables"** dans les catégories
2. Clique sur **"Make a Variable..."** (Créer une variable)
3. Tape le nom : **`allumettes`**
4. Clique sur **"Ok"**

### Initialiser la variable

Maintenant, on va dire que le jeu commence avec 21 allumettes.

1. Trouve le bloc **"on start"** (au démarrage) - il devrait déjà être là
2. Dans **"Variables"**, prends le bloc **"set allumettes to 0"**
3. Change le `0` en `21`
4. Place ce bloc dans le bloc **"on start"**

### Code en blocs

```
┌─────────────────────────────────────┐
│  on start                           │
│  ┌─────────────────────────────┐    │
│  │ set [allumettes ▼] to (21)  │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

---

## Étape 3 : Afficher le nombre d'allumettes (10 min)

### Instructions

1. Dans **"Game"**, trouve le bloc **"splash"** (afficher message)
2. Place-le après le bloc "set allumettes"
3. Modifie le texte : **"21 allumettes"**

Ou mieux, pour afficher dynamiquement :

1. Dans **"Game"**, trouve **"show long text"** ou **"splash"**
2. Dans **"Text"**, trouve le bloc **"join"** (joindre)
3. Combine avec la variable `allumettes`

### Code en blocs

```
┌─────────────────────────────────────────────────────┐
│  on start                                           │
│  ┌─────────────────────────────┐                    │
│  │ set [allumettes ▼] to (21)  │                    │
│  └─────────────────────────────┘                    │
│  ┌────────────────────────────────────────────────┐ │
│  │ splash (join "Allumettes: " [allumettes])      │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Tester

Clique sur le **simulateur** à droite. Tu devrais voir "Allumettes: 21" s'afficher !

---

## Étape 4 : Créer les boutons (15 min)

### Concept

On va utiliser les **boutons du contrôleur** pour retirer des allumettes :

- **Bouton A** : Retirer 1 allumette
- **Bouton B** : Retirer 2 allumettes
- **A + B** : Retirer 3 allumettes

### Instructions pour Bouton A

1. Dans **"Controller"**, trouve **"on A button pressed"**
2. Place ce bloc dans l'espace de travail (pas dans "on start")
3. Dans **"Variables"**, prends **"change allumettes by 1"**
4. Change le `1` en `-1` (négatif car on retire)
5. Place ce bloc dans "on A button pressed"

### Code en blocs - Bouton A

```
┌─────────────────────────────────────────┐
│  on [A ▼] button pressed                │
│  ┌────────────────────────────────┐     │
│  │ change [allumettes ▼] by (-1)  │     │
│  └────────────────────────────────┘     │
│  ┌────────────────────────────────────┐ │
│  │ splash (join "Reste: " allumettes) │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Instructions pour Bouton B

Même chose, mais avec **-2** :

```
┌─────────────────────────────────────────┐
│  on [B ▼] button pressed                │
│  ┌────────────────────────────────┐     │
│  │ change [allumettes ▼] by (-2)  │     │
│  └────────────────────────────────┘     │
│  ┌────────────────────────────────────┐ │
│  │ splash (join "Reste: " allumettes) │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Instructions pour A+B (retirer 3)

1. Dans **"Controller"**, trouve **"on A+B button pressed"**
2. Même logique avec **-3**

```
┌─────────────────────────────────────────┐
│  on [A+B ▼] button pressed              │
│  ┌────────────────────────────────┐     │
│  │ change [allumettes ▼] by (-3)  │     │
│  └────────────────────────────────┘     │
│  ┌────────────────────────────────────┐ │
│  │ splash (join "Reste: " allumettes) │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Tester

Dans le simulateur, clique sur les boutons A et B. Le nombre devrait diminuer !

---

## Étape 5 : Détecter la fin du jeu (15 min)

### Concept

On doit vérifier **après chaque action** si le joueur a perdu (pris la dernière allumette).

### Instructions

1. Dans **"Logic"**, trouve **"if ... then"** (si ... alors)
2. Dans **"Logic"**, trouve la comparaison **"0 = 0"**
3. Change en : **"allumettes <= 0"** (inférieur ou égal)
4. Dans **"Game"**, trouve **"game over"**
5. Place le tout dans chaque bloc de bouton

### Code en blocs (pour chaque bouton)

```
┌──────────────────────────────────────────────────────┐
│  on [A ▼] button pressed                             │
│  ┌────────────────────────────────┐                  │
│  │ change [allumettes ▼] by (-1)  │                  │
│  └────────────────────────────────┘                  │
│  ┌────────────────────────────────────────────────┐  │
│  │ if <[allumettes] <= (0)> then                  │  │
│  │   ┌──────────────────────────────────────────┐ │  │
│  │   │ splash "Tu as perdu !"                   │ │  │
│  │   └──────────────────────────────────────────┘ │  │
│  │   ┌───────────────────┐                       │  │
│  │   │ game over LOSE    │                       │  │
│  │   └───────────────────┘                       │  │
│  │ else                                          │  │
│  │   ┌────────────────────────────────────────┐  │  │
│  │   │ splash (join "Reste: " allumettes)     │  │  │
│  │   └────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

### Tester

Joue jusqu'à 0 allumettes. Tu devrais voir "Tu as perdu !" et l'écran de fin !

---

## Étape 6 : Ajouter l'alternance des tours (15 min)

### Concept

Pour jouer à deux, on a besoin d'une deuxième variable : `tour` (1 ou 2).

### Instructions

1. Crée une nouvelle variable : **`tour`**
2. Au démarrage, initialise : **`set tour to 1`**
3. Après chaque coup, change de tour

### Code pour changer de tour

```
┌───────────────────────────────────────────┐
│  if <[tour] = (1)> then                   │
│    ┌─────────────────────────────────┐    │
│    │ set [tour ▼] to (2)             │    │
│    └─────────────────────────────────┘    │
│  else                                     │
│    ┌─────────────────────────────────┐    │
│    │ set [tour ▼] to (1)             │    │
│    └─────────────────────────────────┘    │
└───────────────────────────────────────────┘
```

### Afficher le tour

```
┌────────────────────────────────────────────────────┐
│ splash (join "Tour du Joueur " tour)               │
└────────────────────────────────────────────────────┘
```

---

## Code complet

### Au démarrage

```
┌─────────────────────────────────────────────────────┐
│  on start                                           │
│  ┌─────────────────────────────┐                    │
│  │ set [allumettes ▼] to (21)  │                    │
│  └─────────────────────────────┘                    │
│  ┌─────────────────────────────┐                    │
│  │ set [tour ▼] to (1)         │                    │
│  └─────────────────────────────┘                    │
│  ┌────────────────────────────────────────────────┐ │
│  │ splash "Jeu des Allumettes - 21 allumettes"    │ │
│  └────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────┐ │
│  │ splash "A=1, B=2, A+B=3"                       │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Bouton A (retirer 1)

```
┌──────────────────────────────────────────────────────┐
│  on [A ▼] button pressed                             │
│                                                      │
│  ┌────────────────────────────────┐                  │
│  │ change [allumettes ▼] by (-1)  │                  │
│  └────────────────────────────────┘                  │
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │ if <[allumettes] <= (0)> then                  │  │
│  │   ┌──────────────────────────────────────────┐ │  │
│  │   │ splash (join "Joueur " tour " a perdu!") │ │  │
│  │   └──────────────────────────────────────────┘ │  │
│  │   ┌───────────────────┐                       │  │
│  │   │ game over LOSE    │                       │  │
│  │   └───────────────────┘                       │  │
│  │ else                                          │  │
│  │   ┌────────────────────────────────────────┐  │  │
│  │   │ if <[tour] = (1)> then                 │  │  │
│  │   │   set [tour] to (2)                    │  │  │
│  │   │ else                                   │  │  │
│  │   │   set [tour] to (1)                    │  │  │
│  │   └────────────────────────────────────────┘  │  │
│  │   ┌────────────────────────────────────────┐  │  │
│  │   │ splash (join allumettes " - Tour J"    │  │  │
│  │   │         tour)                          │  │  │
│  │   └────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

*(Même structure pour les boutons B et A+B, avec -2 et -3)*

---

## Extensions (pour les plus rapides)

### Niveau 1 : Graphismes personnalisés

1. Dans **"Scene"**, change la couleur de fond
2. Ajoute un **sprite** pour représenter les allumettes visuellement

### Niveau 2 : Effets sonores

1. Dans **"Music"**, ajoute un son quand on retire une allumette
2. Musique de victoire/défaite à la fin

### Niveau 3 : IA adversaire

> Défi avancé !

Crée une fonction qui calcule le meilleur coup :

```
La stratégie gagnante :
coup = (allumettes - 1) modulo 4
Si coup = 0, joue 1
```

Pour créer cette IA :
1. Dans **"Functions"**, crée une fonction **"coupOrdinateur"**
2. Utilise le bloc **"remainder of..."** (modulo)
3. Fais jouer l'ordinateur automatiquement quand c'est son tour

---

## Problèmes fréquents

### "Mes boutons ne fonctionnent pas"

- Vérifie que les blocs sont bien **dans** le bloc "on button pressed"
- Assure-toi d'avoir cliqué sur le **simulateur** avant d'appuyer sur les touches

### "Le jeu recommence sans arrêt"

- Tu as peut-être mis le code de jeu dans "forever" au lieu de "on button"
- Le bloc "on start" ne doit s'exécuter qu'une fois

### "Je veux recommencer une partie"

Ajoute un bloc pour le bouton "menu" ou crée un bouton restart :

```
┌─────────────────────────────────────┐
│  on [menu ▼] button pressed         │
│  ┌─────────────────────────────┐    │
│  │ set [allumettes] to (21)    │    │
│  │ set [tour] to (1)           │    │
│  │ splash "Nouvelle partie!"   │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

---

## Récapitulatif des concepts

| Concept | Dans MakeCode | Ce qu'on a fait |
|---------|--------------|-----------------|
| **Variable** | Variables → Make a variable | `allumettes`, `tour` |
| **Assignation** | set [var] to [value] | `set allumettes to 21` |
| **Événement** | Controller → on button pressed | Détecter les appuis |
| **Condition** | Logic → if...then...else | Vérifier si allumettes <= 0 |
| **Comparaison** | Logic → 0 = 0 | `allumettes <= 0` |
| **Affichage** | Game → splash | Montrer les messages |

---

## Lien avec le vrai code

Ce que tu viens de faire en blocs, c'est exactement ce que fait ce code JavaScript :

```javascript
let allumettes = 21;
let tour = 1;

function retirer(n) {
    allumettes = allumettes - n;

    if (allumettes <= 0) {
        alert("Joueur " + tour + " a perdu !");
    } else {
        if (tour === 1) {
            tour = 2;
        } else {
            tour = 1;
        }
        alert("Reste: " + allumettes + " - Tour J" + tour);
    }
}
```

**Les concepts sont les mêmes !** Demain, tu écriras du vrai code comme celui-ci.

---

## Ressources

- [MakeCode Arcade](https://arcade.makecode.com) - L'éditeur
- [Tutoriels MakeCode](https://arcade.makecode.com/tutorials) - Pour aller plus loin
- [Documentation officielle](https://arcade.makecode.com/docs) - Référence complète

---

*Template créé pour le cours MSCI - ERACOM 2026*
*Moment d'utilisation : Lundi après-midi, 14h00-15h45*
