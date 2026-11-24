import type { Metadata } from "next"
import { isTranslated } from "@/lib/i18n"

/**
 * Hôte canonique. Le site est servi et indexé sur www.abs-univ.com : l'apex
 * (abs-univ.com) présente un certificat que les clients refusent, si bien que
 * toutes les canoniques, le sitemap et les images Open Graph pointaient vers un
 * hôte non validable. Surchargeable au déploiement via NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.abs-univ.com").replace(
  /\/+$/,
  "",
)
export const SITE_NAME = "ABS — African Business School"
export const LOCALEalternates = ["fr", "en", "es", "de", "ar"] as const
export type SeoLocale = (typeof LOCALEalternates)[number]

const LOCALE_MAP: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
  ar: "ar_AR",
}

interface SeoInput {
  /** Titre absolu de la page (sans suffixe de marque). */
  title: string
  /** Description méta ~150-160 caractères. */
  description: string
  /** Chemin canonique côté français, ex. "/admissions". */
  path: string
  /** Langue du contenu de la page (défaut : fr). */
  locale?: SeoLocale
  /** Images Open Graph (chemins publics, ex. "/images/abs-logo.png"). */
  images?: string[]
  /** Désactiver l'indexation (pages utilitaires). */
  noindex?: boolean
}

/**
 * Construit les métadonnées SEO complètes d'une page : titre, description,
 * canonique, hreflang (si une version traduite existe), Open Graph et Twitter.
 * Règles éditoriales V3 §15 : titres uniques et conformes au contenu.
 */
export function buildMetadata({ title, description, path, locale = "fr", images, noindex }: SeoInput): Metadata {
  const translated = locale !== "fr" || isTranslated(path)
  const canonicalPath = locale === "fr" ? path : `/${locale}${path === "/" ? "" : path}`

  const languages: Record<string, string> = {}
  if (translated && isTranslated(path)) {
    for (const l of LOCALEalternates) {
      languages[l] = l === "fr" ? `${SITE_URL}${path}` : `${SITE_URL}/${l}${path === "/" ? "" : path}`
    }
    languages["x-default"] = `${SITE_URL}${path}`
  }

  const ogLocale = LOCALE_MAP[locale]
  const ogImages = (images ?? ["/images/documents/abs-logo-officiel.jpg"]).map((src) => ({
    url: src,
    width: src.includes("logo") ? 1280 : 1200,
    height: src.includes("logo") ? 772 : 630,
    alt: SITE_NAME,
  }))

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`,
      languages: Object.keys(languages).length ? languages : undefined,
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: ogLocale,
      title,
      description,
      url: `${SITE_URL}${locale === "fr" ? (path === "/" ? "" : path) : `/${locale}${path === "/" ? "" : path}`}`,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images ?? ["/images/documents/abs-logo-officiel.jpg"],
    },
    robots: noindex ? { index: false, follow: false } : undefined,
  }
}

/** URL canonique absolue d'une page française. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`
}
