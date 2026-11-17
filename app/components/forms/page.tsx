import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function FormsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Forms</h1>
      <form className="space-y-6 max-w-md">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
