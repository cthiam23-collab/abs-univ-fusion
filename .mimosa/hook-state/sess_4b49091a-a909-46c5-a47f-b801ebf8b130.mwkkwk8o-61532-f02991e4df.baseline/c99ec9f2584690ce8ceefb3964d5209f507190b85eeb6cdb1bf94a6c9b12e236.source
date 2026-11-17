"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

interface Applicant {
  id: string
  name: string
  email: string
  program: string
  status: "Pending" | "Accepted" | "Rejected"
  applicationDate: string
}

export function AdminAdmissions() {
  const [applicants, setApplicants] = useState<Applicant[]>([])
  const [newApplicant, setNewApplicant] = useState<{ name: string; email: string; program: string; status: Applicant["status"] }>({ name: "", email: "", program: "", status: "Pending" })
  const { toast } = useToast()

  useEffect(() => {
    fetchApplicants()
  }, [])

  const fetchApplicants = async () => {
    try {
      const response = await fetch("/api/admin/admissions")
      if (!response.ok) throw new Error("Failed to fetch applicants")
      const data = await response.json()
      setApplicants(data)
    } catch (error) {
      console.error("Error fetching applicants:", error)
      toast({
        title: "Error",
        description: "Failed to fetch applicants. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewApplicant((prev) => ({ ...prev, [name]: value }))
  }

  const handleStatusChange = (value: string) => {
    setNewApplicant((prev) => ({ ...prev, status: value as "Pending" | "Accepted" | "Rejected" }))
  }

  const handleAddApplicant = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApplicant),
      })
      if (!response.ok) throw new Error("Failed to add applicant")
      await fetchApplicants()
      setNewApplicant({ name: "", email: "", program: "", status: "Pending" })
      toast({
        title: "Applicant Added",
        description: "The new applicant has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding applicant:", error)
      toast({
        title: "Error",
        description: "Failed to add applicant. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateStatus = async (id: string, newStatus: "Pending" | "Accepted" | "Rejected") => {
    try {
      const response = await fetch(`/api/admin/admissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      if (!response.ok) throw new Error("Failed to update applicant status")
      await fetchApplicants()
      toast({
        title: "Status Updated",
        description: "The applicant's status has been successfully updated.",
      })
    } catch (error) {
      console.error("Error updating applicant status:", error)
      toast({
        title: "Error",
        description: "Failed to update applicant status. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admissions Management</h1>
      <form onSubmit={handleAddApplicant} className="mb-4 space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Applicant Name"
          value={newApplicant.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Applicant Email"
          value={newApplicant.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="program"
          placeholder="Program"
          value={newApplicant.program}
          onChange={handleInputChange}
          required
        />
        <Select value={newApplicant.status} onValueChange={handleStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Accepted">Accepted</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Add Applicant</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Application Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow key={applicant.id}>
              <TableCell>{applicant.name}</TableCell>
              <TableCell>{applicant.email}</TableCell>
              <TableCell>{applicant.program}</TableCell>
              <TableCell>{applicant.status}</TableCell>
              <TableCell>{applicant.applicationDate}</TableCell>
              <TableCell>
                <Select
                  value={applicant.status}
                  onValueChange={(value) =>
                    handleUpdateStatus(applicant.id, value as "Pending" | "Accepted" | "Rejected")
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Accepted">Accepted</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminAdmissions
