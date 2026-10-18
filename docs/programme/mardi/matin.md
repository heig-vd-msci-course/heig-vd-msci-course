---
icon: lucide/sunrise
---

# Mardi Matin

> *HTML et CSS : créer et personnaliser sa page*

!!! warning "Page en construction"

    Seul l'atelier de fin de matinée reste à venir.

---

## Le web et MDN Playground

Avant d'écrire sa première page, un petit tour de ce qui se passe quand on ouvre un site, puis la découverte de l'outil de la journée.

### Comment fonctionne le web

Quand on tape une adresse dans le navigateur, celui-ci **demande** la page à un ordinateur distant, le **serveur**, qui la lui **envoie**. Le navigateur assemble ensuite tout ce qu'il a reçu pour afficher la page.

```mermaid
sequenceDiagram
    participant N as Navigateur (son ordinateur)
    participant S as Serveur (le site)
    N->>S: Je voudrais la page tiktok.com
    S-->>N: Voici le HTML
    N->>S: Il me faut aussi le CSS, le JavaScript et les images
    S-->>N: Les voici
    Note over N: Le navigateur assemble et affiche la page
```

| Mot | Signification |
|-----|---------------|
| **Navigateur** | Le logiciel qui affiche les pages : Firefox, Chrome, Safari, Edge... |
| **Serveur** | Un ordinateur, quelque part, qui stocke le site et l'envoie à qui le demande |
| **URL** | L'adresse d'une page, par exemple `https://developer.mozilla.org/fr/` |

→ Sur MDN : [Comment fonctionne le Web](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works){target="_blank"}

### Trois langages, trois rôles

Toutes les pages web, de TikTok à Spotify, reposent sur les trois mêmes langages :

| Langage | Rôle | Comme pour une tenue... |
|---------|------|------------------------|
| **HTML** | Le **contenu** : titres, textes, images, boutons | Les vêtements que l'on porte |
| **CSS** | L'**apparence** : couleurs, polices, disposition | Le style : couleurs, coupe, accessoires |
| **JavaScript** | Le **comportement** : réagir aux clics, calculer, animer | Les mouvements : marcher, danser, poser |

Ce matin : HTML et CSS. Cet après-midi : JavaScript.

### Expérience : modifier une vraie page

Le navigateur contient des **outils de développement** qui montrent le HTML et le CSS de n'importe quelle page, et permettent même de les modifier.

