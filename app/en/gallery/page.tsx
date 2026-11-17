// @ts-nocheck
import { ImageGallery } from "@/components/ui/image-gallery"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { QuickLinks } from "@/components/quick-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Photo Gallery | ABS",
  description:
    "Photo gallery of campus life at ABS — African Business School: classes, projects and events.",
  path: "/gallery",
  locale: "en",
})

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />

      <h1 className="text-4xl font-bold mb-6">University Gallery</h1>

      <QuickLinks />

      <div className="mt-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="student-life">Student Life</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
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
