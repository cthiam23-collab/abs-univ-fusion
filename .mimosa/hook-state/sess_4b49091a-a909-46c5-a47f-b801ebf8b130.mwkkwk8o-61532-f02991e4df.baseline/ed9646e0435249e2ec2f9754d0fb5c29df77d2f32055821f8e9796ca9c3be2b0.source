"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, Trash2, Plus } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { useParams, useRouter } from "next/navigation"

export default function AssetDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [asset, setAsset] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [maintenance, setMaintenance] = useState<any[]>([])
  const [allocation, setAllocation] = useState<any[]>([])
  const [depreciation, setDepreciation] = useState<any[]>([])

  useEffect(() => {
    fetchAsset()
    fetchMaintenance()
    fetchAllocation()
    fetchDepreciation()
  }, [params.id])

  async function fetchAsset() {
    try {
      const response = await fetch(`/api/assets/${params.id}`)
      const data = await response.json()
      if (data.success) {
        setAsset(data.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching asset:", error)
      toast({ title: "Error", description: "Failed to fetch asset", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  async function fetchMaintenance() {
    try {
      const response = await fetch(`/api/assets/maintenance?asset_id=${params.id}`)
      const data = await response.json()
      if (data.success) {
        setMaintenance(data.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching maintenance:", error)
    }
  }

  async function fetchAllocation() {
    try {
      const response = await fetch(`/api/assets/allocation?asset_id=${params.id}`)
      const data = await response.json()
      if (data.success) {
        setAllocation(data.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching allocation:", error)
    }
  }

  async function fetchDepreciation() {
    try {
      const response = await fetch(`/api/assets/depreciation?asset_id=${params.id}`)
      const data = await response.json()
      if (data.success) {
        setDepreciation(data.data)
      }
    } catch (error) {
      console.error("[v0] Error fetching depreciation:", error)
    }
  }

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (!asset) return <div className="text-center py-8 text-red-500">Asset not found</div>

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    maintenance: "bg-yellow-100 text-yellow-800",
    disposed: "bg-red-100 text-red-800",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin/assets">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{asset.name}</h1>
            <p className="text-gray-600">{asset.asset_code}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href={`/admin/assets/${asset.id}/edit`}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Link>
          </Button>
          <Button variant="destructive">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      {/* Asset Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className={statusColors[asset.status] || "bg-gray-100 text-gray-800"}>{asset.status}</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Purchase Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₵{asset.purchase_price.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₵{(asset.purchase_price * 0.6).toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Card>
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="depreciation">Depreciation</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-2 gap-6 p-6">
              <div>
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold">{asset.category_name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">{asset.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Serial Number</p>
                <p className="font-semibold">{asset.serial_number || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Manufacturer</p>
                <p className="font-semibold">{asset.manufacturer || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Model</p>
                <p className="font-semibold">{asset.model || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Quantity</p>
                <p className="font-semibold">{asset.quantity}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">Description</p>
                <p className="font-semibold">{asset.description || "No description"}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-4 p-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Maintenance Records</h3>
              <Button asChild size="sm">
                <Link href={`/admin/assets/${asset.id}/maintenance/new`}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Maintenance
                </Link>
              </Button>
            </div>
            {maintenance.length === 0 ? (
              <p className="text-gray-500">No maintenance records</p>
            ) : (
              <div className="space-y-3">
                {maintenance.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <p className="font-semibold">{record.maintenance_type}</p>
                      <p className="text-sm text-gray-600">{new Date(record.maintenance_date).toLocaleDateString()}</p>
                    </div>
                    <p className="text-sm text-gray-600">{record.description}</p>
                    <p className="text-sm font-semibold mt-2">₵{record.cost?.toLocaleString() || "N/A"}</p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="allocation" className="space-y-4 p-6">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Allocation History</h3>
              <Button asChild size="sm">
                <Link href={`/admin/assets/${asset.id}/allocate`}>
                  <Plus className="w-4 h-4 mr-2" />
                  Allocate
                </Link>
              </Button>
            </div>
            {allocation.length === 0 ? (
              <p className="text-gray-500">No allocation history</p>
            ) : (
              <div className="space-y-3">
                {allocation.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <p className="font-semibold">{record.allocated_department}</p>
                      <Badge>{record.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(record.allocation_date).toLocaleDateString()} to{" "}
                      {record.return_date ? new Date(record.return_date).toLocaleDateString() : "Present"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="depreciation" className="space-y-4 p-6">
            {depreciation.length === 0 ? (
              <p className="text-gray-500">No depreciation records</p>
            ) : (
              <div className="space-y-3">
                {depreciation.map((record) => (
                  <div key={record.id} className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <p className="font-semibold">Year {record.depreciation_year}</p>
                      <p className="text-sm text-gray-600">₵{record.depreciation_amount?.toLocaleString()}</p>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      <p>Accumulated: ₵{record.accumulated_depreciation?.toLocaleString()}</p>
                      <p>Book Value: ₵{record.book_value?.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
