/**
 * Génération des logos et icônes de l'application mobile ABS
 * à partir du logo officiel extrait des documents (abs-logo-officiel.jpg).
 *
 * Sortie : mobile-assets/ (android/, ios/, splash/, web/, source/)
 * Prérequis : sharp (déjà présent dans node_modules).
 */
const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const SRC = "public/images/documents/abs-logo-officiel.jpg"
const OUT = "mobile-assets"

const BRAND_BLUE = "#1B75CE" // couleur de marque ABS (carré « A » du logo)

// Racine absolue du dossier de sortie + garde-fou anti path traversal :
// tout chemin écrit doit rester à l'intérieur de mobile-assets/.
const OUT_ROOT = path.resolve(OUT)

function ensure(dir) {
  const resolved = path.resolve(dir)
  if (resolved !== OUT_ROOT && !resolved.startsWith(OUT_ROOT + path.sep)) {
    throw new Error(`Chemin hors du dossier de sortie : ${dir}`)
  }
  fs.mkdirSync(resolved, { recursive: true })
}

async function trimmedLogo() {
  // Détourage du logo (suppression des marges blanches) + léger liseré de respiration
  const trimmed = await sharp(SRC).trim({ threshold: 10 }).toBuffer()
  const meta = await sharp(trimmed).metadata()
  return { trimmed, w: meta.width, h: meta.height }
}

