---
icon: lucide/sunrise
---

# Mercredi Matin

> *Programmation physique avec le micro:bit*

!!! info "Salles de pratique"

    À partir du mercredi 21 octobre, les séances de pratique ont lieu en **T149** et **T151**. Chaque équipe se rend dans la salle qui lui est attribuée.

    | Salle | Équipes |
    |-------|---------|
    | **T149** | Cerise, Kiwi, Lime, Mangue, Mangue 2, Myrtille, Orange, Pastèque, Pêche |
    | **T151** | Ananas, Banane, Citron, Coco, Fraise, Poire, Pomme, Raisin |

---

## Programme

| Horaire | Activité | Salle |
|---------|----------|-------|
| 08h30 - 09h00 | Prise de température et objectifs | R102 |
| 09h00 - 09h30 | Présentation du micro:bit | T149 / T151 |
| 09h30 - 10h00 | Découverte de MakeCode pour micro:bit | T149 / T151 |
| 10h00 - 10h30 | Pause | — |
| 10h30 - 11h30 | Atelier : premiers programmes | T149 / T151 |
| 11h30 - 12h00 | Jeu des allumettes version micro:bit | T149 / T151 |

---

## Présentation du micro:bit

### Qu'est-ce que le micro:bit ?

Le micro:bit est une petite carte électronique programmable conçue pour l'apprentissage de l'informatique. Développée par la BBC, elle permet de créer des projets interactifs en quelques minutes.

### Les composants

```
         ┌─────────────────────────────────┐
         │  ○ ○ ○ ○ ○   [MATRIX LED 5x5]   │
         │  ○ ○ ○ ○ ○                      │
         │  ○ ○ ○ ○ ○     Capteur lumière  │
         │  ○ ○ ○ ○ ○     Capteur temp.    │
         │  ○ ○ ○ ○ ○                      │
         │                                 │
         │  [A]                      [B]   │  ← Boutons
         │                                 │
         │         ○ ○ ○ ○ ○               │  ← Connecteurs
         └─────────────────────────────────┘
                       │
                      USB
```

| Composant | Description |
|-----------|-------------|
| **Matrice LED** | 25 LEDs (5×5) pour afficher texte, images, animations |
| **Boutons A et B** | Deux boutons programmables |
| **Accéléromètre** | Détecte les mouvements et l'orientation |
| **Capteur de lumière** | Mesure l'intensité lumineuse |
| **Capteur de température** | Mesure la température ambiante |
| **Haut-parleur** | Joue des sons et de la musique (micro:bit V2) |

### Pourquoi le micro:bit ?

| Avantage | Description |
|----------|-------------|
| **Tangible** | Un vrai objet physique qu'on peut tenir et montrer |
| **Immédiat** | Le résultat est visible instantanément |
| **Ludique** | Créer des jeux, des instruments, des gadgets |
| **Progressif** | Commence simple, peut devenir complexe |

---

## Découverte de MakeCode pour micro:bit

### L'environnement

MakeCode pour micro:bit est un éditeur en ligne qui permet de programmer par blocs.

