"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContentItem {
  id: string
  title: string
  content: string
  type: "announcement" | "event" | "news"
  date: string
  location?: string
  author?: string
}

interface DynamicContentProps {
  type: "announcement" | "event" | "news"
  limit?: number
}

export function DynamicContent({ type, limit }: DynamicContentProps) {
  const [items, setItems] = useState<ContentItem[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`cms-${type}s`)
      if (saved) {
        const allItems: ContentItem[] = JSON.parse(saved)
        const sortedItems = allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setItems(limit ? sortedItems.slice(0, limit) : sortedItems)
      }
    }
  }, [type, limit])

  if (items.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Date: {item.date}</p>
            {item.location && <p className="text-sm text-muted-foreground mb-2">Location: {item.location}</p>}
            {item.author && <p className="text-sm text-muted-foreground mb-2">Author: {item.author}</p>}
            <p className="text-muted-foreground">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
