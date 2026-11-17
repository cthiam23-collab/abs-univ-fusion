"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function BulkOperationsPage() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedAssets, setSelectedAssets] = useState<number[]>([])
  const [operation, setOperation] = useState("")
  const [operationData, setOperationData] = useState("")
  const [processing, setProcessing] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchAssets()
  }, [])

  async function fetchAssets() {
    try {
      setLoading(true)
      const response = await fetch("/api/assets?limit=100")
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

  function toggleAsset(id: number) {
    setSelectedAssets((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  function toggleAllAssets() {
    if (selectedAssets.length === assets.length) {
      setSelectedAssets([])
    } else {
      setSelectedAssets(assets.map((a: any) => a.id))
    }
  }

  async function handleBulkOperation() {
    if (selectedAssets.length === 0) {
      toast({ title: "Error", description: "Please select at least one asset", variant: "destructive" })
      return
    }

    if (!operation || !operationData) {
      toast({ title: "Error", description: "Please select operation and value", variant: "destructive" })
      return
    }

    try {
      setProcessing(true)
      const response = await fetch("/api/assets/bulk", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: operation,
          assetIds: selectedAssets,
          data:
            operation === "update-status"
              ? { status: operationData }
              : operation === "update-condition"
                ? { condition: operationData }
                : operation === "update-location"
                  ? { location: operationData }
                  : { department: operationData },
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({ title: "Success", description: data.message })
        setSelectedAssets([])
        setOperation("")
        setOperationData("")
        fetchAssets()
      } else {
        toast({ title: "Error", description: data.error, variant: "destructive" })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      toast({ title: "Error", description: "Failed to perform operation", variant: "destructive" })
    } finally {
      setProcessing(false)
    }
  }

  async function handleBulkDelete() {
    if (selectedAssets.length === 0) {
      toast({ title: "Error", description: "Please select at least one asset", variant: "destructive" })
      return
    }

    if (!confirm(`Are you sure you want to delete ${selectedAssets.length} asset(s)?`)) {
      return
    }

    try {
      setProcessing(true)
      const response = await fetch("/api/assets/bulk", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetIds: selectedAssets }),
      })

      const data = await response.json()

      if (data.success) {
        toast({ title: "Success", description: data.message })
        setSelectedAssets([])
        fetchAssets()
      } else {
        toast({ title: "Error", description: data.error, variant: "destructive" })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      toast({ title: "Error", description: "Failed to delete assets", variant: "destructive" })
    } finally {
      setProcessing(false)
    }
  }

  async function handleExport() {
    try {
      const response = await fetch("/api/assets/export?format=csv")
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `assets-export-${new Date().getTime()}.csv`
        a.click()
        toast({ title: "Success", description: "Assets exported successfully" })
      }
    } catch (error) {
      console.error("[v0] Error:", error)
      toast({ title: "Error", description: "Failed to export assets", variant: "destructive" })
    }
  }

  const statusColors: Record<string, string> = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-gray-100 text-gray-800",
    maintenance: "bg-yellow-100 text-yellow-800",
    disposed: "bg-red-100 text-red-800",
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Bulk Operations</h1>
        <p className="text-gray-600 mt-1">Perform operations on multiple assets</p>
      </div>

      {/* Export */}
      <Card>
        <CardHeader>
          <CardTitle>Export Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export All Assets (CSV)
          </Button>
        </CardContent>
      </Card>

      {/* Bulk Operations */}
      <Card>
        <CardHeader>
          <CardTitle>Bulk Update Operations</CardTitle>
          <CardDescription>Select assets and apply operations in bulk</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Operation</label>
              <Select value={operation} onValueChange={setOperation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select operation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="update-status">Update Status</SelectItem>
                  <SelectItem value="update-condition">Update Condition</SelectItem>
                  <SelectItem value="update-location">Update Location</SelectItem>
                  <SelectItem value="update-department">Update Department</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {operation === "update-status" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={operationData} onValueChange={setOperationData}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="disposed">Disposed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {operation === "update-condition" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Condition</label>
                <Select value={operationData} onValueChange={setOperationData}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {(operation === "update-location" || operation === "update-department") && (
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {operation === "update-location" ? "Location" : "Department"}
                </label>
                <input
                  type="text"
                  placeholder={operation === "update-location" ? "e.g., Room 101" : "e.g., IT Department"}
                  value={operationData}
                  onChange={(e) => setOperationData(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Assets Selection */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Select Assets</CardTitle>
              <CardDescription>{selectedAssets.length} assets selected</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button disabled={processing || selectedAssets.length === 0} onClick={handleBulkOperation}>
                Apply Operation
              </Button>
              <Button
                variant="destructive"
                disabled={processing || selectedAssets.length === 0}
                onClick={handleBulkDelete}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-4 border-b">
                <Checkbox
                  checked={selectedAssets.length === assets.length && assets.length > 0}
                  onCheckedChange={toggleAllAssets}
                />
                <span className="font-semibold">Select All ({assets.length})</span>
              </div>

              {assets.map((asset: any) => (
                <div key={asset.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <Checkbox checked={selectedAssets.includes(asset.id)} onCheckedChange={() => toggleAsset(asset.id)} />
                  <div className="flex-1">
                    <p className="font-semibold">{asset.name}</p>
                    <p className="text-sm text-gray-600">{asset.asset_code}</p>
                  </div>
                  <Badge className={statusColors[asset.status] || "bg-gray-100 text-gray-800"}>{asset.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
