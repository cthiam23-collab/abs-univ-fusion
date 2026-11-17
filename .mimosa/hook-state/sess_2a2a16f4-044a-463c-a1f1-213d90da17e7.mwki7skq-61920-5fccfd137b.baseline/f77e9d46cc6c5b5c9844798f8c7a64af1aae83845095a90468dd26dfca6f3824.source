"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function NewMaintenancePage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    maintenance_type: "preventive",
    description: "",
    maintenance_date: "",
    cost: "",
    performed_by: "",
    next_maintenance_date: "",
  })

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!formData.maintenance_type || !formData.maintenance_date) {
      toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" })
      return
    }

    try {
      setLoading(true)
      const response = await fetch("/api/assets/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          asset_id: params.id,
          cost: formData.cost ? Number.parseFloat(formData.cost) : null,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({ title: "Success", description: "Maintenance record created" })
        router.push(`/admin/assets/${params.id}`)
      } else {
        toast({ title: "Error", description: data.error || "Failed to create record", variant: "destructive" })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      toast({ title: "Error", description: "Failed to create record", variant: "destructive" })
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
        <h1 className="text-3xl font-bold">Record Maintenance</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Information</CardTitle>
          <CardDescription>Record maintenance activity for this asset</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="maintenance_type">Maintenance Type *</Label>
                <Select
                  value={formData.maintenance_type}
                  onValueChange={(value) => handleChange("maintenance_type", value)}
                >
                  <SelectTrigger id="maintenance_type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preventive">Preventive</SelectItem>
                    <SelectItem value="corrective">Corrective</SelectItem>
                    <SelectItem value="inspection">Inspection</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                    <SelectItem value="upgrade">Upgrade</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="maintenance_date">Maintenance Date *</Label>
                <Input
                  id="maintenance_date"
                  type="date"
                  value={formData.maintenance_date}
                  onChange={(e) => handleChange("maintenance_date", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the maintenance performed..."
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cost">Cost</Label>
                <Input
                  id="cost"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={formData.cost}
                  onChange={(e) => handleChange("cost", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="performed_by">Performed By</Label>
                <Input
                  id="performed_by"
                  placeholder="Technician name"
                  value={formData.performed_by}
                  onChange={(e) => handleChange("performed_by", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="next_maintenance_date">Next Maintenance Date</Label>
              <Input
                id="next_maintenance_date"
                type="date"
                value={formData.next_maintenance_date}
                onChange={(e) => handleChange("next_maintenance_date", e.target.value)}
              />
            </div>

            <div className="flex gap-4 pt-6">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? "Saving..." : "Record Maintenance"}
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
