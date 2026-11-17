"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Clock } from "lucide-react"

export function LeaveManagement() {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, startDate: "2023-05-01", endDate: "2023-05-03", reason: "Family event", status: "Approved" },
    { id: 2, startDate: "2023-06-15", endDate: "2023-06-16", reason: "Medical appointment", status: "Pending" },
  ])
  const [newLeaveRequest, setNewLeaveRequest] = useState({ startDate: "", endDate: "", reason: "" })

  const handleSubmitLeaveRequest = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the leave request to the server
    const newRequest = {
      id: leaveRequests.length + 1,
      ...newLeaveRequest,
      status: "Pending",
    }
    setLeaveRequests([...leaveRequests, newRequest])
    setNewLeaveRequest({ startDate: "", endDate: "", reason: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            Leave Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.startDate}</TableCell>
                  <TableCell>{request.endDate}</TableCell>
                  <TableCell>{request.reason}</TableCell>
                  <TableCell>{request.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-6 w-6" />
            Submit Leave Request
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitLeaveRequest} className="space-y-4">
            <div>
              <Label htmlFor="start-date">Start Date</Label>
              <Input
                id="start-date"
                type="date"
                value={newLeaveRequest.startDate}
                onChange={(e) => setNewLeaveRequest({ ...newLeaveRequest, startDate: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="end-date">End Date</Label>
              <Input
                id="end-date"
                type="date"
                value={newLeaveRequest.endDate}
                onChange={(e) => setNewLeaveRequest({ ...newLeaveRequest, endDate: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="reason">Reason</Label>
              <Textarea
                id="reason"
                value={newLeaveRequest.reason}
                onChange={(e) => setNewLeaveRequest({ ...newLeaveRequest, reason: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Submit Leave Request</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
