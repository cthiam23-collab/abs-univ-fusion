// @ts-nocheck
import { ImageGallery } from "@/components/ui/image-gallery"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { QuickLinks } from "@/components/quick-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "معرض الصور | ABS",
  description: "معرض صور حياة الحرم الجامعي في ABS — African Business School: الدروس، المشاريع والفعاليات.",
  path: "/gallery",
  locale: "ar",
})

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs items={[{ label: "المعرض", href: "/gallery" }]} />

      <h1 className="text-4xl font-bold mb-6">معرض صور الجامعة</h1>

      <QuickLinks />

      <div className="mt-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="all">الكل</TabsTrigger>
            <TabsTrigger value="academic">أكاديمي</TabsTrigger>
            <TabsTrigger value="events">الفعاليات</TabsTrigger>
            <TabsTrigger value="student-life">الحياة الطلابية</TabsTrigger>
            <TabsTrigger value="campus">الحرم الجامعي</TabsTrigger>
            <TabsTrigger value="cultural">ثقافي</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ImageGallery className="mb-12" />
          </TabsContent>

          {/* Add other tab contents with filtered images */}
        </Tabs>
      </div>
    </div>
  )
}
