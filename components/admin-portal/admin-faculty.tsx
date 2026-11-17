"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface FacultyMember {
  id: string
  name: string
  email: string
  department: string
  position: string
  specialization: string
}

export function AdminFaculty() {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([])
  const [newFaculty, setNewFaculty] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    specialization: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchFacultyMembers()
  }, [])

  const fetchFacultyMembers = async () => {
    try {
      const response = await fetch("/api/admin/faculty")
      if (!response.ok) throw new Error("Failed to fetch faculty members")
      const data = await response.json()
      setFacultyMembers(data)
    } catch (error) {
      console.error("Error fetching faculty members:", error)
      toast({
        title: "Error",
        description: "Failed to fetch faculty members. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewFaculty((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddFaculty = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/faculty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFaculty),
      })
      if (!response.ok) throw new Error("Failed to add faculty member")
      await fetchFacultyMembers()
      setNewFaculty({ name: "", email: "", department: "", position: "", specialization: "" })
      toast({
        title: "Faculty Member Added",
        description: "The new faculty member has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding faculty member:", error)
      toast({
        title: "Error",
        description: "Failed to add faculty member. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Faculty Management</h1>
      <form onSubmit={handleAddFaculty} className="mb-4 space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Faculty Name"
          value={newFaculty.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Faculty Email"
          value={newFaculty.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="department"
          placeholder="Department"
          value={newFaculty.department}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="position"
          placeholder="Position"
          value={newFaculty.position}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={newFaculty.specialization}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Faculty Member</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Specialization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facultyMembers.map((faculty) => (
            <TableRow key={faculty.id}>
              <TableCell>{faculty.name}</TableCell>
              <TableCell>{faculty.email}</TableCell>
              <TableCell>{faculty.department}</TableCell>
              <TableCell>{faculty.position}</TableCell>
              <TableCell>{faculty.specialization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminFaculty
