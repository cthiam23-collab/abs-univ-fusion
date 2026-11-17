"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

interface StudentProfile {
  name: string
  email: string
  studentId: string
  program: string
  year: string
  dateOfBirth: string
  phoneNumber: string
  address: string
  emergencyContact: string
}

export function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<StudentProfile>({
    name: "",
    email: "",
    studentId: "",
    program: "",
    year: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    emergencyContact: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/student-profile")
        if (!response.ok) {
          throw new Error("Failed to fetch student profile")
        }
        const data = await response.json()
        setProfile(data)
      } catch (error) {
        console.error("Error fetching student profile:", error)
        toast({
          title: "Error",
          description: "Failed to fetch student profile. Please try again later.",
          variant: "destructive",
        })
      }
    }

    fetchProfile()
  }, [toast])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      const response = await fetch("/api/student-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      })

      if (!response.ok) {
        throw new Error("Failed to update student profile")
      }

      setIsEditing(false)
      toast({
        title: "Success",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      console.error("Error updating student profile:", error)
      toast({
        title: "Error",
        description: "Failed to update your profile. Please try again later.",
        variant: "destructive",
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="academic">Academic Information</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/images/student-avatar.jpg" alt={profile.name} />
                  <AvatarFallback>
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.studentId}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" value={profile.email} disabled={!isEditing} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    disabled={!isEditing}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={profile.phoneNumber}
                    disabled={!isEditing}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={profile.address}
                    disabled={!isEditing}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <Input
                    id="emergencyContact"
                    name="emergencyContact"
                    value={profile.emergencyContact}
                    disabled={!isEditing}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                {isEditing ? (
                  <Button onClick={handleSave}>Save Changes</Button>
                ) : (
                  <Button onClick={handleEdit}>Edit Profile</Button>
                )}
              </div>
            </TabsContent>
            <TabsContent value="academic">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="program">Program</Label>
                  <Input
                    id="program"
                    name="program"
                    value={profile.program}
                    disabled={!isEditing}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" name="year" value={profile.year} disabled={!isEditing} onChange={handleChange} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <p className="mb-4">Upload and manage your important documents here.</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="transcriptUpload">Transcript</Label>
                  <Input id="transcriptUpload" type="file" />
                </div>
                <div>
                  <Label htmlFor="idCardUpload">Student ID Card</Label>
                  <Input id="idCardUpload" type="file" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Image src="/images/student-profile.jpg" alt="Student Profile" width={800} height={400} className="rounded-lg" />
    </div>
  )
}

export default StudentProfile
