"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  category: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const universityImages: GalleryImage[] = [
    {
      src: "/images/gallery/IMG-20250216-WA0021.jpg",
      alt: "African Business School (ABS) Students with Faculty",
      width: 1200,
      height: 800,
      category: "events",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0070.jpg",
      alt: "Professional Development at ABS",
      width: 1200,
      height: 800,
      category: "academic",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0060.jpg",
      alt: "Industrial Training Visit",
      width: 1200,
      height: 800,
      category: "industrial",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0066.jpg",
      alt: "Student Field Trip",
      width: 1200,
      height: 800,
      category: "activities",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0067.jpg",
      alt: "Academic Conference",
      width: 1200,
      height: 800,
      category: "events",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0034.jpg",
      alt: "Professional Group Photo",
      width: 1200,
      height: 800,
      category: "academic",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0015.jpg",
      alt: "Cultural Diversity at ABS",
      width: 1200,
      height: 800,
      category: "cultural",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0059.jpg",
      alt: "Graduation Ceremony",
      width: 1200,
      height: 800,
      category: "graduation",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0072.jpg",
      alt: "University Leadership",
      width: 1200,
      height: 800,
      category: "leadership",
    },
    {
      src: "/images/gallery/IMG-20250216-WA0030.jpg",
      alt: "Community Partnerships",
      width: 1200,
      height: 800,
      category: "partnerships",
    },
  ]

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
      {universityImages.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setSelectedImage(image)}
        >
          <Image
            src={image.src || "/images/campus/IMG-20250212-WA0022.jpg"}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
      ))}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src || "/images/campus/IMG-20250212-WA0022.jpg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
