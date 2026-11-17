import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"
import { LOCALEalternates, SITE_URL, absoluteUrl } from "@/lib/seo"
import { isTranslated } from "@/lib/i18n"
import { DYNAMIC_MASTER_SLUGS } from "@/lib/masters-data"

const BASE_URL = SITE_URL

// Segments exclus du sitemap : pages internes, outils, portails connectés,
// démonstrateurs de composants et arbres de locales (traités séparément avec hreflang).
const EXCLUDED_SEGMENTS = [
  "admin",
  "api",
  "auth",
  "components",
  "en",
  "es",
  "de",
  "ar",
  "login",
  "register",
  "forgot-password",
  "student-portal",
  "student",
  "staff",
  "parent",
  "external-partner",
  "faculty",
  "dashboard",
  "dining",
  "housing",
]

function walkRoutes(dir: string, base = ""): string[] {
  let routes: string[] = []
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return routes
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    const segment = base ? `${base}/${name}` : `/${name}`
    if (name.startsWith("[") || name.startsWith("_") || EXCLUDED_SEGMENTS.includes(name)) continue
    if (fs.existsSync(path.join(dir, name, "page.tsx"))) {
      routes.push(segment === "/" ? "" : segment)
    }
    routes = routes.concat(walkRoutes(path.join(dir, name), segment))
  }
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app")
  const now = new Date()

  const entries: MetadataRoute.Sitemap = []

  for (const route of ["/", ...walkRoutes(appDir)]) {
    const url = route === "/" ? BASE_URL : `${BASE_URL}${route}`
    const entry: MetadataRoute.Sitemap[number] = {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7,
    }
    // Pages traduites : alternates hreflang vers chaque version linguistique.
    if (isTranslated(route)) {
      const languages: Record<string, string> = {}
      for (const l of LOCALEalternates) {
        languages[l] = l === "fr" ? absoluteUrl(route) : `${BASE_URL}/${l}${route === "/" ? "" : route}`
      }
      languages["x-default"] = absoluteUrl(route)
      entry.alternates = { languages }
    }
    entries.push(entry)
  }

  // Fiches Masters dynamiques ([slug]) : ajoutées explicitement avec hreflang,
  // car walkRoutes exclut les routes dynamiques.
  for (const slug of DYNAMIC_MASTER_SLUGS) {
    const route = `/programs/masters/${slug}`
    const languages: Record<string, string> = {}
    for (const l of LOCALEalternates) {
      languages[l] = l === "fr" ? absoluteUrl(route) : `${BASE_URL}/${l}${route}`
    }
    languages["x-default"] = absoluteUrl(route)
    entries.push({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages },
    })
  }

  return entries
}
