"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Upload } from "lucide-react"

export function OnlineAssignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, course: "BUS101", title: "Business Plan", dueDate: "2023-05-15", status: "Pending" },
    { id: 2, course: "ECO201", title: "Economic Analysis Paper", dueDate: "2023-05-20", status: "Submitted" },
    { id: 3, course: "MAT110", title: "Calculus Problem Set", dueDate: "2023-05-18", status: "Graded", grade: "A" },
  ])

  const [selectedAssignment, setSelectedAssignment] = useState<(typeof assignments)[number] | null>(null)

  const handleSubmit = (id: number) => {
    setAssignments(
      assignments.map((assignment) => (assignment.id === id ? { ...assignment, status: "Submitted" } : assignment)),
    )
    setSelectedAssignment(null)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            Online Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell>{assignment.course}</TableCell>
                  <TableCell>{assignment.title}</TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>{assignment.status}</TableCell>
                  <TableCell>{assignment.grade || "-"}</TableCell>
                  <TableCell>
                    {assignment.status === "Pending" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedAssignment(assignment)}>
                            Submit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Submit Assignment</DialogTitle>
                            <DialogDescription>
                              Upload your assignment for {assignment.course}: {assignment.title}
                            </DialogDescription>
                          </DialogHeader>
                          <form
                            className="space-y-4"
                            onSubmit={(e) => {
                              e.preventDefault()
                              handleSubmit(assignment.id)
                            }}
                          >
                            <div>
                              <Label htmlFor="file">Assignment File</Label>
                              <Input id="file" type="file" />
                            </div>
                            <div>
                              <Label htmlFor="comments">Comments</Label>
                              <Textarea id="comments" placeholder="Any additional comments..." />
                            </div>
                            <Button type="submit" className="w-full">
                              <Upload className="mr-2 h-4 w-4" />
                              Submit Assignment
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    )}
                    {assignment.status === "Submitted" && (
                      <Button variant="outline" size="sm" disabled>
                        Submitted
                      </Button>
                    )}
                    {assignment.status === "Graded" && (
                      <Button variant="outline" size="sm">
                        View Feedback
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
