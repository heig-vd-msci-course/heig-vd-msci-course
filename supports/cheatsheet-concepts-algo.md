# Cheat Sheet - Concepts Algorithmiques

---

## 1. Algorithme

**Definition** : Une recette, une suite d'instructions a suivre dans l'ordre.

```
RECETTE : Faire des pates
─────────────────────────
1. Remplir casserole d'eau
2. Faire bouillir
3. Ajouter les pates
4. Attendre 10 minutes
5. Egoutter
6. Servir
```

**Exemple jeu des allumettes** : Pour gagner, toujours laisser un multiple de 4 allumettes.

---

## 2. Variable

**Definition** : Une boite avec une etiquette qui contient une valeur.

```
    ┌─────────────┐
    │ allumettes  │  <-- etiquette (nom)
    ├─────────────┤
    │     21      │  <-- contenu (valeur)
    └─────────────┘
```

**Exemples** :
- `allumettes = 21` (un nombre)
- `joueur = "Alice"` (du texte)
- `monTour = vrai` (vrai ou faux)

---

## 3. Condition (Si / Alors)

**Definition** : Prendre une decision selon une question oui/non.

```
         ┌───────────────┐
         │ allumettes    │
         │    == 0 ?     │
         └───────┬───────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
      [OUI]             [NON]
        │                 │
   "Game Over"      "Continue"
```

**Syntaxe** :
```
SI allumettes == 0 ALORS
    afficher("Perdu !")
SINON
    afficher("A toi de jouer")
```

---

## 4. Boucle (Tant que)

**Definition** : Repeter des instructions tant qu'une condition est vraie.

```
    ┌──────────────────────────┐
    │                          │
    ▼                          │
┌────────────┐                 │
│ allumettes │──[OUI]──► jouer()
│   > 0 ?    │                 │
└─────┬──────┘                 │
      │                        │
    [NON]                      │
      │        ◄───────────────┘
      ▼
   FIN DU JEU
```

**Syntaxe** :
```
TANT QUE allumettes > 0 FAIRE
    choisir(1, 2 ou 3)
    retirer allumettes
FIN TANT QUE
```

---

## 5. Fonction (Bonus)

**Definition** : Une mini-recette reutilisable avec un nom.

```
         ┌─────────────┐
  3 ───► │  retirer()  │ ───► allumettes = 18
         └─────────────┘

  entree      machine       sortie
```

**Exemples** :
- `retirer(3)` : enleve 3 allumettes
- `afficher("Bravo!")` : montre un message
- `calculerCoup()` : determine le meilleur coup

---

## Mini-glossaire

| Terme | En anglais | C'est quoi ? |
|-------|------------|--------------|
| Algorithme | Algorithm | Une suite d'instructions |
| Variable | Variable | Une boite qui stocke une valeur |
| Condition | If/Then | Une decision oui/non |
| Boucle | Loop | Repeter des actions |
| Fonction | Function | Une action reutilisable |
| Valeur | Value | Le contenu d'une variable |
| Operateur | Operator | `==` `>` `<` `+` `-` |

---

## Operateurs utiles

| Symbole | Signification | Exemple |
|---------|---------------|---------|
| `=` | Assigner une valeur | `score = 0` |
| `==` | Est egal a ? | `score == 10` |
| `>` | Plus grand que ? | `allumettes > 0` |
| `<` | Plus petit que ? | `age < 18` |
| `!=` | Different de ? | `joueur != "ordi"` |

---

## Le jeu des allumettes en algo

```
allumettes = 21

TANT QUE allumettes > 0 FAIRE

    SI monTour ALORS
        choix = demanderJoueur()
    SINON
        choix = calculerMeilleurCoup()

    allumettes = allumettes - choix
    monTour = NON monTour

FIN TANT QUE

afficher("Celle qui prend la derniere a perdu !")
```

---

*MSCI 2026 - ERACOM*
