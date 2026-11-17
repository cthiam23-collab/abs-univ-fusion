// Localisation : les contenus français sont la source unique (documents officiels ABS).
// Les arbres /en, /es, /de, /ar contiennent les pages intégralement traduites.
// Un lien est préfixé par la locale uniquement si la page existe dans cet arbre ;
// sinon l'utilisateur est envoyé vers la page française d'origine (repli documenté).

export const LOCALES = ["fr", "en", "es", "de", "ar"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "fr"

// Pages intégralement traduites dans chaque arbre de locale.
export const TRANSLATED_PATHS: readonly string[] = [
  "/",
  "/about",
  "/about/mission",
  "/about/values",
  "/about/governance",
  "/about/mot-de-la-directrice",
  "/admissions",
  "/financial-aid",
  "/academics/programs",
  "/academics/pedagogy",
  "/programs/business-administration",
  "/programs/engineering/computer-science",
  "/programs/geological-civil-mining-engineering",
  "/programs/international-relations",
  "/programs/journalism-communication",
  "/programs/masters",
  "/programs/masters/mba",
  "/programs/masters/project-management",
  "/programs/masters/international-business",
  "/library",
  "/career-services",
  "/e-campus",
  "/alumni",
  "/research",
  "/student-life",
  "/student-resources",
  "/gallery",
  "/announcements",
  "/english-academy",
  "/visit",
  "/contact/graduate-admissions",
  "/contact/international-admissions",
  "/contact",
  "/faq",
  "/innovation",
  "/international/partnerships",
  "/campus-life",
  "/campus",
  "/campus/map",
  "/campus-tour",
  "/cultural-integration",
  "/e-campus/lms",
  "/e-campus/virtual-classrooms",
  "/employers/recruit",
  "/events",
  "/events/annual-career-fair",
  "/student-life/dining",
  "/student-life/housing",
  "/student-life/organizations",
  "/student-life/support",
  "/career-services/counseling",
  "/career-services/events",
  "/career-services/resume-workshop",
  "/student-resources/academic-advising",
  "/student-resources/library",
  "/student-resources/support-services",
  "/student-resources/career-services",
  "/student-resources/counseling",
  "/student-life/athletics/contact",
  "/library/contact",
  "/cookie-policy",
  "/privacy-policy",
  "/terms-of-service",
]

const TRANSLATED = new Set<string>(TRANSLATED_PATHS)

// Préfixes de routes dynamiques dont toutes les sous-pages sont traduites.
export const TRANSLATED_DYNAMIC_PREFIXES: readonly string[] = ["/programs/masters/"]

/**
 * Renvoie l'URL à utiliser pour un chemin donné selon la langue active.
 * - fr : chemin d'origine
 * - autre langue : préfixe /{locale} si la page est traduite, sinon chemin d'origine.
 * Les routes dynamiques traduites (ex. /programs/masters/[slug]) sont préfixées
 * par correspondance de préfixe.
 */
export function localizedPath(language: string, path: string): string {
  if (language === "fr" || language === DEFAULT_LOCALE) return path
  if (TRANSLATED.has(path)) return `/${language}${path === "/" ? "" : path}`
  for (const dyn of TRANSLATED_DYNAMIC_PREFIXES) {
    if (path === dyn || path.startsWith(dyn.endsWith("/") ? dyn : dyn + "/")) {
      return `/${language}${path}`
    }
  }
  return path
}

/** Indique si un chemin de page française possède une version traduite. */
export function isTranslated(path: string): boolean {
  if (TRANSLATED.has(path)) return true
  return TRANSLATED_DYNAMIC_PREFIXES.some(
    (dyn) => path === dyn || path.startsWith(dyn.endsWith("/") ? dyn : dyn + "/"),
  )
}

/** Libellés des jours d'ouverture, traduits par langue. */
export function localizedOfficeHours(lang: string): { weekday: string; saturday: string; sunday: string } {
  switch (lang) {
    case "en":
      return { weekday: "Monday - Friday", saturday: "Saturday", sunday: "Sunday" }
    case "es":
      return { weekday: "Lunes - Viernes", saturday: "Sábado", sunday: "Domingo" }
    case "de":
      return { weekday: "Montag - Freitag", saturday: "Samstag", sunday: "Sonntag" }
    case "ar":
      return { weekday: "الاثنين - الجمعة", saturday: "السبت", sunday: "الأحد" }
    default:
      return { weekday: "Lundi - Vendredi", saturday: "Samedi", sunday: "Dimanche" }
  }
}
