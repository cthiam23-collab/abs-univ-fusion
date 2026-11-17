"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import {
  Plus,
  Search,
  Users,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Eye,
  Pencil,
  Trash2,
  MessageSquare,
  UserPlus,
  Download,
  Filter,
  AlertCircle,
} from "lucide-react"

// Mock data for parents
const mockParents = [
  {
    id: 1,
    firstName: "James",
    lastName: "Mensah",
    email: "james.mensah@email.com",
    phone: "+233 24 123 4567",
    alternatePhone: "+233 20 987 6543",
    occupation: "Software Engineer",
    employer: "Tech Solutions Ltd",
    relationToStudent: "Father",
    address: "12 Independence Avenue, Accra, Ghana",
    emergencyContact: "+233 24 123 4567",
    students: [
      { id: 1, name: "Kwame Mensah", class: "Grade 10A", status: "active" },
      { id: 2, name: "Ama Mensah", class: "Grade 7B", status: "active" },
    ],
    preferredLanguage: "English",
    communicationPreference: "email",
    accessLevel: "standard",
    lastLogin: "2024-01-20",
    status: "active",
  },
  {
    id: 2,
    firstName: "Grace",
    lastName: "Osei",
    email: "grace.osei@email.com",
    phone: "+233 24 555 1234",
    alternatePhone: null,
    occupation: "Doctor",
    employer: "Korle Bu Teaching Hospital",
    relationToStudent: "Mother",
    address: "45 Liberation Road, Accra, Ghana",
    emergencyContact: "+233 24 555 1234",
    students: [
      { id: 3, name: "Kofi Osei", class: "Grade 12A", status: "active" },
    ],
    preferredLanguage: "English",
    communicationPreference: "phone",
    accessLevel: "premium",
    lastLogin: "2024-01-18",
    status: "active",
  },
  {
    id: 3,
    firstName: "Emmanuel",
    lastName: "Asante",
    email: "e.asante@email.com",
    phone: "+233 24 777 8899",
    alternatePhone: "+233 27 111 2222",
    occupation: "Business Owner",
    employer: "Asante Enterprises",
    relationToStudent: "Father",
    address: "88 Ring Road Central, Kumasi, Ghana",
    emergencyContact: "+233 24 777 8899",
    students: [
      { id: 4, name: "Akua Asante", class: "Grade 9C", status: "active" },
      { id: 5, name: "Yaw Asante", class: "Grade 5A", status: "active" },
      { id: 6, name: "Abena Asante", class: "Grade 3B", status: "active" },
    ],
    preferredLanguage: "English",
    communicationPreference: "sms",
    accessLevel: "premium",
    lastLogin: "2024-01-19",
    status: "active",
  },
  {
    id: 4,
    firstName: "Fatima",
    lastName: "Ibrahim",
    email: "fatima.ibrahim@email.com",
    phone: "+233 24 333 4444",
    alternatePhone: null,
    occupation: "Teacher",
    employer: "Tamale Secondary School",
    relationToStudent: "Guardian",
    address: "23 Hospital Road, Tamale, Ghana",
    emergencyContact: "+233 24 333 4444",
    students: [
      { id: 7, name: "Abdul Ibrahim", class: "Grade 8B", status: "active" },
    ],
    preferredLanguage: "English",
    communicationPreference: "email",
    accessLevel: "standard",
    lastLogin: "2024-01-15",
    status: "inactive",
  },
]

