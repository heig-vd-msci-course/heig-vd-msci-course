---
marp: true
theme: msci-eracom
paginate: true
header: 'MSCI 2026 - Lundi'
footer: 'ERACOM - Semaine 43'
---

# Lundi : Introduction

## Bienvenue au cours Algorithmique et programmation

**Lundi 20 octobre 2026**

---

# Qui sommes-nous ?

## L'équipe enseignante

- **Clarisse Fleurimont** - Ingénieure logiciel, formatrice, assistante de recherche HEIG-VD
- **Vincent** - ...

---

# Cette semaine

## Créer un jeu vidéo ensemble

- **Lundi** : Découvrir l'algorithmique
- **Mardi** : Créer une page web
- **Mercredi** : Programmer un objet physique
- **Vendredi** : Présenter vos créations

*Jeudi : travail libre à la maison*

---

# Planning du jour

## Matin : Introduction

| Horaire | Activité |
|---------|----------|
| 08h30 - 09h00 | Accueil et prise de contact |
| 09h00 - 09h45 | Élaboration de la charte et formation des équipes |
| 09h45 - 10h00 | Pause |
| 10h00 - 10h45 | Activité : Donner des instructions |
| 10h45 - 11h00 | Pause |
| 11h00 - 11h45 | Découverte du jeu des allumettes |
| 11h45 - 12h00 | Introduction à la programmation |

---

# Planning du jour

## Après-midi : Programmation visuelle

| Horaire | Activité |
|---------|----------|
| 13h00 - 13h15 | Introduction à la programmation sans code |
| 13h15 - 14h00 | Découverte de MakeCode Arcade |
| 14h00 - 14h45 | Atelier : Jeu des allumettes en blocs - Partie 1 |
| 14h45 - 15h00 | Pause |
| 15h00 - 15h45 | Atelier : Jeu des allumettes en blocs - Partie 2 |
| 15h45 - 16h15 | Synthèse et quiz Wooclap |

---

# Objectifs du jour

## À la fin de la journée, vous saurez :

1. Pourquoi les **instructions précises** sont la base de la programmation
2. La **stratégie gagnante** du jeu des allumettes
3. Créer un **jeu en blocs visuels** avec MakeCode Arcade

---

<!-- _class: invert -->

# Accueil et prise de contact

## 08h30 - 09h00

---

# Prise de température

## Scannez le QR code

![Wooclap QR](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=wooclap.com)

**wooclap.com** → Code : _______

---

# Le projet de la semaine

## Le Jeu des Allumettes

Un fil rouge qui traverse toute la semaine

---

<!-- _class: invert -->

# Élaboration de la charte et formation des équipes

## 09h00 - 09h45

---

# Co-construction de la charte

## Vos attentes et engagements

Rendez-vous sur **Wooclap** pour participer :

1. **Nuage de mots** : Quelles sont vos attentes pour cette semaine ?
2. **Question ouverte** : Quelles règles proposez-vous pour bien travailler ensemble ?

---

# Formation des équipes

## Environ 20 équipes de 3-4 personnes

Chaque équipe porte un **nom de fruit** :
- Apple, Pear, Banana, Cherry, Mango...

Et aura son **URL personnalisée** :
- `apple.msci.heig-vd.ch`
- `pear.msci.heig-vd.ch`

---

# PAUSE

## 15 minutes

*Retour à 10h00*

---

<!-- _class: invert -->

# Activité : Donner des instructions

## 10h00 - 10h45

---

# Le jeu du binôme aveugle

## Une personne guide, l'autre exécute

**Règles :**

1. La personne qui exécute ne pose AUCUNE question
2. La personne qui guide utilise UNIQUEMENT les mots autorisés
3. Pas de gestes
4. **4 minutes** par essai

---

# Vocabulaire autorisé

