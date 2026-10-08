# Le Jeu des Allumettes

> Un jeu de stratégie simple qui cache un algorithme puissant

---

## Introduction

Le jeu des allumettes est un classique des jeux de logique. Derriere sa simplicite apparente se cache une strategie mathematique infaillible. Ce jeu va nous accompagner toute la semaine pour decouvrir les bases de la programmation.

**Pourquoi ce jeu ?**
- Les regles sont simples a comprendre
- La strategie gagnante est un veritable algorithme
- On peut le jouer a la main, sur le web, et avec un micro:bit

---

## Les regles du jeu

### Le materiel

```
| | | | | | | | | | | | | | | | | | | | |
1 2 3 4 5 6 7 8 9 ...                 21
```

**21 allumettes** (ou cure-dents, batons, crayons...) posees sur la table.

### Comment jouer

1. Deux joueuses s'affrontent a tour de role
2. A chaque tour, tu retires **1, 2 ou 3 allumettes**
3. Celle qui prend la **derniere allumette perd**

### Exemple de partie

| Tour | Joueuse | Retire | Reste |
|------|---------|--------|-------|
| 1 | Alice | 2 | 19 |
| 2 | Bella | 3 | 16 |
| 3 | Alice | 1 | 15 |
| 4 | Bella | 2 | 13 |
| ... | ... | ... | ... |

La partie continue jusqu'a ce qu'il ne reste qu'une seule allumette. Celle qui doit la prendre a perdu !

---

## Jouer en classe

### Materiel suggere

- Cure-dents (faciles a manipuler, peu couteux)
- Batons de glace
- Crayons
- Ou meme des traits dessines sur une feuille

### Organisation en equipes

**Option 1 : Duels**
- Former des paires
- Chaque duo joue 3 parties
- On inverse qui commence a chaque partie

**Option 2 : Tournoi**
- 4-6 joueuses par table
- Systeme d'elimination
- La gagnante affronte la gagnante de la table voisine

**Option 3 : Defi collectif**
- Une eleve contre la classe entiere
- La classe vote pour chaque decision
- Suspense garanti !

### Conseils pratiques

- Alignez bien les allumettes pour compter facilement
- Annoncez a haute voix combien vous retirez
- Gardez les allumettes retirees de cote (pour verifier le total)

---

## La strategie gagnante

### Le secret : les multiples de 4

Voici la cle de la victoire :

```
Position gagnante = laisser un multiple de 4 + 1 allumettes
                  = 5, 9, 13, 17, 21
```

Attends... 21 ? Oui ! Si tu commences, tu es en position de force.

### Pourquoi ca marche ?

Reflechissons ensemble :

**Si tu laisses 5 allumettes :**
- Ton adversaire prend 1 → il reste 4 → tu prends 3 → il reste 1
- Ton adversaire prend 2 → il reste 3 → tu prends 2 → il reste 1
- Ton adversaire prend 3 → il reste 2 → tu prends 1 → il reste 1

Dans tous les cas, c'est ton adversaire qui prend la derniere !

**Le principe :**
Quoi que l'adversaire joue (1, 2 ou 3), tu peux toujours completer pour faire 4.
- Elle prend 1 → tu prends 3 (1 + 3 = 4)
- Elle prend 2 → tu prends 2 (2 + 2 = 4)
- Elle prend 3 → tu prends 1 (3 + 1 = 4)

### Les positions gagnantes

```
21 → Tu commences, tu peux gagner !
17 → Position gagnante (laisse 17)
13 → Position gagnante (laisse 13)
 9 → Position gagnante (laisse 9)
 5 → Position gagnante (laisse 5)
 1 → L'adversaire doit la prendre = tu gagnes !
```

### La formule magique

Pour savoir combien d'allumettes retirer :

```
allumettes_a_retirer = (allumettes_restantes - 1) modulo 4
```

**Le modulo (%) donne le reste de la division.**

| Restantes | Calcul | A retirer |
|-----------|--------|-----------|
| 21 | (21-1) % 4 = 20 % 4 = 0 | → prends 4* |
| 19 | (19-1) % 4 = 18 % 4 = 2 | → prends 2 |
| 17 | (17-1) % 4 = 16 % 4 = 0 | → prends 4* |
| 15 | (15-1) % 4 = 14 % 4 = 2 | → prends 2 |
| 14 | (14-1) % 4 = 13 % 4 = 1 | → prends 1 |

