import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ComponentsPage() {
  const components = [
    {
      title: "Buttons",
      description: "Interactive elements for user actions",
      image: "/placeholder.svg?height=200&width=300",
      link: "/components/buttons",
    },
    {
      title: "Cards",
      description: "Versatile content containers",
      image: "/placeholder.svg?height=200&width=300",
      link: "/components/cards",
    },
    {
      title: "Forms",
      description: "Input collection and data submission",
      image: "/placeholder.svg?height=200&width=300",
      link: "/components/forms",
    },
    {
      title: "Navigation",
      description: "Menus and navigation elements",
      image: "/placeholder.svg?height=200&width=300",
      link: "/components/navigation",
    },
    {
      title: "Modals",
      description: "Overlay windows for focused interactions",
      image: "/placeholder.svg?height=200&width=300",
      link: "/components/modals",
    },
    {
      title: "Tables",
      description: "Structured data presentation",
      image: "/placeholder.svg?height=200&width=300",
      link: "/components/tables",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">UI Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{component.title}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image
                src={component.image || "/placeholder.svg"}
                alt={component.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-md"
              />
            </CardContent>
            <CardFooter>
              <Link href={component.link}>
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
