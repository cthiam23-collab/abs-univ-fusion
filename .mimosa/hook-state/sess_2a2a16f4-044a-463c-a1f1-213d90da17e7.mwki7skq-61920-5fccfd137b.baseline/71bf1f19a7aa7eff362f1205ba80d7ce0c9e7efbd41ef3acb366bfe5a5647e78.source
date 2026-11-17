import { DynamicContent } from "@/components/dynamic-content"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Offizielle Ankündigungen | ABS",
  description:
    "Sehen Sie die offiziellen Ankündigungen der ABS — African Business School: Mitteilungen, akademische und administrative Informationen.",
  path: "/announcements",
  locale: "de",
})

export default function AnnouncementsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Ankündigungen</h1>
      <DynamicContent type="announcement" />
    </div>
  )
}
