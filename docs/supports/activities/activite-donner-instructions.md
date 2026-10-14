# Donner des instructions

## Aperçu

| Durée | Format | Matériel |
|-------|--------|----------|
| 45 min | Binômes | Labyrinthes imprimés, baguettes/allumettes, feuilles et crayons |

## Objectifs pédagogiques

- Comprendre qu'un ordinateur exécute exactement ce qui lui est indiqué
- Expérimenter la difficulté de formuler des instructions précises
- **Découvrir les différents niveaux d'abstraction des langages de programmation**
- Faire le lien entre instructions humaines et code informatique

## Concept clé

!!! quote "Le fil rouge de l'activité"

    Cette activité se déroule en **trois niveaux progressifs** avec un vocabulaire de plus en plus riche :

    - **Niveau 1** : 4 mots seulement (très limité)
    - **Niveau 2** : Plus de mots, mais pas de raccourcis
    - **Niveau 3** : Des raccourcis puissants (formes, tailles)

    Plus le vocabulaire est riche, moins il faut d'instructions — mais l'ordinateur doit toujours tout décomposer en opérations simples.

---

## Vue d'ensemble des trois niveaux

| Niveau | Activité | Ce qu'on peut dire |
|--------|----------|-------------------|
| **1. Labyrinthe** | Guider dans un labyrinthe | 4 mots seulement |
| **2. Baguettes** | Former un dessin avec des baguettes | Placements, mais pas de formes |
| **3. Dessin** | Dessiner au crayon | Formes, tailles, positions |

**Principe** : plus le vocabulaire est riche, moins il faut d'instructions pour arriver au même résultat.

---

## Niveau 1 — Le labyrinthe

### Description

Une personne ferme les yeux (ou tourne le dos). Sa partenaire la guide à travers un labyrinthe dessiné sur papier en utilisant **uniquement** des commandes de direction très basiques.

### Pourquoi ce niveau ?

!!! info "Vocabulaire minimal"

    Avec seulement 4 mots possibles, chaque action doit être décomposée au maximum. C'est exactement ce que fait un ordinateur au plus bas niveau : des opérations très simples, une par une.

### Matériel nécessaire

- [ ] Labyrinthes imprimés (un par binôme, voir annexe)
- [ ] Crayon pour tracer le parcours
- [ ] Chronomètre

### Vocabulaire autorisé (à afficher)

| Commande | Signification |
|----------|---------------|
| `AVANCE` | Avancer d'une case |
| `RECULE` | Reculer d'une case |
| `GAUCHE` | Tourner à gauche (90°) |
| `DROITE` | Tourner à droite (90°) |

**C'est tout.** Pas de "avance de 3 cases", pas de "va vers le haut", pas de "attention au mur".

### Règles strictes

- La personne qui exécute trace le chemin sur le labyrinthe au crayon
- La personne qui donne les instructions voit le labyrinthe avec la solution
- **Aucune question autorisée**
- **Uniquement les 4 commandes ci-dessus**
- Si le crayon touche un mur = "crash" → retour au début

### Déroulement

| Temps | Action |
|-------|--------|
| 0-1 min | Distribution des labyrinthes |
| 1-4 min | Premier essai (personne A guide, personne B trace) |
| 4-5 min | Révélation et comparaison |
| 5-8 min | Échange de rôles avec un nouveau labyrinthe |
| 8-10 min | Discussion rapide : "Combien d'instructions ont été nécessaires ?" |

---

## Niveau 2 — Les baguettes

### Description

Une personne a un dessin simple devant elle (carré, triangle, lettre). Elle doit guider sa partenaire pour reproduire ce dessin en **posant des baguettes une par une** sur la table, sans jamais nommer la forme finale.

### Pourquoi ce niveau ?

!!! info "Vocabulaire élargi, mais pas de raccourcis"

    On peut maintenant parler de positions et d'orientations, mais toujours pas de formes. Pour faire un carré, il faut placer 4 baguettes une par une. Le vocabulaire est plus riche qu'au niveau 1, mais il n'y a pas encore de "raccourci".

### Matériel nécessaire

- [ ] Baguettes, allumettes ou cure-dents (10-15 par binôme)
- [ ] Modèles de formes imprimés (voir annexe)
- [ ] Surface plane (table, sol)
- [ ] Séparation visuelle entre les partenaires

### Vocabulaire autorisé (à afficher)

| Commande | Signification |
|----------|---------------|
| `PRENDS UNE BAGUETTE` | Saisir une baguette |
| `POSE` | Poser la baguette |
| `HORIZONTAL` | Orientation horizontale |
| `VERTICAL` | Orientation verticale |
| `DIAGONAL GAUCHE` | Inclinée vers la gauche (/) |
| `DIAGONAL DROITE` | Inclinée vers la droite (\) |
| `À GAUCHE DE` | Position relative |
| `À DROITE DE` | Position relative |
| `AU-DESSUS DE` | Position relative |
| `EN DESSOUS DE` | Position relative |
| `AU BOUT DE` | À l'extrémité de la baguette précédente |
| `BAGUETTE 1, 2, 3...` | Référence aux baguettes déjà posées |

