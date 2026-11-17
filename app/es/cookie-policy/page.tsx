import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Política de cookies | ABS",
  description: "Política de gestión de cookies del sitio de ABS — African Business School.",
  path: "/cookie-policy",
  locale: "es",
})

export default function CookiePolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Política de cookies</h1>

      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4">
            La presente política de cookies explica cómo el sitio de ABS — African Business School utiliza las
            cookies durante su visita, así como los medios de que dispone para controlarlas.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Editor del sitio</h2>
          <p className="text-muted-foreground mb-4">
            ABS — African Business School, Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali. Teléfono:
            +223 78 14 14 88. Correo electrónico: abs.mail1290@gmail.com.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">¿Qué es una cookie?</h2>
          <p className="text-muted-foreground mb-4">
            Una cookie es un pequeño archivo de datos depositado en su ordenador o su dispositivo móvil durante la
            consulta de un sitio web. Permite en particular al sitio memorizar información sobre su visita.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Cookies utilizadas en este sitio</h2>
          <p className="text-muted-foreground mb-4">
            Este sitio utiliza una única cookie funcional: la cookie <strong>abs-language</strong>. Registra su
            elección de idioma para que el sitio se muestre en el idioma seleccionado durante sus visitas siguientes.
            Esta cookie se conserva durante un plazo de un año. No contiene ningún dato personal identificable y nunca
            se transmite a terceros.
          </p>
          <p className="text-muted-foreground mb-4">
            Este sitio no utiliza cookies publicitarias ni cookies de seguimiento estadístico. Los datos del
            formulario de contacto (nombre, teléfono o correo electrónico, mensaje) son transmitidos por usted mismo en
            el momento del envío y no son almacenados por cookies.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">¿Cómo gestionar las cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Puede en cualquier momento suprimir o bloquear la cookie abs-language a través de la configuración de su
            navegador. En ese caso, su elección de idioma ya no será memorizada y deberá seleccionarla en cada visita.
            La navegación por el sitio sigue siendo posible sin esta cookie.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Modificación de esta política</h2>
          <p className="text-muted-foreground mb-4">
            La presente política puede ser modificada para reflejar las evoluciones del sitio. Le invitamos a
            consultarla regularmente. Toda modificación significativa se reflejará en esta página.
          </p>

          <p className="text-muted-foreground mt-6">
            Para cualquier pregunta relativa a esta política, contáctenos al +223 78 14 14 88 o a
            abs.mail1290@gmail.com.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
