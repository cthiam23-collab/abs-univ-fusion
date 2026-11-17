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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import {
  Plus,
  Search,
  Home,
  Users,
  Bed,
  DoorOpen,
  AlertTriangle,
  CheckCircle,
  Eye,
  Pencil,
  Trash2,
  Download,
  Filter,
  Building2,
  UserPlus,
  Phone,
  Mail,
  Calendar,
  Wrench,
} from "lucide-react"

// Mock data for hostels
const mockHostels = [
  {
    id: 1,
    name: "Unity Hall",
    type: "Male",
    totalRooms: 50,
    occupiedRooms: 45,
    totalBeds: 200,
    occupiedBeds: 178,
    warden: "Mr. John Adu",
    wardenPhone: "+233 24 111 2222",
    location: "North Campus",
    amenities: ["Wi-Fi", "Common Room", "Laundry", "Study Room"],
    status: "active",
  },
  {
    id: 2,
    name: "Grace Hall",
    type: "Female",
    totalRooms: 60,
    occupiedRooms: 58,
    totalBeds: 240,
    occupiedBeds: 230,
    warden: "Mrs. Akosua Mensah",
    wardenPhone: "+233 24 333 4444",
    location: "South Campus",
    amenities: ["Wi-Fi", "Common Room", "Laundry", "Kitchen", "Gym"],
    status: "active",
  },
  {
    id: 3,
    name: "International House",
    type: "Mixed",
    totalRooms: 40,
    occupiedRooms: 35,
    totalBeds: 80,
    occupiedBeds: 68,
    warden: "Dr. Emmanuel Ofori",
    wardenPhone: "+233 24 555 6666",
    location: "Central Campus",
    amenities: ["Wi-Fi", "Common Room", "Kitchen", "Study Room", "Conference Room"],
    status: "active",
  },
  {
    id: 4,
    name: "Postgraduate Residence",
    type: "Mixed",
    totalRooms: 30,
    occupiedRooms: 25,
    totalBeds: 30,
    occupiedBeds: 25,
    warden: "Prof. Kwesi Asante",
    wardenPhone: "+233 24 777 8888",
    location: "West Campus",
    amenities: ["Wi-Fi", "Private Bathroom", "Kitchen", "Study Room", "Parking"],
    status: "maintenance",
  },
]

// Mock data for rooms
const mockRooms = [
  { id: 1, roomNumber: "U101", hostel: "Unity Hall", type: "Quad", capacity: 4, occupied: 4, status: "full" },
  { id: 2, roomNumber: "U102", hostel: "Unity Hall", type: "Quad", capacity: 4, occupied: 3, status: "available" },
  { id: 3, roomNumber: "U103", hostel: "Unity Hall", type: "Double", capacity: 2, occupied: 2, status: "full" },
  { id: 4, roomNumber: "G101", hostel: "Grace Hall", type: "Triple", capacity: 3, occupied: 3, status: "full" },
  { id: 5, roomNumber: "G102", hostel: "Grace Hall", type: "Triple", capacity: 3, occupied: 2, status: "available" },
  { id: 6, roomNumber: "I101", hostel: "International House", type: "Single", capacity: 1, occupied: 1, status: "full" },
  { id: 7, roomNumber: "I102", hostel: "International House", type: "Single", capacity: 1, occupied: 0, status: "available" },
  { id: 8, roomNumber: "P101", hostel: "Postgraduate Residence", type: "Single", capacity: 1, occupied: 0, status: "maintenance" },
]