1. Ouvrir un site connu dans un nouvel onglet (un site d'actualité, de musique, de mode...)
2. Faire un **clic droit** sur un titre, puis **Inspecter** : un panneau s'ouvre avec le code HTML, l'élément choisi est surligné
3. **Double-cliquer** sur le texte du titre dans le panneau, le remplacer par autre chose, puis appuyer sur ++enter++
4. Observer la page : le titre a changé !
5. Recharger la page (++f5++)

??? success "Que s'est-il passé ?"

    La modification n'a eu lieu que **dans son propre navigateur**, sur la copie de la page reçue du serveur. Le vrai site n'a pas changé, et personne d'autre ne voit la modification. En rechargeant la page, le navigateur redemande l'original au serveur : tout revient comme avant.

    **À retenir** : une capture d'écran d'un site peut être modifiée de cette façon en quelques secondes. Une capture d'écran n'est pas une preuve : mieux vaut vérifier à la source.

→ Sur MDN : [Que sont les outils de développement du navigateur ?](https://developer.mozilla.org/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools){target="_blank"}

### Découvrir MDN Playground

Pour écrire ses propres pages, la journée se déroule dans **[MDN Playground](https://developer.mozilla.org/fr/play){target="_blank"}** : un éditeur en ligne, gratuit, sans compte et sans rien à installer, proposé par Mozilla (l'organisation qui développe Firefox).

```text
┌──────────────────────────┬──────────────────────────┐
│  [Format] [Exécuter]     │                          │
│  [Partager] [Effacer]    │         APERÇU           │
├──────────────────────────┤   (le résultat de la     │
│  HTML                    │    page)                 │
├──────────────────────────┤                          │
│  CSS                     ├──────────────────────────┤
├──────────────────────────┤         CONSOLE          │
│  JAVASCRIPT              │   (les messages du       │
│                          │    JavaScript)           │
└──────────────────────────┴──────────────────────────┘
```

| Bouton | Action |
|--------|--------|
| **Format** | Remet le code en forme (indentation, retours à la ligne) |
| **Exécuter** | Met à jour l'aperçu |
| **Partager** | Copie le code pour le garder ou l'envoyer (voir plus bas) |
| **Effacer** | Vide **tout** : HTML, CSS et JavaScript. À utiliser avec précaution ! |

!!! info "MDN, la référence du web"

    MDN Playground fait partie de **MDN Web Docs**, la documentation de référence du web, écrite par Mozilla et une grande communauté. Elle est gratuite, en français et utilisée par les développeuses et développeurs du monde entier. Tout au long de la journée, les liens « → Sur MDN » mènent vers ses pages pour aller plus loin.

    Point de départ : [Apprendre le développement web](https://developer.mozilla.org/fr/docs/Learn_web_development){target="_blank"}

### Premier essai : les trois langages ensemble

Copier chaque bloc dans la bonne zone de MDN Playground, puis cliquer sur le bouton qui apparaît dans l'aperçu.

=== "HTML"

    ```html
    <h1>Bonjour !</h1>
    <button id="bouton">Cliquer ici</button>
    ```

=== "CSS"

    ```css
    h1 {
      color: teal;
    }

    button {
      font-size: 20px;
    }
    ```

=== "JavaScript"

    ```js
    document.querySelector("#bouton").addEventListener("click", () => {
      document.querySelector("h1").textContent = "Bienvenue en MSCI !";
      console.log("Le bouton a été cliqué");
    });
    ```

En cliquant sur le bouton, le titre change, et un message apparaît dans la **console**. Pas besoin de comprendre le JavaScript pour l'instant : c'est le programme de l'après-midi.

!!! question "Petit défi"

    Sans rien connaître encore, essayer de deviner quoi modifier pour :

    - changer la couleur du titre ;
    - changer le texte du bouton ;
    - changer le message qui s'affiche après le clic.

### Garder son travail

MDN Playground ne garde pas le code pour toujours. Avant de fermer l'onglet, et à la fin de chaque chapitre :

1. Cliquer sur **Partager**
2. Cliquer sur **Copier le Markdown** : le HTML, le CSS et le JavaScript sont copiés d'un coup
3. Coller le tout dans un fichier texte ou un e-mail à soi-même

Pour reprendre plus tard, il suffit de recoller chaque bloc dans la bonne zone.

!!! success "À retenir"

    - Le navigateur demande les pages à un serveur, puis les affiche
    - HTML = contenu, CSS = apparence, JavaScript = comportement
    - **Inspecter** montre le code de n'importe quelle page
    - Dans MDN Playground : penser à **Partager → Copier le Markdown** pour garder son travail

---

## Rappel HTML : sa page personnelle

Le **HTML** décrit le *contenu* d'une page web : des titres, des paragraphes, des listes, des liens, des images. Dans ce tutoriel, chaque personne crée **sa page personnelle** en partant d'une page qui fonctionne déjà, puis en la modifiant étape par étape.

Au passage, quelques erreurs sont glissées **exprès** : c'est en cassant une page qu'on comprend comment elle fonctionne, et comment la réparer.

!!! info "Le tutoriel de référence"

    Ce chapitre suit la logique du tutoriel [Créer le contenu](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content){target="_blank"} de MDN, la documentation de référence du web, écrite par Mozilla et sa communauté. Chaque étape renvoie vers la page MDN correspondante pour aller plus loin.

### Étape 1 : Une page qui fonctionne

1. Ouvrir [MDN Playground](https://developer.mozilla.org/fr/play){target="_blank"}
2. Copier le code ci-dessous et le coller dans la zone **HTML**
3. Observer le résultat à droite (cliquer sur **Exécuter** s'il ne s'affiche pas)

```html
<h1>Salut, moi c'est Alex !</h1>
<p>J'ai 17 ans et j'adore la <strong>musique</strong>.</p>

<h2>Ce que j'aime</h2>
<ul>
  <li>Le rap</li>
  <li>Les séries</li>
</ul>
```

Chaque morceau de la page est un **élément**, construit de la même façon :

```text
<p>J'ai 17 ans</p>
 │      │       │
 │      │       └── balise fermante (avec une barre /)
 │      └── contenu
 └── balise ouvrante
```

| Balise | Rôle |
|--------|------|
| `<h1>` | Titre principal de la page (un seul par page) |
| `<h2>` | Sous-titre |
| `<p>` | Paragraphe |
| `<strong>` | Texte important (affiché en gras) |
| `<ul>` et `<li>` | Liste à puces (`ul`) et chacun de ses éléments (`li`) |

Les éléments s'emboîtent les uns dans les autres, comme des poupées russes : la page forme un **arbre**.

```mermaid
flowchart TD
    body["body (la page)"] --> h1["h1 : Salut, moi c'est Alex !"]
    body --> p["p : J'ai 17 ans..."]
    p --> strong["strong : musique"]
    body --> h2["h2 : Ce que j'aime"]
    body --> ul["ul (la liste)"]
    ul --> li1["li : Le rap"]
    ul --> li2["li : Les séries"]
```

!!! note "Et le reste de la page ?"

    Une vraie page HTML contient aussi `<!doctype html>`, `<html>`, `<head>` et `<body>`. MDN Playground les ajoute tout seul : la zone HTML correspond au contenu de `<body>`.

→ Sur MDN : [Syntaxe de base du HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax){target="_blank"}

### Étape 2 : En faire sa page

Modifier le code pour qu'il parle de soi :

1. Remplacer `Alex` par son prénom ou un pseudo
2. Remplacer l'âge et la passion
3. Ajouter **au moins deux** éléments `<li>` dans la liste : musique, artistes, séries, jeux, mode...

!!! tip "Astuce de MDN Playground"

    En tapant `<li>`, l'éditeur ajoute tout seul la balise fermante `</li>`. Il suffit d'écrire le texte entre les deux, sans retaper `</li>` : sinon, la balise fermante apparaît en double.

→ Sur MDN : [Titres et paragraphes](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs){target="_blank"} · [Listes](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Lists){target="_blank"}

### Étape 3 : Le bug de la balise oubliée

!!! bug "Bug volontaire"

    Dans le paragraphe, **supprimer** la balise fermante `</strong>` :

    ```html
    <p>J'ai 17 ans et j'adore la <strong>musique.</p>
    ```

    Observer la page. Que s'est-il passé ? Pourquoi ?

??? success "Explication et correction"

    Toute la suite de la page est passée **en gras**, jusqu'à la liste. Sans balise fermante, le navigateur ne sait pas où s'arrête le texte important : il continue jusqu'à la fin.

    **Correction** : remettre `</strong>` juste après le mot concerné.

    **À retenir** : le HTML n'affiche **jamais** de message d'erreur. Le navigateur fait de son mieux et affiche quelque chose, même avec une erreur. Pour trouver un bug en HTML, il faut donc **observer** la page et relire le code autour de l'endroit qui s'affiche mal.

??? abstract "Code complet à la fin de l'étape 3"

    ```html
    <h1>Salut, moi c'est Alex !</h1>
    <p>J'ai 17 ans et j'adore la <strong>musique</strong>.</p>

    <h2>Ce que j'aime</h2>
    <ul>
      <li>Le rap</li>
      <li>Les séries</li>
      <li>Les jeux vidéo</li>
      <li>La mode</li>
    </ul>
    ```

### Étape 4 : Ajouter un lien

Un lien utilise la balise `<a>` et un **attribut** `href`, qui indique l'adresse vers laquelle aller. Un attribut s'écrit dans la balise ouvrante : `nom="valeur"`.

Ajouter ce paragraphe à la fin de la page, avec un vrai lien vers une chanson, une vidéo ou un site aimé :

```html
<p>Ma chanson du moment : <a href="https://www.youtube.com" target="_blank">le titre de la chanson</a></p>
```

| Attribut | Rôle |
|----------|------|
| `href` | L'adresse du lien |
| `target="_blank"` | Ouvrir le lien dans un nouvel onglet |

!!! bug "Bug volontaire"

    Dans la balise `<a>`, écrire `herf` au lieu de `href` :

    ```html
    <a herf="https://www.youtube.com" target="_blank">le titre de la chanson</a>
    ```

    Que devient le lien ?

??? success "Explication et correction"

    Le texte n'est plus bleu ni souligné, et on ne peut plus cliquer dessus. Le navigateur ne connaît pas d'attribut `herf` : il l'ignore sans rien dire. L'élément `<a>` n'a donc plus d'adresse, et ce n'est plus un lien.

    **Correction** : écrire `href` (pour *hypertext reference*).

    **À retenir** : une seule lettre inversée suffit à casser une page. L'ordinateur exécute *exactement* ce qui est écrit, comme dans l'activité « Donner des instructions » du lundi.

→ Sur MDN : [Créer des liens](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links){target="_blank"}

### Étape 5 : Ajouter une image

Ajouter cette image juste sous le titre `<h1>` :

```html
<img src="https://picsum.photos/400/250" alt="Une photo au hasard">
```

| Attribut | Rôle |
|----------|------|
| `src` | L'adresse de l'image (ici, un site qui donne une photo au hasard) |
| `alt` | Un texte qui décrit l'image |

!!! note "Une balise sans fermeture"

    `<img>` n'a **pas** de balise fermante : l'élément n'a pas de contenu, tout est dans ses attributs. On parle d'élément *vide*.

!!! bug "Bug volontaire"

    Retirer le `s` de `photos` dans l'adresse :

    ```html
    <img src="https://picsum.photo/400/250" alt="Une photo au hasard">
    ```

    Qu'affiche maintenant la page à la place de l'image ?

??? success "Explication et correction"

    Le navigateur ne trouve pas l'image à cette adresse : il affiche une **icône d'image cassée** et, à côté, le texte de l'attribut `alt`.

    C'est tout le rôle de `alt` : décrire l'image quand elle ne s'affiche pas, et surtout pour les personnes aveugles ou malvoyantes, dont le lecteur d'écran lit ce texte à voix haute. Une image sans `alt` est invisible pour elles.

    **Correction** : remettre `photos`. Pour utiliser sa propre image, remplacer l'adresse par celle d'une image trouvée en ligne (clic droit sur l'image → *Copier l'adresse de l'image*).

→ Sur MDN : [Les images en HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images){target="_blank"}

??? abstract "Code complet à la fin de l'étape 5"

    ```html
    <h1>Salut, moi c'est Alex !</h1>
    <img src="https://picsum.photos/400/250" alt="Une photo au hasard">
    <p>J'ai 17 ans et j'adore la <strong>musique</strong>.</p>

    <h2>Ce que j'aime</h2>
    <ul>
      <li>Le rap</li>
      <li>Les séries</li>
      <li>Les jeux vidéo</li>
      <li>La mode</li>
    </ul>

    <p>Ma chanson du moment : <a href="https://www.youtube.com" target="_blank">le titre de la chanson</a></p>
    ```

### Étape 6 : À vous de jouer

Compléter sa page librement. Quelques idées :

- Une section `<h2>Mes projets</h2>` avec ce que l'on aimerait créer
- Une liste numérotée `<ol>` de son top 3 (chansons, films, jeux...)
- Un mot important avec `<em>` (mis en avant, en italique)
- Une deuxième image, avec un vrai texte `alt`

!!! question "Défi : chasse au bug"

    Échanger d'ordinateur avec sa voisine : chacune glisse **une** erreur dans la page de l'autre (une balise fermante oubliée, une faute dans un attribut...), puis on se rend les ordinateurs. Qui trouve et corrige le bug le plus vite ?

→ Sur MDN : [Déboguer le HTML](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML){target="_blank"}

### Récapitulatif

| Élément | Exemple | Rôle |
|---------|---------|------|
| Titres | `<h1>`, `<h2>` | Structurer la page |
| Paragraphe | `<p>` | Un bloc de texte |
| Mise en avant | `<strong>`, `<em>` | Texte important, texte accentué |
| Listes | `<ul>`, `<ol>`, `<li>` | Listes à puces, numérotées |
| Lien | `<a href="...">` | Aller vers une autre page |
| Image | `<img src="..." alt="...">` | Afficher une image (élément vide) |

!!! success "À retenir"

    - Un élément = balise ouvrante + contenu + balise fermante
    - Les attributs (`href`, `src`, `alt`...) donnent des informations en plus
    - Le HTML n'affiche pas d'erreur : un bug se repère en **observant** la page

!!! tip "Garder son travail"

    Avant de fermer l'onglet : **Partager → Copier le Markdown**, puis coller le code dans un fichier ou un e-mail à soi-même.

---

## Rappel CSS : mettre en forme sa page

Le **CSS** décrit l'*apparence* d'une page : les couleurs, les polices, les espacements, les bordures. Le HTML dit *ce qu'il y a* sur la page, le CSS dit *à quoi ça ressemble*.

Ce tutoriel reprend la page personnelle du chapitre précédent et lui donne un style. Comme pour le HTML, quelques erreurs sont glissées **exprès**.

!!! info "Le tutoriel de référence"

    Ce chapitre suit la logique du tutoriel [Mettre en forme le contenu](https://developer.mozilla.org/fr/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content){target="_blank"} de MDN. Chaque étape renvoie vers la page MDN correspondante pour aller plus loin.

### Étape 1 : Une première règle

1. Garder sa page personnelle dans la zone **HTML** de MDN Playground (sinon, coller le [code complet de la fin du chapitre HTML](#etape-5-ajouter-une-image))
2. Copier le code ci-dessous et le coller dans la zone **CSS**
3. Observer le résultat

```css
body {
  font-family: sans-serif;
  background-color: lavender;
}

h1 {
  color: deeppink;
}
```

Chaque morceau de CSS est une **règle**, construite de la même façon :

```text
h1 {  color: deeppink;  }
│     │      │       │
│     │      │       └── point-virgule : fin de la déclaration
│     │      └── valeur
│     └── propriété
└── sélecteur : les éléments HTML concernés
```

| Terme | Rôle | Exemple |
|-------|------|---------|
| **Sélecteur** | Quels éléments modifier | `h1`, `body` |
| **Propriété** | Quoi modifier | `color`, `background-color`, `font-family` |
| **Valeur** | Comment le modifier | `deeppink`, `lavender`, `sans-serif` |
| **Déclaration** | Une propriété et sa valeur, terminée par `;` | `color: deeppink;` |

→ Sur MDN : [Qu'est-ce que le CSS ?](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/What_is_CSS){target="_blank"} · [Premiers pas en CSS](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started){target="_blank"}

### Étape 2 : Ses couleurs, sa police

Modifier le style pour qu'il corresponde à sa personnalité :

1. Changer les couleurs de `body` et de `h1`. Il existe [140 noms de couleurs](https://developer.mozilla.org/fr/docs/Web/CSS/named-color){target="_blank"} (`tomato`, `teal`, `gold`, `midnightblue`...) ou des codes comme `#ff6b6b`
2. Ajouter une déclaration dans la règle `h1` pour écrire le titre en majuscules :

    ```css
    h1 {
      color: deeppink;
      text-transform: uppercase;
    }
    ```

3. Essayer d'autres polices pour `body` : `serif`, `monospace`, `cursive`, `system-ui`...

→ Sur MDN : [Valeurs et unités](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units){target="_blank"}

### Étape 3 : Le bug du point-virgule

!!! bug "Bug volontaire"

    Dans la règle `h1`, **supprimer** le point-virgule après `deeppink` :

    ```css
    h1 {
      color: deeppink
      text-transform: uppercase;
    }
    ```

    Observer le titre. Que s'est-il passé ? Pourquoi les **deux** déclarations ne fonctionnent-elles plus ?

??? success "Explication et correction"

    Le titre perd sa couleur **et** ses majuscules. Sans point-virgule, le navigateur ne voit pas où s'arrête la première déclaration : il lit `color: deeppink text-transform: uppercase`, une couleur qui n'existe pas. Il ignore donc toute la déclaration, sans rien dire.

    **Correction** : remettre le `;` à la fin de chaque déclaration.

    **À retenir** : comme le HTML, le CSS n'affiche pas de message d'erreur. Une déclaration incorrecte est simplement ignorée, et la page s'affiche sans ce style.

??? abstract "Code CSS complet à la fin de l'étape 3"

    ```css
    body {
      font-family: sans-serif;
      background-color: lavender;
    }

    h1 {
      color: deeppink;
      text-transform: uppercase;
    }
    ```

### Étape 4 : Cibler un élément précis

Un sélecteur comme `li` modifie **tous** les éléments `<li>`. Pour n'en modifier qu'un seul, on lui donne une **classe** dans le HTML, puis on la cible en CSS avec un **point** devant son nom.

1. Dans la zone **HTML**, ajouter une classe à son élément de liste préféré :

    ```html
    <li class="coup-de-coeur">Les séries</li>
    ```

2. Dans la zone **CSS**, ajouter ces deux règles :

    ```css
    li {
      color: midnightblue;
    }

    .coup-de-coeur {
      background-color: gold;
      font-weight: bold;
    }
    ```

Les deux règles ne visent pas les mêmes éléments de l'arbre :

```mermaid
flowchart TD
    body["body"] --> h1["h1"]
    body --> p["p"]
    body --> h2["h2"]
    body --> ul["ul"]
    ul --> li1["li"]
    ul --> li2["li class='coup-de-coeur'"]
    ul --> li3["li"]
    classDef tous fill:#8fb8ff,stroke:#191970,stroke-width:2px
    classDef classe fill:#ffe066,stroke:#b8860b,stroke-width:3px
    class li1,li3 tous
    class li2 classe
```

*En bleu : les éléments visés par `li`. En jaune : celui visé par `li` **et** `.coup-de-coeur`.*

!!! bug "Bug volontaire"

    Dans le CSS, **retirer le point** devant le nom de la classe :

    ```css
    coup-de-coeur {
      background-color: gold;
      font-weight: bold;
    }
    ```

    Que devient l'élément préféré ?

??? success "Explication et correction"

    Il redevient comme les autres : plus de fond doré, plus de gras. Sans le point, le navigateur cherche des éléments HTML qui s'appellent `<coup-de-coeur>`. Il n'y en a aucun, donc la règle ne s'applique à rien.

    **Correction** : remettre le point, `.coup-de-coeur`.

    **À retenir** : `li` vise un type d'élément, `.coup-de-coeur` vise une classe. Le point fait toute la différence.

→ Sur MDN : [Sélecteurs de base](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors){target="_blank"}

### Étape 5 : Des boîtes et des espaces

En CSS, chaque élément est une **boîte**. Autour du contenu, on peut régler trois couches :

```text
┌──────────────── margin (marge extérieure) ───────────────┐
│  ┌───────────── border (bordure) ─────────────────────┐  │
│  │  ┌────────── padding (marge intérieure) ────────┐  │  │
│  │  │                                              │  │  │
│  │  │                  contenu                     │  │  │
│  │  │                                              │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

Ajouter ces règles pour arrondir l'image et centrer la page :

```css
img {
  border-radius: 20px;
  border: 4px solid white;
}

body {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
}
```

!!! note "Deux règles pour `body`"

    La règle `body` existe déjà depuis l'étape 1. On peut soit ajouter ces déclarations dans la règle existante, soit écrire une deuxième règle : le navigateur combine les deux.

| Déclaration | Effet |
|-------------|-------|
| `border-radius: 20px;` | Arrondit les coins |
| `border: 4px solid white;` | Bordure de 4 pixels, pleine, blanche |
| `max-width: 600px;` | La page ne dépasse pas 600 pixels de large |
| `margin: 0 auto;` | Marges automatiques à gauche et à droite : la page est centrée |
| `padding: 16px;` | De l'espace entre le bord de la page et le contenu |

!!! bug "Bug volontaire"

    Dans la règle `img`, **retirer l'unité** `px` :

    ```css
    img {
      border-radius: 20;
      border: 4px solid white;
    }
    ```

    Que deviennent les coins de l'image ?

??? success "Explication et correction"

    Les coins redeviennent carrés. `20` tout seul ne veut rien dire : 20 pixels ? 20 % ? Le navigateur ne devine pas et ignore la déclaration.

    **Correction** : écrire `20px`. Seul `0` peut s'écrire sans unité, puisque zéro pixel ou zéro pour cent, c'est pareil.

→ Sur MDN : [Le modèle de boîte](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Box_model){target="_blank"}

??? abstract "Code complet à la fin de l'étape 5"

    **HTML**

    ```html
    <h1>Salut, moi c'est Alex !</h1>
    <img src="https://picsum.photos/400/250" alt="Une photo au hasard">
    <p>J'ai 17 ans et j'adore la <strong>musique</strong>.</p>

    <h2>Ce que j'aime</h2>
    <ul>
      <li>Le rap</li>
      <li class="coup-de-coeur">Les séries</li>
      <li>Les jeux vidéo</li>
      <li>La mode</li>
    </ul>

    <p>Ma chanson du moment : <a href="https://www.youtube.com" target="_blank">le titre de la chanson</a></p>
    ```

    **CSS**

    ```css
    body {
      font-family: sans-serif;
      background-color: lavender;
      max-width: 600px;
      margin: 0 auto;
      padding: 16px;
    }

    h1 {
      color: deeppink;
      text-transform: uppercase;
    }

    li {
      color: midnightblue;
    }

    .coup-de-coeur {
      background-color: gold;
      font-weight: bold;
    }

    img {
      border-radius: 20px;
      border: 4px solid white;
    }
    ```

### Étape 6 : À vous de jouer

Donner à sa page un style qui lui ressemble. Quelques idées :

- Un thème sombre : fond `#1e1e2e`, texte `white`
- Un trait sous les sous-titres : `h2 { border-bottom: 3px solid deeppink; }`
- Une couleur pour le lien : `a { color: teal; }`
- Un effet au survol de la souris, avec la *pseudo-classe* `:hover` :

    ```css
    li:hover {
      color: deeppink;
    }
    ```

!!! tip "Trouver un bug CSS avec les outils du navigateur"

    Contrairement au HTML, le navigateur peut **montrer** les erreurs CSS. Faire un clic droit sur l'élément mal affiché dans l'aperçu, puis **Inspecter** : dans le panneau *Styles*, les déclarations ignorées sont **barrées**, avec une petite icône d'avertissement.

→ Sur MDN : [Pseudo-classes et pseudo-éléments](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements){target="_blank"} · [Déboguer le CSS](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS){target="_blank"}

### Récapitulatif

| Notion | Exemple | Rôle |
|--------|---------|------|
| Règle | `h1 { color: deeppink; }` | Un sélecteur et ses déclarations |
| Sélecteur d'élément | `li` | Vise tous les éléments `<li>` |
| Sélecteur de classe | `.coup-de-coeur` | Vise les éléments avec `class="coup-de-coeur"` |
| Couleurs | `color`, `background-color` | Couleur du texte, du fond |
| Texte | `font-family`, `font-weight`, `text-transform` | Police, gras, majuscules |
| Boîte | `padding`, `border`, `margin` | Espaces et bordure autour d'un élément |

!!! success "À retenir"

    - Une règle = un sélecteur + des déclarations `propriété: valeur;` entre accolades
    - Le point `.` vise une classe, sans point on vise un type d'élément
    - Une déclaration incorrecte (point-virgule ou unité oubliés) est ignorée sans message : les outils du navigateur (**Inspecter**) aident à la trouver

!!! tip "Garder son travail"

    Avant de fermer l'onglet : **Partager → Copier le Markdown**, puis coller le code dans un fichier ou un e-mail à soi-même.

---

## Atelier : personnaliser sa page

*À venir.*

---

## Navigation

- [← Retour au programme du Mardi](index.md){target="_blank"}
- [Mardi après-midi →](apres-midi.md){target="_blank"}
