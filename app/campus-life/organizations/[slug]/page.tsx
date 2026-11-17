import { CtaDestination } from "@/components/content/cta-destination"
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <CtaDestination title={slug.replaceAll("-", " ")} description="Discover student organizations and community life at African Business School (ABS) in Bamako." primaryHref="/campus-life/organizations" /> }
