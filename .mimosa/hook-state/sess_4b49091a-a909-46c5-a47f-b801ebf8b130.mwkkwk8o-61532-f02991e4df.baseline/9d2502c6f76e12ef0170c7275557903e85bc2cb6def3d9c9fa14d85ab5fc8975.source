// @ts-nocheck
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

interface Settings {
  siteName: string
  maintenanceMode: boolean
  maxUploadSize: number
  allowRegistration: boolean
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    siteName: "",
    maintenanceMode: false,
    maxUploadSize: 5,
    allowRegistration: true,
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings")
      if (!response.ok) throw new Error("Failed to fetch settings")
      const data = await response.json()
      setSettings(data)
    } catch (error) {
      console.error("Error fetching settings:", error)
      toast({
        title: "Error",
        description: "Failed to fetch settings. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === "number" ? Number.parseFloat(value) : value,
    }))
  }

  const handleSwitchChange = (name: string) => {
    setSettings((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      })
      if (!response.ok) throw new Error("Failed to update settings")
      toast({
        title: "Settings Updated",
        description: "The system settings have been successfully updated.",
      })
    } catch (error) {
      console.error("Error updating settings:", error)
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">System Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
            Site Name
          </label>
          <Input id="siteName" name="siteName" value={settings.siteName} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="maintenanceMode" className="block text-sm font-medium text-gray-700">
            Maintenance Mode
          </label>
          <Switch
            id="maintenanceMode"
            checked={settings.maintenanceMode}
            onCheckedChange={() => handleSwitchChange("maintenanceMode")}
          />
        </div>
        <div>
          <label htmlFor="maxUploadSize" className="block text-sm font-medium text-gray-700">
            Max Upload Size (MB)
          </label>
          <Input
            id="maxUploadSize"
            name="maxUploadSize"
            type="number"
            value={settings.maxUploadSize}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="allowRegistration" className="block text-sm font-medium text-gray-700">
            Allow User Registration
          </label>
          <Switch
            id="allowRegistration"
            checked={settings.allowRegistration}
            onCheckedChange={() => handleSwitchChange("allowRegistration")}
          />
        </div>
        <Button type="submit">Save Settings</Button>
      </form>
    </div>
  )
}
