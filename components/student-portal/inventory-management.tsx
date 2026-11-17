"use client"

import { useState } from "react"
import { formatCurrency } from "@/lib/helpers"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Package, ShoppingCart } from "lucide-react"

export function InventoryManagement() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Textbook A", category: "Books", quantity: 50, price: 60 },
    { id: 2, name: "Notebook", category: "Stationery", quantity: 100, price: 5 },
    { id: 3, name: "Calculator", category: "Electronics", quantity: 30, price: 15 },
  ])
  const [cart, setCart] = useState<{ id: number; name: string; quantity: number; price: number }[]>([])

  const addToCart = (item: { id: number; name: string; price: number }) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      setCart(
        cart.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)),
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="mr-2 h-6 w-6" />
            Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{formatCurrency(item.price)}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => addToCart(item)}>
                      Add to Cart
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
            <ShoppingCart className="mr-2 h-6 w-6" />
            Your Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length > 0 ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{formatCurrency(item.price * item.quantity)}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4 text-right">
                <p className="font-bold">Total: {formatCurrency(getTotalPrice())}</p>
                <Button className="mt-2">Checkout</Button>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