// Mock data for residents
const mockResidents = [
  {
    id: 1,
    name: "Kwame Asante",
    studentId: "STU2024001",
    email: "k.asante@student.edu",
    phone: "+233 24 123 4567",
    hostel: "Unity Hall",
    room: "U101",
    bedNumber: "A",
    checkIn: "2024-01-15",
    checkOut: "2024-06-30",
    status: "active",
    program: "Computer Science",
    year: "Year 3",
  },
  {
    id: 2,
    name: "Ama Mensah",
    studentId: "STU2024002",
    email: "a.mensah@student.edu",
    phone: "+233 24 234 5678",
    hostel: "Grace Hall",
    room: "G101",
    bedNumber: "B",
    checkIn: "2024-01-15",
    checkOut: "2024-06-30",
    status: "active",
    program: "Medicine",
    year: "Year 4",
  },
  {
    id: 3,
    name: "Kofi Osei",
    studentId: "STU2024003",
    email: "k.osei@student.edu",
    phone: "+233 24 345 6789",
    hostel: "International House",
    room: "I101",
    bedNumber: "A",
    checkIn: "2024-01-15",
    checkOut: "2024-06-30",
    status: "active",
    program: "International Relations",
    year: "Year 2",
  },
]

export default function HostelPage() {
  const [hostels, setHostels] = useState(mockHostels)
  const [rooms, setRooms] = useState(mockRooms)
  const [residents, setResidents] = useState(mockResidents)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [hostelFilter, setHostelFilter] = useState("all")
  const [isAddingHostel, setIsAddingHostel] = useState(false)
  const [isAddingRoom, setIsAddingRoom] = useState(false)
  const [isAllocating, setIsAllocating] = useState(false)
  const [selectedHostel, setSelectedHostel] = useState<typeof mockHostels[0] | null>(null)
  const { toast } = useToast()

  const stats = {
    totalHostels: hostels.length,
    totalRooms: hostels.reduce((acc, h) => acc + h.totalRooms, 0),
    totalBeds: hostels.reduce((acc, h) => acc + h.totalBeds, 0),
    occupiedBeds: hostels.reduce((acc, h) => acc + h.occupiedBeds, 0),
    availableBeds: hostels.reduce((acc, h) => acc + (h.totalBeds - h.occupiedBeds), 0),
    occupancyRate: Math.round(
      (hostels.reduce((acc, h) => acc + h.occupiedBeds, 0) /
        hostels.reduce((acc, h) => acc + h.totalBeds, 0)) *
        100
    ),
    maintenanceRooms: rooms.filter((r) => r.status === "maintenance").length,
  }

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.hostel.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || room.status === statusFilter
    const matchesHostel = hostelFilter === "all" || room.hostel === hostelFilter
    return matchesSearch && matchesStatus && matchesHostel
  })

  const filteredResidents = residents.filter((resident) => {
    const matchesSearch =
      resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.room.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesHostel = hostelFilter === "all" || resident.hostel === hostelFilter
    return matchesSearch && matchesHostel
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "full":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "available":
        return <Badge className="bg-blue-100 text-blue-800">Available</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "Male":
        return <Badge className="bg-blue-100 text-blue-800">{type}</Badge>
      case "Female":
        return <Badge className="bg-pink-100 text-pink-800">{type}</Badge>
      case "Mixed":
        return <Badge className="bg-purple-100 text-purple-800">{type}</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hostel Management</h1>
          <p className="text-muted-foreground">
            Manage student accommodation, rooms, and allocations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Hostels</p>
                <p className="text-2xl font-bold">{stats.totalHostels}</p>
                <p className="text-xs text-muted-foreground">{stats.totalRooms} rooms</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Beds</p>
                <p className="text-2xl font-bold">{stats.totalBeds}</p>
                <p className="text-xs text-green-600">{stats.occupiedBeds} occupied</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Bed className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Occupancy Rate</p>
                <p className="text-2xl font-bold">{stats.occupancyRate}%</p>
                <p className="text-xs text-muted-foreground">{stats.availableBeds} beds available</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <Progress value={stats.occupancyRate} className="mt-3 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Maintenance</p>
                <p className="text-2xl font-bold">{stats.maintenanceRooms}</p>
                <p className="text-xs text-yellow-600">rooms under repair</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="hostels" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="hostels">Hostels</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="residents">Residents</TabsTrigger>
            <TabsTrigger value="allocations">Allocations</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-9 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={hostelFilter} onValueChange={setHostelFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Hostel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Hostels</SelectItem>
                {hostels.map((h) => (
                  <SelectItem key={h.id} value={h.name}>
                    {h.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hostels Tab */}
        <TabsContent value="hostels" className="space-y-4">
          <div className="flex justify-end">
            <Dialog open={isAddingHostel} onOpenChange={setIsAddingHostel}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Hostel
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Hostel</DialogTitle>
                  <DialogDescription>Create a new hostel facility</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label>Hostel Name</Label>
                    <Input placeholder="e.g., Unity Hall" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input placeholder="e.g., North Campus" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Total Rooms</Label>
                      <Input type="number" placeholder="50" />
                    </div>
                    <div className="space-y-2">
                      <Label>Total Beds</Label>
                      <Input type="number" placeholder="200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Warden Name</Label>
                    <Input placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Warden Phone</Label>
                    <Input placeholder="+233 XX XXX XXXX" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingHostel(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAddingHostel(false)
                      toast({ title: "Hostel Added", description: "New hostel created." })
                    }}
                  >
                    Create Hostel
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hostels.map((hostel) => (
              <Card key={hostel.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{hostel.name}</CardTitle>
                      <CardDescription>{hostel.location}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {getTypeBadge(hostel.type)}
                      {getStatusBadge(hostel.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Rooms</p>
                      <p className="font-semibold">
                        {hostel.occupiedRooms}/{hostel.totalRooms}
                      </p>
                      <Progress
                        value={(hostel.occupiedRooms / hostel.totalRooms) * 100}
                        className="h-1.5 mt-1"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Beds</p>
                      <p className="font-semibold">
                        {hostel.occupiedBeds}/{hostel.totalBeds}
                      </p>
                      <Progress
                        value={(hostel.occupiedBeds / hostel.totalBeds) * 100}
                        className="h-1.5 mt-1"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{hostel.warden}</span>
                    <span className="text-muted-foreground">|</span>
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{hostel.wardenPhone}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {hostel.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedHostel(hostel)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Rooms Tab */}
        <TabsContent value="rooms" className="space-y-4">
          <div className="flex justify-between">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="full">Full</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={isAddingRoom} onOpenChange={setIsAddingRoom}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Room
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Room</DialogTitle>
                  <DialogDescription>Add a room to a hostel</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Hostel</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hostel" />
                        </SelectTrigger>
                        <SelectContent>
                          {hostels.map((h) => (
                            <SelectItem key={h.id} value={h.name}>
                              {h.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Room Number</Label>
                      <Input placeholder="e.g., U101" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Room Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single (1 bed)</SelectItem>
                          <SelectItem value="double">Double (2 beds)</SelectItem>
                          <SelectItem value="triple">Triple (3 beds)</SelectItem>
                          <SelectItem value="quad">Quad (4 beds)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Capacity</Label>
                      <Input type="number" placeholder="4" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingRoom(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAddingRoom(false)
                      toast({ title: "Room Added", description: "New room created." })
                    }}
                  >
                    Add Room
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room</TableHead>
                  <TableHead>Hostel</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Occupancy</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRooms.map((room) => (
                  <TableRow key={room.id}>
                    <TableCell className="font-medium">{room.roomNumber}</TableCell>
                    <TableCell>{room.hostel}</TableCell>
                    <TableCell>{room.type}</TableCell>
                    <TableCell>{room.capacity} beds</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>
                          {room.occupied}/{room.capacity}
                        </span>
                        <Progress
                          value={(room.occupied / room.capacity) * 100}
                          className="w-16 h-2"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      {room.status === "full" ? (
                        <Badge className="bg-red-100 text-red-800">Full</Badge>
                      ) : room.status === "available" ? (
                        <Badge className="bg-green-100 text-green-800">Available</Badge>
                      ) : (
                        <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Residents Tab */}
        <TabsContent value="residents" className="space-y-4">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Hostel</TableHead>
                  <TableHead>Room/Bed</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResidents.map((resident) => (
                  <TableRow key={resident.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {resident.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{resident.name}</p>
                          <p className="text-xs text-muted-foreground">{resident.studentId}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs">
                          <Mail className="h-3 w-3" />
                          {resident.email}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Phone className="h-3 w-3" />
                          {resident.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{resident.hostel}</TableCell>
                    <TableCell>
                      <span className="font-medium">{resident.room}</span>
                      <span className="text-muted-foreground"> / Bed {resident.bedNumber}</span>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{resident.program}</p>
                        <p className="text-xs text-muted-foreground">{resident.year}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-xs">
                        <p>
                          <Calendar className="h-3 w-3 inline mr-1" />
                          {resident.checkIn}
                        </p>
                        <p className="text-muted-foreground">to {resident.checkOut}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">{resident.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Allocations Tab */}
        <TabsContent value="allocations" className="space-y-4">
          <div className="flex justify-end">
            <Dialog open={isAllocating} onOpenChange={setIsAllocating}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  New Allocation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Allocate Room</DialogTitle>
                  <DialogDescription>Assign a student to a hostel room</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label>Student</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select student" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="s1">John Doe - STU2024010</SelectItem>
                        <SelectItem value="s2">Jane Smith - STU2024011</SelectItem>
                        <SelectItem value="s3">Michael Brown - STU2024012</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Hostel</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hostel" />
                        </SelectTrigger>
                        <SelectContent>
                          {hostels.map((h) => (
                            <SelectItem key={h.id} value={h.name}>
                              {h.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Room</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room" />
                        </SelectTrigger>
                        <SelectContent>
                          {rooms
                            .filter((r) => r.status === "available")
                            .map((r) => (
                              <SelectItem key={r.id} value={r.roomNumber}>
                                {r.roomNumber} ({r.capacity - r.occupied} beds free)
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Check-in Date</Label>
                      <Input type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label>Check-out Date</Label>
                      <Input type="date" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAllocating(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAllocating(false)
                      toast({
                        title: "Room Allocated",
                        description: "Student assigned to room.",
                      })
                    }}
                  >
                    Allocate
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Allocations</CardTitle>
              <CardDescription>Room allocation history and pending requests</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Hostel</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {residents.map((resident) => (
                    <TableRow key={resident.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{resident.name}</p>
                          <p className="text-xs text-muted-foreground">{resident.studentId}</p>
                        </div>
                      </TableCell>
                      <TableCell>{resident.hostel}</TableCell>
                      <TableCell>
                        {resident.room} / Bed {resident.bedNumber}
                      </TableCell>
                      <TableCell>{resident.checkIn}</TableCell>
                      <TableCell>{resident.checkOut}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Hostel Details Dialog */}
      <Dialog open={!!selectedHostel} onOpenChange={() => setSelectedHostel(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedHostel?.name}</DialogTitle>
            <DialogDescription>{selectedHostel?.location}</DialogDescription>
          </DialogHeader>
          {selectedHostel && (
            <div className="space-y-4">
              <div className="flex gap-2">
                {getTypeBadge(selectedHostel.type)}
                {getStatusBadge(selectedHostel.status)}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Rooms</p>
                  <p className="text-xl font-bold">
                    {selectedHostel.occupiedRooms}/{selectedHostel.totalRooms}
                  </p>
                  <Progress
                    value={(selectedHostel.occupiedRooms / selectedHostel.totalRooms) * 100}
                    className="h-2 mt-1"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Beds</p>
                  <p className="text-xl font-bold">
                    {selectedHostel.occupiedBeds}/{selectedHostel.totalBeds}
                  </p>
                  <Progress
                    value={(selectedHostel.occupiedBeds / selectedHostel.totalBeds) * 100}
                    className="h-2 mt-1"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Warden</p>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>
                      {selectedHostel.warden
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedHostel.warden}</p>
                    <p className="text-sm text-muted-foreground">{selectedHostel.wardenPhone}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {selectedHostel.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
