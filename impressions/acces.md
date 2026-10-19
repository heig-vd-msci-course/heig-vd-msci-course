---
lang: "fr"
geometry: "top=2.5cm, bottom=2cm, left=2cm, right=2cm"
fontsize: "11pt"
papersize: "a4"
header-includes: |
  \usepackage{fancyhdr}
  \usepackage[table]{xcolor}
  \usepackage{graphicx}

  \newcommand{\institution}{HEIG-VD}
  \newcommand{\coursename}{MSCI 2026 - Algorithmique et programmation}
  \newcommand{\session}{Semaine 43 - Octobre 2026}

  \pagestyle{fancy}
  \fancyhead[L]{\coursename}
  \fancyhead[R]{}
  \fancyfoot[LO,LE]{\institution}
  \fancyfoot[CO,CE]{\thepage}
  \fancyfoot[RO,RE]{\session}
  \renewcommand{\footrulewidth}{0.4pt}

  \renewcommand{\arraystretch}{1.5}
  \setlength{\tabcolsep}{10pt}
---

<!--
# Utilisation

Depuis la racine du dépôt :

```bash
docker run \
  --rm --volume "$(pwd):/data" \
  --user "$(id -u):$(id -g)" \
  pandoc/latex -o docs/ressources-enseignement/acces.pdf impressions/acces.md
```

Ou simplement `./generate-impressions.sh`, qui génère aussi les autres documents.

Les codes QR (`impressions/qr/*.png`) sont générés avec l'API QuickChart :

```bash
curl -sSfG https://quickchart.io/qr --data-urlencode "text=<URL>" \
  -d size=1000 -d margin=0 -d ecLevel=M -d format=png -o impressions/qr/<nom>.png
```
-->

# Accès utiles

```{=latex}
\vspace{0.5cm}
\begin{center}
\begin{tabular}{p{0.42\textwidth}p{0.42\textwidth}}
\centering \includegraphics[width=5.5cm]{impressions/qr/lundi-apres-midi.png} &
\centering \includegraphics[width=5.5cm]{impressions/qr/inscription-groupes.png} \tabularnewline[0.5cm]
\centering \textbf{\large Support du cours} &
\centering \textbf{\large Inscription des groupes} \tabularnewline
\centering {\small\ttfamily https://heig-vd-msci-course.github.io/\\ heig-vd-msci-course/\\ programme/lundi/apres-midi/} &
\centering {\small Google Sheets} \tabularnewline
\end{tabular}
\end{center}
\vspace{0.5cm}
```

## Ordinateurs en prêt

Une fois le groupe inscrit, un ordinateur lui est prêté. Cet ordinateur :

- **ne quitte pas la salle** ;
- doit être utilisé **avec soin** : aucune boisson sur les tables ;
- est **rendu au corps enseignant à la fin du cours du jour**, pour être mis en charge.

## Ordinateur personnel : connexion au WiFi

Avec un ordinateur personnel, se connecter au réseau WiFi **public-HEIG-VD**, de l'une de ces deux façons :

```{=latex}
\begin{table}[h!]
	{\rowcolors{1}{lightgray!10}{white}
		\centering
		\begin{tabular}{|p{0.33\textwidth}|p{0.6\textwidth}|}
			\hline
			\multicolumn{2}{|l|}{\textbf{Réseau : public-HEIG-VD}} \\
			\hline
			Accès par SMS        & \raggedright Saisir son numéro de téléphone sur la page de connexion et entrer le code reçu par SMS. L'accès est valable \textbf{une journée}. \tabularnewline
			\hline
			Accès par accréditation & \raggedright Demander une accréditation à \texttt{vincent.guidoux1@heig-vd.ch}. \tabularnewline
			\hline
		\end{tabular}}
\end{table}
```
