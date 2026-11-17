import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ImageGallery } from "@/components/ui/image-gallery"

export const metadata: Metadata = buildMetadata({
  title: "Galerie du campus | ABS",
  description:
    "Parcourez la galerie de ABS — African Business School : images de la vie académique, de la diversité culturelle et des réalisations des étudiants à Bamako.",
  path: "/about/gallery",
})

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">University Gallery</h1>
      <p className="text-xl mb-12">
        Explore life at African Business School (ABS) through our collection of images showcasing academic excellence, cultural
        diversity, and student achievements.
      </p>
      <ImageGallery
        className="mb-12"
        images={[]}
      />
    </div>
  )
}
