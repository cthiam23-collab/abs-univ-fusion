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

interface SubjectFormProps {
  subject?: any
  onSubmit: (data: any) => void
  onClose: () => void
}

export function SubjectForm({ subject, onSubmit, onClose }: SubjectFormProps) {
  const [formData, setFormData] = useState({
    subjectCode: subject?.subjectCode || "",
    subjectName: subject?.subjectName || "",
    program: subject?.program || "",
    year: subject?.year || "",
    semester: subject?.semester || "",
    credits: subject?.credits || "",
    type: subject?.type || "core",
    department: subject?.department || "",
    instructor: subject?.instructor || "",
    description: subject?.description || "",
    objectives: subject?.objectives || "",
    prerequisites: subject?.prerequisites || "",
    textbooks: subject?.textbooks || "",
    assessmentMethod: subject?.assessmentMethod || "",
    totalHours: subject?.totalHours || "",
    lectureHours: subject?.lectureHours || "",
    labHours: subject?.labHours || "",
    status: subject?.status || "active",
    syllabus: subject?.syllabus || "",
    notes: subject?.notes || "",
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
            <CardTitle>{subject ? "Edit Subject" : "Add New Subject"}</CardTitle>
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
                  <Label htmlFor="subjectCode">Subject Code *</Label>
                  <Input
                    id="subjectCode"
                    value={formData.subjectCode}
                    onChange={(e) => handleChange("subjectCode", e.target.value)}
                    required
                    placeholder="e.g., BUS-301"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subjectName">Subject Name *</Label>
                  <Input
                    id="subjectName"
                    value={formData.subjectName}
                    onChange={(e) => handleChange("subjectName", e.target.value)}
                    required
                    placeholder="e.g., Strategic Management"
                  />
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
                  <Label htmlFor="department">Department *</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleChange("department", e.target.value)}
                    required
                  />
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
                  <Label htmlFor="credits">Credits *</Label>
                  <Input
                    id="credits"
                    type="number"
                    min="1"
                    value={formData.credits}
                    onChange={(e) => handleChange("credits", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="core">Core</SelectItem>
                      <SelectItem value="elective">Elective</SelectItem>
                      <SelectItem value="mandatory">Mandatory</SelectItem>
                      <SelectItem value="optional">Optional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor</Label>
                  <Input
                    id="instructor"
                    value={formData.instructor}
                    onChange={(e) => handleChange("instructor", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Course Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalHours">Total Hours *</Label>
                  <Input
                    id="totalHours"
                    type="number"
                    min="0"
                    value={formData.totalHours}
                    onChange={(e) => handleChange("totalHours", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lectureHours">Lecture Hours</Label>
                  <Input
                    id="lectureHours"
                    type="number"
                    min="0"
                    value={formData.lectureHours}
                    onChange={(e) => handleChange("lectureHours", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="labHours">Lab Hours</Label>
                  <Input
                    id="labHours"
                    type="number"
                    min="0"
                    value={formData.labHours}
                    onChange={(e) => handleChange("labHours", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course Details</h3>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={3}
                  placeholder="Course description"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectives">Learning Objectives</Label>
                <Textarea
                  id="objectives"
                  value={formData.objectives}
                  onChange={(e) => handleChange("objectives", e.target.value)}
                  rows={3}
                  placeholder="Course objectives"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prerequisites">Prerequisites</Label>
                <Textarea
                  id="prerequisites"
                  value={formData.prerequisites}
                  onChange={(e) => handleChange("prerequisites", e.target.value)}
                  rows={2}
                  placeholder="Required courses or qualifications"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="textbooks">Textbooks & Materials</Label>
                <Textarea
                  id="textbooks"
                  value={formData.textbooks}
                  onChange={(e) => handleChange("textbooks", e.target.value)}
                  rows={2}
                  placeholder="Required and recommended textbooks"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="assessmentMethod">Assessment Method</Label>
                <Textarea
                  id="assessmentMethod"
                  value={formData.assessmentMethod}
                  onChange={(e) => handleChange("assessmentMethod", e.target.value)}
                  rows={2}
                  placeholder="Grading criteria and assessment methods"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="syllabus">Syllabus / Course Outline</Label>
                <Textarea
                  id="syllabus"
                  value={formData.syllabus}
                  onChange={(e) => handleChange("syllabus", e.target.value)}
                  rows={4}
                  placeholder="Week-by-week course outline"
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
              <Button type="submit">{subject ? "Update Subject" : "Add Subject"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
