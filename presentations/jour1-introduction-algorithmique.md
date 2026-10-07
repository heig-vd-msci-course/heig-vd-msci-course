---
marp: true
theme: default
paginate: true
header: 'MSCI 2026 - Jour 1'
footer: 'ERACOM - Semaine 43'
style: |
  section {
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }
  h1 {
    color: #ff6b6b;
  }
  h2 {
    color: #4ecdc4;
  }
  code {
    background-color: #2d2d2d;
    color: #f8f8f2;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
---

# Jour 1 : De l'instruction à l'algorithme

## Bienvenue au cours MSCI !

**Semaine 43 - Lundi 20 octobre 2026**

---

# Qui sommes-nous ?

## L'équipe enseignante

- **Clarisse** - ...
- **Vincent** - ...

*Vos guides pour cette semaine de découverte !*

---

# Cette semaine, on va...

## Créer un jeu vidéo ensemble !

- **Lundi** : Découvrir l'algorithmique
- **Mardi** : Créer une page web
- **Mercredi** : Programmer un objet physique
- **Vendredi** : Présenter vos créations

*Jeudi : travail libre à la maison*

---

# Tour de table

## Présentez-vous en 10 secondes

1. Votre **prénom**
2. Une **passion créative**

*On commence par ici* 👉

---

# Prise de température

## Scannez le QR code

![Mentimeter QR](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=menti.com)

**menti.com** → Code : _______

---

# Vos attentes ?

## Qu'espérez-vous apprendre cette semaine ?

*Réponses en temps réel...*

---

# Vos craintes ?

## Qu'est-ce qui vous inquiète par rapport à la programmation ?

*Réponses en temps réel...*

---

# Spoiler

## On va démystifier tout ça !

La programmation, c'est **donner des instructions précises**.

Vous le faites déjà tous les jours.

---

# Notre charte

## Co-construisons nos règles ensemble

*Document à compléter collectivement*

---

# Charte : Respect mutuel

## Qu'est-ce que ça veut dire pour nous ?

*Vos propositions...*

---

# Charte : Entraide

## On apprend ensemble, pas les unes contre les autres

*Vos propositions...*

---

# Charte : Téléphones

## Outils ou distractions ?

*Votre règle collective...*

---

# Charte : Droit à l'erreur

## Se tromper = apprendre

Un bug n'est pas un échec, c'est une opportunité !

---

# Le projet de la semaine

## Le Jeu des Allumettes 🔥

*Un fil rouge qui traverse toute la semaine*

---

# Formation des équipes

## ~20 équipes de 4 personnes

Chaque équipe porte un **nom de fruit** :
- 🍎 Apple, 🍐 Pear, 🍌 Banana...

Et aura son **URL personnalisée** :
- `apple.msci.heig-vd.ch`
- `pear.msci.heig-vd.ch`

---

# Objectifs du jour

## À la fin de la journée, vous saurez :

1. Pourquoi les **instructions précises** sont la base
2. La **stratégie gagnante** du jeu des allumettes
3. Créer un **jeu en blocs visuels**

---

# ☕ PAUSE

## 15 minutes

*Retour à 10h00*

---

<!-- _class: invert -->

# Activité : Donner des instructions

## 👁️ Le jeu du binôme aveugle

---

# Les règles

## Une personne guide, l'autre exécute

1. L'**exécutrice** ne pose AUCUNE question
2. L'**instructrice** utilise UNIQUEMENT les mots autorisés
3. Pas de gestes !
4. **4 minutes** par essai

---

# Vocabulaire autorisé

| Commande | Signification |
|----------|---------------|
| `AVANCE X` | Fait X pas en avant |
| `RECULE X` | Fait X pas en arrière |
| `TOURNE GAUCHE` | Pivote 90° à gauche |
| `TOURNE DROITE` | Pivote 90° à droite |
| `STOP` | Arrête-toi |

---

# C'est parti !

## Formez des binômes

⏱️ **4 minutes** - Premier essai

*GO !*

---

# On inverse !

## L'autre personne guide maintenant

⏱️ **4 minutes** - Deuxième essai

*GO !*

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

**C'est pour ça que la précision compte !**

---

# ☕ PAUSE

## 15 minutes

*Retour à 11h00*

---

<!-- _class: invert -->

# Le Jeu des Allumettes

## 🔥 Découverte

---

# Les règles

```
| | | | | | | | | | | | | | | | | | | | |
1 2 3 4 5 6 7 8 9 ...                 21
```

- **21 allumettes** au départ
- À tour de rôle, retirer **1, 2 ou 3**
- Celle qui prend la **dernière** a **PERDU**

---

# Jouons !

## En équipes de 4

1. Prenez vos allumettes/cure-dents
2. Jouez plusieurs parties
3. Cherchez une stratégie...

⏱️ **15 minutes**

---

# Qui a trouvé une stratégie ?

## Partagez vos découvertes !

*Levez la main...*

---

# Le secret

## Les positions gagnantes

```
21 → 17 → 13 → 9 → 5 → 1 → GAGNÉ !
```

*Multiples de 4 + 1*

---

# Pourquoi ça marche ?

## La règle du complément à 4

Quoi que l'adversaire joue, tu peux compléter pour faire 4 :

- Elle prend **1** → tu prends **3** (1+3=4)
- Elle prend **2** → tu prends **2** (2+2=4)
- Elle prend **3** → tu prends **1** (3+1=4)

---

# La formule magique

```
allumettes_à_retirer = (restantes - 1) % 4
```

Le `%` (modulo) donne le **reste de la division**.

---

# C'est un algorithme !

## Les ingrédients d'un programme

| Concept | Dans le jeu |
|---------|-------------|
| **Variable** | Nombre d'allumettes |
| **Condition** | "Si reste 1..." |
| **Boucle** | Répéter les tours |
| **Fonction** | La stratégie |

---

# Démystifier le code

## En 20 lignes, on peut faire un jeu !

*Démonstration live sur JSFiddle...*

---

# Le web en 3 langages

## HTML + CSS + JavaScript

| Langage | Rôle | Analogie |
|---------|------|----------|
| **HTML** | Structure | Le squelette |
| **CSS** | Style | La décoration |
| **JavaScript** | Interaction | L'électricité |

---

# 🍽️ REPAS

## Bon appétit !

*Retour à 13h00*

---

<!-- _class: invert -->

# Création sans code

## Premiers pas dans l'interactivité

---

# Le no-code, c'est quoi ?

## Programmer sans écrire de texte

- Des **blocs** qu'on assemble
- Comme des Lego !
- Les mêmes concepts qu'en "vrai" code

---

# Pourquoi commencer par ça ?

## Se concentrer sur la logique

- Pas de syntaxe à mémoriser
- Pas de fautes de frappe
- Visualisation immédiate

*Demain, on passera au "vrai" code !*

---

# MakeCode Arcade

## arcade.makecode.com

Un outil pour créer des **jeux 2D rétro** !

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

## Suivez sur vos écrans !

1. Ouvrez **arcade.makecode.com**
2. Cliquez sur **"New Project"**
3. Nommez-le **"Jeu-Allumettes"**

---

# Étape 1 : La variable

## Créer notre compteur

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

# ☕ PAUSE

## 15 minutes

*Retour à 15h00*

---

# Étape 4 : Détecter la fin

## Condition : si allumettes <= 0

```
┌────────────────────────────────────┐
│ if allumettes <= 0 then            │
│   splash "Tu as perdu !"           │
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

## Personnalisez votre jeu !

- Graphismes
- Sons
- Messages personnalisés

⏱️ **30 minutes**

---

# Galerie éclair

## Qui veut montrer son jeu ?

*2-3 équipes volontaires...*

---

<!-- _class: invert -->

# Quiz Wooclap

## Récapitulatif de la journée

---

# Rejoignez le quiz

## wooclap.com

**Code : _______**

---

# Récap de la journée

## Vous avez appris...

1. ✅ L'importance des **instructions précises**
2. ✅ La **stratégie gagnante** (multiples de 4 + 1)
3. ✅ Les concepts : **variable, condition, boucle**
4. ✅ Créer un jeu avec **MakeCode Arcade**

---

# Demain

## HTML, CSS et JavaScript

On crée la **page web** du jeu des allumettes !

Avec du **vrai code** cette fois 😎

---

# Devoirs (optionnel)

## Réfléchissez au design !

- Quelle couleur pour votre équipe ?
- Quel style voulez-vous ?
- Des idées d'améliorations ?

---

# À demain !

## 8h30 - Salle X

**Merci pour cette première journée !** 🎉

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
- Doigts !

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

Cours créé avec ❤️ pour les créatives de demain.

*Semaine 43 - Octobre 2026*
