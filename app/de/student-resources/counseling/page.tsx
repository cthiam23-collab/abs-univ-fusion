import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Psychosoziale Unterstützung | ABS",
  description: "Unterstützung und Zuhören für die Studierenden der ABS — African Business School in Bamako.",
  path: "/student-resources/counseling",
  locale: "de",
})

export default function CounselingPage() {
  return <DetailPage title="Unterstützung und Zuhören für Studierende" description="Die ABS-Universität begleitet ihre Studierenden in Bamako auf ihrem Weg: ein Team mit offenem Ohr für persönliche wie akademische Fragen." highlights={["Ein vertraulicher Empfang", "Eine akademische und persönliche Begleitung", "Ein verfügbares und wohlwollendes Team", "Bei Bedarf eine Vermittlung an die zuständigen Ansprechpartner"]} primaryHref="/contact" primaryLabel="Die Studierendenberatung kontaktieren" />
}
