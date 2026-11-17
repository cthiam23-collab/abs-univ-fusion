"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function AllocateAssetPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    allocated_to_id: "",
    allocated_department: "",
    allocation_date: new Date().toISOString().split("T")[0],
    notes: "",
  })

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!formData.allocation_date) {
      toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" })
      return
    }

    try {
      setLoading(true)
      const response = await fetch("/api/assets/allocation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          asset_id: params.id,
          allocated_to_id: formData.allocated_to_id || null,
          allocated_department: formData.allocated_department || null,
          allocation_date: formData.allocation_date,
          notes: formData.notes,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({ title: "Success", description: "Asset allocated successfully" })
        router.push(`/admin/assets/${params.id}`)
      } else {
        toast({ title: "Error", description: data.error || "Failed to allocate asset", variant: "destructive" })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      toast({ title: "Error", description: "Failed to allocate asset", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href={`/admin/assets/${params.id}`}>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Allocate Asset</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Asset Allocation</CardTitle>
          <CardDescription>Allocate this asset to a user or department</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="allocated_to_id">Allocated To (User ID)</Label>
                <Input
                  id="allocated_to_id"
                  type="number"
                  placeholder="User ID"
                  value={formData.allocated_to_id}
                  onChange={(e) => handleChange("allocated_to_id", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="allocated_department">Allocated Department</Label>
                <Input
                  id="allocated_department"
                  placeholder="e.g., IT Department"
                  value={formData.allocated_department}
                  onChange={(e) => handleChange("allocated_department", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="allocation_date">Allocation Date *</Label>
              <Input
                id="allocation_date"
                type="date"
                value={formData.allocation_date}
                onChange={(e) => handleChange("allocation_date", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional notes about this allocation..."
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? "Allocating..." : "Allocate Asset"}
              </Button>
              <Button asChild type="button" variant="outline" className="flex-1 bg-transparent">
                <Link href={`/admin/assets/${params.id}`}>Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
