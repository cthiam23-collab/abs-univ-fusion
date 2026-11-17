import { DynamicContent } from "@/components/dynamic-content"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الإعلانات الرسمية | ABS",
  description: "اطّلع على الإعلانات الرسمية لـ ABS — African Business School: البيانات والمعلومات الأكاديمية والإدارية.",
  path: "/announcements",
  locale: "ar",
})

export default function AnnouncementsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">الإعلانات</h1>
      <DynamicContent type="announcement" />
    </div>
  )
}
