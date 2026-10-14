---
icon: lucide/sunrise
---

# Lundi Matin

> *Introduction aux bases de la programmation*

---

## Programme

| Horaire | Activité | Salle |
|---------|----------|-------|
| 08h30 - 09h00 | Accueil et prise de contact | R102 |
| 09h00 - 09h45 | Élaboration de la charte et formation des équipes | R102 |
| 09h45 - 10h00 | Introduction à la programmation | R102 |
| 10h00 - 10h30 | Pause | — |
| 10h30 - 11h15 | Activité : Donner des instructions | T155 / T157 |
| 11h15 - 12h00 | Découverte du jeu des allumettes | T155 / T157 |

---

## Accueil et prise de contact

Bienvenue dans cette semaine de découverte de l'algorithmique et de la programmation.

---

## Élaboration de la charte

La charte de comportement est construite collectivement via Wooclap. Elle définit les règles de fonctionnement pour la semaine.

→ [Template de la charte](../../supports/template-charte-comportement.md)

---

## Introduction à la programmation

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

## Activité : Donner des instructions

Cette activité en binôme permet de découvrir concrètement les **différents niveaux de langages de programmation** à travers trois exercices progressifs.

### Les trois niveaux

| Niveau | Activité | Vocabulaire autorisé |
|--------|----------|---------------------|
| **1. Labyrinthe** | Guider sa partenaire à travers un labyrinthe | 4 mots : `AVANCE`, `RECULE`, `GAUCHE`, `DROITE` |
| **2. Baguettes** | Placer des baguettes pour former un dessin | Placements : `POSE`, `HORIZONTAL`, `À CÔTÉ DE`... mais **pas de formes** |
| **3. Dessin** | Dessiner au crayon selon les instructions | Vocabulaire riche : `CERCLE`, `CARRÉ`, `GRAND`, `EN HAUT`... |

### Le message clé

!!! success "À retenir"

    **Plus le vocabulaire est riche, moins il faut d'instructions** — mais l'ordinateur, lui, doit toujours tout décomposer en opérations simples.

→ [Fiche complète de l'activité](../../supports/activities/activite-donner-instructions.md)

---

## Découverte du jeu des allumettes

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

→ [Guide complet du jeu des allumettes](../../supports/guide-jeu-allumettes.md)

---

## Navigation

- [← Retour au programme du Lundi](index.md)
- [Lundi après-midi →](apres-midi.md)
