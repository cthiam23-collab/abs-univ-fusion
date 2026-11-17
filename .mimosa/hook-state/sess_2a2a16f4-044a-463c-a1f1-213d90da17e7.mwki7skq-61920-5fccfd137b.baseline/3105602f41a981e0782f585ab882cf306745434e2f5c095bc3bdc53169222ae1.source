import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/student-portal", "/student/", "/staff/", "/parent/", "/external-partner/", "/auth/", "/components"],
      },
    ],
    sitemap: "https://abs-univ.com/sitemap.xml",
  }
}
