# Cheat Sheet - Concepts algorithmiques

---

## 1. Algorithme

**Définition** : Suite d'instructions à exécuter dans un ordre précis, comparable à une recette.

```
RECETTE : Préparer des pâtes
─────────────────────────────
1. Remplir une casserole d'eau
2. Faire bouillir
3. Ajouter les pâtes
4. Attendre 10 minutes
5. Égoutter
6. Servir
```

**Exemple du jeu des allumettes** : La stratégie gagnante consiste à toujours laisser un multiple de 4 allumettes.

---

## 2. Variable

**Définition** : Espace de stockage identifié par un nom, contenant une valeur.

```
    ┌─────────────┐
    │ allumettes  │  <-- étiquette (nom)
    ├─────────────┤
    │     21      │  <-- contenu (valeur)
    └─────────────┘
```

**Exemples** :
- `allumettes = 21` (un nombre)
- `joueur = "Alice"` (du texte)
- `monTour = vrai` (valeur booléenne)

---

## 3. Condition (Si / Alors)

**Définition** : Structure de contrôle permettant de prendre une décision selon une condition vraie ou fausse.

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
   "Fin de partie"   "Continuer"
```

**Syntaxe** :
```
SI allumettes == 0 ALORS
    afficher("Partie terminée")
SINON
    afficher("Tour suivant")
```

---

## 4. Boucle (Tant que)

**Définition** : Structure permettant de répéter des instructions tant qu'une condition reste vraie.

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

## 5. Fonction (Notion avancée)

**Définition** : Bloc de code réutilisable, identifié par un nom, pouvant recevoir des paramètres et retourner un résultat.

```
         ┌─────────────┐
  3 ───► │  retirer()  │ ───► allumettes = 18
         └─────────────┘

  entrée      fonction      sortie
```

**Exemples** :
- `retirer(3)` : retire 3 allumettes du total
- `afficher("Message")` : affiche un message à l'écran
- `calculerCoup()` : détermine le coup optimal

---

## Mini-glossaire

| Terme | En anglais | Définition |
|-------|------------|------------|
| Algorithme | Algorithm | Suite d'instructions ordonnées |
| Variable | Variable | Espace de stockage nommé |
| Condition | If/Then | Structure de décision |
| Boucle | Loop | Structure de répétition |
| Fonction | Function | Bloc de code réutilisable |
| Valeur | Value | Contenu d'une variable |
| Opérateur | Operator | `==` `>` `<` `+` `-` |

---

## Opérateurs utiles

| Symbole | Signification | Exemple |
|---------|---------------|---------|
| `=` | Assigner une valeur | `score = 0` |
| `==` | Est égal à | `score == 10` |
| `>` | Supérieur à | `allumettes > 0` |
| `<` | Inférieur à | `age < 18` |
| `!=` | Différent de | `joueur != "ordi"` |

---

## Le jeu des allumettes en pseudo-code

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

afficher("La personne ayant pris la dernière allumette a perdu.")
```
