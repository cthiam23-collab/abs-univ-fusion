// @ts-nocheck
import { ImageGallery } from "@/components/ui/image-gallery"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { QuickLinks } from "@/components/quick-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Fotogalerie | ABS",
  description:
    "Fotogalerie des Campuslebens der ABS — African Business School: Kurse, Projekte und Veranstaltungen der Universität in Bamako.",
  path: "/gallery",
  locale: "de",
})

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs items={[{ label: "Galerie", href: "/gallery" }]} />

      <h1 className="text-4xl font-bold mb-6">Galerie der Universität</h1>

      <QuickLinks />

      <div className="mt-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="all">Alle</TabsTrigger>
            <TabsTrigger value="academic">Akademisch</TabsTrigger>
            <TabsTrigger value="events">Veranstaltungen</TabsTrigger>
            <TabsTrigger value="student-life">Studierendenleben</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="cultural">Kultur</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ImageGallery className="mb-12" />
          </TabsContent>

          {/* Weitere Tab-Inhalte mit gefilterten Bildern ergänzen */}
        </Tabs>
      </div>
    </div>
  )
}
