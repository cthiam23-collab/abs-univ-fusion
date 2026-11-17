import { DetailPage } from "@/components/content/detail-page"

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Explore ${title.toLowerCase()} at African Business School (ABS), with practical support designed for students in Bamako and our wider African business community.`} highlights={["Student-centered guidance from experienced staff", "On-campus and digital access options", "Support connected to your academic and career goals", "Clear next steps for getting started"]} primaryHref="/contact" />
}
