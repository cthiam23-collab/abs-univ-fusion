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

export function StudentSupportServices() {
  const [supportTickets, setSupportTickets] = useState([
    { id: 1, subject: "Course Registration Issue", status: "Open", date: "2023-04-10" },
    { id: 2, subject: "Financial Aid Question", status: "Closed", date: "2023-03-25" },
  ])

  const [newTicket, setNewTicket] = useState({ subject: "", description: "", category: "" })

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the ticket data to the server
    const newTicketData = {
      id: supportTickets.length + 1,
      subject: newTicket.subject,
      status: "Open",
      date: new Date().toISOString().split("T")[0],
    }
    setSupportTickets([...supportTickets, newTicketData])
    setNewTicket({ subject: "", description: "", category: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student Support Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our Student Support Services are here to assist you with any questions or concerns you may have during your
            academic journey at African Business School (ABS).
          </p>
          <h3 className="text-lg font-semibold mb-2">Available Support Services:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Academic Advising</li>
            <li>Technical Support</li>
            <li>Financial Aid Assistance</li>
            <li>Career Counseling</li>
            <li>Accessibility Services</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {supportTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.subject}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell>{ticket.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submit a Support Ticket</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitTicket} className="space-y-4">
            <div>
              <Label htmlFor="ticket-subject">Subject</Label>
              <Input
                id="ticket-subject"
                value={newTicket.subject}
                onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="ticket-category">Category</Label>
              <Select
                value={newTicket.category}
                onValueChange={(value) => setNewTicket({ ...newTicket, category: value })}
              >
                <SelectTrigger id="ticket-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="ticket-description">Description</Label>
              <Textarea
                id="ticket-description"
                value={newTicket.description}
                onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Submit Ticket</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">How do I reset my student portal password?</h3>
              <p className="text-muted-foreground">
                You can reset your password by clicking on the "Forgot Password" link on the login page and following
                the instructions sent to your registered email.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Where can I find my class schedule?</h3>
              <p className="text-muted-foreground">
                Your class schedule is available in the "Courses" section of the student portal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How do I apply for financial aid?</h3>
              <p className="text-muted-foreground">
                Information about financial aid applications can be found in the "Financial Aid" section of the portal.
                You can also contact the Financial Aid office for assistance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
