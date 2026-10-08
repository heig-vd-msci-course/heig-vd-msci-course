# Jeu des Allumettes - MakeCode Arcade

> *Création d'un jeu vidéo avec des blocs visuels*

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

À la fin de cet atelier, il sera possible de :

1. Créer un projet MakeCode Arcade
2. Utiliser des **variables** pour stocker des données
3. Gérer des **événements** (appui sur boutons)
4. Afficher des informations à l'écran
5. Utiliser des **conditions** pour détecter la fin du jeu

---

## Introduction à MakeCode Arcade

### Présentation de MakeCode Arcade

MakeCode Arcade est un outil permettant de créer des **jeux 2D rétro** (style Game Boy) avec des blocs visuels. Aucune écriture de code n'est requise.

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

1. Ouvrir le navigateur
2. Accéder à **https://arcade.makecode.com**
3. Cliquer sur **"New Project"** (Nouveau Projet)
4. Nommer le projet : **"Jeu-Allumettes"**
5. Cliquer sur **"Create"** (Créer)

### Résultat attendu

L'éditeur MakeCode s'affiche avec un écran de jeu noir sur la droite.

---

## Étape 2 : Créer la variable "allumettes" (10 min)

### Concept

Une **variable** est comparable à une boîte contenant une valeur. Cette boîte s'appelle `allumettes` et contient le nombre `21`.

### Instructions

1. Cliquer sur **"Variables"** dans les catégories
2. Cliquer sur **"Make a Variable..."** (Créer une variable)
3. Saisir le nom : **`allumettes`**
4. Cliquer sur **"Ok"**

### Initialiser la variable

Il est nécessaire d'indiquer que le jeu commence avec 21 allumettes.

1. Trouver le bloc **"on start"** (au démarrage) - il devrait déjà être présent
2. Dans **"Variables"**, prendre le bloc **"set allumettes to 0"**
3. Modifier le `0` en `21`
4. Placer ce bloc dans le bloc **"on start"**

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

1. Dans **"Game"**, trouver le bloc **"splash"** (afficher message)
2. Le placer après le bloc "set allumettes"
3. Modifier le texte : **"21 allumettes"**

Ou, pour un affichage dynamique :

1. Dans **"Game"**, trouver **"show long text"** ou **"splash"**
2. Dans **"Text"**, trouver le bloc **"join"** (joindre)
3. Combiner avec la variable `allumettes`

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

### Test

Cliquer sur le **simulateur** à droite. Le message "Allumettes: 21" devrait s'afficher.

---

## Étape 4 : Créer les boutons (15 min)

### Concept

Les **boutons du contrôleur** permettent de retirer des allumettes :

- **Bouton A** : Retirer 1 allumette
- **Bouton B** : Retirer 2 allumettes
- **A + B** : Retirer 3 allumettes

### Instructions pour le Bouton A

1. Dans **"Controller"**, trouver **"on A button pressed"**
2. Placer ce bloc dans l'espace de travail (pas dans "on start")
3. Dans **"Variables"**, prendre **"change allumettes by 1"**
4. Modifier le `1` en `-1` (négatif car il s'agit d'un retrait)
5. Placer ce bloc dans "on A button pressed"

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

### Instructions pour le Bouton B

Même procédure, mais avec **-2** :

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

1. Dans **"Controller"**, trouver **"on A+B button pressed"**
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

### Test

Dans le simulateur, cliquer sur les boutons A et B. Le nombre devrait diminuer.

---

## Étape 5 : Détecter la fin du jeu (15 min)

### Concept

Il est nécessaire de vérifier **après chaque action** si la personne a perdu (pris la dernière allumette).

### Instructions

1. Dans **"Logic"**, trouver **"if ... then"** (si ... alors)
2. Dans **"Logic"**, trouver la comparaison **"0 = 0"**
3. Modifier en : **"allumettes <= 0"** (inférieur ou égal)
4. Dans **"Game"**, trouver **"game over"**
5. Placer le tout dans chaque bloc de bouton

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
│  │   │ splash "Partie perdue"                   │ │  │
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

### Test

Jouer jusqu'à 0 allumettes. Le message "Partie perdue" et l'écran de fin devraient s'afficher.

---

## Étape 6 : Ajouter l'alternance des tours (15 min)

### Concept

Pour jouer à deux, une deuxième variable est nécessaire : `tour` (1 ou 2).

### Instructions

1. Créer une nouvelle variable : **`tour`**
2. Au démarrage, initialiser : **`set tour to 1`**
3. Après chaque coup, changer de tour

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
│ splash (join "Tour de la Personne " tour)          │
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
│  │   │ splash (join "Personne " tour " a perdu") │ │  │
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

## Extensions (niveau avancé)

### Niveau 1 : Graphismes personnalisés

1. Dans **"Scene"**, modifier la couleur de fond
2. Ajouter un **sprite** pour représenter les allumettes visuellement

### Niveau 2 : Effets sonores

1. Dans **"Music"**, ajouter un son lors du retrait d'une allumette
2. Ajouter une musique de victoire ou de défaite à la fin

### Niveau 3 : IA adversaire

> Défi avancé

Créer une fonction qui calcule le meilleur coup :

```
La stratégie gagnante :
coup = (allumettes - 1) modulo 4
Si coup = 0, jouer 1
```

Pour créer cette IA :
1. Dans **"Functions"**, créer une fonction **"coupOrdinateur"**
2. Utiliser le bloc **"remainder of..."** (modulo)
3. Faire jouer l'ordinateur automatiquement lorsque c'est son tour

---

## Problèmes fréquents

### "Les boutons ne fonctionnent pas"

- Vérifier que les blocs sont bien **dans** le bloc "on button pressed"
- S'assurer d'avoir cliqué sur le **simulateur** avant d'appuyer sur les touches

### "Le jeu recommence sans arrêt"

- Le code de jeu a peut-être été placé dans "forever" au lieu de "on button"
- Le bloc "on start" ne doit s'exécuter qu'une fois

### "Comment recommencer une partie"

Ajouter un bloc pour le bouton "menu" ou créer un bouton restart :

```
┌─────────────────────────────────────┐
│  on [menu ▼] button pressed         │
│  ┌─────────────────────────────┐    │
│  │ set [allumettes] to (21)    │    │
│  │ set [tour] to (1)           │    │
│  │ splash "Nouvelle partie"    │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

---

## Récapitulatif des concepts

| Concept | Dans MakeCode | Application |
|---------|--------------|-----------------|
| **Variable** | Variables → Make a variable | `allumettes`, `tour` |
| **Assignation** | set [var] to [value] | `set allumettes to 21` |
| **Événement** | Controller → on button pressed | Détecter les appuis |
| **Condition** | Logic → if...then...else | Vérifier si allumettes <= 0 |
| **Comparaison** | Logic → 0 = 0 | `allumettes <= 0` |
| **Affichage** | Game → splash | Afficher les messages |

---

## Lien avec le code textuel

Ce qui vient d'être réalisé en blocs correspond exactement au code JavaScript suivant :

```javascript
let allumettes = 21;
let tour = 1;

function retirer(n) {
    allumettes = allumettes - n;

    if (allumettes <= 0) {
        alert("Personne " + tour + " a perdu !");
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

**Les concepts sont identiques.** La prochaine étape consistera à écrire du code textuel similaire.

---

## Ressources

- [MakeCode Arcade](https://arcade.makecode.com) - L'éditeur
- [Tutoriels MakeCode](https://arcade.makecode.com/tutorials) - Pour approfondir
- [Documentation officielle](https://arcade.makecode.com/docs) - Référence complète