**Interdit** : nommer des formes ("fais un carré"), utiliser des mesures ("à 5 cm"), montrer avec les mains.

### Règles strictes

- Poser **une baguette à la fois**
- Chaque baguette doit être placée **par rapport aux précédentes**
- La personne qui exécute ne voit **jamais** le modèle original
- Pas de "non, pas comme ça" — une fois posée, c'est posé

### Déroulement

| Temps | Action |
|-------|--------|
| 0-1 min | Distribution du matériel et des modèles |
| 1-5 min | Premier essai (forme simple : carré ou triangle) |
| 5-6 min | Révélation et comparaison |
| 6-10 min | Échange de rôles avec une forme différente |
| 10-12 min | Discussion : "Est-ce plus facile ou plus difficile que le labyrinthe ?" |

### Formes suggérées (difficulté croissante)

1. **Carré** (4 baguettes)
2. **Triangle** (3 baguettes)
3. **Maison** (5 baguettes : carré + toit)
4. **Lettre E ou F** (4-5 baguettes)
5. **Étoile simple** (6 baguettes)

---

## Niveau 3 — Le dessin libre

### Description

Une personne décrit un dessin que sa partenaire doit reproduire au crayon sur une feuille blanche. Cette fois, le vocabulaire est **enrichi** : on peut utiliser des noms de formes, des tailles, des positions absolues.

### Pourquoi ce niveau ?

!!! info "Vocabulaire riche avec des raccourcis"

    On peut maintenant dire "cercle" ou "carré" : ce sont des **raccourcis** qui représentent plein d'opérations simples. Une seule instruction remplace des dizaines de placements. Mais la personne qui dessine doit quand même tracer chaque trait — le raccourci facilite la communication, pas l'exécution.

### Matériel nécessaire

- [ ] Feuilles blanches A4
- [ ] Crayons ou feutres
- [ ] Modèles de dessins simples (voir annexe)
- [ ] Séparation visuelle entre les partenaires

### Vocabulaire autorisé (à afficher)

| Commande | Signification |
|----------|---------------|
| `CERCLE` | Forme ronde |
| `CARRÉ` | Forme carrée |
| `RECTANGLE` | Forme rectangulaire |
| `TRIANGLE` | Forme triangulaire |
| `LIGNE` | Trait droit |
| `PETIT / MOYEN / GRAND` | Taille relative |
| `EN HAUT / EN BAS` | Position verticale |
| `À GAUCHE / À DROITE` | Position horizontale |
| `AU CENTRE` | Au milieu de la feuille |
| `DANS` | À l'intérieur d'une forme |
| `À CÔTÉ DE` | Adjacent à une forme |
| `AU-DESSUS DE / EN DESSOUS DE` | Position relative |
| `RELIE ... À ...` | Trace une ligne entre deux éléments |

**Interdit** : "c'est un soleil", "tu connais la forme d'une maison ?", montrer avec les mains.

### Règles

- La personne qui exécute **ne pose aucune question**
- La personne qui donne les instructions ne voit **pas** ce qui est dessiné
- On ne peut **pas corriger** une forme déjà dessinée

### Déroulement

| Temps | Action |
|-------|--------|
| 0-1 min | Distribution des feuilles et modèles |
| 1-4 min | Premier essai (dessin simple) |
| 4-5 min | Révélation et comparaison |
| 5-8 min | Échange de rôles avec un nouveau dessin |
| 8-10 min | Discussion : "Avec plus de vocabulaire, était-ce plus facile ?" |

### Dessins suggérés (difficulté croissante)

1. **Soleil** (cercle + lignes autour)
2. **Maison simple** (carré + triangle + porte)
3. **Bonhomme** (cercle + lignes)
4. **Paysage minimal** (soleil + maison + arbre)

---

## Débriefing collectif

Après avoir traversé les trois niveaux, prenons un moment pour réfléchir à ce qui a changé.

### Questions à se poser

**Sur les différences entre niveaux :**

- Quel niveau a semblé le plus facile ? Le plus difficile ?
- Au niveau 1, combien d'instructions ont été nécessaires pour traverser le labyrinthe ?
- Au niveau 3, combien d'instructions pour dessiner une maison ?
- Qu'est-ce qui a rendu le niveau 3 plus rapide ?

**Connexion avec la programmation :**

Cette activité illustre comment fonctionnent les **langages de programmation** :

- Au **niveau 1** (labyrinthe) : très peu de mots disponibles. Il faut beaucoup d'instructions pour faire quelque chose de simple. C'est fatigant, mais très précis.

