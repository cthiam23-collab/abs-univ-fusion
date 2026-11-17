"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Messages() {
  const [showNewMessageForm, setShowNewMessageForm] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)

  interface Message {
    id: number
    sender: string
    subject: string
    date: string
    status: "Read" | "Unread"
    content: string
  }

  const messages: Message[] = [
    {
      id: 1,
      sender: "Prof. Smith",
      subject: "Assignment Feedback",
      date: "2023-05-10",
      status: "Unread",
      content:
        "Your recent assignment was well done. Please see me during office hours to discuss further improvements.",
    },
    {
      id: 2,
      sender: "Student Services",
      subject: "Registration Reminder",
      date: "2023-05-08",
      status: "Read",
      content: "This is a reminder that course registration for the next semester opens on May 15th.",
    },
    {
      id: 3,
      sender: "Library",
      subject: "Overdue Book Notice",
      date: "2023-05-05",
      status: "Read",
      content: "You have an overdue book. Please return it as soon as possible to avoid late fees.",
    },
  ]

  const handleNewMessage = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the new message data to your backend
    alert("Message sent successfully!")
    setShowNewMessageForm(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Messages</span>
            <Button onClick={() => setShowNewMessageForm(true)}>New Message</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sender</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>{message.sender}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{message.date}</TableCell>
                  <TableCell>
                    <Badge variant={message.status === "Unread" ? "secondary" : "outline"}>{message.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => setSelectedMessage(message)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={showNewMessageForm} onOpenChange={setShowNewMessageForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Message</DialogTitle>
            <DialogDescription>Compose a new message to send.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleNewMessage} className="space-y-4">
            <div>
              <Label htmlFor="recipient">Recipient</Label>
              <Input id="recipient" required />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMessage?.subject}</DialogTitle>
            <DialogDescription>
              From: {selectedMessage?.sender} | Date: {selectedMessage?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p>{selectedMessage?.content}</p>
          </div>
          <Button onClick={() => setSelectedMessage(null)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
