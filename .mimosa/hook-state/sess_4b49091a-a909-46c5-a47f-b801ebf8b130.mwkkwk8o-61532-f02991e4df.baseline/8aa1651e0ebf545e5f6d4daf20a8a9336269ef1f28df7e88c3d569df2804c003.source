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

interface ClassFormProps {
  classData?: any
  onSubmit: (data: any) => void
  onClose: () => void
}

export function ClassForm({ classData, onSubmit, onClose }: ClassFormProps) {
  const [formData, setFormData] = useState({
    className: classData?.className || "",
    classCode: classData?.classCode || "",
    program: classData?.program || "",
    year: classData?.year || "",
    semester: classData?.semester || "",
    section: classData?.section || "",
    capacity: classData?.capacity || "",
    enrolled: classData?.enrolled || "0",
    classroom: classData?.classroom || "",
    schedule: classData?.schedule || "",
    instructor: classData?.instructor || "",
    startDate: classData?.startDate || "",
    endDate: classData?.endDate || "",
    credits: classData?.credits || "",
    status: classData?.status || "active",
    description: classData?.description || "",
    prerequisites: classData?.prerequisites || "",
    notes: classData?.notes || "",
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
            <CardTitle>{classData ? "Edit Class" : "Add New Class"}</CardTitle>
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
                  <Label htmlFor="className">Class Name *</Label>
                  <Input
                    id="className"
                    value={formData.className}
                    onChange={(e) => handleChange("className", e.target.value)}
                    required
                    placeholder="e.g., Strategic Management"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="classCode">Class Code *</Label>
                  <Input
                    id="classCode"
                    value={formData.classCode}
                    onChange={(e) => handleChange("classCode", e.target.value)}
                    required
                    placeholder="e.g., MBA-301"
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
                  <Label htmlFor="section">Section</Label>
                  <Input
                    id="section"
                    value={formData.section}
                    onChange={(e) => handleChange("section", e.target.value)}
                    placeholder="e.g., A, B, C"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity *</Label>
                  <Input
                    id="capacity"
                    type="number"
                    min="1"
                    value={formData.capacity}
                    onChange={(e) => handleChange("capacity", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="enrolled">Currently Enrolled</Label>
                  <Input
                    id="enrolled"
                    type="number"
                    min="0"
                    value={formData.enrolled}
                    onChange={(e) => handleChange("enrolled", e.target.value)}
                  />
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
                  <Label htmlFor="status">Status *</Label>
                  <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
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
                  <Label htmlFor="classroom">Classroom *</Label>
                  <Input
                    id="classroom"
                    value={formData.classroom}
                    onChange={(e) => handleChange("classroom", e.target.value)}
                    required
                    placeholder="e.g., Room 301"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule">Schedule *</Label>
                  <Input
                    id="schedule"
                    value={formData.schedule}
                    onChange={(e) => handleChange("schedule", e.target.value)}
                    required
                    placeholder="e.g., Mon/Wed 9:00-11:00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor *</Label>
                  <Input
                    id="instructor"
                    value={formData.instructor}
                    onChange={(e) => handleChange("instructor", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleChange("startDate", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleChange("endDate", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={3}
                  placeholder="Class description and objectives"
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
                <Label htmlFor="notes">Notes</Label>
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
              <Button type="submit">{classData ? "Update Class" : "Add Class"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
