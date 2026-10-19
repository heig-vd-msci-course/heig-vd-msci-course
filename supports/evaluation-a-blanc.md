---
title: "[Algorithmique et programmation 2026-2027]"
subtitle: "Évaluation à blanc"
lang: "fr"
geometry: "top=2cm, bottom=2cm, left=2cm, right=2cm"
fontsize: "11pt"
papersize: "a4"
header-includes: |
  \usepackage{fancyhdr}

  \newcommand{\institution}{HEIG-VD}
  \newcommand{\coursename}{Algorithmique et programmation}
  \newcommand{\session}{Octobre 2026}

  \pagestyle{fancy}
  \fancyhead[L]{\institution}
  \fancyhead[R]{Nom :\hspace{4cm}}
  \fancyfoot[LO,LE]{\coursename}
  \fancyfoot[CO,CE]{\thepage}
  \fancyfoot[RO,RE]{\session}
  \renewcommand{\footrulewidth}{0.4pt}

  \newcommand{\nametable}{%
    \begin{center}%
      \renewcommand{\arraystretch}{2}%
      \setlength{\tabcolsep}{10pt}%
      \begin{tabular}{ l p{8cm} }%
        Prénom : & \\%
        \hline%
        Nom : & \\%
        \hline%
      \end{tabular}%
    \end{center}%
  }

  \newcommand{\noticebox}[1]{%
    \begin{center}%
      \fbox{\parbox{0.9\textwidth}{%
        \vspace{0.5cm}%
        \centering%
        \textbf{#1}%
        \vspace{0.5cm}%
      }}%
    \end{center}%
  }

  \newcommand{\answerbox}[1]{%
    \begin{center}%
    \fbox{\parbox[t][#1][t]{0.985\textwidth}{~}}%
    \end{center}%
  }
---

```{=latex}
\nametable

\vspace{1cm}

\noticebox{Évaluation d'entraînement.}

\vspace{1cm}
```

## Déroulement

Cette évaluation à blanc permet de s'entraîner au format de l'évaluation écrite
du vendredi. Elle comporte un exemple de chaque type de question. Il est
conseillé de la faire dans les conditions de l'évaluation : sur papier, sans
ressource et en temps limité. L'évaluation du vendredi
dure 60 minutes et compte pour 40 % de la note finale du cours _Algorithmique et
programmation_. Le 60 % restant est attribué au projet et à sa présentation.

Les questions portent sur l'ensemble des supports de cours de la semaine,
tutoriels compris.

## Ressources autorisées

- Aucune : ni ordinateur, ni téléphone, ni outil d'intelligence artificielle,
  ni notes de cours.

**Toute tentative de tricherie ou d'utilisation de ressources non autorisées
entraîne la note de 1 pour l'évaluation.**

## Instructions

- Répondre directement sur cette feuille, dans les cadres prévus.
- Écrire son nom en haut à droite **sur chaque page**.
- Pour les questions à choix multiple, cocher la ou les cases correspondantes.

```{=latex}
\newpage
```

## Partie A : Questions à choix multiple

### Question 1 (2 points)

Dans une page web, quel langage s'occupe de la **mise en forme** (couleurs,
polices, espacements) ?

_**Note** : Il est possible qu'il y ait zéro, plusieurs ou toutes les réponses
qui soient correctes. Tout doit être correct pour obtenir les points._

- [ ] HTML
- [ ] CSS
- [ ] JavaScript
- [ ] MakeCode

### Question 2 (2 points)

Au jeu des allumettes, il reste **15 allumettes** et c'est votre tour. Combien
d'allumettes faut-il retirer pour appliquer la stratégie gagnante vue en cours ?

_**Note** : Il est possible qu'il y ait zéro, plusieurs ou toutes les réponses
qui soient correctes. Tout doit être correct pour obtenir les points._

- [ ] 1 allumette
- [ ] 2 allumettes
- [ ] 3 allumettes
- [ ] Aucun coup ne permet de gagner à coup sûr

## Partie B : Vrai ou faux

### Question 3 (1 point)

Une variable déclarée avec `const` peut changer de valeur au cours du programme.

- [ ] Vrai
- [ ] Faux

### Question 4 (1 point)

Dans une page HTML, la valeur d'un attribut `id` doit être unique : deux
éléments ne peuvent pas avoir le même `id`.

- [ ] Vrai
- [ ] Faux

```{=latex}
\newpage
```

## Partie C : Réponses courtes

### Question 5 (3 points)

Expliquer la différence entre une **condition** et une **boucle**. Donner un
exemple de chacune dans le jeu des allumettes.

```{=latex}
\answerbox{6cm}
```

### Question 6 (3 points)

Qu'est-ce qu'un **événement** en programmation ? Donner un exemple d'événement
utilisé cette semaine, dans MakeCode ou en JavaScript.

```{=latex}
\answerbox{6cm}
```

```{=latex}
\newpage
```

## Partie D : Lecture de code

### Question 7 (2 points)

Soit le code JavaScript suivant :

```js
let allumettes = 10;

for (let i = 0; i < 3; i++) {
  allumettes = allumettes - 2;
}

if (allumettes < 5) {
  console.log("Presque fini");
} else {
  console.log("Il reste " + allumettes);
}
```

Qu'affiche la console à la fin de l'exécution ?

_**Note** : Une seule réponse est correcte._

- [ ] `Il reste 8`
- [ ] `Il reste 4`
- [ ] `Presque fini`
- [ ] `Presque fini` trois fois de suite
- [ ] Un message d'erreur

```{=latex}
\newpage
```

## Partie E : Trouver le bug

### Question 8 (3 points)

Le code JavaScript suivant devrait retirer une allumette à chaque clic sur le
bouton, puis afficher « Partie terminée » lorsqu'il ne reste plus d'allumette.
Il contient **un** bug.

```{.js .numberLines}
let allumettes = 20;
const compteur = document.querySelector("#compteur");
const bouton = document.querySelector("#retirer");

bouton.addEventListener("click", function () {
  allumettes = allumettes - 1;
  compteur.textContent = allumettes;

  if (allumettes = 0) {
    compteur.textContent = "Partie terminée";
  }
});
```

1. Indiquer le **numéro de la ligne** qui contient le bug.
2. **Décrire** le bug : qu'est-ce qui ne va pas ?
3. Proposer une **correction** de la ligne.

```{=latex}
\answerbox{6cm}
```

```{=latex}
\vspace*{\fill}
\begin{center}
\textbf{Total : 17 points}
\end{center}
```
