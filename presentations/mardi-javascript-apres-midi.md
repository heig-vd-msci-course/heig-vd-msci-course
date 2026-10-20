---
marp: true
theme: msci-eracom
paginate: true
header: '[MSCI 2026 - Mardi Après-midi](https://heig-vd-msci-course.github.io/heig-vd-msci-course/programme/mardi/apres-midi/)'
footer: 'ERACOM - Semaine 43'
---

# Mardi : JavaScript (Après-midi)

## Donner vie à la page

**Mardi 20 octobre 2026**

---

# Le contenu complet est sur le site

## Cette présentation n'en est qu'un résumé

<div class="seventy-thirty-columns">
<div>

- Les slides **effleurent** la théorie
- Le **site du cours** contient tout : explications, tutoriels pas à pas, bugs volontaires et corrections
- À lire et à suivre **sur sa machine**, en classe puis après le cours

<span class="small gray">Un clic sur l'en-tête des slides ouvre la page du site.</span>

</div>
<div class="center">

![w:220](https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://heig-vd-msci-course.github.io/heig-vd-msci-course/programme/mardi/apres-midi/)

<span class="small">Programme → Mardi → Après-midi</span>

</div>
</div>

---

# Planning de l'après-midi

<style scoped>table { font-size: 0.8em; }</style>

| Activité | Au programme |
|----------|--------------|
| Les variables | La console, `let` et `const`, afficher dans la page |
| Les événements | Réagir aux boutons |
| Les conditions | Détecter la fin de partie |
| Les boucles | Dessiner les allumettes |
| Atelier | L'interface du jeu des allumettes, en équipe |
| Rendre son projet | Avant 16h30, par e-mail |

---

# Objectifs de l'après-midi

## À la fin de l'après-midi, vous saurez :

1. Lire un message d'erreur dans la **console**
2. Ranger une valeur dans une **variable**
3. Réagir à un clic avec un **événement**
4. Prendre une décision avec une **condition**
5. Répéter une instruction avec une **boucle**
6. Créer en équipe l'**interface du jeu des allumettes**

---

# Lundi en blocs, mardi en texte

## Sur le site, trois onglets par concept

- **JavaScript** : le code à écrire dans MDN Playground
- **Schéma** : le fonctionnement, en image
- **MakeCode** : les blocs utilisés lundi

<div class="info">

Les idées restent les mêmes, mais pas les instructions : `game.splash(...)` n'existe que dans MakeCode, `document.querySelector(...)` que dans le navigateur.

</div>

---

<!-- _class: invert -->

# Les variables

## Ranger une valeur, puis l'afficher

---

# La console

## L'outil n°1 pour comprendre un programme

```js
console.log("Bonjour la console !");
```

<style scoped>table { font-size: 0.85em; }</style>

| Morceau | Rôle |
|---------|------|
| `console.log(...)` | Afficher ce qui est entre parenthèses dans la console |
| `"Bonjour la console !"` | Un texte entre guillemets : une *chaîne de caractères* |
| `;` | La fin de l'instruction |

---

# Une variable

## Une boîte avec un nom et une valeur

<div class="two-columns">
<div>

```js
let allumettes = 20;
console.log(allumettes);

allumettes = allumettes - 1;
console.log(allumettes);
```

</div>
<div class="center">

![w:420](../docs/assets/images/concepts/blocs-variable.png)

<span class="small gray">Lundi, dans MakeCode</span>

</div>
</div>

La console affiche `20`, puis `19`. La ligne `allumettes = allumettes - 1` se lit de droite à gauche : calculer, puis ranger.

---

# Lire un message d'erreur

## JavaScript signale ses erreurs

```text
ReferenceError: allumetes is not defined
```

- Le **type** d'erreur : `ReferenceError`, un nom inconnu
- Le **coupable** : `allumetes`, écrit avec un seul `t`

<div class="info">

Contrairement au HTML et au CSS, JavaScript **signale** ses erreurs : le message est le premier indice à lire.

</div>

---

# `let` ou `const` ?

## Ce qui change, ce qui ne change pas

```js
let allumettes = 20;
const equipe = "Pomme";
console.log("Équipe " + equipe);
```

- `let` : une valeur qui **change** (les allumettes)
- `const` : une valeur **fixe** (le nom de l'équipe)
- `+` colle deux textes : `Équipe Pomme`
- Changer une constante : `TypeError`

---

# Afficher dans la page

## Pour que les joueuses voient le compteur

```html
<p>Il reste <span id="compteur"></span> allumettes.</p>
```

```js
const compteur = document.querySelector("#compteur");
compteur.textContent = allumettes;
```

- `id="compteur"` : un nom **unique** pour un élément
- `#compteur` : l'élément dont l'`id` est `compteur`
- `textContent` : remplace le texte de l'élément

---

<!-- _class: invert -->

# Les événements

## Réagir aux boutons

---

# Écouter un événement

## `addEventListener`

```js
bouton.addEventListener("click", function () {
  allumettes = allumettes - 1;
  compteur.textContent = allumettes;
});
```

Quand on fait un `"click"` sur `bouton`, exécuter tout ce qui se trouve entre les accolades `{ }`.

---

# Le même moule que lundi

## Quoi écouter, puis quoi faire

<div class="two-columns">
<div class="center">

![w:460](../docs/assets/images/concepts/blocs-evenement.png)

<span class="small gray">Lundi, dans MakeCode</span>

</div>
<div>

- **Lundi** : **quand** le bouton A est appuyé, **alors** retirer une allumette
- **Mardi** : **quand** on clique sur le bouton, **alors** exécuter le code entre `{ }`

</div>
</div>

---

<!-- _class: invert -->

# Les conditions

## Détecter la fin de partie

---

# Prendre une décision

## Si..., alors..., sinon...

```js
if (allumettes == 0) {
  message.textContent = "La partie est finie";
} else {
  message.textContent = "Au tour de l'autre joueuse";
}
```

- **Si** la condition est vraie : le premier bloc `{ }`
- **Sinon** : le bloc qui suit `else`
- Lundi : le bloc `si ... alors ... sinon`

---

# Comparer deux valeurs

<style scoped>table { font-size: 0.85em; }</style>

| Comparaison | Signification |
|-------------|---------------|
| `==` | Est égal à |
| `!=` | Est différent de |
| `<` / `>` | Plus petit que / plus grand que |
| `<=` / `>=` | Plus petit ou égal / plus grand ou égal |

<div class="warning">

`=` **range** une valeur, `==` **compare** deux valeurs. Les confondre est l'un des bugs les plus courants.

</div>

---

# Et avec trois allumettes d'un coup ?

## Réfléchir

Il reste **2** allumettes et une joueuse en retire **3**.

- Que vaut `allumettes` ?
- La condition `allumettes == 0` est-elle vraie ?

---

# La réponse

## Tester `<=` plutôt que `==`

`allumettes` vaut `-1`, et `-1 == 0` est **faux** : la partie continue.

```js
if (allumettes <= 0) {
  allumettes = 0;
  message.textContent = "La joueuse " + joueuse + " a perdu !";
  bouton.disabled = true;
}
```

`bouton.disabled = true` désactive le bouton : la partie est finie.

---

<!-- _class: invert -->

# Les boucles

## Dessiner les allumettes

---

# Dessiner une allumette

## JavaScript peut écrire du HTML

```js
const tas = document.querySelector("#tas");
tas.innerHTML = '<span class="allumette"></span>';
```

- `innerHTML` : remplace le contenu par du **HTML**
- Le CSS `.allumette` dessine une allumette
- 20 allumettes ? Une **boucle** répète la ligne

---

# La boucle `for`

## Répéter une instruction

```js
for (let i = 0; i < allumettes; i++) {
  tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
```

<style scoped>table { font-size: 0.85em; }</style>

| Partie | Rôle |
|--------|------|
| `let i = 0` | **Départ** : un compteur `i` commence à 0 |
| `i < allumettes` | **Condition** : continuer tant que `i` est plus petit |
| `i++` | **Après chaque tour** : `i` augmente de 1 |

---

# Dérouler la boucle

## Avec `allumettes = 3`

<style scoped>table { font-size: 0.9em; }</style>

| Tour | `i` | `i < 3` ? | Action |
|------|-----|-----------|--------|
| 1 | 0 | oui | Dessiner une allumette |
| 2 | 1 | oui | Dessiner une allumette |
| 3 | 2 | oui | Dessiner une allumette |
| — | 3 | **non** | Fin : 3 allumettes dessinées |

La boucle s'arrête dès que la condition devient fausse.

---

# Deux pièges classiques

<div class="two-columns">
<div>

### L'erreur de un

`<=` au lieu de `<` : la boucle fait **un tour de trop**.

En cas de doute : dérouler la boucle à la main.

</div>
<div>

### La boucle infinie

Sans `i++`, `i` reste à 0 : la boucle ne s'arrête **jamais** et l'onglet se fige.

</div>
</div>

<div class="warning">

Avant de modifier une boucle : **Partager → Copier le Markdown**.

</div>

---

# Redessiner après chaque clic

## La page ne se met jamais à jour toute seule

```js
tas.innerHTML = "";
for (let i = 0; i < allumettes; i++) {
  tas.innerHTML = tas.innerHTML + '<span class="allumette"></span>';
}
```

Dans la fonction du bouton : **vider** le tas, puis le **redessiner**.

<span class="small gray">Pour aller plus loin : une fonction `dessiner()`, écrite une fois, appelée partout.</span>

---

<!-- _class: invert -->

# Atelier

## L'interface du jeu des allumettes

---

# La version d'exemple

## Chaque équipe crée sa propre version

<div class="center">

![h:300](../docs/assets/images/tuesday/jeu-allumettes-partie.gif)

[Voir la version d'exemple en ligne](https://heig-vd-msci-course.github.io/heig-vd-msci-matches-webapp/)

[À disposition : Fichier allumettes](https://heig-vd-msci-course.github.io/heig-vd-msci-course/supports/ressources-images-allumettes/)

</div>

---

# Cahier des charges

## Règles : 20 allumettes, 1 à 3 par tour

<style scoped>table { font-size: 0.75em; }</style>

| Le jeu doit avoir... | Concept |
|----------------------|---------|
| Le **nom de l'équipe** dans le titre | HTML |
| Les allumettes restantes **dessinées** et leur **nombre** affiché | Boucle, variable |
| **Trois boutons** : retirer 1, 2 ou 3 allumettes | Événements |
| Un message qui indique **à qui le tour** | Conditions |
| En fin de partie : **qui a perdu**, boutons **désactivés** | Conditions |
| Un bouton **Rejouer** qui remet tout à zéro | Événement |
| Un **style personnalisé** aux couleurs de l'équipe | CSS |

---

# Personnaliser et aller plus loin

<div class="two-columns">
<div>

## Personnaliser

- Couleurs, polices, fond
- Un style pour `button:disabled`
- Un effet au survol `:hover`
- Des emojis dans les messages
- Des allumettes d'une autre forme : [images à disposition](https://heig-vd-msci-course.github.io/heig-vd-msci-course/supports/ressources-images-allumettes/)

</div>
<div>

## Aller plus loin

- Empêcher les **coups impossibles**
- Jouer contre l'**ordinateur**, avec la stratégie de lundi
- Un **historique** des coups joués

</div>
</div>

---

<!-- _class: invert -->

# Rendre son projet

## Avant 16h30, un seul e-mail par équipe

---

# Envoyer son projet

## Seul le nom de l'équipe apparaît en ligne

1. **Copier son code** : Partager → Copier le Markdown
2. **Envoyer l'e-mail**, aux deux adresses à la fois :
    - [clarisse.fleurimont@heig-vd.ch](mailto:clarisse.fleurimont@heig-vd.ch)
    - [vincent.guidoux1@heig-vd.ch](mailto:vincent.guidoux1@heig-vd.ch)
3. **Recevoir le lien** : publication dans la soirée

---

# Pour aller plus loin

<style scoped>table { font-size: 0.85em; }</style>

| Ressource | Description |
|-----------|-------------|
| [Elevator Saga](https://play.elevatorsaga.com) | Programmer des ascenseurs en JavaScript, niveau après niveau (en anglais) |
| [Apprendre le développement web](https://developer.mozilla.org/fr/docs/Learn_web_development) | Le parcours complet de MDN, pour continuer après la semaine |

---

# À demain

## 8h30 · Salle R102

**Merci pour cette journée**
