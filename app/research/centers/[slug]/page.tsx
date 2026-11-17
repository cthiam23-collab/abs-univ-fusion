import { DetailPage } from "@/components/content/detail-page"

export default async function ResearchCenterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Learn about the research focus, people, and partnership opportunities connected to ${title} at African Business School (ABS).`} highlights={["Research grounded in African priorities", "Faculty and student collaboration", "Applied projects with community impact", "Opportunities for academic and industry partners"]} primaryHref="/research/partnerships" primaryLabel="Explore partnerships" />
}
