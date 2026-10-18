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
    │     20      │  ← valeur
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

### L'événement

Un **événement** est un déclencheur qui lance une action.

```
QUAND bouton A pressé ALORS
    retirer(1)
```

Dans le jeu des allumettes, les boutons A, B et A+B sont des événements qui déclenchent le retrait d'allumettes.

### Les opérateurs

Les **opérateurs** sont des symboles pour calculer et comparer.

| Symbole | Signification |
|---------|---------------|
| `=` | Assigner une valeur |
| `-` | Soustraire |
| `==` | Est égal à ? |
| `<=` | Inférieur ou égal ? |
| `>` | Supérieur à ? |

→ [Fiche récapitulative des concepts](../../supports/cheatsheet-concepts-algo.md){target="_blank"}

---

## Découverte de MakeCode Arcade

### Présentation

MakeCode Arcade est un environnement de programmation visuelle permettant de créer des **jeux 2D rétro** (style Game Boy) avec des blocs. Développé par Microsoft, cet outil est conçu pour l'apprentissage de la programmation.

**URL** : [arcade.makecode.com](https://arcade.makecode.com){target="_blank"}

### Pourquoi utiliser MakeCode Arcade ?

| Avantage | Description |
|----------|-------------|
| **Pas de code à écrire** | Les programmes se construisent en assemblant des blocs colorés |
| **Apprentissage visuel** | Chaque couleur de bloc correspond à une catégorie de fonctionnalités |
| **Résultat immédiat** | Le simulateur affiche le jeu en temps réel pendant la création |
| **Aucune installation** | Tout fonctionne directement dans le navigateur web |

### L'interface

```
┌─────────────────────────────────────────────────────────────┐
│  [Simulateur]  │  [Catégories]  │  [Zone de code (blocs)]  │
│                │                │                          │
│   ┌────────┐   │  - Boucles     │   ┌──────────────────┐   │
│   │  ÉCRAN │   │  - Logique     │   │ au démarrage     │   │
│   │   DU   │   │  - Variables   │   │   ...            │   │
│   │   JEU  │   │  - Sprites     │   └──────────────────┘   │
│   └────────┘   │  - Contrôleur  │                          │
│                │  - Jeu         │                          │
│   [A]    [B]   │  - ...         │                          │
└─────────────────────────────────────────────────────────────┘
```

### Catégories de blocs utiles

Pour le jeu des allumettes, quatre catégories sont principalement utilisées :

| Catégorie | Couleur | Utilisation |
|-----------|---------|-------------|
| **Variables** | Orange-Rouge | Créer et modifier `allumettes`, `tour` |
| **Contrôleur** | Rose | Détecter les appuis sur les boutons A, B, A+B |
| **Logique** | Bleu clair | Créer des conditions (si... alors...) |
| **Jeu** | Violet | Afficher des messages, terminer la partie |

### Contrôles du simulateur

Le simulateur à gauche de l'écran permet de tester le jeu sans console physique :

| Contrôle | Au clavier | Action |
|----------|------------|--------|
| **Bouton A** | Touche `Z` ou `A` | Retirer 1 allumette |
| **Bouton B** | Touche `X` ou `B` | Retirer 2 allumettes |
| **A + B** | `Z` + `X` ensemble | Retirer 3 allumettes |
| **Flèches** | Flèches du clavier | Navigation dans les menus |
| **Menu** | Touche `Entrée` | Recommencer la partie |

!!! tip "Astuce"

    Cliquer une fois sur le simulateur pour l'activer avant d'utiliser le clavier.

### Procédure d'accès

1. Ouvrir un navigateur web
2. Accéder à **arcade.makecode.com**
3. Cliquer sur **"Nouveau Projet"**
4. Nommer le projet **"Jeu-Allumettes"**

---

## Atelier : Jeu des allumettes en blocs

### Objectif

Créer une version jouable du jeu des allumettes avec MakeCode Arcade.

### Concepts utilisés

| Concept | Dans MakeCode | Application |
|---------|--------------|-------------|
| **Variable** | Variables → Créer une Variable | `allumettes`, `tour` |
| **Assignation** | définir [var] à [valeur] | `définir allumettes à 20` |
| **Événement** | Contrôleur → quand bouton pressé | Détecter les appuis |
| **Condition** | Logique → si...alors...sinon | Vérifier si allumettes <= 0 |
| **Affichage** | Jeu → splash | Afficher les messages |

### Guide pas à pas

→ [Template MakeCode Arcade - Jeu des Allumettes](../../code-templates/makecode-arcade/jeu-allumettes-compact-instructions.md){target="_blank"}

<!-- LIEN SOLUTION - Décommenter pour activer
!!! tip "Besoin d'aide ?"

    → [Voir la solution complète](../../code-templates/makecode-arcade/solution.md){target="_blank"}
-->

---

## Ressources MakeCode Arcade

### Liens essentiels

| Ressource | URL | Description |
|-----------|-----|-------------|
| **Éditeur** | [arcade.makecode.com](https://arcade.makecode.com){target="_blank"} | Créer et modifier des projets |
| **Tutoriels** | [arcade.makecode.com/tutorials](https://arcade.makecode.com/tutorials){target="_blank"} | Guides pas à pas officiels |
| **Documentation** | [arcade.makecode.com/docs](https://arcade.makecode.com/docs){target="_blank"} | Référence complète des blocs |

### Catégories de blocs - Référence rapide

| Catégorie | Blocs importants | Utilisation |
|-----------|------------------|-------------|
| **Variables** | `Créer une Variable`, `définir [var] à`, `modifier [var] de` | Stocker le nombre d'allumettes et le tour |
| **Contrôleur** | `quand bouton A pressé`, `quand bouton B pressé` | Réagir aux actions des personnes |
| **Logique** | `si...alors...sinon`, comparaisons (`<`, `>`, `=`) | Vérifier les conditions de fin |
| **Jeu** | `splash`, `fin de jeu`, `afficher texte long` | Afficher des informations à l'écran |
| **Texte** | `joindre`, `""` | Combiner du texte et des variables |

### Partager un projet

Pour partager un projet avec son équipe ou le soumettre :

1. Cliquer sur le bouton **"Partager"** (icône de partage en haut à droite)
2. Cliquer sur **"Publier le projet"**
3. Copier l'URL générée (format : `https://arcade.makecode.com/XXXXX-XXXXX-XXXXX`)
4. Partager cette URL

!!! note "Bon à savoir"

    L'URL de partage permet d'ouvrir le projet et de voir le code, mais pas de le modifier. Chaque personne travaille sur sa propre copie.

---

## Synthèse

### Concepts essentiels de la journée

| Concept | Définition | Exemple |
|---------|------------|---------|
| **Algorithme** | Suite d'instructions ordonnées | Recette de cuisine |
| **Variable** | Espace de stockage nommé | `allumettes = 20` |
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

??? question "Comment sauvegarder son projet MakeCode ?"

    Les projets sont **sauvegardés automatiquement** dans le navigateur. Il est possible de les retrouver sur la page d'accueil de MakeCode Arcade dans la section "Mes Projets".

    Pour une sauvegarde plus permanente, utiliser le bouton **"Enregistrer"** (disquette) pour télécharger un fichier `.png` contenant le projet. Ce fichier peut être glissé-déposé dans MakeCode pour restaurer le projet.

??? question "Comment partager son projet avec l'équipe ?"

    1. Cliquer sur **"Partager"** en haut à droite
    2. Cliquer sur **"Publier le projet"**
    3. Copier l'URL générée et l'envoyer aux membres de l'équipe

    Chaque personne pourra ouvrir le projet et créer sa propre copie pour le modifier.

??? question "Comment recommencer une partie dans le jeu ?"

    Deux options sont disponibles :

    - **Dans le simulateur** : Cliquer sur le bouton de redémarrage (icône de flèche circulaire) sous le simulateur
    - **Dans le code** : Ajouter un bloc `quand bouton menu pressé` qui réinitialise les variables `allumettes` et `tour`

    Voir le [template complet](../../code-templates/makecode-arcade/jeu-allumettes-compact-instructions.md#test-et-depannage){target="_blank"} pour le dépannage.

??? question "Les boutons ne fonctionnent pas dans le simulateur ?"

    - S'assurer d'avoir **cliqué sur le simulateur** pour l'activer
    - Vérifier que les blocs sont bien **à l'intérieur** du bloc `quand bouton pressé`
    - Utiliser les touches `Z` (bouton A) et `X` (bouton B) au clavier

---

## Navigation

- [← Lundi matin](matin.md){target="_blank"}
- [← Retour au programme du Lundi](index.md){target="_blank"}
- [Mardi →](../mardi.md){target="_blank"}
