"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export function CourseEvaluations() {
  const [selectedCourse, setSelectedCourse] = useState("")
  const [overallRating, setOverallRating] = useState("")
  const [feedback, setFeedback] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)
  const { toast } = useToast()

  const courses = [
    { id: "BUS101", name: "Introduction to Business" },
    { id: "ECO201", name: "Microeconomics" },
    { id: "MAT110", name: "Calculus I" },
    { id: "ENG105", name: "Academic Writing" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit-evaluation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedCourse, overallRating, feedback }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit evaluation")
      }

      // Reset form
      setSelectedCourse("")
      setOverallRating("")
      setFeedback("")
      setShowThankYou(true)
    } catch (error) {
      console.error("Error submitting evaluation:", error)
      toast({
        title: "Error",
        description: "Failed to submit evaluation. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Evaluations</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="course-select">Select Course</Label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger id="course-select">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Overall Rating</Label>
            <RadioGroup value={overallRating} onValueChange={setOverallRating}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="r1" />
                <Label htmlFor="r1">1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="r2" />
                <Label htmlFor="r2">2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3" id="r3" />
                <Label htmlFor="r3">3</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4" id="r4" />
                <Label htmlFor="r4">4</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5" id="r5" />
                <Label htmlFor="r5">5</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Please provide your feedback about the course and instructor"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <Button type="submit">Submit Evaluation</Button>
        </form>

        <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thank You!</DialogTitle>
            </DialogHeader>
            <p>
              Your course evaluation has been submitted successfully. Your feedback is valuable in improving our
              courses.
            </p>
            <Button onClick={() => setShowThankYou(false)}>Close</Button>
          </DialogContent>
        </Dialog>

        <Image
          src="/images/course-evaluation.jpg"
          alt="Course Evaluation"
          width={800}
          height={400}
          className="rounded-lg mt-6"
        />
      </CardContent>
    </Card>
  )
}

export default CourseEvaluations
