# Jeu des Allumettes - Instructions

## Objectif

Programmer un jeu des allumettes pour **deux joueuses**, **uniquement avec les blocs visuels**.

## Règles du jeu

- **20 allumettes** au départ
- Chaque joueuse retire **1, 2 ou 3** allumettes à son tour
- Qui prend la **dernière** allumette **PERD**

## Contrôles du jeu

Les deux joueuses se passent le clavier.

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
2. Cliquer **Créer une variable** → nommer `joueuse`

---

## Étape 2 : Initialiser le jeu

Dans la catégorie **Boucles** (vert), trouver le bloc `au démarrage`.

Glisser à l'intérieur (depuis **Variables**) :

- `définir allumettes à 20`
- `définir joueuse à 1`

Puis ajouter :

- `définir score à allumettes` (depuis **Info**) → le nombre d'allumettes s'affiche en haut à droite
- `splash "20 allumettes - A:1 B:2 Haut:3"` (depuis **Jeu**)
- `splash "Joueuse 1 commence"` (depuis **Jeu**)

Résultat attendu :

```blocks-full
allumettes = 20
joueuse = 1
info.setScore(allumettes)
game.splash("20 allumettes - A:1 B:2 Haut:3")
game.splash("Joueuse 1 commence")
```

---

## Étape 3 : Bouton A (retirer 1 allumette)

Dans la catégorie **Contrôleur** (orange), glisser :

- `quand bouton A est appuyé`

À l'intérieur, construire cette logique avec les blocs :

### 3.1 Retirer l'allumette

- `modifier allumettes de -1` (depuis Variables)
- `définir score à allumettes` (depuis Info)

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    allumettes += -1
    info.setScore(allumettes)
})
```

### 3.2 Vérifier si la joueuse a perdu

Depuis **Logique** (bleu), glisser un bloc `si <condition> alors / sinon` :

- Condition : `allumettes ≤ 0` (utiliser `≤`)
- Dans **si** :
    - `splash` + bloc `concaténation` avec `"Joueuse "`, `joueuse` et `" a perdu !"` (depuis **Avancé → Texte**)
    - `réinitialiser jeu` (depuis Jeu) → la partie recommence

```blocks
if (allumettes <= 0) {
    game.splash("Joueuse " + joueuse + " a perdu !")
    game.reset()
} else {

}
```

### 3.3 Passer à l'autre joueuse

Dans **sinon**, ajouter un nouveau `si <condition> alors / sinon` :

- Condition : `joueuse = 1`
- Dans **si** : `définir joueuse à 2`
- Dans **sinon** : `définir joueuse à 1`

Après ce bloc (toujours dans le premier **sinon**) :

- `splash` + `concaténation` avec `"Au tour de joueuse "` et `joueuse`

```blocks
if (joueuse == 1) {
    joueuse = 2
} else {
    joueuse = 1
}
game.splash("Au tour de joueuse " + joueuse)
```

### Résultat du bouton A

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    allumettes += -1
    info.setScore(allumettes)
    if (allumettes <= 0) {
        game.splash("Joueuse " + joueuse + " a perdu !")
        game.reset()
    } else {
        if (joueuse == 1) {
            joueuse = 2
        } else {
            joueuse = 1
        }
        game.splash("Au tour de joueuse " + joueuse)
    }
})
```

---

## Étape 4 : Bouton B (retirer 2 allumettes)

**Dupliquer** le bloc `quand bouton A est appuyé` :

1. Clic droit sur le bloc → **Dupliquer**
2. Changer `A` en `B` dans le menu déroulant
3. Changer `modifier allumettes de -1` en `modifier allumettes de -2`

---

## Étape 5 : Flèche haut (retirer 3 allumettes)

Dupliquer à nouveau le bloc `quand bouton A est appuyé` :

1. Changer `A` en `up` dans le menu déroulant
2. Changer `modifier allumettes de -1` en `modifier allumettes de -3`

Cliquer sur ▶ et tester une partie à deux !

---

## Amélioration : Afficher les allumettes

Le jeu fonctionne, mais l'écran est vide. Il est temps de dessiner de vraies allumettes !

### A.1 Dessiner l'allumette

1. Créer une variable `imageAllumette`
2. Dans `au démarrage`, ajouter `définir imageAllumette à` + un bloc image (depuis **Avancé → Images**)
3. Cliquer sur l'image grise pour ouvrir l'éditeur et dessiner une allumette **fine** : environ **4 pixels de large** et **16 de haut** (tête rouge, bâton beige)

