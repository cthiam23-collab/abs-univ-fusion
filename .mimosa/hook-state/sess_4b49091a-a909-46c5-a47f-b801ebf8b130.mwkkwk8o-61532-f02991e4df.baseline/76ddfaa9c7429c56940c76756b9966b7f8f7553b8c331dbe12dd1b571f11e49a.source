"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, MessageSquare } from "lucide-react"

export function Complaints() {
  const [complaints, setComplaints] = useState([
    { id: 1, subject: "Wi-Fi Issues", category: "Technical", status: "In Progress", date: "2023-05-10" },
    { id: 2, subject: "Cafeteria Food Quality", category: "Facilities", status: "Resolved", date: "2023-05-05" },
  ])
  const [newComplaint, setNewComplaint] = useState({ subject: "", category: "", description: "" })

  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the complaint to the server
    const complaint = {
      id: complaints.length + 1,
      ...newComplaint,
      status: "Submitted",
      date: new Date().toISOString().split("T")[0],
    }
    setComplaints([...complaints, complaint])
    setNewComplaint({ subject: "", category: "", description: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6" />
            Your Complaints
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell>{complaint.subject}</TableCell>
                  <TableCell>{complaint.category}</TableCell>
                  <TableCell>{complaint.status}</TableCell>
                  <TableCell>{complaint.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-6 w-6" />
            Submit a Complaint
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComplaint} className="space-y-4">
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={newComplaint.subject}
                onChange={(e) => setNewComplaint({ ...newComplaint, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={newComplaint.category}
                onValueChange={(value) => setNewComplaint({ ...newComplaint, category: value })}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technical">Technical</SelectItem>
                  <SelectItem value="Facilities">Facilities</SelectItem>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newComplaint.description}
                onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Submit Complaint</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