- Au **niveau 2** (baguettes) : plus de vocabulaire, on peut parler de positions. Mais toujours pas de raccourci pour dire "fais un carré".

- Au **niveau 3** (dessin) : on peut dire "cercle" et ça marche. C'est un **raccourci** — un mot qui cache plein d'opérations simples.

Les langages de programmation fonctionnent pareil : certains offrent peu de mots mais beaucoup de contrôle, d'autres offrent des raccourcis puissants. Mais l'ordinateur, lui, doit toujours tout traduire en opérations de base.

### Tableau de synthèse

| Niveau | Vocabulaire | Ce que ça demande |
|--------|-------------|-------------------|
| 1. Labyrinthe | 4 mots | Beaucoup d'instructions, très détaillé |
| 2. Baguettes | ~15 mots | Moins d'instructions, mais pas de raccourcis |
| 3. Dessin | ~20 mots + formes | Peu d'instructions grâce aux raccourcis |

### Le point clé

Plus le vocabulaire est riche, plus c'est facile de communiquer. Mais quelqu'un a dû définir ce que "cercle" veut dire en termes simples. En programmation, c'est pareil : des gens créent des raccourcis pour que d'autres puissent les utiliser.

!!! success "À retenir"

    **Plus on monte en abstraction, moins on écrit d'instructions — mais l'ordinateur, lui, exécute toujours autant d'opérations de base.**

---

## Déroulement complet

| Phase | Durée | Activité |
|-------|-------|----------|
| Introduction | 2 min | Explication du concept et des 3 niveaux |
| Niveau 1 | 10 min | Labyrinthe (instructions primitives) |
| Niveau 2 | 12 min | Baguettes (placement séquentiel) |
| Niveau 3 | 10 min | Dessin (abstractions) |
| Débriefing | 11 min | Synthèse et connexion avec la programmation |
| **Total** | **45 min** | |

---

## Annexe — Labyrinthes à imprimer (Niveau 1)

### Labyrinthe facile

```
┌───────────────────────┐
│ D ─ ─ ─ ─ ─ ┐         │
│             │         │
│     ┌───────┘         │
│     │                 │
│     └─────────────┐   │
│                   │   │
│         ┌─────────┘   │
│         │             │
│         └───────── A  │
└───────────────────────┘

D = Départ    A = Arrivée
```

### Labyrinthe moyen

```
┌───────────────────────────┐
│ D ┐                       │
│   │   ┌───────────┐       │
│   │   │           │       │
│   └───┘   ┌───┐   │       │
│           │   │   │       │
│   ┌───────┘   │   └───┐   │
│   │           │       │   │
│   │   ┌───────┴───┐   │   │
│   │   │           │   │   │
│   └───┘           └───┘ A │
└───────────────────────────┘
```

---

## Annexe — Formes pour les baguettes (Niveau 2)

### Carré (4 baguettes)

```
─────
│   │
─────
```

### Triangle (3 baguettes)

```
  /\
 /  \
/────\
```

### Maison (5 baguettes)

```
  /\
 /  \
│────│
│    │
│────│
```

### Lettre E (4 baguettes)

```
─────
│
─────
│
─────
```

---

## Annexe — Dessins pour le niveau 3

### Soleil

- Grand cercle au centre
- 8 petites lignes autour (rayons)

### Maison simple

- Grand carré en bas au centre
- Triangle au-dessus du carré (toit)
- Petit carré dans le grand carré en bas (porte)

### Bonhomme

- Cercle en haut au centre (tête)
- Ligne verticale en dessous (corps)
- Deux lignes diagonales depuis le milieu du corps (bras)
- Deux lignes depuis le bas du corps (jambes)

---

## Résumé

```
╔═══════════════════════════════════════════════════════════╗
║          DONNER DES INSTRUCTIONS - 3 NIVEAUX              ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  NIVEAU 1 : LABYRINTHE                                    ║
║  Vocabulaire : AVANCE, RECULE, GAUCHE, DROITE             ║
║  → 4 mots seulement, beaucoup d'instructions              ║
║                                                           ║
║  NIVEAU 2 : BAGUETTES                                     ║
║  Vocabulaire : POSE, HORIZONTAL, VERTICAL, À CÔTÉ DE...   ║
║  → Plus de mots, mais pas de raccourcis                   ║
║                                                           ║
║  NIVEAU 3 : DESSIN                                        ║
║  Vocabulaire : CERCLE, CARRÉ, TRIANGLE, GRAND, PETIT...   ║
║  → Raccourcis puissants, peu d'instructions               ║
║                                                           ║
╠═══════════════════════════════════════════════════════════╣
║  RÈGLE D'OR : Pas de questions, pas de corrections.       ║
║  L'ordinateur fait ce qui est DIT, pas ce qui est PENSÉ.  ║
╚═══════════════════════════════════════════════════════════╝
```
