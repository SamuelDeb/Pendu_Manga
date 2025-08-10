# 🎮 Le Pendu Manga

Un jeu du pendu classique avec une thématique manga ! Devinez les noms de vos mangas préférés en évitant que le bonhomme soit pendu.

## 📋 Description

Le Pendu Manga est une application web interactive qui propose de deviner des noms de mangas populaires. Le jeu utilise une interface moderne avec un clavier virtuel et des images du pendu qui évoluent selon le nombre d'erreurs.

## ✨ Fonctionnalités

- **Thématique Manga** : Plus de 60 noms de mangas populaires à deviner, liste obtenu sur https://www.senscritique.com/top/resultats/les_meilleurs_mangas/192836
- **Gestion des espaces** : Support complet des noms avec espaces (ex: "dragon ball", "fairy tail")
- **Interface intuitive** : Clavier virtuel avec boutons désactivés après utilisation
- **Feedback visuel** : Images du pendu qui évoluent selon les erreurs
- **Compteur d'erreurs** : Suivi en temps réel du nombre d'erreurs
- **Nouvelle partie** : Bouton pour recommencer à tout moment

## 🎯 Comment jouer

1. Cliquez sur "Nouvelle partie" pour commencer
2. Un nom de manga est choisi aléatoirement
3. Cliquez sur les lettres du clavier virtuel pour deviner
4. Les lettres correctes apparaissent dans le mot
5. Les lettres incorrectes comptent comme des erreurs
6. Le pendu se dessine progressivement avec chaque erreur
7. Gagnez en devinant le mot avant que le pendu soit complet !

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes et responsive
- **JavaScript (ES6+)** : Logique du jeu et interactions
- **Webpack** : Configuration de build et développement

## 📁 Structure du projet

```
jeu-du-pendu-dev/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles de l'application
├── js/
│   └── app.js             # Logique du jeu
├── json/
│   └── list2.json         # Liste des noms de mangas
├── img/
│   ├── pendu1.jpg         # Images du pendu (1-12)
│   └── ...
├── package.json           # Configuration npm
├── webpack.config.dev.js  # Configuration webpack dev
└── webpack.config.prod.js # Configuration webpack prod
```

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le repository :
```bash
git clone [url-du-repo]
cd jeu-du-pendu-dev
```

2. Installez les dépendances :
```bash
npm install
```

### Lancement

#### Mode développement
```bash
npm start
```
L'application s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:8080`

#### Mode production
```bash
npm run build
```

#### Serveur local simple
Si vous n'utilisez pas webpack, vous pouvez aussi lancer un serveur HTTP simple :
```bash
python -m http.server 8000
```
Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 🎨 Fonctionnalités techniques

### Gestion des espaces
- Les espaces dans les noms de mangas sont gérés visuellement
- Affichage avec un style distinct (fond gris, bordure)
- Comptage correct des lettres (espaces exclus)

### Système de mots
- Chargement asynchrone depuis `json/list2.json`
- Sélection aléatoire des mots
- Gestion d'erreur avec liste de secours

### Interface utilisateur
- Clavier virtuel dynamique
- Désactivation des touches utilisées
- Feedback visuel immédiat
- Compteur d'erreurs en temps réel

## 📝 Liste des mangas inclus

L'application contient plus de 60 mangas populaires, notamment :
- Naruto
- Dragon Ball
- One Piece
- Bleach
- Attack on Titan
- Death Note
- Fullmetal Alchemist
- My Hero Academia
- Demon Slayer
- Jujutsu Kaisen
- Et bien d'autres...

## 🔧 Configuration

### Ajouter de nouveaux mangas
Modifiez le fichier `json/list2.json` pour ajouter de nouveaux noms :

```json
{
  "list": [
    "nouveau manga",
    "autre manga"
  ]
}
```

### Personnaliser les styles
Modifiez `css/style.css` pour changer l'apparence de l'application.

## 🐛 Dépannage

### Le bouton "Nouvelle partie" ne fonctionne pas
- Vérifiez que le serveur local est bien lancé
- Ouvrez la console du navigateur pour voir les erreurs

### Les mots ne se chargent pas
- Vérifiez que le fichier `json/list2.json` existe
- Assurez-vous que le serveur HTTP est actif

### Problèmes d'affichage
- Videz le cache du navigateur
- Vérifiez que tous les fichiers CSS et JS sont bien chargés


**Amusez-vous bien avec Le Pendu Manga ! 🎮**
