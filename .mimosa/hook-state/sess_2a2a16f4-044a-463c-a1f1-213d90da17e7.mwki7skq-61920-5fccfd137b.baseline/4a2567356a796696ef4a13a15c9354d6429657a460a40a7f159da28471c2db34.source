import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Virtual Classrooms | ABS",
  description: "Virtual classrooms and distance learning tools of ABS — African Business School.",
  path: "/e-campus/virtual-classrooms",
  locale: "en",
})

export default function VirtualClassroomsPage() {
  const features = [
    {
      title: "Live classes",
      description: "Attend teaching sessions in real time and ask your questions during the session",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "Collaborative work",
      description: "Move your group projects forward with remote collaboration tools",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Recorded sessions",
      description: "Revisit the recordings made available to revise at your own pace",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "Interaction with teachers",
      description: "Benefit from one-on-one time with your teachers under the arrangements set out",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  const tips = [
    "Make sure you have a stable internet connection",
    "Use a headset for better audio quality",
    "Choose a quiet place to follow your classes",
    "Take an active part in discussions",
    "Take regular breaks to avoid eye strain",
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Virtual classrooms</h1>

      <p className="text-xl mb-8">
        Virtual classrooms make it possible to follow interactive teaching remotely, in line with the programmes of the
        five academic schools of African Business School (ABS). Connect with your teachers and your peers, wherever you are.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Key points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">How it works</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Log in to the African Business School (ABS) online portal</li>
              <li>Check the schedule of your virtual classes, communicated by the administration</li>
              <li>Click the link for the session scheduled in your timetable</li>
              <li>Join the video conference with your ABS credentials</li>
              <li>Take part in the class, ask your questions and exchange with your peers</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Tips for following remote classes well</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Technical support</h2>
        <p className="mb-4">
          Having a technical problem with the virtual classrooms? Contact the administration to be directed to the
          appropriate support.
        </p>
        <Link href="/e-campus/support">
          <Button size="lg">Get technical support</Button>
        </Link>
      </section>
    </div>
  )
}