| Commande | Signification |
|----------|---------------|
| `AVANCE X` | Fait X pas en avant |
| `RECULE X` | Fait X pas en arrière |
| `TOURNE GAUCHE` | Pivote 90 degrés à gauche |
| `TOURNE DROITE` | Pivote 90 degrés à droite |
| `STOP` | Arrête-toi |

---

# C'est parti

## Formez des binômes

**4 minutes** - Premier essai

---

# On inverse

## L'autre personne guide maintenant

**4 minutes** - Deuxième essai

---

# Débriefing

## Qu'est-ce qui était difficile ?

- Les malentendus ?
- La précision ?
- La frustration ?

---

# La leçon

## Un ordinateur = votre binôme

Il exécute **EXACTEMENT** ce qu'on lui dit.

Pas d'interprétation.
Pas de "bon sens".
Pas de questions.

**C'est pour cela que la précision compte.**

---

# PAUSE

## 15 minutes

*Retour à 11h00*

---

<!-- _class: invert -->

# Découverte du jeu des allumettes

## 11h00 - 11h45

---

# Les règles du jeu

```
| | | | | | | | | | | | | | | | | | | | |
1 2 3 4 5 6 7 8 9 ...                 21
```

- **21 allumettes** au départ
- À tour de rôle, retirer **1, 2 ou 3** allumettes
- La personne qui prend la **dernière** a **PERDU**

---

# Jouons

## En équipes de 4

1. Prenez vos allumettes ou cure-dents
2. Jouez plusieurs parties
3. Cherchez une stratégie...

**15 minutes**

---

# Qui a trouvé une stratégie ?

## Partagez vos découvertes

---

# Le secret

## Les positions gagnantes

```
21 → 17 → 13 → 9 → 5 → 1 → GAGNÉ
```

*Multiples de 4 + 1*

---

# Pourquoi cela fonctionne ?

## La règle du complément à 4

Quoi que l'adversaire joue, on peut compléter pour faire 4 :

- Adversaire prend **1** → on prend **3** (1+3=4)
- Adversaire prend **2** → on prend **2** (2+2=4)
- Adversaire prend **3** → on prend **1** (3+1=4)

---

<!-- _class: invert -->

# Introduction à la programmation

## 11h45 - 12h00

---

# La formule mathématique

```
allumettes_à_retirer = (restantes - 1) % 4
```

Le `%` (modulo) donne le **reste de la division**.

---

# C'est un algorithme

## Les ingrédients d'un programme

| Concept | Dans le jeu |
|---------|-------------|
| **Variable** | Nombre d'allumettes |
| **Condition** | "Si reste 1..." |
| **Boucle** | Répéter les tours |
| **Fonction** | La stratégie |

---

# Le web en 3 langages

## HTML + CSS + JavaScript

| Langage | Rôle | Analogie |
|---------|------|----------|
| **HTML** | Structure | Le squelette |
| **CSS** | Style | La décoration |
| **JavaScript** | Interaction | L'électricité |

---

# REPAS

## Bon appétit

*Retour à 13h00*

---

<!-- _class: invert -->

# Introduction à la programmation sans code

## 13h00 - 13h15

---

# Le no-code, c'est quoi ?

## Programmer sans écrire de texte

- Des **blocs** qu'on assemble
- Comme des Lego
- Les mêmes concepts qu'en "vrai" code

---

# Pourquoi commencer par cela ?

## Se concentrer sur la logique

- Pas de syntaxe à mémoriser
- Pas de fautes de frappe
- Visualisation immédiate

*Demain, on passera au "vrai" code*

---

<!-- _class: invert -->

# Découverte de MakeCode Arcade

## 13h15 - 14h00

---

# MakeCode Arcade

## arcade.makecode.com

Un outil pour créer des **jeux 2D rétro**

---

# L'interface