*Si le resultat est 0, tu es deja en position gagnante ! Prends ce que tu veux (mais pas 4, c'est interdit).

### En pratique

**Etape 1 :** Compte les allumettes restantes
**Etape 2 :** Calcule `(restantes - 1) % 4`
**Etape 3 :** Retire ce nombre (ou 1 si le resultat est 0)

---

## Du jeu a l'algorithme

### Les concepts de programmation caches

Ce jeu contient tous les ingredients d'un programme informatique :

| Concept | Dans le jeu | En programmation |
|---------|-------------|------------------|
| **Variable** | Nombre d'allumettes restantes | `let allumettes = 21` |
| **Condition** | "S'il reste 1 allumette, j'ai perdu" | `if (allumettes == 1)` |
| **Boucle** | Repeter les tours jusqu'a la fin | `while (allumettes > 0)` |
| **Fonction** | La strategie de jeu | `function choisirCoup()` |
| **Entree** | Le coup de l'adversaire | `input()` |
| **Sortie** | Annoncer son coup | `print()` |

### L'algorithme en pseudo-code

```
DEBUT du jeu
    allumettes ← 21

    TANT QUE allumettes > 1 FAIRE

        // Tour de la joueuse
        AFFICHER "Il reste [allumettes] allumettes"
        LIRE choix_joueuse (entre 1 et 3)
        allumettes ← allumettes - choix_joueuse

        SI allumettes <= 1 ALORS
            AFFICHER "Tu as perdu !"
            STOP
        FIN SI

        // Tour de l'ordinateur (strategie gagnante)
        coup ← (allumettes - 1) MODULO 4
        SI coup = 0 ALORS
            coup ← 1
        FIN SI
        allumettes ← allumettes - coup
        AFFICHER "L'ordinateur prend [coup]"

        SI allumettes <= 1 ALORS
            AFFICHER "Tu as gagne !"
            STOP
        FIN SI

    FIN TANT QUE
FIN du jeu
```

### Preparation pour MakeCode

Jeudi, tu vas programmer ce jeu sur un micro:bit !

**Ce que tu vas utiliser :**
- Les **boutons A et B** pour choisir ton coup
- L'**ecran LED** pour afficher les allumettes
- Une **variable** pour compter
- Des **conditions** pour verifier la fin du jeu
- Une **boucle** pour repeter les tours

**Apercu du resultat :**
```
     |||||||  ← Allumettes affichees sur l'ecran LED

[A] Retirer 1    [B] Retirer 2    [A+B] Retirer 3
```

---

## Defis bonus

### Defi 1 : Inverser la regle

Et si celle qui prend la derniere allumette **gagne** ?
- Comment la strategie change-t-elle ?
- Quelles sont les nouvelles positions gagnantes ?

### Defi 2 : Changer le nombre de depart

Avec 15 allumettes au lieu de 21 :
- Qui a l'avantage ? Celle qui commence ou celle qui attend ?
- La strategie des multiples de 4 fonctionne-t-elle toujours ?

### Defi 3 : Ajouter des options

Si on peut retirer 1, 2, 3 **ou 4** allumettes :
- Quel est le nouveau "nombre magique" ?
- (Indice : ce n'est plus 4...)

---

## Resume

### Les regles

- 21 allumettes au depart
- Retirer 1, 2 ou 3 a chaque tour
- Celle qui prend la derniere **perd**

### La strategie

- Laisser des multiples de 4 + 1 (5, 9, 13, 17)
- Formule : `(restantes - 1) % 4` allumettes a retirer
- Si le resultat est 0, tu es en bonne position !

### Les concepts de programmation

| Tu utilises... | C'est une... |
|----------------|--------------|
| Un compteur d'allumettes | Variable |
| "Si il reste 1..." | Condition |
| Jouer jusqu'a la fin | Boucle |
| La strategie | Fonction/Algorithme |

### Cette semaine

| Jour | Ce qu'on fait avec le jeu |
|------|---------------------------|
| Lundi | Decouverte, strategie sur papier |
| Mardi | Interface web en HTML/CSS |
| Jeudi | Version micro:bit |
| Vendredi | Personnalisation et partage |

---

## Ressources

- [Nim (jeu) - Wikipedia](https://fr.wikipedia.org/wiki/Jeu_de_Nim) - L'histoire et les maths derriere le jeu
- [MakeCode for micro:bit](https://makecode.microbit.org/) - Pour programmer jeudi

---

*Guide cree pour le cours MSCI - ERACOM 2026*