```blocks
imageAllumette = img`
    . 2 2 .
    2 2 2 2
    2 2 2 2
    . 2 2 .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    . d d .
    `
```

!!! tip "Pourquoi si fine ?"

    L'écran fait 160 pixels de large. Pour aligner 20 allumettes, chacune dispose d'environ 7 pixels.

### A.2 Dessiner une rangée d'allumettes

Créer une variable `allumette`, puis dans `au démarrage`, après `définir score à allumettes`, ajouter une **boucle** (depuis **Boucles**) :

!!! warning "`allumette` sans s, pas `allumettes`"

    Il y a maintenant deux variables aux noms très proches :

    - `allumettes` (avec un **s**) : le **nombre** d'allumettes restantes
    - `allumette` (sans s) : **un sprite**, l'image d'une allumette à l'écran

    Dans les blocs `définir ... à sprite` et `définir la position de ...`, choisir `allumette` **sans s** dans le menu déroulant. Si MakeCode affiche l'erreur *Type 'Sprite' is not assignable to type 'number'* ou *Property 'setPosition' does not exist on type 'number'*, c'est que `allumettes` a été choisie par erreur.

```blocks
let imageAllumette: Image = null
let allumette: Sprite = null
for (let index = 0; index <= allumettes - 1; index++) {
    allumette = sprites.create(imageAllumette, SpriteKind.Food)
    allumette.setPosition(14 + index * 7, 60)
}
```

- Le bloc `pour index variant de 0 à ...` se trouve dans **Boucles**
- Le bloc `définir allumette à sprite ... de type ...` se trouve dans **Sprites**
- Le bloc `définir la position de ... à x ... y ...` se trouve aussi dans **Sprites**
- `index` vaut 0, puis 1, puis 2... : chaque allumette est placée 7 pixels plus loin que la précédente

### A.3 Redessiner après chaque coup

Quand des allumettes sont retirées, il faut effacer la rangée et la redessiner.

Dans **chaque** bouton (A, B et up), juste après `définir score à allumettes`, ajouter :

1. `détuire toutes sprites de type Food` (depuis **Sprites**, la faute de frappe vient de MakeCode)
2. Une copie de la boucle `pour index variant de 0 à ...` (clic droit → **Dupliquer**)

```blocks
let imageAllumette: Image = null
let allumette: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    allumettes += -1
    info.setScore(allumettes)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    for (let index = 0; index <= allumettes - 1; index++) {
        allumette = sprites.create(imageAllumette, SpriteKind.Food)
        allumette.setPosition(14 + index * 7, 60)
    }
    if (allumettes <= 0) {
        game.splash("Joueuse " + joueuse + " a perdu !")
        game.reset()
    } else {
        if (joueuse == 1) {
            joueuse = 2
        } else {
            joueuse = 1
        }
        game.splash("Au tour de joueuse " + joueuse)
    }
})
```

!!! question "Pour aller plus loin"

    La même boucle est copiée 4 fois. Et s'il fallait la modifier ? Il existe un moyen de l'écrire **une seule fois** et de l'utiliser partout : les **fonctions** (catégorie **Fonctions**, dans Avancé).

---

## Aller plus loin : Jouer contre l'ordinateur

Plus besoin de partenaire : l'ordinateur devient l'adversaire. Après chaque coup, c'est lui qui joue.

### B.1 Nouvelles variables

Créer deux variables :

- `monTour` : vaut `vrai` quand c'est à toi de jouer
- `ordiRetire` : nombre d'allumettes retirées par l'ordinateur

Dans `au démarrage`, ajouter `définir monTour à vrai`.

### B.2 Vérifier que c'est mon tour

Dans le bouton A, placer **tout le contenu** dans un bloc `si monTour = vrai alors` (depuis **Logique**).

Ainsi, appuyer sur un bouton pendant que l'ordinateur réfléchit ne fait rien.

### B.3 Remplacer la défaite

Dans le `si allumettes ≤ 0`, remplacer les blocs existants par `game over` avec `LOSE` (depuis **Jeu**) : c'est toi qui as pris la dernière allumette.

### B.4 L'ordinateur joue

Dans le **sinon**, retirer le bloc qui change de joueuse et le texte "Au tour de joueuse", puis ajouter :