export default function ParentsPage() {
  const [parents, setParents] = useState(mockParents)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddingParent, setIsAddingParent] = useState(false)
  const [selectedParent, setSelectedParent] = useState<typeof mockParents[0] | null>(null)
  const [isEditingParent, setIsEditingParent] = useState(false)
  const { toast } = useToast()

  const filteredParents = parents.filter((parent) => {
    const fullName = `${parent.firstName} ${parent.lastName}`.toLowerCase()
    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      parent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parent.phone.includes(searchTerm) ||
      parent.students.some((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || parent.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    totalParents: parents.length,
    activeParents: parents.filter((p) => p.status === "active").length,
    totalStudentsLinked: parents.reduce((acc, p) => acc + p.students.length, 0),
    premiumAccounts: parents.filter((p) => p.accessLevel === "premium").length,
  }

  const handleDeleteParent = (id: number) => {
    setParents(parents.filter((p) => p.id !== id))
    toast({ title: "Parent Removed", description: "Parent record has been removed." })
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const getRelationBadgeColor = (relation: string) => {
    switch (relation.toLowerCase()) {
      case "father":
        return "bg-blue-100 text-blue-800"
      case "mother":
        return "bg-pink-100 text-pink-800"
      case "guardian":
        return "bg-purple-100 text-purple-800"
      case "grandparent":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Parents & Guardians</h1>
          <p className="text-muted-foreground">
            Manage parent/guardian profiles and student relationships
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Dialog open={isAddingParent} onOpenChange={setIsAddingParent}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Parent
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Parent/Guardian</DialogTitle>
                <DialogDescription>
                  Add a new parent or guardian to the system
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input placeholder="Last name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input placeholder="+233 XX XXX XXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Alternate Phone</Label>
                    <Input placeholder="+233 XX XXX XXXX (optional)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Relation to Student</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                        <SelectItem value="grandparent">Grandparent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Occupation</Label>
                    <Input placeholder="e.g., Software Engineer" />
                  </div>
                  <div className="space-y-2">
                    <Label>Employer</Label>
                    <Input placeholder="Company name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Textarea placeholder="Full address" rows={2} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Preferred Language</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="twi">Twi</SelectItem>
                        <SelectItem value="ga">Ga</SelectItem>
                        <SelectItem value="hausa">Hausa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Communication Preference</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Emergency Contact</Label>
                  <Input placeholder="Emergency contact number" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddingParent(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setIsAddingParent(false)
                    toast({ title: "Parent Added", description: "New parent/guardian added." })
                  }}
                >
                  Add Parent
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Parents</p>
                <p className="text-2xl font-bold">{stats.totalParents}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Accounts</p>
                <p className="text-2xl font-bold">{stats.activeParents}</p>
                <p className="text-xs text-green-600">
                  {((stats.activeParents / stats.totalParents) * 100).toFixed(0)}% active
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Students Linked</p>
                <p className="text-2xl font-bold">{stats.totalStudentsLinked}</p>
                <p className="text-xs text-muted-foreground">
                  {(stats.totalStudentsLinked / stats.totalParents).toFixed(1)} avg per parent
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Premium Accounts</p>
                <p className="text-2xl font-bold">{stats.premiumAccounts}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, phone, or student..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Parents Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Parent/Guardian</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Relation</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Occupation</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredParents.map((parent) => (
              <TableRow key={parent.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getInitials(parent.firstName, parent.lastName)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        {parent.firstName} {parent.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground">{parent.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm">
                      <Phone className="h-3 w-3" />
                      {parent.phone}
                    </div>
                    {parent.alternatePhone && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {parent.alternatePhone}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getRelationBadgeColor(parent.relationToStudent)}>
                    {parent.relationToStudent}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {parent.students.map((student) => (
                      <div key={student.id} className="text-sm">
                        <span className="font-medium">{student.name}</span>
                        <span className="text-muted-foreground"> - {student.class}</span>
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{parent.occupation}</p>
                    <p className="text-xs text-muted-foreground">{parent.employer}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={parent.status === "active" ? "default" : "secondary"}
                    className={
                      parent.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }
                  >
                    {parent.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedParent(parent)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteParent(parent.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Parent Details Dialog */}
      <Dialog open={!!selectedParent} onOpenChange={() => setSelectedParent(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Parent/Guardian Details</DialogTitle>
          </DialogHeader>
          {selectedParent && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/10 text-primary text-xl">
                    {getInitials(selectedParent.firstName, selectedParent.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">
                    {selectedParent.firstName} {selectedParent.lastName}
                  </h3>
                  <Badge className={getRelationBadgeColor(selectedParent.relationToStudent)}>
                    {selectedParent.relationToStudent}
                  </Badge>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Contact Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedParent.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedParent.phone}</span>
                    </div>
                    {selectedParent.alternatePhone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedParent.alternatePhone}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{selectedParent.address}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Professional Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedParent.occupation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedParent.employer}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Linked Students */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground">Linked Students</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedParent.students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {student.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.class}</p>
                      </div>
                      <Badge
                        className={
                          student.status === "active"
                            ? "bg-green-100 text-green-800 ml-auto"
                            : "bg-gray-100 text-gray-800 ml-auto"
                        }
                      >
                        {student.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Language</p>
                  <p className="font-medium capitalize">{selectedParent.preferredLanguage}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Communication</p>
                  <p className="font-medium capitalize">
                    {selectedParent.communicationPreference}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Login</p>
                  <p className="font-medium">{selectedParent.lastLogin}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
