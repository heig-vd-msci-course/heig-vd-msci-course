---
icon: lucide/sunset
---

# Lundi Après-midi

> *Programmation visuelle avec MakeCode Arcade*

---

## Programme

| Horaire | Activité | Salle |
|---------|----------|-------|
| 13h00 - 13h15 | Introduction à la programmation | T155 / T157 |
| 13h15 - 14h00 | Découverte de MakeCode Arcade | T155 / T157 |
| 14h00 - 14h45 | Atelier : Jeu des allumettes en blocs - Partie 1 | T155 / T157 |
| 14h45 - 15h00 | Pause | — |
| 15h00 - 15h45 | Atelier : Jeu des allumettes en blocs - Partie 2 | T155 / T157 |
| 15h45 - 16h15 | Synthèse et quiz Wooclap | T155 / T157 |

---

## Introduction à la programmation

La programmation visuelle permet de créer des programmes en assemblant des **blocs** plutôt qu'en écrivant du code textuel. Avant de commencer, voici les concepts fondamentaux.

### Qu'est-ce qu'un algorithme ?

Un **algorithme** est une suite d'instructions ordonnées permettant de résoudre un problème.

```
Exemple : Préparation de pâtes
─────────────────────────────
1. Remplir une casserole d'eau
2. Porter à ébullition
3. Ajouter les pâtes
4. Attendre 10 minutes
5. Égoutter
6. Servir
```

### La variable

Une **variable** est un espace de stockage nommé contenant une valeur.

```
    ┌─────────────┐
    │ allumettes  │  ← nom (identifiant)
    ├─────────────┤
    │     21      │  ← valeur
    └─────────────┘
```

### La condition

Une **condition** permet d'exécuter des instructions différentes selon un test logique.

```
SI allumettes == 0 ALORS
    afficher("Partie terminée")
SINON
    afficher("Continuer la partie")
```

### La boucle

Une **boucle** permet de répéter des instructions tant qu'une condition est vérifiée.

```
TANT QUE allumettes > 0 FAIRE
    choisir(1, 2 ou 3)
    retirer allumettes
FIN TANT QUE
```

→ [Fiche récapitulative des concepts](../../supports/cheatsheet-concepts-algo.md)

---

## Découverte de MakeCode Arcade

### Présentation

MakeCode Arcade est un environnement de programmation visuelle permettant de créer des **jeux 2D rétro** (style Game Boy) avec des blocs.

**URL** : https://arcade.makecode.com

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

### Procédure d'accès

1. Ouvrir un navigateur web
2. Accéder à **arcade.makecode.com**
3. Cliquer sur **"New Project"**
4. Nommer le projet **"Jeu-Allumettes"**

---

## Atelier : Jeu des allumettes en blocs

### Objectif

Créer une version jouable du jeu des allumettes avec MakeCode Arcade.

### Concepts utilisés

| Concept | Dans MakeCode | Application |
|---------|--------------|-------------|
| **Variable** | Variables → Make a variable | `allumettes`, `tour` |
| **Assignation** | set [var] to [value] | `set allumettes to 21` |
| **Événement** | Controller → on button pressed | Détecter les appuis |
| **Condition** | Logic → if...then...else | Vérifier si allumettes <= 0 |
| **Affichage** | Game → splash | Afficher les messages |

### Guide pas à pas

→ [Template MakeCode Arcade - Jeu des Allumettes](../../code-templates/makecode/jeu-allumettes-arcade.md)

---

## Synthèse

### Concepts essentiels de la journée

| Concept | Définition | Exemple |
|---------|------------|---------|
| **Algorithme** | Suite d'instructions ordonnées | Recette de cuisine |
| **Variable** | Espace de stockage nommé | `allumettes = 21` |
| **Condition** | Test logique | `SI reste 1...` |
| **Boucle** | Répétition d'instructions | Jouer jusqu'à la fin |
| **Événement** | Déclencheur d'action | Clic sur un bouton |

### Point clé

!!! quote "À retenir"

    Un ordinateur exécute **exactement** les instructions fournies.
    Ni plus, ni moins, ni autrement.

---

## Questions fréquentes

??? question "Aucune expérience préalable en programmation ?"

    Ce cours est conçu pour les personnes débutantes. La progression commence par la programmation visuelle (blocs) avant d'aborder le code textuel.

??? question "Comment gérer les erreurs ?"

    Les erreurs (ou "bugs") font partie intégrante du processus d'apprentissage en programmation. Elles constituent des opportunités de compréhension.

??? question "Pourquoi le jeu des allumettes ?"

    Ce jeu simple contient tous les éléments fondamentaux d'un programme : variables, conditions et boucles. La stratégie gagnante constitue un algorithme concret.

---

## Navigation

- [← Lundi matin](matin.md)
- [← Retour au programme du Lundi](index.md)
- [Mardi →](../mardi.md)