**URL** : [makecode.microbit.org](https://makecode.microbit.org){target="_blank"}

### L'interface

```
┌─────────────────────────────────────────────────────────────┐
│  [Simulateur]  │  [Catégories]  │  [Zone de code (blocs)]  │
│                │                │                          │
│   ┌────────┐   │  - Basique     │   ┌──────────────────┐   │
│   │ ○ ○ ○  │   │  - Entrée      │   │ au démarrage     │   │
│   │ ○ ○ ○  │   │  - Musique     │   │   ...            │   │
│   │ ○ ○ ○  │   │  - LED         │   └──────────────────┘   │
│   └────────┘   │  - Radio       │                          │
│                │  - Boucles     │   ┌──────────────────┐   │
│   [A]    [B]   │  - Logique     │   │ toujours         │   │
│                │  - Variables   │   │   ...            │   │
│   Secouer ↺    │  - ...         │   └──────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Catégories de blocs principales

| Catégorie | Couleur | Utilisation |
|-----------|---------|-------------|
| **Basique** | Bleu | Afficher texte, images, pause |
| **Entrée** | Rose | Détecter boutons, mouvements, capteurs |
| **Musique** | Violet | Jouer des notes et mélodies |
| **LED** | Rouge | Contrôler les LEDs individuellement |
| **Boucles** | Vert | Répéter des actions |
| **Logique** | Bleu clair | Conditions et comparaisons |
| **Variables** | Rouge foncé | Stocker des valeurs |

### Premier programme : afficher une icône

1. Ouvrir [makecode.microbit.org](https://makecode.microbit.org){target="_blank"}
2. Cliquer sur **Nouveau Projet**
3. Nommer le projet "Premier test"
4. Dans **Basique**, prendre le bloc `montrer l'icône`
5. Le placer dans `au démarrage`
6. Choisir une icône (cœur, smiley...)

Le simulateur à gauche affiche immédiatement le résultat.

### Transférer sur le micro:bit

1. Connecter le micro:bit par USB
2. Cliquer sur **Télécharger**
3. Le fichier `.hex` se télécharge
4. Le glisser sur le lecteur `MICROBIT`

!!! tip "Astuce"

    Le micro:bit clignote pendant le transfert. Attendre que le clignotement s'arrête avant de débrancher.

---

## Atelier : premiers programmes

### Exercice 1 : Animation simple

Créer une animation qui alterne entre deux images :

1. Dans `toujours`, ajouter `montrer l'icône` (cœur)
2. Ajouter `pause (ms)` avec 500
3. Ajouter `montrer l'icône` (cœur petit)
4. Ajouter `pause (ms)` avec 500

Résultat : un cœur qui bat.

### Exercice 2 : Réaction aux boutons

Créer un programme qui réagit aux boutons :

1. Dans **Entrée**, prendre `lorsque le bouton A est pressé`
2. Y ajouter `montrer l'icône` (smiley heureux)
3. Ajouter un autre bloc `lorsque le bouton B est pressé`
4. Y ajouter `montrer l'icône` (smiley triste)

### Exercice 3 : Utiliser l'accéléromètre

Créer un programme qui réagit aux mouvements :

1. Dans **Entrée**, prendre `lorsque secouer`
2. Y ajouter `montrer texte` avec un message

### Exercice 4 : Afficher la température

1. Dans `toujours`, ajouter `montrer nombre`
2. Dans **Entrée**, prendre `température (°C)`
3. Le placer dans `montrer nombre`

!!! note "Bon à savoir"

    La température mesurée est celle du processeur, légèrement plus élevée que l'air ambiant.

---

## Jeu des allumettes version micro:bit

### Objectif

Adapter le jeu des allumettes pour le micro:bit :

- Afficher le nombre d'allumettes restantes
- Utiliser les boutons pour retirer des allumettes
- Signaler la fin de partie

### Structure du programme

| Élément | Bloc MakeCode | Usage |
|---------|---------------|-------|
| **Variable** | `définir allumettes à 20` | Nombre d'allumettes |
| **Affichage** | `montrer nombre (allumettes)` | Afficher le compte |
| **Bouton A** | `lorsque le bouton A est pressé` | Retirer 1 |
| **Bouton B** | `lorsque le bouton B est pressé` | Retirer 2 |
| **A+B** | `lorsque le bouton A+B est pressé` | Retirer 3 |
| **Condition** | `si allumettes ≤ 0 alors` | Vérifier fin de partie |

### Guide pas à pas

1. **Initialisation**
   - Créer une variable `allumettes`
   - Dans `au démarrage`, `définir allumettes à 20`
   - Ajouter `montrer nombre (allumettes)`

2. **Bouton A (retirer 1)**
   - `lorsque le bouton A est pressé`
   - `modifier allumettes de -1`
   - `montrer nombre (allumettes)`

3. **Bouton B (retirer 2)**
   - `lorsque le bouton B est pressé`
   - `modifier allumettes de -2`
   - `montrer nombre (allumettes)`

4. **Boutons A+B (retirer 3)**
   - `lorsque le bouton A+B est pressé`
   - `modifier allumettes de -3`
   - `montrer nombre (allumettes)`

5. **Fin de partie**
   - Après chaque modification, ajouter :
   - `si allumettes ≤ 0 alors`
   - `montrer l'icône` (tête de mort ou X)
   - `jouer mélodie` (son de défaite)

### Extensions possibles

| Extension | Description |
|-----------|-------------|
| **Son** | Ajouter un bip à chaque action |
| **Animation** | Afficher une animation de victoire/défaite |
| **Reset** | Secouer pour recommencer une partie |
| **Adversaire IA** | Programmer la stratégie gagnante |

---

## Ressources MakeCode micro:bit

### Liens essentiels

| Ressource | URL | Description |
|-----------|-----|-------------|
| **Éditeur** | [makecode.microbit.org](https://makecode.microbit.org){target="_blank"} | Créer et modifier des projets |
| **Tutoriels** | [makecode.microbit.org/tutorials](https://makecode.microbit.org/tutorials){target="_blank"} | Guides pas à pas officiels |
| **Documentation** | [makecode.microbit.org/reference](https://makecode.microbit.org/reference){target="_blank"} | Référence complète des blocs |

### Tutoriels recommandés

Pour aller plus loin après les exercices de base :

1. [Flashing Heart](https://makecode.microbit.org/#tutorial:/tutorials/flashing-heart){target="_blank"} - Animation de cœur
2. [Name Tag](https://makecode.microbit.org/#tutorial:/tutorials/name-tag){target="_blank"} - Badge avec prénom
3. [Rock Paper Scissors](https://makecode.microbit.org/#tutorial:/tutorials/rock-paper-scissors){target="_blank"} - Pierre-feuille-ciseaux

---

## Questions fréquentes

??? question "Le micro:bit ne s'allume pas ?"

    Vérifier que le câble USB est bien connecté des deux côtés. Certains câbles ne transmettent que l'alimentation, pas les données.

??? question "Le programme ne se transfère pas ?"

    S'assurer que le micro:bit apparaît comme un lecteur amovible (MICROBIT). Si ce n'est pas le cas, essayer un autre câble USB ou un autre port.

??? question "Comment réinitialiser le micro:bit ?"

    Appuyer sur le petit bouton **Reset** à l'arrière de la carte. Le programme redémarre depuis le début.

??? question "Comment sauvegarder un projet ?"

    Les projets sont automatiquement sauvegardés dans le navigateur. Pour une sauvegarde plus sûre, cliquer sur l'icône de partage et télécharger le fichier `.hex`.

---

## Navigation

- [← Retour au programme du Mercredi](index.md){target="_blank"}
- [Mercredi après-midi →](apres-midi.md){target="_blank"}
