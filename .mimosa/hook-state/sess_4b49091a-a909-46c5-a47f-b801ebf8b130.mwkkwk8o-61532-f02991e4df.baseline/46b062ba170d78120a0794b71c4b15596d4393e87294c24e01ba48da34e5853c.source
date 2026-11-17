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

interface ParentFormProps {
  parent?: any
  onSubmit: (data: any) => void
  onClose: () => void
}

export function ParentForm({ parent, onSubmit, onClose }: ParentFormProps) {
  const [formData, setFormData] = useState({
    parentId: parent?.parentId || "",
    firstName: parent?.firstName || "",
    lastName: parent?.lastName || "",
    relationship: parent?.relationship || "father",
    email: parent?.email || "",
    phone: parent?.phone || "",
    alternatePhone: parent?.alternatePhone || "",
    occupation: parent?.occupation || "",
    employer: parent?.employer || "",
    workAddress: parent?.workAddress || "",
    homeAddress: parent?.homeAddress || "",
    city: parent?.city || "",
    country: parent?.country || "",
    postalCode: parent?.postalCode || "",
    emergencyContact: parent?.emergencyContact || "",
    nationalId: parent?.nationalId || "",
    students: parent?.students || [],
    accessLevel: parent?.accessLevel || "full",
    status: parent?.status || "active",
    notes: parent?.notes || "",
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
            <CardTitle>{parent ? "Edit Parent/Guardian" : "Add New Parent/Guardian"}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentId">Parent ID *</Label>
                  <Input
                    id="parentId"
                    value={formData.parentId}
                    onChange={(e) => handleChange("parentId", e.target.value)}
                    required
                    placeholder="e.g., PAR-2025-001"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relationship">Relationship *</Label>
                  <Select value={formData.relationship} onValueChange={(value) => handleChange("relationship", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="guardian">Legal Guardian</SelectItem>
                      <SelectItem value="uncle">Uncle</SelectItem>
                      <SelectItem value="aunt">Aunt</SelectItem>
                      <SelectItem value="grandparent">Grandparent</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alternatePhone">Alternate Phone</Label>
                  <Input
                    id="alternatePhone"
                    type="tel"
                    value={formData.alternatePhone}
                    onChange={(e) => handleChange("alternatePhone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nationalId">National ID</Label>
                  <Input
                    id="nationalId"
                    value={formData.nationalId}
                    onChange={(e) => handleChange("nationalId", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact *</Label>
                  <Input
                    id="emergencyContact"
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => handleChange("emergencyContact", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Professional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => handleChange("occupation", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employer">Employer</Label>
                  <Input
                    id="employer"
                    value={formData.employer}
                    onChange={(e) => handleChange("employer", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workAddress">Work Address</Label>
                <Textarea
                  id="workAddress"
                  value={formData.workAddress}
                  onChange={(e) => handleChange("workAddress", e.target.value)}
                  rows={2}
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Address Information</h3>
              <div className="space-y-2">
                <Label htmlFor="homeAddress">Home Address *</Label>
                <Textarea
                  id="homeAddress"
                  value={formData.homeAddress}
                  onChange={(e) => handleChange("homeAddress", e.target.value)}
                  required
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleChange("postalCode", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* System Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">System Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="accessLevel">Portal Access Level *</Label>
                  <Select value={formData.accessLevel} onValueChange={(value) => handleChange("accessLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select access level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Access</SelectItem>
                      <SelectItem value="limited">Limited Access</SelectItem>
                      <SelectItem value="view-only">View Only</SelectItem>
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
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">{parent ? "Update Parent/Guardian" : "Add Parent/Guardian"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
