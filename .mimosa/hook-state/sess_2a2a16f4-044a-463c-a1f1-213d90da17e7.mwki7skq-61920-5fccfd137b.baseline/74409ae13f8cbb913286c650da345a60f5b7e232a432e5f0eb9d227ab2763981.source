"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  organizer: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [newEvent, setNewEvent] = useState({ title: "", description: "", date: "", location: "", organizer: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/admin/events")
      if (!response.ok) throw new Error("Failed to fetch events")
      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error("Error fetching events:", error)
      toast({
        title: "Error",
        description: "Failed to fetch events. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewEvent((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      })
      if (!response.ok) throw new Error("Failed to add event")
      await fetchEvents()
      setNewEvent({ title: "", description: "", date: "", location: "", organizer: "" })
      toast({
        title: "Event Added",
        description: "The new event has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding event:", error)
      toast({
        title: "Error",
        description: "Failed to add event. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events Management</h1>
      <form onSubmit={handleAddEvent} className="mb-4 space-y-2">
        <Input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleInputChange}
          required
        />
        <Input type="date" name="date" value={newEvent.date} onChange={handleInputChange} required />
        <Input
          type="text"
          name="location"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="organizer"
          placeholder="Event Organizer"
          value={newEvent.organizer}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Event</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Organizer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.organizer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
