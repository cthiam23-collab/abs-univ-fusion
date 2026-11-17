"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
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
import { useToast } from "@/hooks/use-toast"
import {
  Plus,
  Search,
  Bus,
  MapPin,
  Users,
  Clock,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Filter,
  Download,
  Eye,
  Pencil,
  Trash2,
  Route,
  Fuel,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Mock data for routes
const mockRoutes = [
  {
    id: 1,
    routeName: "Route A - North Campus",
    vehicle: "Bus 001",
    driver: "John Smith",
    driverPhone: "+233 24 123 4567",
    stops: [
      { name: "Main Gate", time: "07:00" },
      { name: "Central Market", time: "07:15" },
      { name: "Train Station", time: "07:30" },
      { name: "University Campus", time: "08:00" },
    ],
    students: 32,
    capacity: 45,
    status: "active",
    distance: "15 km",
  },
  {
    id: 2,
    routeName: "Route B - South Campus",
    vehicle: "Bus 002",
    driver: "Jane Doe",
    driverPhone: "+233 24 987 6543",
    stops: [
      { name: "Airport Junction", time: "06:45" },
      { name: "Industrial Area", time: "07:00" },
      { name: "Shopping Mall", time: "07:20" },
      { name: "University Campus", time: "07:45" },
    ],
    students: 38,
    capacity: 45,
    status: "active",
    distance: "18 km",
  },
  {
    id: 3,
    routeName: "Route C - East District",
    vehicle: "Bus 003",
    driver: "Michael Johnson",
    driverPhone: "+233 24 555 1234",
    stops: [
      { name: "East Gate", time: "07:10" },
      { name: "Hospital", time: "07:25" },
      { name: "University Campus", time: "07:50" },
    ],
    students: 28,
    capacity: 40,
    status: "active",
    distance: "12 km",
  },
  {
    id: 4,
    routeName: "Route D - West Campus",
    vehicle: "Mini Van 001",
    driver: "Sarah Williams",
    driverPhone: "+233 24 444 9876",
    stops: [
      { name: "West Terminal", time: "07:15" },
      { name: "City Center", time: "07:35" },
      { name: "University Campus", time: "08:00" },
    ],
    students: 12,
    capacity: 15,
    status: "inactive",
    distance: "10 km",
  },
]

// Mock data for vehicles
const mockVehicles = [
  {
    id: 1,
    number: "Bus 001",
    type: "School Bus",
    capacity: 45,
    driver: "John Smith",
    lastMaintenance: "2024-01-15",
    nextMaintenance: "2024-02-15",
    status: "active",
    mileage: 45000,
    fuelType: "Diesel",
    year: 2020,
    insurance: "2024-12-31",
  },
  {
    id: 2,
    number: "Bus 002",
    type: "School Bus",
    capacity: 45,
    driver: "Jane Doe",
    lastMaintenance: "2024-01-20",
    nextMaintenance: "2024-02-20",
    status: "active",
    mileage: 38000,
    fuelType: "Diesel",
    year: 2021,
    insurance: "2024-12-31",
  },
  {
    id: 3,
    number: "Bus 003",
    type: "School Bus",
    capacity: 40,
    driver: "Michael Johnson",
    lastMaintenance: "2024-01-10",
    nextMaintenance: "2024-02-10",
    status: "maintenance",
    mileage: 52000,
    fuelType: "Diesel",
    year: 2019,
    insurance: "2024-06-30",
  },
  {
    id: 4,
    number: "Mini Van 001",
    type: "Mini Van",
    capacity: 15,
    driver: "Sarah Williams",
    lastMaintenance: "2024-01-25",
    nextMaintenance: "2024-02-25",
    status: "active",
    mileage: 28000,
    fuelType: "Petrol",
    year: 2022,
    insurance: "2024-12-31",
  },
]

export default function TransportPage() {
  const [routes, setRoutes] = useState(mockRoutes)
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddingRoute, setIsAddingRoute] = useState(false)
  const [isAddingVehicle, setIsAddingVehicle] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState<typeof mockRoutes[0] | null>(null)
  const { toast } = useToast()

  const filteredRoutes = routes.filter((route) => {
    const matchesSearch =
      route.routeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || route.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = {
    totalRoutes: routes.length,
    activeRoutes: routes.filter((r) => r.status === "active").length,
    totalVehicles: vehicles.length,
    activeVehicles: vehicles.filter((v) => v.status === "active").length,
    totalStudents: routes.reduce((acc, r) => acc + r.students, 0),
    totalCapacity: routes.reduce((acc, r) => acc + r.capacity, 0),
    maintenanceDue: vehicles.filter((v) => v.status === "maintenance").length,
  }

  const handleDeleteRoute = (id: number) => {
    setRoutes(routes.filter((r) => r.id !== id))
    toast({ title: "Route Deleted", description: "Transport route has been removed." })
  }

  const handleDeleteVehicle = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id))
    toast({ title: "Vehicle Deleted", description: "Vehicle has been removed from fleet." })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transport Management</h1>
          <p className="text-muted-foreground">
            Manage school transport routes, vehicles, and drivers
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
                <p className="text-sm font-medium text-muted-foreground">Total Routes</p>
                <p className="text-2xl font-bold">{stats.totalRoutes}</p>
                <p className="text-xs text-green-600">{stats.activeRoutes} active</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Route className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fleet Size</p>
                <p className="text-2xl font-bold">{stats.totalVehicles}</p>
                <p className="text-xs text-green-600">{stats.activeVehicles} operational</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Bus className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Students Transported</p>
                <p className="text-2xl font-bold">{stats.totalStudents}</p>
                <p className="text-xs text-muted-foreground">of {stats.totalCapacity} capacity</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <Progress
              value={(stats.totalStudents / stats.totalCapacity) * 100}
              className="mt-3 h-2"
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Maintenance Due</p>
                <p className="text-2xl font-bold">{stats.maintenanceDue}</p>
                <p className="text-xs text-yellow-600">vehicles need service</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="routes" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
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
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Routes Tab */}
        <TabsContent value="routes" className="space-y-4">
          <div className="flex justify-end">
            <Dialog open={isAddingRoute} onOpenChange={setIsAddingRoute}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Route
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Route</DialogTitle>
                  <DialogDescription>Create a new transport route</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label>Route Name</Label>
                    <Input placeholder="e.g., Route A - North Campus" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Assign Vehicle</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicles.map((v) => (
                            <SelectItem key={v.id} value={v.number}>
                              {v.number}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Capacity</Label>
                      <Input type="number" placeholder="45" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Driver Name</Label>
                    <Input placeholder="Driver name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Driver Phone</Label>
                    <Input placeholder="+233 XX XXX XXXX" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingRoute(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAddingRoute(false)
                      toast({ title: "Route Added", description: "New route created." })
                    }}
                  >
                    Create Route
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Stops</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRoutes.map((route) => (
                  <TableRow key={route.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{route.routeName}</p>
                        <p className="text-xs text-muted-foreground">{route.distance}</p>
                      </div>
                    </TableCell>
                    <TableCell>{route.vehicle}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{route.driver}</p>
                        <p className="text-xs text-muted-foreground">{route.driverPhone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{route.stops.length} stops</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>
                          {route.students}/{route.capacity}
                        </span>
                        <Progress
                          value={(route.students / route.capacity) * 100}
                          className="w-16 h-2"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(route.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedRoute(route)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteRoute(route.id)}
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
        </TabsContent>

        {/* Vehicles Tab */}
        <TabsContent value="vehicles" className="space-y-4">
          <div className="flex justify-end">
            <Dialog open={isAddingVehicle} onOpenChange={setIsAddingVehicle}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Vehicle
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Add New Vehicle</DialogTitle>
                  <DialogDescription>Add a vehicle to the fleet</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Vehicle Number</Label>
                      <Input placeholder="e.g., Bus 005" />
                    </div>
                    <div className="space-y-2">
                      <Label>Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bus">School Bus</SelectItem>
                          <SelectItem value="minibus">Mini Bus</SelectItem>
                          <SelectItem value="van">Van</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Capacity</Label>
                      <Input type="number" placeholder="45" />
                    </div>
                    <div className="space-y-2">
                      <Label>Year</Label>
                      <Input type="number" placeholder="2023" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Fuel Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diesel">Diesel</SelectItem>
                          <SelectItem value="petrol">Petrol</SelectItem>
                          <SelectItem value="electric">Electric</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Insurance Expiry</Label>
                      <Input type="date" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddingVehicle(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAddingVehicle(false)
                      toast({ title: "Vehicle Added", description: "Vehicle added to fleet." })
                    }}
                  >
                    Add Vehicle
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Mileage</TableHead>
                  <TableHead>Next Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{vehicle.number}</p>
                        <p className="text-xs text-muted-foreground">Year: {vehicle.year}</p>
                      </div>
                    </TableCell>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.capacity} seats</TableCell>
                    <TableCell>{vehicle.driver}</TableCell>
                    <TableCell>{vehicle.mileage.toLocaleString()} km</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {new Date(vehicle.nextMaintenance) < new Date() ? (
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        )}
                        {vehicle.nextMaintenance}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteVehicle(vehicle.id)}
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
        </TabsContent>

        {/* Drivers Tab */}
        <TabsContent value="drivers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Driver Management</CardTitle>
              <CardDescription>Manage transport drivers and their assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Driver</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Assigned Vehicle</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routes.map((route) => (
                    <TableRow key={route.id}>
                      <TableCell className="font-medium">{route.driver}</TableCell>
                      <TableCell>{route.driverPhone}</TableCell>
                      <TableCell>{route.vehicle}</TableCell>
                      <TableCell>{route.routeName}</TableCell>
                      <TableCell>{getStatusBadge(route.status)}</TableCell>
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Route Details Dialog */}
      <Dialog open={!!selectedRoute} onOpenChange={() => setSelectedRoute(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedRoute?.routeName}</DialogTitle>
            <DialogDescription>Route details and stops</DialogDescription>
          </DialogHeader>
          {selectedRoute && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Vehicle</p>
                  <p className="font-medium">{selectedRoute.vehicle}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Driver</p>
                  <p className="font-medium">{selectedRoute.driver}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="font-medium">{selectedRoute.distance}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Students</p>
                  <p className="font-medium">
                    {selectedRoute.students}/{selectedRoute.capacity}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Stops</p>
                <div className="space-y-2">
                  {selectedRoute.stops.map((stop, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 bg-muted/50 rounded"
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{stop.name}</p>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {stop.time}
                      </div>
                    </div>
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
