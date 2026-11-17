"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ModalsPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Modals</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Basic Modal</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Modal</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Modal Title</DialogTitle>
                <DialogDescription>This is a description of the modal content.</DialogDescription>
              </DialogHeader>
              <p>This is the main content of the modal.</p>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Controlled Modal</h2>
          <Button onClick={() => setOpen(true)}>Open Controlled Modal</Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Controlled Modal</DialogTitle>
                <DialogDescription>This modal is controlled by state.</DialogDescription>
              </DialogHeader>
              <p>You can programmatically control this modal.</p>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
