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
- [ ] Prévoir des baguettes ou allumettes (environ 10 par binôme), des feuilles blanches et des crayons
- [ ] Vérifier les salles (R102, T155 / T157) et l'accès à [arcade.makecode.com](https://arcade.makecode.com){target="_blank"} depuis les ordinateurs
- [ ] Préparer les Wooclap du jour (charte, quiz)

## Pendant le cours

- [ ] Relever les présences à chaque demi-journée
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

| Document | Contenu | Format |
|----------|---------|--------|
| **Matériel du lundi** | Labyrinthes, formes avec baguettes, dessins, vocabulaire des 3 niveaux, plateaux du jeu des allumettes. La première page indique le nombre d'exemplaires conseillés. | A4 portrait, 8 pages |
| **Signalétique MSCI** | Panneaux « MSCI - Tout droit », « MSCI - À gauche » et « MSCI - À droite » pour guider vers la salle | A4 paysage, 3 pages |
| **Liste de présences** | 70 lignes à remplir, une case par demi-journée (lundi, mardi, mercredi, vendredi) pour noter les périodes d'absence, ligne de visa | A4 paysage, 4 pages |

??? info "Modifier les documents"

    Les sources se trouvent dans le dossier `impressions/` du dépôt : un fichier HTML par document, sauf la liste de présences (Markdown + LaTeX, générée avec pandoc). Après modification, régénérer les PDF avec :

    ```bash
    ./generate-impressions.sh
    ```

    Le script nécessite Chrome ou Chromium, et Docker pour la liste de présences (image `pandoc/latex`).

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
- Mercredi : travail libre à domicile
- Jeudi : programmation physique avec le micro:bit
- Vendredi : projet créatif et clôture

Aucune connaissance préalable en programmation n'est nécessaire : nous partirons de zéro, avec des projets créatifs.

Tout le support de cours (programme, horaires, salles et contenus) est disponible ici : https://heig-vd-msci-course.github.io/heig-vd-msci-course/

Pour toute question, écrivez-nous en mettant nos deux adresses dans le même e-mail :

- Clarisse Fleurimont : clarisse.fleurimont@heig-vd.ch
- Vincent Guidoux : vincent.guidoux1@heig-vd.ch

Nous nous réjouissons de vous rencontrer !

Clarisse Fleurimont et Vincent Guidoux
```
