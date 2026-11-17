import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content of the card.</p>
          </CardContent>
          <CardFooter>
            <Button>Card Action</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Image Card</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg?height=200&width=300" alt="Placeholder" className="w-full h-auto rounded-md" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Text-only Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This card contains only text content without any images or actions.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
