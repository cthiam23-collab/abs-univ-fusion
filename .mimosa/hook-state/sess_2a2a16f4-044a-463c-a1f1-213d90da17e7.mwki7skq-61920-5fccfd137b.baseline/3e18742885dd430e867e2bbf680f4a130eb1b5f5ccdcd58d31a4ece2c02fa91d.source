// @ts-nocheck
import { ImageGallery } from "@/components/ui/image-gallery"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { QuickLinks } from "@/components/quick-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Galería de fotos | ABS",
  description: "Galería de fotos de la vida del campus de ABS — African Business School: cursos, proyectos y eventos.",
  path: "/gallery",
  locale: "es",
})

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />

      <h1 className="text-4xl font-bold mb-6">Galería de la Universidad</h1>

      <QuickLinks />

      <div className="mt-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="all">Todo</TabsTrigger>
            <TabsTrigger value="academic">Académico</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
            <TabsTrigger value="student-life">Vida estudiantil</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ImageGallery className="mb-12" />
          </TabsContent>

          {/* Añadir otros contenidos de pestañas con imágenes filtradas */}
        </Tabs>
      </div>
    </div>
  )
}
