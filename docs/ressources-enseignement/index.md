---
icon: lucide/briefcase
---

# Ressources pour l'équipe enseignante

Cette page regroupe tout ce qui sert à **préparer et donner** le cours : matériel à imprimer, liste de préparation et e-mails types.

---

## Avant le cours

- [ ] Envoyer l'[e-mail de bienvenue](#e-mail-avant-le-cours) aux personnes étudiantes (environ une semaine avant)
- [ ] Imprimer le [matériel du lundi](#materiel-a-imprimer)
- [ ] Imprimer la [signalétique](#materiel-a-imprimer) et la poser le lundi matin entre l'entrée du bâtiment et la salle R102
- [ ] Imprimer la [liste de présences](#materiel-a-imprimer) (une par groupe)
- [ ] Imprimer la [fiche d'accès](#materiel-a-imprimer) (codes QR et WiFi) et la distribuer dans les classes
- [ ] Imprimer la [fiche de prêt des ordinateurs](#materiel-a-imprimer) (une par salle)
- [ ] Prévoir des baguettes ou allumettes (environ 10 par binôme), des feuilles blanches et des crayons
- [ ] Vérifier les salles (R102, T149 / T151) et l'accès à [arcade.makecode.com](https://arcade.makecode.com){target="_blank"}, à [MDN Playground](https://developer.mozilla.org/fr/play){target="_blank"} et à [makecode.microbit.org](https://makecode.microbit.org){target="_blank"} depuis les ordinateurs
- [ ] Mercredi : préparer un micro:bit et un câble USB par binôme, et les quatre cartes de la [démo d'accroche](#mercredi-solutions-microbit)
- [ ] Activer GitHub Pages sur le [dépôt des projets](https://github.com/heig-vd-msci-course/heig-vd-msci-projets){target="_blank"}
- [ ] Préparer les Wooclap du jour (charte, quiz)

## Pendant le cours

- [ ] Relever les présences à chaque demi-journée
- [ ] Mardi soir : [publier les projets des équipes](#mardi-soir-publier-les-projets)
- [ ] Prise de température au début de chaque jour (attentes, craintes)
- [ ] Noter les questions fréquentes et les difficultés pour améliorer le support

## Après le cours

- [ ] Mettre à jour le support à partir des retours et des questions notées

---

## Matériel à imprimer

!!! tip "Documents à télécharger"

    [:material-download: Matériel du lundi (PDF)](lundi-materiel.pdf){ .md-button .md-button--primary target="_blank" }
    [:material-download: Signalétique MSCI (PDF)](signaletique.pdf){ .md-button target="_blank" }
    [:material-download: Liste de présences (PDF)](presences.pdf){ .md-button target="_blank" }
    [:material-download: Fiche d'accès (PDF)](acces.pdf){ .md-button target="_blank" }
    [:material-download: Prêt des ordinateurs (PDF)](prets-ordinateurs.pdf){ .md-button target="_blank" }

| Document | Contenu | Format |
|----------|---------|--------|
| **Matériel du lundi** | Labyrinthes, formes avec baguettes, dessins, vocabulaire des 3 niveaux, plateaux du jeu des allumettes. La première page indique le nombre d'exemplaires conseillés. | A4 portrait, 8 pages |
| **Signalétique MSCI** | Panneaux « MSCI - Tout droit », « MSCI - À gauche » et « MSCI - À droite » pour guider vers la salle | A4 paysage, 3 pages |
| **Liste de présences** | 70 lignes à remplir, une case par demi-journée (lundi, mardi, mercredi, vendredi) pour noter les périodes d'absence, ligne de visa | A4 paysage, 4 pages |
| **Fiche d'accès** | Codes QR vers le support du lundi après-midi et l'inscription des groupes (Google Sheets), règles de prêt des ordinateurs, instructions de connexion au WiFi public-HEIG-VD pour les ordinateurs personnels | A4 portrait, 1 page |
| **Prêt des ordinateurs** | 25 lignes : numéro de l'ordinateur, équipe, membres, case « rendu » pour chaque jour, remarques | A4 paysage, 2 pages |

??? info "Modifier les documents"

    Les sources se trouvent dans le dossier `impressions/` du dépôt : un fichier HTML par document, sauf la liste de présences, la fiche d'accès et le prêt des ordinateurs (Markdown + LaTeX, générés avec pandoc ; codes QR dans `impressions/qr/`, générés avec [QuickChart](https://quickchart.io/documentation/qr-codes/){target="_blank"}). Après modification, régénérer les PDF avec :

    ```bash
    ./generate-impressions.sh
    ```

    Le script nécessite Chrome ou Chromium, et Docker pour la liste de présences (image `pandoc/latex`).

---

## Solutions des ateliers

| Jour | Atelier | Solution |
|------|---------|----------|
| Lundi | Jeu des allumettes en blocs (MakeCode Arcade) | [Page de la solution](../code-templates/makecode-arcade/solution.md){target="_blank"} : projets MakeCode jouables et blocs |
| Mardi | Interface web du jeu des allumettes | [Page de la solution](../code-templates/jeu-allumettes-web/solution.md){target="_blank"} : jeu jouable, code HTML/CSS/JavaScript, variante contre l'ordinateur |
| Mercredi | Premier programme, jeu des allumettes et multijoueur (micro:bit) | [Fichiers .hex des trois chapitres](#mercredi-solutions-microbit) : à copier sur une carte ou à ouvrir dans MakeCode |

!!! info "Donner accès à la solution du mardi"

    Dans la page de l'après-midi, le lien « Besoin d'aide ? » vers la solution de l'atelier est en commentaire, comme celui du lundi au départ. Le décommenter dans `docs/programme/mardi/apres-midi.md` (bloc `LIEN SOLUTION`) quand vous souhaitez que les équipes y aient accès.

### Mercredi : solutions micro:bit

Un fichier `.hex` par résultat de chapitre. Chaque fichier sert à deux choses : le **copier sur le lecteur MICROBIT** pour programmer une carte, ou l'**ouvrir dans MakeCode** (Accueil → Importer → Importer un fichier) pour afficher les blocs et les modifier.

| Chapitre | Solution | Ce que fait la carte | Télécharger |
|----------|----------|----------------------|-------------|
| **1. Premier programme** | HELLO | Bouton A : *HELLO* défile | [:material-download: chapitre-1-hello.hex](../code-templates/makecode-microbit/chapitre-1-hello.hex){ .md-button download="chapitre-1-hello.hex" } |
| **2. Le jeu des allumettes** | Jeu sur une carte | 20 allumettes en LED. A, B et A+B retirent 1, 2 ou 3 allumettes, qui brûlent avec un crépitement. Mélodie de fin, secouer pour rejouer | [:material-download: chapitre-2-jeu-allumettes.hex](../code-templates/makecode-microbit/chapitre-2-jeu-allumettes.hex){ .md-button download="chapitre-2-jeu-allumettes.hex" } |
| **3. Multijoueur par radio** | HELLO par radio | Bouton A : envoie *HELLO*, l'autre carte l'affiche | [:material-download: chapitre-3-radio-hello.hex](../code-templates/makecode-microbit/chapitre-3-radio-hello.hex){ .md-button download="chapitre-3-radio-hello.hex" } |
| **3. Multijoueur par radio** | Jeu sur deux cartes | Le même jeu, une carte par joueuse. Secouer une carte lance la partie : elle commence | [:material-download: chapitre-3-jeu-allumettes-radio.hex](../code-templates/makecode-microbit/chapitre-3-jeu-allumettes-radio.hex){ .md-button download="chapitre-3-jeu-allumettes-radio.hex" } |

!!! tip "Démo d'accroche avec quatre cartes"

    Copier `chapitre-1-hello.hex` sur la carte 1, `chapitre-2-jeu-allumettes.hex` sur la carte 2, et `chapitre-3-jeu-allumettes-radio.hex` sur les cartes 3 **et** 4. Programmer les cartes **l'une après l'autre** et attendre la fin du clignotement de la LED jaune. Avec plusieurs cartes branchées en même temps, la copie peut échouer (erreur 504, fichier `FAIL.TXT` : *The transfer timed out*).

!!! warning "Groupe radio des solutions"

    Les deux solutions radio utilisent le groupe **0**, qu'aucune équipe n'a. Elles fonctionnent donc telles quelles pour la démo, sans interférer avec les équipes (groupes 1 à 17). Une équipe qui part d'une solution doit remplacer `0` par son propre numéro.

Les sources TypeScript (`.ts`) se trouvent dans le même dossier du dépôt : `docs/code-templates/makecode-microbit/`.

---

## Mardi : points à aborder en classe

### En début de matinée

1. **Retour sur le lundi** : la journée s'est bien passée, mais le niveau de bruit était élevé
    - L'équipe enseignante n'est pas là pour faire la police, mais pour aider à apprendre et à construire quelque chose
    - Personne ne sera forcé de s'intéresser au cours
    - En revanche, le respect des camarades et de l'équipe enseignante est attendu : garder au moins le silence pendant les explications, même en étant sur son smartphone
2. **Présenter le projet, le test et les critères d'évaluation**
3. **Mettre l'accent sur le CSS plutôt que sur le HTML** : le chapitre HTML est un rappel, à parcourir rapidement si le groupe l'a déjà vu en amont, pour laisser du temps au chapitre [Mise en page : Flexbox et Grid](../programme/mardi/matin.md#mise-en-page-flexbox-et-grid){target="_blank"}. Les jeux de la section [Pour aller plus loin](../programme/mardi/matin.md#pour-aller-plus-loin){target="_blank"} (Flexbox Froggy, CSS Grid Garden, CSS Diner) conviennent aux personnes plus avancées

### En début d'atelier de l'après-midi

- **Montrer au projecteur la [version d'exemple du jeu](https://heig-vd-msci-course.github.io/heig-vd-msci-matches-webapp/){target="_blank"}** : une version réalisable dans le temps imparti, avec un style choisi
- Seul `==` est présenté dans les conditions (pas `===`), pour ne pas introduire la notion de types

---

## Mardi soir : publier les projets

Les équipes envoient leur projet par e-mail avant **mardi 16h30**, avec le modèle de la [page du mardi](../programme/mardi/apres-midi.md#rendre-son-projet){target="_blank"}. Le code est copié depuis MDN Playground (« Partager → Copier le Markdown »).

1. Copier le texte de chaque e-mail dans `emails/<equipe>.txt`, dans le [dépôt des projets](https://github.com/heig-vd-msci-course/heig-vd-msci-projets){target="_blank"}
2. Lancer `python3 publier.py` : le script crée le dossier de chaque équipe et met à jour la galerie
3. Vérifier la galerie en local, puis commiter et pousser
4. Répondre à chaque équipe avec son lien

La procédure détaillée et la réponse type aux équipes se trouvent dans le README du [dépôt des projets](https://github.com/heig-vd-msci-course/heig-vd-msci-projets){target="_blank"}.

| | Adresse |
|---|---|
| Galerie | <https://heig-vd-msci-course.github.io/heig-vd-msci-projets/> |
| Projet d'une équipe | `https://heig-vd-msci-course.github.io/heig-vd-msci-projets/<equipe>/` (fruit en minuscules, sans accents) |

---

## E-mail avant le cours

À envoyer environ une semaine avant le début de la semaine, depuis l'une des deux adresses, avec l'autre personne en copie.

```text
[MSCI 2026] Semaine « Algorithmique et programmation » - Informations

Bonjour à toutes et à tous,

Nous sommes Clarisse Fleurimont et Vincent Guidoux et nous vous accompagnerons durant la semaine « Algorithmique et programmation » de la MSCI, du lundi 19 au vendredi 23 octobre 2026.

Nous vous donnons rendez-vous le lundi 19 octobre à 8h30 en salle R102. Des panneaux « MSCI » vous guideront depuis l'entrée du bâtiment.

Au programme de la semaine :

- Lundi : introduction à la programmation et premier jeu avec MakeCode Arcade
- Mardi : création de pages web (HTML et CSS)
- Mercredi : programmation physique avec le micro:bit
- Jeudi : travail libre à domicile
- Vendredi : projet créatif et clôture

Aucune connaissance préalable en programmation n'est nécessaire : nous partirons de zéro, avec des projets créatifs.

Tout le support de cours (programme, horaires, salles et contenus) est disponible ici : https://heig-vd-msci-course.github.io/heig-vd-msci-course/

Pour toute question, écrivez-nous en mettant nos deux adresses dans le même e-mail :

- Clarisse Fleurimont : clarisse.fleurimont@heig-vd.ch
- Vincent Guidoux : vincent.guidoux1@heig-vd.ch

Nous nous réjouissons de vous rencontrer !

Clarisse Fleurimont et Vincent Guidoux
```
