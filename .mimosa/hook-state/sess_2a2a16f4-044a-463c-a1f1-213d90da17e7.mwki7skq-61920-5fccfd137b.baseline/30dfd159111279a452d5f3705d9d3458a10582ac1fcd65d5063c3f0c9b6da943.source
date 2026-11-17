import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildMetadata({
  title: "خدمات دعم الطلبة | ABS",
  description: "خدمات الدعم والمرافقة لطلبة ABS — African Business School: تتبّع أكاديمي، إصغاء وتوجّه مهني.",
  path: "/student-resources/support-services",
  locale: "ar",
})

export default function StudentSupportServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">خدمات دعم الطلبة</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>التتبّع الأكاديمي</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="التتبّع الأكاديمي"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              مرافقة في تنظيم دراستكم ونجاح مسار تكوينكم.
            </CardDescription>
            <Link href="/student-resources/academic-advising">
              <Button className="mt-4">اعرف المزيد</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>الإصغاء والمرافقة</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="الإصغاء والمرافقة"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              فريق متاح ليُصغي إليكم ويوجّهكم عند الصعوبات الشخصية أو الأكاديمية.
            </CardDescription>
            <Link href="/student-resources/counseling">
              <Button className="mt-4">اعرف المزيد</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>التوجّه المهني</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/campus/IMG-20250212-WA0022.jpg"
              alt="التوجّه المهني"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <CardDescription>
              دعم في بناء مشروعكم المهني، بالانسجام مع قطب تكوينكم.
            </CardDescription>
            <Link href="/career-services">
              <Button className="mt-4">اعرف المزيد</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
