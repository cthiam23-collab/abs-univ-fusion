import { DetailPage } from "@/components/content/detail-page"

export default async function StudentResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`African Business School (ABS) students can access ${title.toLowerCase()} through our dedicated support team in Bamako.`} highlights={["Confidential, respectful student support", "Appointments and guidance tailored to your needs", "Practical resources for academic success", "A welcoming campus community"]} primaryHref="/student-portal" primaryLabel="Open Student Portal" />
}
