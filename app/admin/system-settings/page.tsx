"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { RefreshCw, Save, Settings, Bell, Shield, Database, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SystemSettings {
  general: {
    institutionName: string
    institutionCode: string
    email: string
    phone: string
    address: string
    website: string
    logo: string
    timezone: string
    language: string
    dateFormat: string
    currency: string
  }
  academic: {
    currentAcademicYear: string
    currentSemester: string
    gradingSystem: string
    passingPercentage: number
    maxAbsencePercentage: number
    attendanceRequired: boolean
    lateSubmissionPenalty: number
  }
  notifications: {
    emailNotifications: boolean
    smsNotifications: boolean
    pushNotifications: boolean
    admissionNotifications: boolean
    examNotifications: boolean
    feeNotifications: boolean
    attendanceNotifications: boolean
  }
  security: {
    enableTwoFactor: boolean
    sessionTimeout: number
    passwordMinLength: number
    passwordRequireSpecialChar: boolean
    passwordRequireNumbers: boolean
    loginAttempts: number
    lockoutDuration: number
  }
  fees: {
    lateFeePercentage: number
    installmentAllowed: boolean
    numberOfInstallments: number
    earlyPaymentDiscount: number
    refundPolicy: string
  }
}

export default function SystemSettingsPage() {
  const [settings, setSettings] = useState<SystemSettings>({
    general: {
      institutionName: "ABS Université",
      institutionCode: "ABS-001",
      email: "info@abs-univ.com",
      phone: "+237 123 456 789",
      address: "Douala, Cameroon",
      website: "https://abs-univ.com",
      logo: "",
      timezone: "Africa/Douala",
      language: "en",
      dateFormat: "DD/MM/YYYY",
      currency: "XAF",
    },
    academic: {
      currentAcademicYear: "2024-2025",
      currentSemester: "Fall 2024",
      gradingSystem: "percentage",
      passingPercentage: 50,
      maxAbsencePercentage: 25,
      attendanceRequired: true,
      lateSubmissionPenalty: 10,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: true,
      admissionNotifications: true,
      examNotifications: true,
      feeNotifications: true,
      attendanceNotifications: true,
    },
    security: {
      enableTwoFactor: false,
      sessionTimeout: 30,
      passwordMinLength: 8,
      passwordRequireSpecialChar: true,
      passwordRequireNumbers: true,
      loginAttempts: 5,
      lockoutDuration: 30,
    },
    fees: {
      lateFeePercentage: 5,
      installmentAllowed: true,
      numberOfInstallments: 4,
      earlyPaymentDiscount: 2,
      refundPolicy: "Full refund within 30 days of admission",
    },
  })
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async (section: keyof SystemSettings) => {
    setSaving(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Success",
        description: `${section.charAt(0).toUpperCase() + section.slice(1)} settings saved successfully`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleSaveAll = async () => {
    setSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Success",
        description: "All settings saved successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">System Settings</h1>
          <p className="text-muted-foreground">Configure system-wide settings and preferences</p>
        </div>
        <Button onClick={handleSaveAll} disabled={saving}>
          {saving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">
            <Settings className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="academic">
            <Calendar className="h-4 w-4 mr-2" />
            Academic
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="fees">
            <Database className="h-4 w-4 mr-2" />
            Fees
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic institution information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institutionName">Institution Name *</Label>
                  <Input
                    id="institutionName"
                    value={settings.general.institutionName}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, institutionName: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institutionCode">Institution Code *</Label>
                  <Input
                    id="institutionCode"
                    value={settings.general.institutionCode}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, institutionCode: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.general.email}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, email: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={settings.general.phone}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, phone: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={settings.general.address}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, address: e.target.value },
                      })
                    }
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={settings.general.website}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, website: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone *</Label>
                  <Select
                    value={settings.general.timezone}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, timezone: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Africa/Douala">Africa/Douala (GMT+1)</SelectItem>
                      <SelectItem value="Africa/Dakar">Africa/Dakar (GMT+0)</SelectItem>
                      <SelectItem value="Africa/Cairo">Africa/Cairo (GMT+2)</SelectItem>
                      <SelectItem value="Africa/Johannesburg">Africa/Johannesburg (GMT+2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language *</Label>
                  <Select
                    value={settings.general.language}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, language: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format *</Label>
                  <Select
                    value={settings.general.dateFormat}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, dateFormat: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency *</Label>
                  <Select
                    value={settings.general.currency}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, currency: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="XAF">XAF (Central African CFA Franc)</SelectItem>
                      <SelectItem value="XOF">XOF (West African CFA Franc)</SelectItem>
                      <SelectItem value="USD">USD (US Dollar)</SelectItem>
                      <SelectItem value="EUR">EUR (Euro)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("general")} disabled={saving}>
                  {saving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  Save General Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>Academic Settings</CardTitle>
              <CardDescription>Configure academic year, grading, and attendance policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentAcademicYear">Current Academic Year *</Label>
                  <Input
                    id="currentAcademicYear"
                    value={settings.academic.currentAcademicYear}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        academic: { ...settings.academic, currentAcademicYear: e.target.value },
                      })
                    }
                    placeholder="2024-2025"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentSemester">Current Semester *</Label>
                  <Input
                    id="currentSemester"
                    value={settings.academic.currentSemester}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        academic: { ...settings.academic, currentSemester: e.target.value },
                      })
                    }
                    placeholder="Fall 2024"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradingSystem">Grading System *</Label>
                  <Select
                    value={settings.academic.gradingSystem}
                    onValueChange={(value) =>
                      setSettings({
                        ...settings,
                        academic: { ...settings.academic, gradingSystem: value },
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage (0-100)</SelectItem>
                      <SelectItem value="gpa">GPA (0.0-4.0)</SelectItem>
                      <SelectItem value="letter">Letter Grades (A-F)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passingPercentage">Passing Percentage *</Label>
                  <Input
                    id="passingPercentage"
                    type="number"
                    value={settings.academic.passingPercentage}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        academic: { ...settings.academic, passingPercentage: Number.parseInt(e.target.value) },
                      })
                    }
                    min="0"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxAbsencePercentage">Maximum Absence Percentage *</Label>
                  <Input
                    id="maxAbsencePercentage"
                    type="number"
                    value={settings.academic.maxAbsencePercentage}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        academic: { ...settings.academic, maxAbsencePercentage: Number.parseInt(e.target.value) },
                      })
                    }
                    min="0"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lateSubmissionPenalty">Late Submission Penalty (%)</Label>
                  <Input
                    id="lateSubmissionPenalty"
                    type="number"
                    value={settings.academic.lateSubmissionPenalty}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        academic: { ...settings.academic, lateSubmissionPenalty: Number.parseInt(e.target.value) },
                      })
                    }
                    min="0"
                    max="100"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="attendanceRequired"
                  checked={settings.academic.attendanceRequired}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      academic: { ...settings.academic, attendanceRequired: checked },
                    })
                  }
                />
                <Label htmlFor="attendanceRequired">Attendance Required for Exams</Label>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("academic")} disabled={saving}>
                  {saving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  Save Academic Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure notification channels and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Notification Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send notifications via email</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={settings.notifications.emailNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, emailNotifications: checked },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send notifications via SMS</p>
                    </div>
                    <Switch
                      id="smsNotifications"
                      checked={settings.notifications.smsNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, smsNotifications: checked },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="pushNotifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send browser push notifications</p>
                    </div>
                    <Switch
                      id="pushNotifications"
                      checked={settings.notifications.pushNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, pushNotifications: checked },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Notification Types</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="admissionNotifications">Admission Notifications</Label>
                      <p className="text-sm text-muted-foreground">Notify about admission updates</p>
                    </div>
                    <Switch
                      id="admissionNotifications"
                      checked={settings.notifications.admissionNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, admissionNotifications: checked },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="examNotifications">Exam Notifications</Label>
                      <p className="text-sm text-muted-foreground">Notify about upcoming exams</p>
                    </div>
                    <Switch
                      id="examNotifications"
                      checked={settings.notifications.examNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, examNotifications: checked },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="feeNotifications">Fee Notifications</Label>
                      <p className="text-sm text-muted-foreground">Notify about fee payments and dues</p>
                    </div>
                    <Switch
                      id="feeNotifications"
                      checked={settings.notifications.feeNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, feeNotifications: checked },
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="attendanceNotifications">Attendance Notifications</Label>
                      <p className="text-sm text-muted-foreground">Notify about attendance records</p>
                    </div>
                    <Switch
                      id="attendanceNotifications"
                      checked={settings.notifications.attendanceNotifications}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          notifications: { ...settings.notifications, attendanceNotifications: checked },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("notifications")} disabled={saving}>
                  {saving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure authentication and security policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Authentication</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableTwoFactor">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                  </div>
                  <Switch
                    id="enableTwoFactor"
                    checked={settings.security.enableTwoFactor}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, enableTwoFactor: checked },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, sessionTimeout: Number.parseInt(e.target.value) },
                      })
                    }
                    min="5"
                    max="1440"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Password Policy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passwordMinLength">Minimum Length</Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={settings.security.passwordMinLength}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          security: { ...settings.security, passwordMinLength: Number.parseInt(e.target.value) },
                        })
                      }
                      min="6"
                      max="32"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="loginAttempts">Max Login Attempts</Label>
                    <Input
                      id="loginAttempts"
                      type="number"
                      value={settings.security.loginAttempts}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          security: { ...settings.security, loginAttempts: Number.parseInt(e.target.value) },
                        })
                      }
                      min="3"
                      max="10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lockoutDuration">Account Lockout Duration (minutes)</Label>
                  <Input
                    id="lockoutDuration"
                    type="number"
                    value={settings.security.lockoutDuration}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, lockoutDuration: Number.parseInt(e.target.value) },
                      })
                    }
                    min="5"
                    max="1440"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="passwordRequireSpecialChar"
                    checked={settings.security.passwordRequireSpecialChar}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, passwordRequireSpecialChar: checked },
                      })
                    }
                  />
                  <Label htmlFor="passwordRequireSpecialChar">Require Special Characters</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="passwordRequireNumbers"
                    checked={settings.security.passwordRequireNumbers}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: { ...settings.security, passwordRequireNumbers: checked },
                      })
                    }
                  />
                  <Label htmlFor="passwordRequireNumbers">Require Numbers</Label>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("security")} disabled={saving}>
                  {saving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  Save Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees">
          <Card>
            <CardHeader>
              <CardTitle>Fee Settings</CardTitle>
              <CardDescription>Configure fee structure and payment policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lateFeePercentage">Late Fee Percentage</Label>
                  <Input
                    id="lateFeePercentage"
                    type="number"
                    value={settings.fees.lateFeePercentage}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        fees: { ...settings.fees, lateFeePercentage: Number.parseFloat(e.target.value) },
                      })
                    }
                    min="0"
                    max="100"
                    step="0.5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="earlyPaymentDiscount">Early Payment Discount (%)</Label>
                  <Input
                    id="earlyPaymentDiscount"
                    type="number"
                    value={settings.fees.earlyPaymentDiscount}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        fees: { ...settings.fees, earlyPaymentDiscount: Number.parseFloat(e.target.value) },
                      })
                    }
                    min="0"
                    max="50"
                    step="0.5"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="installmentAllowed"
                  checked={settings.fees.installmentAllowed}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      fees: { ...settings.fees, installmentAllowed: checked },
                    })
                  }
                />
                <Label htmlFor="installmentAllowed">Allow Installment Payments</Label>
              </div>
              {settings.fees.installmentAllowed && (
                <div className="space-y-2">
                  <Label htmlFor="numberOfInstallments">Number of Installments</Label>
                  <Input
                    id="numberOfInstallments"
                    type="number"
                    value={settings.fees.numberOfInstallments}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        fees: { ...settings.fees, numberOfInstallments: Number.parseInt(e.target.value) },
                      })
                    }
                    min="2"
                    max="12"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="refundPolicy">Refund Policy</Label>
                <Textarea
                  id="refundPolicy"
                  value={settings.fees.refundPolicy}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      fees: { ...settings.fees, refundPolicy: e.target.value },
                    })
                  }
                  rows={4}
                  placeholder="Enter refund policy details..."
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => handleSave("fees")} disabled={saving}>
                  {saving ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  Save Fee Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
