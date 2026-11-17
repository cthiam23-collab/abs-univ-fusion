"use client"

import { useState, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDropzone } from "react-dropzone"
import { Upload, ImageIcon, X } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  id: string
  url: string
  name: string
  type: string
}

export default function MediaPage() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cms-media")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        const newItem: MediaItem = {
          id: Date.now().toString(),
          url: reader.result as string,
          name: file.name,
          type: file.type,
        }
        setMediaItems((prev) => {
          const updated = [...prev, newItem]
          localStorage.setItem("cms-media", JSON.stringify(updated))
          return updated
        })
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
  })

  const deleteMedia = (id: string) => {
    setMediaItems((prev) => {
      const updated = prev.filter((item) => item.id !== id)
      localStorage.setItem("cms-media", JSON.stringify(updated))
      return updated
    })
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Media Library</h1>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
              ${isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"}`}
          >
            <input {...getInputProps()} />
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              {isDragActive ? "Drop the files here..." : "Drag 'n' drop some files here, or click to select files"}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mediaItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative aspect-square">
              {item.type.startsWith("image/") ? (
                <Image src={item.url || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full bg-muted">
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => deleteMedia(item.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <p className="text-sm truncate">{item.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
