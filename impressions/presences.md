---
lang: "fr"
geometry: "landscape, top=2.2cm, bottom=1.8cm, left=1.5cm, right=1.5cm"
fontsize: "10pt"
papersize: "a4"
header-includes: |
  \usepackage{fancyhdr}
  \usepackage{multirow}
  \usepackage{longtable}
  \usepackage{array}
  \usepackage[table]{xcolor}

  \newcommand{\institution}{HEIG-VD}
  \newcommand{\coursename}{MSCI 2026 - Algorithmique et programmation}
  \newcommand{\session}{Semaine 43 - Octobre 2026}

  \pagestyle{fancy}
  \fancyhead[L]{\coursename}
  \fancyhead[R]{Groupe :\hspace{5cm}}
  \fancyfoot[LO,LE]{\institution}
  \fancyfoot[CO,CE]{\thepage}
  \fancyfoot[RO,RE]{\session}
  \renewcommand{\footrulewidth}{0.4pt}

  \renewcommand{\arraystretch}{1.55}
  \setlength{\tabcolsep}{4pt}
  \newcolumntype{C}{>{\centering\arraybackslash}p{1.95cm}}
---

<!--
# Utilisation

Depuis la racine du dépôt :

```bash
docker run \
  --rm --volume "$(pwd):/data" \
  --user "$(id -u):$(id -g)" \
  pandoc/latex -o docs/ressources-enseignement/presences.pdf impressions/presences.md
```

Ou simplement `./generate-impressions.sh`, qui génère aussi les autres documents.
-->

# Liste de présences


```{=latex}
\begin{longtable}{|>{\centering\arraybackslash}p{0.7cm}|p{6.2cm}|C|C|C|C|C|C|C|C|}
\hline
 & & \multicolumn{2}{c|}{\textbf{Lundi 19.10}} & \multicolumn{2}{c|}{\textbf{Mardi 20.10}} & \multicolumn{2}{c|}{\textbf{Mercredi 21.10}} & \multicolumn{2}{c|}{\textbf{Vendredi 23.10}} \\
\hline
 & & Matin & Après-midi & Matin & Après-midi & Matin & Après-midi & Matin & Après-midi \\
\hline
\textbf{N°} & \textbf{Nom et prénom} & {\small 4 pér.} & {\small 4 pér.} & {\small 4 pér.} & {\small 4 pér.} & {\small 4 pér.} & {\small 4 pér.} & {\small 4 pér.} & {\small 4 pér.} \\
\hline
\endhead
1 & & & & & & & & & \\
\hline
2 & & & & & & & & & \\
\hline
3 & & & & & & & & & \\
\hline
4 & & & & & & & & & \\
\hline
5 & & & & & & & & & \\
\hline
6 & & & & & & & & & \\
\hline
7 & & & & & & & & & \\
\hline
8 & & & & & & & & & \\
\hline
9 & & & & & & & & & \\
\hline
10 & & & & & & & & & \\
\hline
11 & & & & & & & & & \\
\hline
12 & & & & & & & & & \\
\hline
13 & & & & & & & & & \\
\hline
14 & & & & & & & & & \\
\hline
15 & & & & & & & & & \\
\hline
16 & & & & & & & & & \\
\hline
17 & & & & & & & & & \\
\hline
18 & & & & & & & & & \\
\hline
19 & & & & & & & & & \\
\hline
20 & & & & & & & & & \\
\hline
21 & & & & & & & & & \\
\hline
22 & & & & & & & & & \\
\hline
23 & & & & & & & & & \\
\hline
24 & & & & & & & & & \\
\hline
25 & & & & & & & & & \\
\hline
26 & & & & & & & & & \\
\hline
27 & & & & & & & & & \\
\hline
28 & & & & & & & & & \\
\hline
29 & & & & & & & & & \\
\hline
30 & & & & & & & & & \\
\hline
31 & & & & & & & & & \\
\hline
32 & & & & & & & & & \\
\hline
33 & & & & & & & & & \\
\hline
34 & & & & & & & & & \\
\hline
35 & & & & & & & & & \\
\hline
36 & & & & & & & & & \\
\hline
37 & & & & & & & & & \\
\hline
38 & & & & & & & & & \\
\hline
39 & & & & & & & & & \\
\hline
40 & & & & & & & & & \\
\hline
41 & & & & & & & & & \\
\hline
42 & & & & & & & & & \\
\hline
43 & & & & & & & & & \\
\hline
44 & & & & & & & & & \\
\hline
45 & & & & & & & & & \\
\hline
46 & & & & & & & & & \\
\hline
47 & & & & & & & & & \\
\hline
48 & & & & & & & & & \\
\hline
49 & & & & & & & & & \\
\hline
50 & & & & & & & & & \\
\hline
51 & & & & & & & & & \\
\hline
52 & & & & & & & & & \\
\hline
53 & & & & & & & & & \\
\hline
54 & & & & & & & & & \\
\hline
55 & & & & & & & & & \\
\hline
56 & & & & & & & & & \\
\hline
57 & & & & & & & & & \\
\hline
58 & & & & & & & & & \\
\hline
59 & & & & & & & & & \\
\hline
60 & & & & & & & & & \\
\hline
61 & & & & & & & & & \\
\hline
62 & & & & & & & & & \\
\hline
63 & & & & & & & & & \\
\hline
64 & & & & & & & & & \\
\hline
65 & & & & & & & & & \\
\hline
66 & & & & & & & & & \\
\hline
67 & & & & & & & & & \\
\hline
68 & & & & & & & & & \\
\hline
69 & & & & & & & & & \\
\hline
70 & & & & & & & & & \\
\hline
\multicolumn{2}{|r|}{\textbf{Visa de l'équipe enseignante}} & & & & & & & & \\
\hline
\end{longtable}
```
