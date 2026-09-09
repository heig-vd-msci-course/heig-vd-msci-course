# MSCI - Introduction a la programmation

Site de cours pour la semaine **MSCI (Maturite Specialisee Communication-Information)** a l'ERACOM.

**Site en ligne** : https://heig-vd-msci-course.github.io/heig-vd-msci-course/

## A propos du cours

Une semaine intensive (octobre 2026) pour initier des etudiantes de 17-18 ans a la programmation a travers des projets creatifs :

- **Lundi** : Introduction et algorithmique
- **Mardi** : HTML/CSS et publication web
- **Mercredi** : Travail libre
- **Jeudi** : micro:bit et programmation physique
- **Vendredi** : Projet creatif et cloture

## Structure du projet

```
heig-vd-msci-course/
├── docs/               # Contenu du site (Markdown)
├── presentations/      # Presentations Marp
├── supports/           # Fiches et tutoriels
├── code-templates/     # Exemples de code
└── zensical.toml       # Configuration du site
```

## Developpement local

### Avec VS Code DevContainer (recommande)

1. Ouvrir le projet dans VS Code
2. Cliquer sur **Reopen in Container** quand propose
3. Lancer le serveur :
   - Raccourci : `Ctrl+Shift+B`
   - Ou terminal : `zensical serve`
4. Acceder au site : http://localhost:8000

### Sans DevContainer

```bash
# Creer un environnement virtuel
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows

# Installer Zensical
pip install zensical

# Lancer le serveur de developpement
zensical serve
```

## Deploiement

Le site est deploye automatiquement sur GitHub Pages a chaque push sur la branche `main`.

- **Workflow** : `.github/workflows/docs.yml`
- **URL** : https://heig-vd-msci-course.github.io/heig-vd-msci-course/

## Licence

Contenu sous licence Creative Commons Attribution-ShareAlike 4.0 International.
