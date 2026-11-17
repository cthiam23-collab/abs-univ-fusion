import { DynamicContent } from "@/components/dynamic-content"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Anuncios oficiales | ABS",
  description: "Consulte los anuncios oficiales de ABS — African Business School: comunicados, información académica y administrativa.",
  path: "/announcements",
  locale: "es",
})

export default function AnnouncementsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Anuncios</h1>
      <DynamicContent type="announcement" />
    </div>
  )
}
