---
marp: true
theme: msci-eracom
paginate: true
header: 'MSCI 2026 - Lundi Après-midi'
footer: 'ERACOM - Semaine 43'
---

# Lundi : Introduction (Après-midi)

## Programmation visuelle avec MakeCode Arcade

**Lundi 19 octobre 2026**

---

# Planning de l'après-midi

| Horaire | Activité |
|---------|----------|
| 13h00 | Introduction à la programmation |
| 13h15 | Découverte de MakeCode Arcade |
| 14h00 | Atelier : Jeu des allumettes en blocs - Partie 1 |
| 14h45 | Pause |
| 15h00 | Atelier : Jeu des allumettes en blocs - Partie 2 |
| 15h45 | Synthèse et quiz Wooclap |

---

<!-- _class: invert -->

# Introduction à la programmation

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
3. **set allumettes to 20**

---

# Étape 2 : Afficher

## Montrer le nombre

Utilisez le bloc **splash** :

```
splash "20 allumettes"
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

<!-- _class: invert -->
<!-- _paginate: false -->

<div class="center">

# PAUSE

## 15 minutes

*Retour à 15h00*

</div>

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
