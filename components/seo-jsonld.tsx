import { ORGANIZATION, WHATSAPP_URL } from "@/lib/constants"
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo"

/**
 * Données structurées Schema.org (JSON-LD) injectées sur toutes les pages :
 * établissement d'enseignement, coordonnées officielles et point de contact.
 * Les valeurs reprennent les informations documentées de ABS.
 */
export function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [
      "ABS",
      "African Business School",
      "African Business School (ABS)",
      "African Business Private School",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/images/abs-logo.png`,
    image: `${SITE_URL}${OG_IMAGE}`,
    description:
      "Établissement privé d'enseignement supérieur à Bamako, Mali : Licence et Master en administration des affaires, ingénierie informatique, génie géologique civil et minier, relations internationales, journalisme et communication.",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamdallaye ACI 2000, Rue 338, Porte 06",
      addressLocality: "Bamako",
      addressCountry: "ML",
    },
    telephone: "+223 78 14 14 88",
    email: ORGANIZATION.contact.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+223 78 14 14 88",
        contactType: "admissions",
        availableLanguage: ["fr", "en"],
        url: WHATSAPP_URL,
      },
    ],
    sameAs: Object.values(ORGANIZATION.social).filter(
      (url): url is string => typeof url === "string" && url.length > 0,
    ),
  }

  return (
    <script
      type="application/ld+json"
      // Les données sont construites côté serveur à partir de constantes internes.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** FAQPage JSON-LD — à utiliser sur les pages de questions fréquentes. */
export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
