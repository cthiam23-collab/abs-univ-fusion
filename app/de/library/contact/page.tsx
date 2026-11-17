import { CtaDestination } from "@/components/content/cta-destination"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Bibliothek kontaktieren | ABS",
  description: "Die Bibliothek der ABS — African Business School kontaktieren: Kontaktdaten und Öffnungszeiten.",
  path: "/library/contact",
  locale: "de",
})
export default function Page() { return <CtaDestination title="Die Bibliothek kontaktieren" description="Schreiben Sie an das Team der Bibliothek der ABS-Universität in Bamako für den Zugang zu den Bereichen, die Dokumentationsressourcen und die Recherchehilfe." primaryHref="/contact" /> }
