# ABS — Ressources de l'application mobile

Toutes les icônes et splash screens sont générés à partir du **logo officiel**
que le site publie — la planche `abs-branding/icons/abs-logo-published.png` du
dépôt de branding, d'où sortent aussi les favicons des sites web, du chat et
d'ecampus. Il n'y a qu'un seul générateur : `abs-branding/build.py`, qui écrit
ces fichiers en même temps que les masters.

Régénérer l'ensemble, depuis la racine du dépôt de branding :

```bash
python3 abs-branding/build.py           # masters + copies + ces fichiers
python3 abs-branding/build.py --check   # n'écrit rien, code 1 en cas de dérive
```

Le script ne produit ces fichiers que là où `abs-univ-fusion/` existe.
L'ancien `scripts/generate-mobile-assets.js` (qui découpait
`public/images/documents/abs-logo-officiel.jpg`, l'ancien lockup) a été retiré :
le relancer faisait revenir l'ancien logo dans toutes les icônes.

## Contenu

```
mobile-assets/
├── source/                      Logos de référence
│   ├── logo-tight.png           Logo détouré 1280 px (marges supprimées)
│   └── logo-square-1024.png     Logo carré 1024×1024 (fond blanc)
├── android/                     Icônes de lancement Android
│   ├── ic_launcher-{mdpi,hdpi,xhdpi,xxhdpi,xxxhdpi}.png        48→192 px
│   ├── ic_launcher_round-*.png                                  variantes rondes
│   ├── ic_launcher_foreground-*.png                             couches avant (108→432 px)
│   ├── ic_launcher_background.color   Code couleur de la couche arrière (003CA4 ou FFFFFF)
│   └── playstore-512.png              Icône Google Play 512×512
├── ios/                         Catalogue AppIcon (noms standards Xcode)
│   ├── Icon-App-20x20@1x…@3x    →  Icon-App-1024x1024@1x (1024 px)
│   └── Icon-Small-50@1x/@2x
├── splash/                      Écrans de démarrage (logo centré)
│   ├── splash-{L}x{H}.png       Fond blanc (recommandé)
│   └── splash-blue-{L}x{H}.png  Fond bleu de marque #1B75CE
│   Tailles : 1080×1920, 1080×2340, 750×1334, 1125×2436, 1242×2688,
│              1284×2778, 1170×2532, 2048×2048, 2732×2732
└── web/                         Web / PWA
    ├── favicon-{16,32,48}.png
    ├── apple-touch-icon.png     180×180
    ├── icon-192.png / icon-512.png
    └── maskable-icon-512.png    Zone sûre Android
```

Total : **62 fichiers** (README inclus).

## Intégration

### Capacitor (Ionic / React)
```bash
npx @capacitor/assets generate --iconBackgroundColor '#ffffff' \
  --iconBackgroundColorDark '#1b75ce' \
  --splashBackgroundColor '#ffffff' \
  --splashBackgroundColorDark '#1b75ce'
```
Placer `source/logo-square-1024.png` comme `assets/icon.png` (ou logo sans fond) et
`splash/splash-2732x2732.png` comme `assets/splash.png`.

### Flutter
`pubspec.yaml` avec le paquet `flutter_launcher_icons` :
```yaml
flutter_launcher_icons:
  android: true
  ios: true
  image_path: "mobile-assets/source/logo-square-1024.png"
  adaptive_icon_background: "#ffffff"
  adaptive_icon_foreground: "mobile-assets/android/ic_launcher_foreground-xxxhdpi.png"
  # écrans de démarrage : paquet flutter_native_splash, image "source/logo-tight.png"
```

### React Native
Copier `android/ic_launcher-*.png` vers
`android/app/src/main/res/mipmap-*` (et `ic_launcher_foreground-*` vers les mêmes
dossiers), les `ios/Icon-App-*.png` vers `ios/<App>/Images.xcassets/AppIcon.appiconset/`
(avec le `Contents.json` correspondant).

### Web / PWA (site actuel)
`web/favicon-32.png`, `web/apple-touch-icon.png`, `web/icon-192.png` et
`web/icon-512.png` peuvent être référencés dans le manifest PWA du site.

## Couleur de marque

| Usage | Hex |
|---|---|
| Bleu ABS (carré « A » du logo) | `#003CA4` |
| Rouge ABS (le « BS » du logo) | `#BC041C` |
| Fond recommandé pour les icônes | `#FFFFFF` (le logo officiel porte un fond blanc) |

Le bleu des anciens fichiers (`#1B75CE`) n'est pas une couleur de ce logo : les
splash `splash-blue-*` et la couche arrière adaptative portent désormais le navy
du carré « A ».
