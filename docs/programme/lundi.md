---
icon: lucide/play
---

# Lundi

## Introduction

> *Introduction aux bases de la programmation à travers le jeu des allumettes.*

---

## Objectifs du jour

À l'issue de cette journée, il sera possible de :

1. **Expliquer** l'importance de la précision des instructions en programmation
2. **Appliquer** la stratégie gagnante du jeu des allumettes
3. **Créer** une première version du jeu en programmation visuelle (blocs)

---

## Programme de la journée

### Matin : Introduction

| Horaire | Activité | Durée |
|---------|----------|-------|
| 08h30 - 09h00 | Accueil et prise de contact | 30 min |
| 09h00 - 09h45 | Élaboration de la charte et formation des équipes | 45 min |
| 09h45 - 10h00 | Pause | 15 min |
| 10h00 - 10h45 | Activité : Donner des instructions | 45 min |
| 10h45 - 11h00 | Pause | 15 min |
| 11h00 - 11h45 | Découverte du jeu des allumettes | 45 min |
| 11h45 - 12h00 | Introduction à la programmation | 15 min |

### Après-midi : Programmation visuelle

| Horaire | Activité | Durée |
|---------|----------|-------|
| 13h00 - 13h15 | Introduction à la programmation sans code | 15 min |
| 13h15 - 14h00 | Découverte de MakeCode Arcade | 45 min |
| 14h00 - 14h45 | Atelier : Jeu des allumettes en blocs - Partie 1 | 45 min |
| 14h45 - 15h00 | Pause | 15 min |
| 15h00 - 15h45 | Atelier : Jeu des allumettes en blocs - Partie 2 | 45 min |
| 15h45 - 16h15 | Synthèse et quiz Wooclap | 30 min |

---

## Ressources

### Présentation

!!! tip "Slides du jour"

    - [Présentation : Introduction à l'algorithmique (HTML)](../slides/lundi-introduction-algorithmique.html)
    - [Présentation : Introduction à l'algorithmique (PDF)](../slides/lundi-introduction-algorithmique.pdf)

### Supports pédagogiques

!!! info "Documents de référence"

    - [Guide du Jeu des Allumettes](../supports/guide-jeu-allumettes.md) - Règles et stratégie
    - [Fiche Concepts Algorithmiques](../supports/cheatsheet-concepts-algo.md) - Variable, condition, boucle

### Activités

!!! note "Fiches d'activités"

    - [Activité "Donner des instructions"](../supports/activities/activite-donner-instructions.md) - Exercice en binôme

### Code et projets

!!! example "Templates"

    - [Template MakeCode Arcade - Jeu des Allumettes](../code-templates/makecode/jeu-allumettes-arcade.md) - Guide de réalisation

---

## Outils

### MakeCode Arcade

**URL** : https://arcade.makecode.com

MakeCode Arcade est un environnement de programmation visuelle permettant de créer des jeux 2D à l'aide de blocs.

??? info "Procédure d'accès"

    1. Ouvrir un navigateur web
    2. Accéder à **arcade.makecode.com**
    3. Cliquer sur **"New Project"**
    4. Nommer le projet **"Jeu-Allumettes"**

### JSFiddle

**URL** : https://jsfiddle.net

Environnement de test pour le code HTML, CSS et JavaScript.

---

## Concepts clés

### L'algorithme

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

---

## Le jeu des allumettes

### Règles

- **21 allumettes** au départ
- Chaque personne retire **1, 2 ou 3** allumettes à son tour
- La personne qui retire la **dernière** allumette a **perdu**

### Stratégie gagnante

!!! success "Principe : les multiples de 4"

    Pour garantir la victoire, il faut laisser un nombre d'allumettes égal à un multiple de 4, plus 1 :

    **21 → 17 → 13 → 9 → 5 → 1 → Victoire**

    Quelle que soit la quantité retirée par l'adversaire, il est possible de compléter à 4 :

    - Adversaire retire 1 → retirer 3 (1+3=4)
    - Adversaire retire 2 → retirer 2 (2+2=4)
    - Adversaire retire 3 → retirer 1 (3+1=4)

### Formule

```
allumettes_à_retirer = (restantes - 1) % 4
```

L'opérateur `%` (modulo) retourne le reste de la division entière.

---

## Synthèse

### Concepts essentiels

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

## Navigation

- [Mardi - Web](mardi.md)

## Suite du programme

!!! info "Jour 2 : HTML, CSS et JavaScript"

    La journée suivante introduit le développement web avec :

    - **HTML** : structure du contenu
    - **CSS** : mise en forme visuelle
    - **JavaScript** : interactions et logique

---

## Questions fréquentes

??? question "Aucune expérience préalable en programmation ?"

    Ce cours est conçu pour les personnes débutantes. La progression commence par la programmation visuelle (blocs) avant d'aborder le code textuel.

??? question "Comment gérer les erreurs ?"

    Les erreurs (ou "bugs") font partie intégrante du processus d'apprentissage en programmation. Elles constituent des opportunités de compréhension.

??? question "Pourquoi le jeu des allumettes ?"

    Ce jeu simple contient tous les éléments fondamentaux d'un programme : variables, conditions et boucles. La stratégie gagnante constitue un algorithme concret.
