---
lang: "fr"
geometry: "landscape, top=2.2cm, bottom=1.8cm, left=1.5cm, right=1.5cm"
fontsize: "10pt"
papersize: "a4"
header-includes: |
  \usepackage{fancyhdr}
  \usepackage{longtable}
  \usepackage{array}
  \usepackage{amssymb}
  \usepackage[table]{xcolor}

  \newcommand{\institution}{HEIG-VD}
  \newcommand{\coursename}{MSCI 2026 - Algorithmique et programmation}
  \newcommand{\session}{Semaine 43 - Octobre 2026}

  \pagestyle{fancy}
  \fancyhead[L]{\coursename}
  \fancyhead[R]{Salle :\hspace{5cm}}
  \fancyfoot[LO,LE]{\institution}
  \fancyfoot[CO,CE]{\thepage}
  \fancyfoot[RO,RE]{\session}
  \renewcommand{\footrulewidth}{0.4pt}

  \renewcommand{\arraystretch}{1.55}
  \setlength{\tabcolsep}{4pt}
  \newcolumntype{C}{>{\centering\arraybackslash}p{1.6cm}}
  \newcommand{\ligne}{\rule{0pt}{0.9cm}}
---

<!--
# Utilisation

Depuis la racine du dépôt :

```bash
docker run \
  --rm --volume "$(pwd):/data" \
  --user "$(id -u):$(id -g)" \
  pandoc/latex -o docs/ressources-enseignement/prets-ordinateurs.pdf impressions/prets-ordinateurs.md
```

Ou simplement `./generate-impressions.sh`, qui génère aussi les autres documents.
-->

# Prêt des ordinateurs

Une ligne par ordinateur prêté. Cocher la case du jour quand l'ordinateur est rendu en fin de journée (pour être mis en charge).

```{=latex}
\begin{longtable}{|>{\centering\arraybackslash}p{2cm}|p{3.8cm}|p{8.2cm}|C|C|C|C|p{3.6cm}|}
\hline
\multicolumn{3}{|c|}{} & \multicolumn{4}{c|}{\textbf{Rendu en fin de journée}} & \\
\hline
\textbf{Ordinateur} & \textbf{Équipe} & \textbf{Membres de l'équipe} & \textbf{Lun 19.10} & \textbf{Mar 20.10} & \textbf{Mer 21.10} & \textbf{Ven 23.10} & \textbf{Remarques} \\
\hline
\endhead
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\ligne & & & $\square$ & $\square$ & $\square$ & $\square$ & \\
\hline
\end{longtable}
```
