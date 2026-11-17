"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Download, Eye } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function AssetsPage() {
  type Asset = {
    id: string | number
    asset_code: string
    name: string
    category_name?: string
    location?: string
    condition?: string
    status?: string
    purchase_price: number
    quantity: number
  }
  type Category = { id: string | number; name: string }

  const [assets, setAssets] = useState<Asset[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [categories, setCategories] = useState<Category[]>([])
  const { toast } = useToast()

  useEffect(() => {
    fetchAssets()
    fetchCategories()
  }, [search, categoryFilter, statusFilter])

  async function fetchAssets() {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (search) params.append("search", search)
      if (categoryFilter) params.append("category", categoryFilter)
      if (statusFilter) params.append("status", statusFilter)

      const response = await fetch(`/api/assets?${params}`)
      const data = await response.json()

      if (data.success) {
        setAssets(data.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching assets:", error)
      toast({ title: "Error", description: "Failed to fetch assets", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

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

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    maintenance: "bg-yellow-100 text-yellow-800",
    disposed: "bg-red-100 text-red-800",
  }

  const conditionColors: Record<string, string> = {
    excellent: "bg-blue-100 text-blue-800",
    good: "bg-cyan-100 text-cyan-800",
    fair: "bg-orange-100 text-orange-800",
    poor: "bg-red-100 text-red-800",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Assets Management</h1>
          <p className="text-gray-600 mt-1">Track and manage university assets</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button asChild className="flex-1 sm:flex-none">
            <Link href="/admin/assets/new">
              <Plus className="w-4 h-4 mr-2" />
              New Asset
            </Link>
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assets.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assets.filter((a) => a.status === "active").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {assets.filter((a) => a.condition === "fair" || a.condition === "poor").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₵
              {assets
                .reduce((sum, a) => sum + (a.purchase_price * a.quantity || 0), 0)
                .toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Asset code or name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id.toString()}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="disposed">Disposed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Assets Inventory</CardTitle>
          <CardDescription>{assets.length} total assets</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading assets...</div>
          ) : assets.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No assets found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Code</th>
                    <th className="text-left py-3 px-4 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 font-semibold">Location</th>
                    <th className="text-left py-3 px-4 font-semibold">Condition</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Value</th>
                    <th className="text-left py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-xs">{asset.asset_code}</td>
                      <td className="py-3 px-4">{asset.name}</td>
                      <td className="py-3 px-4 text-sm">{asset.category_name}</td>
                      <td className="py-3 px-4 text-sm">{asset.location}</td>
                      <td className="py-3 px-4">
                        <Badge className={conditionColors[asset.condition ?? ""] || "bg-gray-100 text-gray-800"}>
                          {asset.condition}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={statusColors[asset.status ?? ""] || "bg-gray-100 text-gray-800"}>
                          {asset.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 font-semibold">
                        ₵{(asset.purchase_price * asset.quantity).toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/admin/assets/${asset.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
