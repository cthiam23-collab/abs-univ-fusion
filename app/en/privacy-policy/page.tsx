import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | ABS",
  description: "Privacy and personal data protection policy of the ABS — African Business School website.",
  path: "/privacy-policy",
  locale: "en",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Privacy policy</h1>

      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4">
            ABS — African Business School attaches great importance to the protection of your personal data.
            This policy describes the data collected through this site and how it is used.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Data controller</h2>
          <p className="text-muted-foreground mb-4">
            ABS — African Business School, Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali. Telephone:
            +223 78 14 14 88. Email: abs.mail1290@gmail.com.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Data collected</h2>
          <p className="text-muted-foreground mb-4">
            This site performs no automatic collection of personal data. The only data collected is that which you
            choose to send us via the contact form: your name, your phone number or your email address, and your
            message.
          </p>
          <p className="text-muted-foreground mb-4">
            The site also uses a single functional cookie, <strong>abs-language</strong>, which records your language
            choice for one year. It contains no personal data and is not shared in any way.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Purpose of use</h2>
          <p className="text-muted-foreground mb-4">
            The data transmitted via the contact form is used exclusively to respond to your request: information about
            programmes, admission, or any other question addressed to the institution. It is neither sold, nor
            transferred, nor used for advertising purposes.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Retention and security</h2>
          <p className="text-muted-foreground mb-4">
            Your data is kept for the time necessary to process your request. Reasonable technical and organisational
            measures are implemented to protect it against unauthorised access, alteration or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Your rights</h2>
          <p className="text-muted-foreground mb-4">
            In accordance with the regulations applicable in Mali, you have the right of access, rectification and
            erasure of data concerning you. To exercise these rights, send your request to +223 78 14 14 88 or to
            abs.mail1290@gmail.com; your request will be processed as soon as possible.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Applicable law</h2>
          <p className="text-muted-foreground mb-4">
            This policy is governed by Malian law. It may be updated periodically; we invite you to review this page
            regularly.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
