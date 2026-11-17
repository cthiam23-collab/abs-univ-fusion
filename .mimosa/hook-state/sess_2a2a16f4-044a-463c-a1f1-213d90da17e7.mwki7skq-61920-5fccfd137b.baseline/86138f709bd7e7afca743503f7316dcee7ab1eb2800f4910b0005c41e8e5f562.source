import { DetailPage } from "@/components/content/detail-page"

export default async function CampusLifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Discover ${title.toLowerCase()} at African Business School (ABS), where students build community and make the most of campus life in Bamako.`} highlights={["Accessible facilities and services", "Programs built around student wellbeing", "Opportunities to connect and participate", "Support from the campus life team"]} primaryHref="/contact" />
}
