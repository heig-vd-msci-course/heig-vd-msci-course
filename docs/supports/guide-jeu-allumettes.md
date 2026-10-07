# Le Jeu des Allumettes

> Un jeu de stratégie simple qui révèle un algorithme puissant

---

## Introduction

Le jeu des allumettes est un classique des jeux de logique. Derrière sa simplicité apparente se cache une stratégie mathématique infaillible. Ce jeu accompagne l'ensemble de la semaine pour découvrir les bases de la programmation.

**Pourquoi ce jeu ?**

- Les règles sont simples à comprendre
- La stratégie gagnante constitue un véritable algorithme
- Il est possible de le jouer à la main, sur le web et avec un micro:bit

---

## Les règles du jeu

### Le matériel

```
| | | | | | | | | | | | | | | | | | | | |
1 2 3 4 5 6 7 8 9 ...                 21
```

**21 allumettes** (ou cure-dents, bâtons, crayons) posées sur la table.

### Comment jouer

1. Deux personnes s'affrontent à tour de rôle
2. À chaque tour, retirer **1, 2 ou 3 allumettes**
3. La personne qui prend la **dernière allumette perd**

### Exemple de partie

| Tour | Personne | Retire | Reste |
|------|----------|--------|-------|
| 1 | Alice | 2 | 19 |
| 2 | Bella | 3 | 16 |
| 3 | Alice | 1 | 15 |
| 4 | Bella | 2 | 13 |
| ... | ... | ... | ... |

La partie continue jusqu'à ce qu'il ne reste qu'une seule allumette. La personne qui doit la prendre a perdu.

---

## Jouer en ligne

Une version web du jeu est disponible pour s'entraîner :

[:octicons-arrow-right-24: Jouer au jeu des allumettes en ligne](https://heig-vd-msci-course.github.io/heig-vd-msci-matches-webapp/)
