"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface ExamFormProps {
  exam?: any
  onSubmit: (data: any) => void
  onClose: () => void
}

export function ExamForm({ exam, onSubmit, onClose }: ExamFormProps) {
  const [formData, setFormData] = useState({
    examCode: exam?.examCode || "",
    examName: exam?.examName || "",
    subject: exam?.subject || "",
    program: exam?.program || "",
    year: exam?.year || "",
    semester: exam?.semester || "",
    examType: exam?.examType || "midterm",
    date: exam?.date || "",
    startTime: exam?.startTime || "",
    endTime: exam?.endTime || "",
    duration: exam?.duration || "",
    totalMarks: exam?.totalMarks || "",
    passingMarks: exam?.passingMarks || "",
    room: exam?.room || "",
    supervisor: exam?.supervisor || "",
    instructions: exam?.instructions || "",
    syllabusCovered: exam?.syllabusCovered || "",
    materials: exam?.materials || "",
    status: exam?.status || "scheduled",
    notes: exam?.notes || "",
  })

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{exam ? "Edit Exam" : "Schedule New Exam"}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="examCode">Exam Code *</Label>
                  <Input
                    id="examCode"
                    value={formData.examCode}
                    onChange={(e) => handleChange("examCode", e.target.value)}
                    required
                    placeholder="e.g., EXAM-2025-001"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examName">Exam Name *</Label>
                  <Input
                    id="examName"
                    value={formData.examName}
                    onChange={(e) => handleChange("examName", e.target.value)}
                    required
                    placeholder="e.g., Strategic Management Final"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examType">Exam Type *</Label>
                  <Select value={formData.examType} onValueChange={(value) => handleChange("examType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Midterm</SelectItem>
                      <SelectItem value="final">Final</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="practical">Practical</SelectItem>
                      <SelectItem value="oral">Oral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Program *</Label>
                  <Select value={formData.program} onValueChange={(value) => handleChange("program", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mba">MBA</SelectItem>
                      <SelectItem value="business-admin">Business Administration</SelectItem>
                      <SelectItem value="international-business">International Business</SelectItem>
                      <SelectItem value="journalism">Journalism</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year *</Label>
                  <Select value={formData.year} onValueChange={(value) => handleChange("year", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Year 1</SelectItem>
                      <SelectItem value="2">Year 2</SelectItem>
                      <SelectItem value="3">Year 3</SelectItem>
                      <SelectItem value="4">Year 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="semester">Semester *</Label>
                  <Select value={formData.semester} onValueChange={(value) => handleChange("semester", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Semester 1</SelectItem>
                      <SelectItem value="2">Semester 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Schedule Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Schedule Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Exam Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes) *</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="15"
                    value={formData.duration}
                    onChange={(e) => handleChange("duration", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time *</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => handleChange("startTime", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time *</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => handleChange("endTime", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room">Room / Hall *</Label>
                  <Input
                    id="room"
                    value={formData.room}
                    onChange={(e) => handleChange("room", e.target.value)}
                    required
                    placeholder="e.g., Exam Hall A"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supervisor">Supervisor *</Label>
                  <Input
                    id="supervisor"
                    value={formData.supervisor}
                    onChange={(e) => handleChange("supervisor", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Grading Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Grading Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks *</Label>
                  <Input
                    id="totalMarks"
                    type="number"
                    min="1"
                    value={formData.totalMarks}
                    onChange={(e) => handleChange("totalMarks", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passingMarks">Passing Marks *</Label>
                  <Input
                    id="passingMarks"
                    type="number"
                    min="1"
                    value={formData.passingMarks}
                    onChange={(e) => handleChange("passingMarks", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Details</h3>
              <div className="space-y-2">
                <Label htmlFor="syllabusCovered">Syllabus Covered</Label>
                <Textarea
                  id="syllabusCovered"
                  value={formData.syllabusCovered}
                  onChange={(e) => handleChange("syllabusCovered", e.target.value)}
                  rows={3}
                  placeholder="Topics and chapters covered in this exam"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="materials">Allowed Materials</Label>
                <Textarea
                  id="materials"
                  value={formData.materials}
                  onChange={(e) => handleChange("materials", e.target.value)}
                  rows={2}
                  placeholder="e.g., Calculator, Formula sheet, etc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Exam Instructions</Label>
                <Textarea
                  id="instructions"
                  value={formData.instructions}
                  onChange={(e) => handleChange("instructions", e.target.value)}
                  rows={3}
                  placeholder="Instructions for students"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={2}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">{exam ? "Update Exam" : "Schedule Exam"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
