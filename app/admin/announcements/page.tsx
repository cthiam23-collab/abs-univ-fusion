"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Edit2, Trash2, Plus, Save } from "lucide-react"

interface Announcement {
  id: string
  title: string
  content: string
  date: string
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cms-announcements")
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null)

  const saveAnnouncements = (newAnnouncements: Announcement[]) => {
    setAnnouncements(newAnnouncements)
    localStorage.setItem("cms-announcements", JSON.stringify(newAnnouncements))
  }

  const addNewAnnouncement = () => {
    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      title: "New Announcement",
      content: "",
      date: new Date().toISOString().split("T")[0],
    }
    saveAnnouncements([...announcements, newAnnouncement])
  }

  const updateAnnouncement = (updatedAnnouncement: Announcement) => {
    const newAnnouncements = announcements.map((announcement) =>
      announcement.id === updatedAnnouncement.id ? updatedAnnouncement : announcement,
    )
    saveAnnouncements(newAnnouncements)
    setEditingAnnouncement(null)
  }

  const deleteAnnouncement = (id: string) => {
    const newAnnouncements = announcements.filter((announcement) => announcement.id !== id)
    saveAnnouncements(newAnnouncements)
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Manage Announcements</h1>
        <Button onClick={addNewAnnouncement}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Announcement
        </Button>
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{announcement.date}</p>
              <p className="mb-4">{announcement.content}</p>
              <div className="flex justify-end space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setEditingAnnouncement(announcement)}>
                      <Edit2 className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Announcement</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={editingAnnouncement?.title}
                          onChange={(e) =>
                            setEditingAnnouncement((prev) => ({
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
                          value={editingAnnouncement?.content}
                          onChange={(e) =>
                            setEditingAnnouncement((prev) => ({
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
                          value={editingAnnouncement?.date}
                          onChange={(e) =>
                            setEditingAnnouncement((prev) => ({
                              ...prev!,
                              date: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-4">
                      <Button variant="outline" onClick={() => setEditingAnnouncement(null)}>
                        Cancel
                      </Button>
                      <Button onClick={() => editingAnnouncement && updateAnnouncement(editingAnnouncement)}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="destructive" onClick={() => deleteAnnouncement(announcement.id)}>
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
