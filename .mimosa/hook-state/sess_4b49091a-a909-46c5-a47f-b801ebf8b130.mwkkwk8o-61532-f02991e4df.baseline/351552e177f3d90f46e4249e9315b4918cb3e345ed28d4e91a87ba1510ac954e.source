import { DynamicContent } from "@/components/dynamic-content"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Official Announcements | ABS",
  description:
    "Read the official announcements of ABS — African Business School: press releases, academic and administrative information.",
  path: "/announcements",
  locale: "en",
})

export default function AnnouncementsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Announcements</h1>
      <DynamicContent type="announcement" />
    </div>
  )
}
