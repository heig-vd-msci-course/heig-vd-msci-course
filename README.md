# Algorithmique et programmation - MSCI ERACOM

Cours d'introduction à l'algorithmique et à la programmation pour la Maturité Spécialisée Communication-Information (MSCI) de l'ERACOM.

- **Dates** : Semaine 43, du 20 au 24 octobre 2026
- **Durée** : 32 périodes sur 4 jours
- **Public** : 60-70 personnes (17-18 ans)
- **Site web** : [heig-vd-msci-course.github.io/heig-vd-msci-course](https://heig-vd-msci-course.github.io/heig-vd-msci-course/)

## Structure du projet

```
heig-vd-msci-course/
├── docs/                        # Contenu du site (MkDocs/Zensical)
│   ├── index.md                 # Page d'accueil
│   ├── equipe.md                # Équipe enseignante
│   ├── programme/               # Pages du programme par jour
│   ├── slides/                  # Présentations générées (HTML/PDF)
│   ├── supports/                # Supports pédagogiques (dans le site)
│   └── code-templates/          # Templates de code (dans le site)
├── presentations/               # Sources des présentations Marp (.md)
├── supports/                    # Supports pédagogiques source
├── code-templates/              # Templates de code source
├── .marp/                       # Configuration Marp
│   └── config.yaml
├── .github/workflows/           # CI/CD GitHub Actions
│   └── docs.yml
├── generate-presentations.sh    # Script de génération des slides
├── zensical.toml                # Configuration du site Zensical
└── package.json                 # Configuration npm pour Marp
```

## Développement local

### Prérequis

- Python 3.x
- Node.js (optionnel, pour Marp en local)
- Docker (optionnel, pour Marp via Docker)

### Installation

```bash
# Cloner le repo
git clone https://github.com/heig-vd-msci-course/heig-vd-msci-course.git
cd heig-vd-msci-course

# Créer un environnement virtuel Python
python -m venv .venv
source .venv/bin/activate  # ou .venv\Scripts\activate sur Windows

# Installer Zensical
pip install zensical

# (Optionnel) Installer Marp CLI pour les présentations
npm install
```

### Lancer le site en local

```bash
zensical serve
```

Le site est accessible sur [http://localhost:8000](http://localhost:8000).

### Générer les présentations Marp

Les fichiers source des présentations se trouvent dans `presentations/`. Les fichiers générés (HTML et PDF) sont placés dans `docs/slides/`.

**Option 1 : Via Docker (recommandé)**

```bash
./generate-presentations.sh
```

Ce script détecte automatiquement si Marp est installé localement ou utilise l'image Docker `marpteam/marp-cli:v4.2.3`.

**Option 2 : Via npm (nécessite Node.js)**

```bash
npm install
npm run marp:html   # Générer HTML
npm run marp:pdf    # Générer PDF
```

**Option 3 : Via le script npm**

```bash
npm run build:slides
```

## Déploiement

Le déploiement est automatique via GitHub Actions sur chaque push vers la branche `main`.

Le workflow (`.github/workflows/docs.yml`) exécute les étapes suivantes :

1. **Génération des présentations** : Utilise l'image Docker Marp pour convertir les fichiers `.md` en HTML et PDF
2. **Construction du site** : Installe Zensical et génère le site statique
3. **Déploiement** : Publie le site sur GitHub Pages

Le site est déployé à l'adresse : [heig-vd-msci-course.github.io/heig-vd-msci-course](https://heig-vd-msci-course.github.io/heig-vd-msci-course/)

## Technologies utilisées

| Outil | Usage |
|-------|-------|
| [Zensical](https://github.com/zensical/zensical) | Générateur de site statique (basé sur MkDocs) |
| [Marp](https://marp.app/) | Présentations Markdown vers HTML/PDF |
| [GitHub Actions](https://github.com/features/actions) | CI/CD et déploiement automatique |
| [GitHub Pages](https://pages.github.com/) | Hébergement du site |

## Licence

Ce projet est sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Cela signifie que le contenu peut être librement partagé et adapté, à condition de :
- Créditer les auteurs
- Partager les adaptations sous la même licence
