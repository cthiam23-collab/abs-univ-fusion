import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

/** Portails privés et surfaces techniques : jamais indexés. */
const PRIVATE_PATHS = [
  "/admin",
  "/api",
  "/student-portal",
  "/student/",
  "/staff/",
  "/parent/",
  "/external-partner/",
  "/auth/",
  "/components",
]

/**
 * Robots des moteurs de réponse (ChatGPT, Claude, Perplexity, Gemini, Bing…).
 * Ils sont autorisés explicitement : une règle `*` les couvre déjà aujourd'hui,
 * mais une future règle restrictive ne doit pas les exclure par accident.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bingbot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: PRIVATE_PATHS })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
