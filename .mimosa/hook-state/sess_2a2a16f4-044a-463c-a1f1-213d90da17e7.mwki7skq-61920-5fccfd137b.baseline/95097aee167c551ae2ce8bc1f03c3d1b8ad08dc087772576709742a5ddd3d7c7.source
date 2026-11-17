"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function StudentFeedback() {
  const [feedback, setFeedback] = useState({
    category: "",
    subject: "",
    description: "",
    satisfaction: "",
  })

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback data to the server
    console.log("Feedback submitted:", feedback)
    // Reset form
    setFeedback({ category: "", subject: "", description: "", satisfaction: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Your feedback is important to us. It helps us improve our services and enhance your experience at ABS
            University. Please take a moment to share your thoughts and suggestions.
          </p>
          <form onSubmit={handleSubmitFeedback} className="space-y-4">
            <div>
              <Label htmlFor="feedback-category">Feedback Category</Label>
              <Select
                value={feedback.category}
                onValueChange={(value) => setFeedback({ ...feedback, category: value })}
              >
                <SelectTrigger id="feedback-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic Programs</SelectItem>
                  <SelectItem value="facilities">Campus Facilities</SelectItem>
                  <SelectItem value="services">Student Services</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="feedback-subject">Subject</Label>
              <Input
                id="feedback-subject"
                value={feedback.subject}
                onChange={(e) => setFeedback({ ...feedback, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="feedback-description">Description</Label>
              <Textarea
                id="feedback-description"
                value={feedback.description}
                onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
                required
              />
            </div>
            <div>
              <Label>Overall Satisfaction</Label>
              <RadioGroup
                value={feedback.satisfaction}
                onValueChange={(value) => setFeedback({ ...feedback, satisfaction: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                  <Label htmlFor="very-satisfied">Very Satisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="satisfied" id="satisfied" />
                  <Label htmlFor="satisfied">Satisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutral" id="neutral" />
                  <Label htmlFor="neutral">Neutral</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                  <Label htmlFor="dissatisfied">Dissatisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                  <Label htmlFor="very-dissatisfied">Very Dissatisfied</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit">Submit Feedback</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Improvements</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Based on student feedback, we've made the following improvements:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Extended library hours during exam periods</li>
            <li>Upgraded Wi-Fi infrastructure across campus</li>
            <li>Introduced more vegetarian and vegan options in campus dining</li>
            <li>Implemented a new online course registration system</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
