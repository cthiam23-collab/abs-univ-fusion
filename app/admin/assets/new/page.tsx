// @ts-nocheck
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function NewAssetPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    asset_code: "",
    name: "",
    description: "",
    category_id: "",
    location: "",
    purchase_date: "",
    purchase_price: "",
    depreciation_rate: "10",
    condition: "excellent",
    assigned_department: "",
    serial_number: "",
    manufacturer: "",
    model: "",
    quantity: "1",
    useful_life_years: "5",
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    try {
      const response = await fetch("/api/assets/categories")
      const data = await response.json()
      if (data.success) {
        setCategories(data.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching categories:", error)
    }
  }

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (
      !formData.asset_code ||
      !formData.name ||
      !formData.category_id ||
      !formData.purchase_date ||
      !formData.purchase_price
    ) {
      toast({ title: "Error", description: "Please fill in all required fields", variant: "destructive" })
      return
    }

    try {
      setLoading(true)
      const response = await fetch("/api/assets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          category_id: Number.parseInt(formData.category_id),
          purchase_price: Number.parseFloat(formData.purchase_price),
          depreciation_rate: Number.parseFloat(formData.depreciation_rate),
          quantity: Number.parseInt(formData.quantity),
          useful_life_years: Number.parseInt(formData.useful_life_years),
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({ title: "Success", description: "Asset created successfully" })
        router.push("/admin/assets")
      } else {
        toast({ title: "Error", description: data.error || "Failed to create asset", variant: "destructive" })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      toast({ title: "Error", description: "Failed to create asset", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/assets">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Add New Asset</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Asset Information</CardTitle>
          <CardDescription>Fill in the details for the new asset</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="asset_code">Asset Code *</Label>
                  <Input
                    id="asset_code"
                    placeholder="AST-2024-001"
                    value={formData.asset_code}
                    onChange={(e) => handleChange("asset_code", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Asset Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Desktop Computer"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Detailed description of the asset..."
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Category & Location */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Category & Location</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category_id">Category *</Label>
                  <Select value={formData.category_id} onValueChange={(value) => handleChange("category_id", value)}>
                    <SelectTrigger id="category_id">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id.toString()}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Room 101"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="assigned_department">Assigned Department</Label>
                <Input
                  id="assigned_department"
                  placeholder="e.g., IT Department"
                  value={formData.assigned_department}
                  onChange={(e) => handleChange("assigned_department", e.target.value)}
                />
              </div>
            </div>

            {/* Financial Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Financial Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="purchase_date">Purchase Date *</Label>
                  <Input
                    id="purchase_date"
                    type="date"
                    value={formData.purchase_date}
                    onChange={(e) => handleChange("purchase_date", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="purchase_price">Purchase Price *</Label>
                  <Input
                    id="purchase_price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.purchase_price}
                    onChange={(e) => handleChange("purchase_price", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="depreciation_rate">Depreciation Rate (%)</Label>
                  <Input
                    id="depreciation_rate"
                    type="number"
                    step="0.01"
                    value={formData.depreciation_rate}
                    onChange={(e) => handleChange("depreciation_rate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="useful_life_years">Useful Life (Years)</Label>
                  <Input
                    id="useful_life_years"
                    type="number"
                    min="1"
                    value={formData.useful_life_years}
                    onChange={(e) => handleChange("useful_life_years", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="manufacturer">Manufacturer</Label>
                  <Input
                    id="manufacturer"
                    placeholder="e.g., Dell"
                    value={formData.manufacturer}
                    onChange={(e) => handleChange("manufacturer", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    placeholder="e.g., OptiPlex 7080"
                    value={formData.model}
                    onChange={(e) => handleChange("model", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serial_number">Serial Number</Label>
                  <Input
                    id="serial_number"
                    placeholder="SN..."
                    value={formData.serial_number}
                    onChange={(e) => handleChange("serial_number", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleChange("condition", value)}>
                    <SelectTrigger id="condition">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? "Creating..." : "Create Asset"}
              </Button>
              <Button asChild type="button" variant="outline" className="flex-1 bg-transparent">
                <Link href="/admin/assets">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
