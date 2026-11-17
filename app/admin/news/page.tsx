"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Edit2, Trash2, Plus, Save } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  author: string
}

export default function NewsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cms-news")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const [editingNewsItem, setEditingNewsItem] = useState<NewsItem | null>(null)

  const saveNewsItems = (newNewsItems: NewsItem[]) => {
    setNewsItems(newNewsItems)
    localStorage.setItem("cms-news", JSON.stringify(newNewsItems))
  }

  const addNewNewsItem = () => {
    const newNewsItem: NewsItem = {
      id: Date.now().toString(),
      title: "New News Item",
      content: "",
      date: new Date().toISOString().split("T")[0],
      author: "",
    }
    saveNewsItems([...newsItems, newNewsItem])
  }

  const updateNewsItem = (updatedNewsItem: NewsItem) => {
    const newNewsItems = newsItems.map((item) => (item.id === updatedNewsItem.id ? updatedNewsItem : item))
    saveNewsItems(newNewsItems)
    setEditingNewsItem(null)
  }

  const deleteNewsItem = (id: string) => {
    const newNewsItems = newsItems.filter((item) => item.id !== id)
    saveNewsItems(newNewsItems)
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Manage News</h1>
        <Button onClick={addNewNewsItem}>
          <Plus className="h-4 w-4 mr-2" />
          Add New News Item
        </Button>
      </div>

      <div className="space-y-6">
        {newsItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Date: {item.date}</p>
              <p className="text-sm text-muted-foreground mb-4">Author: {item.author}</p>
              <p className="mb-4">{item.content}</p>
              <div className="flex justify-end space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setEditingNewsItem(item)}>
                      <Edit2 className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit News Item</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={editingNewsItem?.title}
                          onChange={(e) =>
                            setEditingNewsItem((prev) => ({
                              ...prev!,
                              title: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                          id="content"
                          value={editingNewsItem?.content}
                          onChange={(e) =>
                            setEditingNewsItem((prev) => ({
                              ...prev!,
                              content: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={editingNewsItem?.date}
                          onChange={(e) =>
                            setEditingNewsItem((prev) => ({
                              ...prev!,
                              date: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          value={editingNewsItem?.author}
                          onChange={(e) =>
                            setEditingNewsItem((prev) => ({
                              ...prev!,
                              author: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" onClick={() => setEditingNewsItem(null)}>
                        Cancel
                      </Button>
                      <Button onClick={() => editingNewsItem && updateNewsItem(editingNewsItem)}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="destructive" onClick={() => deleteNewsItem(item.id)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
