"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import { useToast } from "@/components/ui/use-toast"

interface Assignment {
  id: number
  course: string
  title: string
  dueDate: string
  status: "Pending" | "Submitted" | "Graded"
  grade?: string
}

export function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)
  const [submissionFile, setSubmissionFile] = useState<File | null>(null)
  const [submissionComment, setSubmissionComment] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch("/api/assignments")
        const data = await response.json()
        setAssignments(data)
      } catch (error) {
        console.error("Error fetching assignments:", error)
        toast({
          title: "Error",
          description: "Failed to fetch assignments. Please try again later.",
          variant: "destructive",
        })
      }
    }
    fetchAssignments()
  }, [])

  const handleSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedAssignment || !submissionFile) return

    const formData = new FormData()
    formData.append("assignmentId", selectedAssignment.id.toString())
    formData.append("file", submissionFile)
    formData.append("comment", submissionComment)

    try {
      const response = await fetch("/api/submit-assignment", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        toast({
          title: "Submission Successful",
          description: "Your assignment has been submitted successfully.",
        })
        setAssignments(assignments.map((a) => (a.id === selectedAssignment.id ? { ...a, status: "Submitted" } : a)))
        setSelectedAssignment(null)
        setSubmissionFile(null)
        setSubmissionComment("")
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your assignment. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assignments</CardTitle>
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
                <TableCell>
                  <Badge
                    variant={
                      assignment.status === "Pending"
                          ? "secondary"
                        : assignment.status === "Submitted"
                          ? "secondary"
                          : "default"
                    }
                  >
                    {assignment.status}
                  </Badge>
                </TableCell>
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
                            Please submit your work for "{selectedAssignment?.title}".
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmission} className="space-y-4">
                          <div>
                            <Label htmlFor="file">Upload File</Label>
                            <Input
                              id="file"
                              type="file"
                              onChange={(e) => setSubmissionFile(e.target.files?.[0] || null)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="comment">Comments</Label>
                            <Textarea
                              id="comment"
                              placeholder="Any additional comments..."
                              value={submissionComment}
                              onChange={(e) => setSubmissionComment(e.target.value)}
                            />
                          </div>
                          <Button type="submit">Submit Assignment</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
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
  )
}

export default Assignments
