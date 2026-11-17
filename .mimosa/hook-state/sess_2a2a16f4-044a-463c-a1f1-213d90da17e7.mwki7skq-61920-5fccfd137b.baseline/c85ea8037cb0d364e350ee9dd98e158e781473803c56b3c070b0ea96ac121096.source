"use client"

import { useState } from "react"
import { formatCurrency } from "@/lib/helpers"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bus, MapPin } from "lucide-react"

export function TransportManagement() {
  const [routes, setRoutes] = useState([
    { id: 1, name: "Route A", stops: ["Stop 1", "Stop 2", "Stop 3"], fee: 50 },
    { id: 2, name: "Route B", stops: ["Stop 4", "Stop 5", "Stop 6"], fee: 60 },
  ])
  const [selectedRoute, setSelectedRoute] = useState("")

  const handleRouteSelection = (routeId: string) => {
    setSelectedRoute(routeId)
    // Here you would typically send a request to the server to register for the route
    console.log(`Registered for route ${routeId}`)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bus className="mr-2 h-6 w-6" />
            Transport Routes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Route Name</TableHead>
                <TableHead>Stops</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routes.map((route) => (
                <TableRow key={route.id}>
                  <TableCell>{route.name}</TableCell>
                  <TableCell>{route.stops.join(", ")}</TableCell>
                  <TableCell>{formatCurrency(route.fee)}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleRouteSelection(route.id.toString())}>
                      Select Route
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="mr-2 h-6 w-6" />
            Your Transport Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedRoute ? (
            <p>You are registered for {routes.find((r) => r.id.toString() === selectedRoute)?.name}</p>
          ) : (
            <p>You are not registered for any transport route.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
