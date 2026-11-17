import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NavigationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Navigation</h1>
      <nav className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Basic Navigation</h2>
          <ul className="space-x-4">
            <li className="inline-block">
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/programs" className="text-blue-600 hover:underline">
                Services
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Button Navigation</h2>
          <div className="space-x-2">
            <Button variant="default" asChild><Link href="/">Home</Link></Button>
            <Button variant="outline" asChild><Link href="/about">About</Link></Button>
            <Button variant="secondary" asChild><Link href="/programs">Services</Link></Button>
            <Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button>
          </div>
        </div>
      </nav>
    </div>
  )
}
