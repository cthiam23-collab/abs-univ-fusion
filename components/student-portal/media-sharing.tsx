"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Upload, Eye } from "lucide-react"

export function MediaSharing() {
  const [sharedMedia, setSharedMedia] = useState([
    { id: 1, name: "Lecture Notes.pdf", type: "PDF", visibility: "Public", uploadedBy: "Prof. Smith" },
    { id: 2, name: "Project Guidelines.docx", type: "Document", visibility: "Class Only", uploadedBy: "Prof. Johnson" },
  ])
  const [newMedia, setNewMedia] = useState({ name: "", type: "", visibility: "" })

  const handleMediaUpload = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the file upload to the server
    const uploadedMedia = {
      id: sharedMedia.length + 1,
      ...newMedia,
      uploadedBy: "You",
    }
    setSharedMedia([...sharedMedia, uploadedMedia])
    setNewMedia({ name: "", type: "", visibility: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Shared Media
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead>Uploaded By</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sharedMedia.map((media) => (
                <TableRow key={media.id}>
                  <TableCell>{media.name}</TableCell>
                  <TableCell>{media.type}</TableCell>
                  <TableCell>{media.visibility}</TableCell>
                  <TableCell>{media.uploadedBy}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 h-6 w-6" />
            Upload Media
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleMediaUpload} className="space-y-4">
            <div>
              <Label htmlFor="file-name">File Name</Label>
              <Input
                id="file-name"
                value={newMedia.name}
                onChange={(e) => setNewMedia({ ...newMedia, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="file-type">File Type</Label>
              <Select value={newMedia.type} onValueChange={(value) => setNewMedia({ ...newMedia, type: value })}>
                <SelectTrigger id="file-type">
                  <SelectValue placeholder="Select file type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF">PDF</SelectItem>
                  <SelectItem value="Document">Document</SelectItem>
                  <SelectItem value="Image">Image</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="visibility">Visibility</Label>
              <Select
                value={newMedia.visibility}
                onValueChange={(value) => setNewMedia({ ...newMedia, visibility: value })}
              >
                <SelectTrigger id="visibility">
                  <SelectValue placeholder="Select visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Public">Public</SelectItem>
                  <SelectItem value="Class Only">Class Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="file-upload">Upload File</Label>
              <Input id="file-upload" type="file" />
            </div>
            <Button type="submit">Upload Media</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