```
┌─────────────┬────────────────┬──────────────┐
│ Catégories  │ Zone de code   │ Simulateur   │
│             │ (blocs)        │              │
│ - Loops     │                │   [ÉCRAN]    │
│ - Logic     │                │              │
│ - Variables │                │   [A]  [B]   │
└─────────────┴────────────────┴──────────────┘
```

---

# Live coding

## Suivez sur vos écrans

1. Ouvrez **arcade.makecode.com**
2. Cliquez sur **"New Project"**
3. Nommez-le **"Jeu-Allumettes"**

---

# Étape 1 : La variable

## Créer le compteur

1. **Variables** → **Make a Variable**
2. Nom : `allumettes`
3. **set allumettes to 21**

---

# Étape 2 : Afficher

## Montrer le nombre

Utilisez le bloc **splash** :

```
splash "21 allumettes"
```

---

# Étape 3 : Les boutons

## Réagir aux clics

- **Bouton A** : Retirer 1
- **Bouton B** : Retirer 2
- **A + B** : Retirer 3

---

# Code du bouton A

```
┌────────────────────────────────────┐
│ on A button pressed                │
│   change allumettes by -1          │
│   splash (join "Reste: " allumettes)│
└────────────────────────────────────┘
```

---

<!-- _class: invert -->

# Atelier : Jeu des allumettes en blocs - Partie 1

## 14h00 - 14h45

---

# Étape 4 : Détecter la fin

## Condition : si allumettes <= 0

```
┌────────────────────────────────────┐
│ if allumettes <= 0 then            │
│   splash "Perdu !"                 │
│   game over LOSE                   │
└────────────────────────────────────┘
```

---

# Étape 5 : Les tours

## Alterner joueur 1 et joueur 2

Nouvelle variable : `tour`

```
if tour = 1 then
  set tour to 2
else
  set tour to 1
```

---

# Travail en équipe

## Implémentez les fonctionnalités de base

- Variable pour le nombre d'allumettes
- Boutons pour retirer 1, 2 ou 3
- Détection de fin de partie

**45 minutes**

---

# PAUSE

## 15 minutes

*Retour à 15h00*

---

<!-- _class: invert -->

# Atelier : Jeu des allumettes en blocs - Partie 2

## 15h00 - 15h45

---

# Personnalisez votre jeu

## Ajoutez vos touches personnelles

- Graphismes
- Sons
- Messages personnalisés
- Variantes de règles

**45 minutes**

---

# Galerie éclair

## Qui veut montrer son jeu ?

*2-3 équipes volontaires...*

---

<!-- _class: invert -->

# Synthèse et quiz Wooclap

## 15h45 - 16h15

---

# Rejoignez le quiz

## wooclap.com

**Code : _______**

---

# Récapitulatif de la journée

## Vous avez appris...

1. L'importance des **instructions précises**
2. La **stratégie gagnante** (multiples de 4 + 1)
3. Les concepts : **variable, condition, boucle**
4. Créer un jeu avec **MakeCode Arcade**

---

# Demain

## HTML, CSS et JavaScript

On crée la **page web** du jeu des allumettes

Avec du **vrai code** cette fois

---

# Devoirs (optionnel)

## Réfléchissez au design

- Quelle couleur pour votre équipe ?
- Quel style voulez-vous ?
- Des idées d'améliorations ?

---

# À demain

## 8h30 - Salle X

**Merci pour cette première journée**

---

<!-- _class: invert -->

# Annexes

## Slides de secours

---

# Si problème technique

## Plan B - Version papier

Le jeu fonctionne très bien avec :
- Cure-dents
- Papier et crayon
- Doigts

---

# Liens utiles

- **MakeCode Arcade** : arcade.makecode.com
- **Scratch** : scratch.mit.edu
- **JSFiddle** : jsfiddle.net

---

# Contact

## Questions après le cours ?

*(Coordonnées à compléter)*

---

# Crédits

## MSCI 2026 - ERACOM

Cours créé pour les personnes créatives de demain.

*Semaine 43 - Octobre 2026*