1. `définir monTour à faux`
2. `pause 1000 ms` (depuis **Boucles**) → l'ordinateur « réfléchit »
3. `définir ordiRetire à 1` ← Version simple : l'ordinateur retire toujours 1
4. `modifier allumettes de` puis glisser `0 - ordiRetire` (pour soustraire)
5. `définir score à allumettes`, puis redessiner les allumettes (dupliquer `détruire tous les sprites` et la boucle)
6. `splash` + `concaténation` avec `"L'ordi retire "` et `ordiRetire`

### B.5 Vérifier si l'ordinateur a perdu

- `si allumettes ≤ 0 alors` → `game over` avec `WIN`
- Sinon → `définir monTour à vrai` (rendre la main)

Le bouton A complet :

```blocks
let imageAllumette: Image = null
let allumette: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monTour == true) {
        allumettes += -1
        info.setScore(allumettes)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        for (let index = 0; index <= allumettes - 1; index++) {
            allumette = sprites.create(imageAllumette, SpriteKind.Food)
            allumette.setPosition(14 + index * 7, 60)
        }
        if (allumettes <= 0) {
            game.over(false)
        } else {
            monTour = false
            pause(1000)
            ordiRetire = 1
            allumettes += 0 - ordiRetire
            info.setScore(allumettes)
            sprites.destroyAllSpritesOfKind(SpriteKind.Food)
            for (let index = 0; index <= allumettes - 1; index++) {
                allumette = sprites.create(imageAllumette, SpriteKind.Food)
                allumette.setPosition(14 + index * 7, 60)
            }
            game.splash("L'ordi retire " + ordiRetire)
            if (allumettes <= 0) {
                game.over(true)
            } else {
                monTour = true
            }
        }
    }
})
```

### B.6 Les autres boutons

Faire les mêmes changements dans les boutons B et up (ou supprimer ces boutons, dupliquer à nouveau le bouton A et changer `-1` en `-2` et `-3`).

### B.7 Stratégie gagnante de l'ordinateur

Pour rendre l'ordinateur plus malin, remplacer :

`définir ordiRetire à 1`

Par une formule mathématique avec les blocs :

1. Depuis **Maths**, utiliser le bloc `reste de ÷` (modulo)
2. Construire : `définir ordiRetire à reste de (allumettes - 1) ÷ 4`
3. Ajouter un `si ordiRetire = 0 alors` → `définir ordiRetire à 1`

```blocks
ordiRetire = (allumettes - 1) % 4
if (ordiRetire == 0) {
    ordiRetire = 1
}
```

Cette stratégie permet à l'ordinateur de toujours laisser un nombre d'allumettes où le joueur ne peut pas gagner.

!!! question "Défi"

    Arrives-tu encore à battre l'ordinateur ? Qui doit commencer pour avoir une chance de gagner ?

---

## Test et dépannage

Cliquer sur ▶ pour tester le jeu dans le simulateur.

**Le jeu ne réagit pas aux touches**
→ Vérifier que les blocs `quand bouton ... est appuyé` sont bien présents

**C'est toujours la même joueuse qui joue**
→ Vérifier le bloc `si joueuse = 1 alors définir joueuse à 2 sinon définir joueuse à 1`

**L'ordinateur ne joue pas**
→ Vérifier que `définir monTour à faux` est bien ajouté

**Les allumettes ne disparaissent pas**
→ Vérifier que `détuire toutes sprites de type Food` est bien dans chaque bouton, et que les allumettes sont de type **Food**

**Message d'erreur (bloc rouge)**
→ Vérifier que toutes les variables sont créées et bien connectées

---

## Structure du jeu

```
Au démarrage
    ├── Initialiser : 20 allumettes, joueuse = 1
    └── Dessiner les allumettes (boucle)

Bouton A / B / Haut
    ├── Retirer 1 / 2 / 3 allumettes
    ├── Redessiner les allumettes
    ├── Si allumettes ≤ 0 → la joueuse a perdu, on recommence
    └── Sinon → changer de joueuse
```

---

!!! tip "Besoin d'aide ?"

    Les solutions sont disponibles dans MakeCode :

    - [Joueuse contre joueuse](https://arcade.makecode.com/S32221-15913-36189-53679){target="_blank"}
    - [Contre l'ordinateur](https://arcade.makecode.com/S19881-31620-38681-62591){target="_blank"} (Aller plus loin)

    → [Page de la solution](solution.md){target="_blank"} : jouer en ligne et voir tous les blocs