/** Compose le logo centré sur un canevas carré blanc de taille S. */
async function squareIcon(trimmed, lw, lh, S, ratio = 0.62, bg = "#FFFFFF") {
  const logoW = Math.round(S * ratio)
  const logoH = Math.round((lh / lw) * logoW)
  const logo = await sharp(trimmed).resize(logoW, logoH).png().toBuffer()
  return sharp({
    create: { width: S, height: S, channels: 4, background: bg },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer()
}

/** Variante ronde : canevas blanc masqué en cercle puis logo centré. */
async function roundIcon(trimmed, lw, lh, S, ratio = 0.58) {
  const base = await squareIcon(trimmed, lw, lh, S, ratio)
  const mask = Buffer.from(
    `<svg width="${S}" height="${S}"><circle cx="${S / 2}" cy="${S / 2}" r="${S / 2}" fill="#fff"/></svg>`,
  )
  return sharp(base).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer()
}

/** Foreground d'icône adaptative Android (logo réduit, zone sûre 66/108). */
async function adaptiveForeground(trimmed, lw, lh, S) {
  return squareIcon(trimmed, lw, lh, S, 0.42, "#00000000")
}

/** Splash : logo centré (largeur = ratio * min(w,h)) sur fond uni. */
async function splash(trimmed, lw, lh, W, H, ratio = 0.42, bg = "#FFFFFF") {
  const logoW = Math.round(Math.min(W, H) * ratio)
  const logoH = Math.round((lh / lw) * logoW)
  const logo = await sharp(trimmed).resize(logoW, logoH).png().toBuffer()
  return sharp({ create: { width: W, height: H, channels: 4, background: bg } })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer()
}

async function save(buf, relPath) {
  if (typeof relPath !== "string" || relPath.includes("..") || path.isAbsolute(relPath)) {
    throw new Error(`Chemin de sortie invalide : ${relPath}`)
  }
  const p = path.resolve(OUT_ROOT, relPath)
  if (p !== OUT_ROOT && !p.startsWith(OUT_ROOT + path.sep)) {
    throw new Error(`Chemin hors du dossier de sortie : ${relPath}`)
  }
  ensure(path.dirname(p))
  fs.writeFileSync(p, buf)
  const meta = await sharp(buf).metadata()
  console.log(`  ${relPath}  (${meta.width}x${meta.height})`)
}

;(async () => {
  const { trimmed, w: lw, h: lh } = await trimmedLogo()
  console.log(`Logo détouré : ${lw}x${lh}`)

  // Source réutilisable
  ensure(path.join(OUT, "source"))
  await sharp(trimmed).resize(1280).png().toFile(path.join(OUT, "source", "logo-tight.png"))
  const sq1024 = await squareIcon(trimmed, lw, lh, 1024)
  fs.writeFileSync(path.join(OUT, "source", "logo-square-1024.png"), sq1024)
  console.log("  source/logo-tight.png, source/logo-square-1024.png")

  // --- Android ---
  console.log("Android : icônes de lancement")
  const androidDensities = [
    ["mdpi", 48],
    ["hdpi", 72],
    ["xhdpi", 96],
    ["xxhdpi", 144],
    ["xxxhdpi", 192],
  ]
  for (const [dpi, S] of androidDensities) {
    await save(await squareIcon(trimmed, lw, lh, S), `android/ic_launcher-${dpi}.png`)
    await save(await roundIcon(trimmed, lw, lh, S), `android/ic_launcher_round-${dpi}.png`)
  }
  console.log("Android : icônes adaptatives (foreground)")
  const adaptiveDensities = [
    ["mdpi", 108],
    ["hdpi", 162],
    ["xhdpi", 216],
    ["xxhdpi", 324],
    ["xxxhdpi", 432],
  ]
  for (const [dpi, S] of adaptiveDensities) {
    await save(await adaptiveForeground(trimmed, lw, lh, S), `android/ic_launcher_foreground-${dpi}.png`)
  }
  fs.writeFileSync(
    path.join(OUT, "android", "ic_launcher_background.color"),
    BRAND_BLUE.replace("#", "") + "\n# Blanc recommandé : FFFFFF (le logo officiel porte un fond blanc)\n",
  )
  await save(await squareIcon(trimmed, lw, lh, 512), "android/playstore-512.png")

  // --- iOS ---
  console.log("iOS : catalogue AppIcon (PNG carrés pleins, masquage par iOS)")
  const iosSizes = [
    ["Icon-App-20x20@1x", 20],
    ["Icon-App-20x20@2x", 40],
    ["Icon-App-20x20@3x", 60],
    ["Icon-App-29x29@1x", 29],
    ["Icon-App-29x29@2x", 58],
    ["Icon-App-29x29@3x", 87],
    ["Icon-App-40x40@1x", 40],
    ["Icon-App-40x40@2x", 80],
    ["Icon-App-40x40@3x", 120],
    ["Icon-App-60x60@2x", 120],
    ["Icon-App-60x60@3x", 180],
    ["Icon-App-76x76@1x", 76],
    ["Icon-App-76x76@2x", 152],
    ["Icon-App-83.5x83.5@2x", 167],
    ["Icon-App-1024x1024@1x", 1024],
    ["Icon-Small-50@1x", 50],
    ["Icon-Small-50@2x", 100],
  ]
  for (const [name, S] of iosSizes) {
    await save(await squareIcon(trimmed, lw, lh, S), `ios/${name}.png`)
  }

  // --- Splash ---
  console.log("Splash screens (fond blanc + fond bleu de marque)")
  const splashSizes = [
    [1080, 1920],
    [1080, 2340],
    [750, 1334],
    [1125, 2436],
    [1242, 2688],
    [1284, 2778],
    [1170, 2532],
    [2048, 2048],
    [2732, 2732],
  ]
  for (const [W, H] of splashSizes) {
    await save(await splash(trimmed, lw, lh, W, H), `splash/splash-${W}x${H}.png`)
    await save(await splash(trimmed, lw, lh, W, H, 0.42, BRAND_BLUE), `splash/splash-blue-${W}x${H}.png`)
  }

  // --- Web / PWA ---
  console.log("Web / PWA")
  await save(await squareIcon(trimmed, lw, lh, 16), "web/favicon-16.png")
  await save(await squareIcon(trimmed, lw, lh, 32), "web/favicon-32.png")
  await save(await squareIcon(trimmed, lw, lh, 48), "web/favicon-48.png")
  await save(await squareIcon(trimmed, lw, lh, 180), "web/apple-touch-icon.png")
  await save(await squareIcon(trimmed, lw, lh, 192), "web/icon-192.png")
  await save(await squareIcon(trimmed, lw, lh, 512), "web/icon-512.png")
  // Icône « maskable » : logo réduit, fond blanc, zone sûre Android
  await save(await squareIcon(trimmed, lw, lh, 512, 0.5), "web/maskable-icon-512.png")

  console.log("Terminé →", OUT)
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
