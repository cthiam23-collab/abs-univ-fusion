# Note — Hydratation React : production OK, dev bloqué sur cette machine

## Verdict (testé le 2026-11-09, Chromium réel via Edge headless)

| Configuration | Hydratation | Preuve |
|---|---|---|
| **Production** (`next build` + `next start`) | ✅ **FONCTIONNE** | `/probe-hydration` → `data-hydrated="yes"`, fibres React attachées |
| Dev Turbopack (`next dev`) | ❌ Bloquée | même sonde → `no`, 0 fibre, 0 erreur console |
| Dev Webpack (`next dev --webpack`) | ❌ Bloquée | identique |
| Dev sans StrictMode | ❌ Bloquée | élimine StrictMode |

## Conclusion

**Le site livré est pleinement interactif.** Le blocage est propre au runtime de
développement de cette machine (Windows), commun aux deux bundlers, sans aucune
erreur console — typiquement une interaction entre le runtime dev Next 16
(overlay/HMR/websocket) et l'environnement local (pare-feu/antivirus/pile réseau).
Ce n'est PAS un bug du code applicatif : le même code s'hydrate parfaitement en
production.

## Impact pratique — faible

Toute l'interactivité publique a volontairement été construite **sans JavaScript** :
- menus déroulants du header en CSS pur (hover/focus),
- onglets en CSS pur (radio + `:has`, `components/ui/tabs.tsx`),
- accordéons natifs `<details>`,
- formulaires de candidature/contact qui enregistrent en base via API,
- actions serveur du back-office admin (progressive enhancement).

## Recommandations

1. **Vérifier une page en conditions réelles** :
   `npx next build && npx next start -p 3212` puis ouvrir http://127.0.0.1:3212
2. Le dev `next dev` reste utilisable pour le hot-reload du rendu visuel ;
   seul le JS côté client (langue, recherche catalogue) n'y répond pas.
3. Pistes si l'on veut creuser : tester `next dev` depuis un autre disque que `H:`,
   désactiver temporairement l'antivirus, ou mettre à jour Next 16 (patch suivant)
   — le symptôme « runtime démarre, payload consommé, 0 fibre, 0 erreur » pointe
   vers le bootstrap dev.
