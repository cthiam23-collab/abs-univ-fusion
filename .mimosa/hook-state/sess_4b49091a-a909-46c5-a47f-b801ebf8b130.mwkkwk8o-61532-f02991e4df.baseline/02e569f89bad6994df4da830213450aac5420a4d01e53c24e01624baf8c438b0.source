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

interface GradeFormProps {
  grade?: any
  onSubmit: (data: any) => void
  onClose: () => void
}

export function GradeForm({ grade, onSubmit, onClose }: GradeFormProps) {
  const [formData, setFormData] = useState({
    studentId: grade?.studentId || "",
    studentName: grade?.studentName || "",
    subject: grade?.subject || "",
    examType: grade?.examType || "",
    obtainedMarks: grade?.obtainedMarks || "",
    totalMarks: grade?.totalMarks || "",
    percentage: grade?.percentage || "",
    letterGrade: grade?.letterGrade || "",
    gradePoint: grade?.gradePoint || "",
    status: grade?.status || "pass",
    remarks: grade?.remarks || "",
    examDate: grade?.examDate || "",
    enteredBy: grade?.enteredBy || "",
    enteredDate: grade?.enteredDate || new Date().toISOString().split("T")[0],
    notes: grade?.notes || "",
  })

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      }

      // Auto-calculate percentage, letter grade, and grade point
      if (name === "obtainedMarks" || name === "totalMarks") {
        const obtained = Number.parseFloat(name === "obtainedMarks" ? value : updated.obtainedMarks)
        const total = Number.parseFloat(name === "totalMarks" ? value : updated.totalMarks)

        if (!isNaN(obtained) && !isNaN(total) && total > 0) {
          const percentage = ((obtained / total) * 100).toFixed(2)
          updated.percentage = percentage

          // Calculate letter grade and grade point
          const pct = Number.parseFloat(percentage)
          if (pct >= 90) {
            updated.letterGrade = "A+"
            updated.gradePoint = "4.0"
            updated.status = "pass"
          } else if (pct >= 85) {
            updated.letterGrade = "A"
            updated.gradePoint = "3.7"
            updated.status = "pass"
          } else if (pct >= 80) {
            updated.letterGrade = "B+"
            updated.gradePoint = "3.3"
            updated.status = "pass"
          } else if (pct >= 75) {
            updated.letterGrade = "B"
            updated.gradePoint = "3.0"
            updated.status = "pass"
          } else if (pct >= 70) {
            updated.letterGrade = "C+"
            updated.gradePoint = "2.7"
            updated.status = "pass"
          } else if (pct >= 65) {
            updated.letterGrade = "C"
            updated.gradePoint = "2.3"
            updated.status = "pass"
          } else if (pct >= 60) {
            updated.letterGrade = "D+"
            updated.gradePoint = "2.0"
            updated.status = "pass"
          } else if (pct >= 50) {
            updated.letterGrade = "D"
            updated.gradePoint = "1.0"
            updated.status = "pass"
          } else {
            updated.letterGrade = "F"
            updated.gradePoint = "0.0"
            updated.status = "fail"
          }
        }
      }

      return updated
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{grade ? "Edit Grade" : "Add New Grade"}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Student Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID *</Label>
                  <Input
                    id="studentId"
                    value={formData.studentId}
                    onChange={(e) => handleChange("studentId", e.target.value)}
                    required
                    placeholder="e.g., STU-2025-001"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name *</Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) => handleChange("studentName", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Exam Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Exam Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="midterm">Midterm</SelectItem>
                      <SelectItem value="final">Final</SelectItem>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="assignment">Assignment</SelectItem>
                      <SelectItem value="practical">Practical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="examDate">Exam Date</Label>
                  <Input
                    id="examDate"
                    type="date"
                    value={formData.examDate}
                    onChange={(e) => handleChange("examDate", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Marks Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Marks Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="obtainedMarks">Obtained Marks *</Label>
                  <Input
                    id="obtainedMarks"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.obtainedMarks}
                    onChange={(e) => handleChange("obtainedMarks", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks *</Label>
                  <Input
                    id="totalMarks"
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.totalMarks}
                    onChange={(e) => handleChange("totalMarks", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="percentage">Percentage</Label>
                  <Input id="percentage" value={formData.percentage} readOnly className="bg-gray-50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="letterGrade">Letter Grade</Label>
                  <Input id="letterGrade" value={formData.letterGrade} readOnly className="bg-gray-50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gradePoint">Grade Point</Label>
                  <Input id="gradePoint" value={formData.gradePoint} readOnly className="bg-gray-50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Input
                    id="status"
                    value={formData.status}
                    readOnly
                    className={`bg-gray-50 ${formData.status === "pass" ? "text-green-600" : "text-red-600"}`}
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="enteredBy">Entered By</Label>
                  <Input
                    id="enteredBy"
                    value={formData.enteredBy}
                    onChange={(e) => handleChange("enteredBy", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="enteredDate">Entered Date</Label>
                  <Input
                    id="enteredDate"
                    type="date"
                    value={formData.enteredDate}
                    onChange={(e) => handleChange("enteredDate", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="remarks">Remarks</Label>
                <Textarea
                  id="remarks"
                  value={formData.remarks}
                  onChange={(e) => handleChange("remarks", e.target.value)}
                  rows={2}
                  placeholder="Teacher's remarks or comments"
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
              <Button type="submit">{grade ? "Update Grade" : "Add Grade"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
