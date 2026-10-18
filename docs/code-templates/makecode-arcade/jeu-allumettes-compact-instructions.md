# Jeu des Allumettes - Instructions

## Objectif

Programmer un jeu des allumettes jouable contre l'ordinateur, **uniquement avec les blocs visuels**.

## Règles du jeu

- **20 allumettes** au départ
- Retirer **1, 2 ou 3** allumettes par tour
- Qui prend la **dernière** allumette **PERD**

## Contrôles du jeu

| Touche | Action |
|--------|--------|
| A (touche Z) | Retirer 1 allumette |
| B (touche X) | Retirer 2 allumettes |
| ↑ (flèche haut) | Retirer 3 allumettes |

---

## Démarrage

1. Ouvrir [arcade.makecode.com](https://arcade.makecode.com){target="_blank"}
2. Cliquer **Nouveau projet** → nommer "Jeu allumettes"
3. Rester en mode **Blocs** (ne jamais cliquer sur JavaScript)

---

## Étape 1 : Créer les variables

Dans la catégorie **Variables** (rouge) :

1. Cliquer **Créer une variable** → nommer `allumettes`
2. Cliquer **Créer une variable** → nommer `monTour`

---

## Étape 2 : Initialiser le jeu

Dans la catégorie **Loops** (vert), trouver le bloc `au démarrage`.

Glisser à l'intérieur (depuis **Variables**) :

- `définir allumettes à 20`
- `définir monTour à vrai`

Puis ajouter (depuis **Game** > **Splash**) :

- `afficher texte "20 allumettes - A:1 B:2 Haut:3"`

---

## Étape 3 : Bouton A (retirer 1 allumette)

Dans la catégorie **Controller** (rose), glisser :

- `quand bouton A pressé`

À l'intérieur, construire cette logique avec les blocs :

### 3.1 Vérifier que c'est mon tour

Depuis **Logic** (bleu), glisser un bloc `si <condition> alors`.

Pour la condition, utiliser `monTour = vrai` (bloc de comparaison `=` depuis Logic).

### 3.2 Retirer les allumettes

À l'intérieur du `si`, ajouter :

- `modifier allumettes de -1` (depuis Variables)
- `afficher texte` + bloc `rejoindre` avec `allumettes` et `" allumettes"` (depuis Text)

### 3.3 Vérifier si le joueur a perdu

Ajouter un autre `si <condition> alors` :

- Condition : `allumettes ≤ 0` (depuis Logic, utiliser `≤`)
- À l'intérieur : `game over` avec `LOSE` (depuis Game)

### 3.4 Passer au tour de l'ordinateur

Après le bloc de défaite, ajouter :

- `définir monTour à faux`
- `pause 1000 ms` (depuis Loops)

### 3.5 L'ordinateur joue

Créer une variable `ordiRetire` puis ajouter :

- `définir ordiRetire à 1` ← Version simple (l'ordi retire toujours 1)
- `modifier allumettes de` puis glisser `0 - ordiRetire` (pour soustraire)
- `afficher texte` avec un message montrant combien l'ordi a retiré

### 3.6 Vérifier si l'ordinateur a perdu

- `si allumettes ≤ 0 alors` → `game over` avec `WIN`

### 3.7 Rendre la main au joueur

- `définir monTour à vrai`
- `afficher texte` avec le nombre d'allumettes restantes

---

## Étape 4 : Bouton B (retirer 2 allumettes)

**Dupliquer** le bloc `quand bouton A pressé` :

1. Clic droit sur le bloc → **Dupliquer**
2. Changer `A` en `B` dans le menu déroulant
3. Changer `modifier allumettes de -1` en `modifier allumettes de -2`

---

## Étape 5 : Flèche haut (retirer 3 allumettes)

Depuis **Controller**, glisser :

- `quand bouton up pressé`

**Dupliquer** le contenu du bouton A et le glisser à l'intérieur.

Changer `modifier allumettes de -1` en `modifier allumettes de -3`.

---

## Amélioration : Stratégie gagnante de l'ordinateur

Pour rendre l'ordinateur plus malin, remplacer :

`définir ordiRetire à 1`

Par une formule mathématique avec les blocs :

1. Depuis **Math**, utiliser le bloc `reste de ÷` (modulo)
2. Construire : `reste de (allumettes - 1) ÷ 4`
3. Ajouter un `si ordiRetire = 0 alors` → `définir ordiRetire à 1`

Cette stratégie permet à l'ordinateur de toujours laisser un nombre d'allumettes où le joueur ne peut pas gagner.

---

## Test et dépannage

Cliquer sur ▶ pour tester le jeu dans le simulateur.

**Le jeu ne réagit pas aux touches**
→ Vérifier que les blocs `quand bouton ... pressé` sont bien présents

**L'ordinateur ne joue pas**
→ Vérifier que `définir monTour à faux` est bien ajouté

**Message d'erreur (bloc rouge)**
→ Vérifier que toutes les variables sont créées et bien connectées

---

## Structure du jeu

```
Au démarrage
    └── Initialiser : 20 allumettes, monTour = vrai

Bouton A / B / Haut
    ├── Si c'est mon tour
    │   ├── Retirer 1/2/3 allumettes
    │   ├── Afficher le nombre restant
    │   ├── Si allumettes ≤ 0 → J'ai perdu
    │   ├── Tour de l'ordinateur
    │   │   ├── Calculer combien retirer
    │   │   ├── Retirer les allumettes
    │   │   └── Si allumettes ≤ 0 → J'ai gagné
    │   └── Rendre la main au joueur
```

---

<!-- LIEN SOLUTION - Décommenter pour activer
!!! tip "Besoin d'aide ?"

    → [Voir la solution complète](solution.md){target="_blank"}
-->

