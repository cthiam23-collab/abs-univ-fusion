import { Button } from "@/components/ui/button"

export default function ButtonsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Buttons</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Default Button</h2>
          <Button>Default Button</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Primary Button</h2>
          <Button variant="default">Primary Button</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Secondary Button</h2>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Outline Button</h2>
          <Button variant="outline">Outline Button</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Ghost Button</h2>
          <Button variant="ghost">Ghost Button</Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Link Button</h2>
          <Button variant="link">Link Button</Button>
        </div>
      </div>
    </div>
  )
}
