import { DynamicContent } from "@/components/dynamic-content"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Annonces officielles | ABS",
  description: "Consultez les annonces officielles de ABS — African Business School : communiqués, informations académiques et administratives.",
  path: "/announcements",
})

export default function AnnouncementsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Announcements</h1>
      <DynamicContent type="announcement" />
    </div>
  )
}
