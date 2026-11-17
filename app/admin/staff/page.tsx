"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface StaffMember {
  id: string
  name: string
  email: string
  position: string
  department: string
  hireDate: string
}

export default function StaffPage() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([])
  const [newStaff, setNewStaff] = useState({ name: "", email: "", position: "", department: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchStaffMembers()
  }, [])

  const fetchStaffMembers = async () => {
    try {
      const response = await fetch("/api/admin/staff")
      if (!response.ok) throw new Error("Failed to fetch staff members")
      const data = await response.json()
      setStaffMembers(data)
    } catch (error) {
      console.error("Error fetching staff members:", error)
      toast({
        title: "Error",
        description: "Failed to fetch staff members. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewStaff((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStaff),
      })
      if (!response.ok) throw new Error("Failed to add staff member")
      await fetchStaffMembers()
      setNewStaff({ name: "", email: "", position: "", department: "" })
      toast({
        title: "Staff Member Added",
        description: "The new staff member has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding staff member:", error)
      toast({
        title: "Error",
        description: "Failed to add staff member. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Staff Management</h1>
      <form onSubmit={handleAddStaff} className="mb-4 space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Staff Name"
          value={newStaff.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Staff Email"
          value={newStaff.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="position"
          placeholder="Position"
          value={newStaff.position}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="department"
          placeholder="Department"
          value={newStaff.department}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Staff Member</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Hire Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {staffMembers.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.email}</TableCell>
              <TableCell>{staff.position}</TableCell>
              <TableCell>{staff.department}</TableCell>
              <TableCell>{staff.hireDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
