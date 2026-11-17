import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SeoJsonLd } from "@/components/seo-jsonld"
import { Providers } from "@/components/providers/providers"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Titre par défaut uniquement : les pages définissent des titres absolus conformes au §15 SEO.
  title: "ABS | African Business School à Bamako",
  description:
    "Découvrez ABS — African Business School à Bamako : formations, pédagogie, admissions et informations pratiques.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  icons: { icon: "/icon.png" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "fr_FR",
    images: ["/images/documents/abs-logo-officiel.jpg"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <SeoJsonLd />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
