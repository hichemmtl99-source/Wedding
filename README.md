# Site de mariage — Djihane & Anes

Un site de mariage élégant, en français, construit avec HTML, CSS et JavaScript. Aucun framework ni installation n'est nécessaire.

## 1. Ouvrir le site sur votre ordinateur

1. Téléchargez et décompressez le fichier ZIP.
2. Ouvrez le dossier `wedding_site`.
3. Double-cliquez sur `index.html`. Le site s'ouvrira dans votre navigateur.
4. Une connexion Internet est nécessaire pour les polices et les photos de démonstration.

Pour une meilleure expérience pendant les modifications, ouvrez le dossier dans Visual Studio Code. Vous pouvez aussi installer l'extension **Live Server**, puis cliquer sur **Go Live**.

## 2. Remplacer les informations d'exemple

Ouvrez `index.html` dans Visual Studio Code et utilisez `Ctrl + H` pour rechercher/remplacer :

- `Djihane` et `Anes` : les vrais prénoms.
- `20 JUIN 2027`, `Dimanche 19 décembre 2026` et `19.12.2026` : la date du mariage.
- `TLEMCEN, ALGÉRIE` : la ville.
- Les horaires et le texte de la salle : remplacez-les par les informations confirmées.

### Régler le compte à rebours et l'adresse

Ouvrez `script.js` et modifiez au début :

```js
const WEDDING = {
  date: "2026-12-19T16:00:00+01:00",
  mapSearch: "Salle des fêtes Mahiddine, Sebdou, Tlemcen, Algérie",
  whatsappNumber: "213XXXXXXXXX"
};
```

- `date` : date et heure de début de la célébration, au format ISO. Vérifiez le fuseau horaire local.
- `mapSearch` : nom et adresse exacte de la salle.
- `whatsappNumber` : numéro du couple au format international, sans `+`, espaces ni tirets. Exemple de format algérien : `213XXXXXXXXX`.

Le formulaire RSVP prépare un message WhatsApp ; le visiteur doit encore appuyer sur **Envoyer**. Ce modèle ne stocke pas automatiquement les réponses dans une base de données. Si vous voulez un tableau centralisé de réponses, il faudra connecter un service de formulaire ou ajouter un backend.

## 3. Ajouter les vraies photos

Les photos actuelles sont des images de démonstration chargées depuis Unsplash. Pour utiliser les photos du couple :

1. Créez un dossier nommé `images` à côté de `index.html`.
2. Ajoutez les photos autorisées, par exemple `couple-1.jpg`, `couple-2.jpg`.
3. Dans `index.html`, remplacez les URL des images dans les attributs `src` et `data-full` par des chemins locaux, par exemple `images/couple-1.jpg`.
4. Pour l'image d'arrière-plan du grand écran, remplacez l'URL Unsplash dans `style.css` dans la règle `.hero`.

Utilisez uniquement des photos que le couple vous a autorisé à publier. Les images externes peuvent changer ou être indisponibles.

## 4. Publier gratuitement avec GitHub Pages

1. Créez un compte sur https://github.com/ si nécessaire.
2. Créez un nouveau dépôt, par exemple `mariage-sarah-adam`.
3. Téléversez `index.html`, `style.css`, `script.js`, `README.md` et le dossier `images` si vous en avez créé un. Attention : téléversez les fichiers du dossier, pas le ZIP lui-même.
4. Dans le dépôt, ouvrez **Settings → Pages**.
5. Sous **Build and deployment**, choisissez **Deploy from a branch**.
6. Sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
7. Patientez quelques minutes. GitHub Pages affichera l'adresse publique de votre site dans la section Pages.

Le dépôt doit être public pour le fonctionnement gratuit standard de GitHub Pages. Toute personne ayant le lien pourra voir le site : n'y publiez pas de coordonnées privées ou de photos sans autorisation.

Autre option : https://vercel.com/ permet aussi de publier un site statique.

## 5. Vérifications avant de partager

- Vérifiez la date, le jour de la semaine, les horaires et l'adresse.
- Testez le site sur un téléphone.
- Testez le lien Google Maps.
- Testez le formulaire RSVP et le numéro WhatsApp.
- Vérifiez que les photos sont autorisées et que les informations personnelles sont adaptées à une page publique.

Bon mariage !
