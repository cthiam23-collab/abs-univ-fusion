/*
 * Envoi d'emails — utilise Resend si RESEND_API_KEY est configurée,
 * sinon journalise la notification (fallback silencieux en développement).
 * Aucun envoi n'est bloquant pour la réponse utilisateur.
 */

type MailInput = {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendMail(input: MailInput): Promise<{ sent: boolean; provider: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.MAIL_FROM || "African Business School (ABS) <onboarding@resend.dev>"

  if (!apiKey) {
    console.info(`[mailer:log] → ${input.to} | ${input.subject}`)
    return { sent: false, provider: "log" }
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [input.to],
        subject: input.subject,
        html: input.html,
        ...(input.replyTo ? { reply_to: input.replyTo } : {}),
      }),
    })
    if (!res.ok) {
      console.error("[mailer:resend] error", res.status, await res.text())
      return { sent: false, provider: "resend-error" }
    }
    return { sent: true, provider: "resend" }
  } catch (error) {
    console.error("[mailer:resend] exception", error)
    return { sent: false, provider: "resend-error" }
  }
}

function layout(title: string, bodyHtml: string): string {
  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
    <div style="background:#0f2a6e;color:#fff;padding:20px 28px">
      <h2 style="margin:0;font-size:18px">African Business School (ABS) — African Business School</h2>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;padding:24px 28px">
      <h3 style="color:#0f2a6e;margin-top:0">${title}</h3>
      ${bodyHtml}
      <p style="color:#64748b;font-size:12px;margin-top:28px">
        Hamdallaye ACI 2000, Rue 461 Porte 42, Bamako, Mali · +223 78 14 14 88 · infos@abs-univ.com
      </p>
    </div>
  </div>`
}

export function applicationConfirmationEmail(params: { to: string; name: string; reference: string; programName: string }): MailInput {
  return {
    to: params.to,
    subject: `Candidature enregistrée — Référence ${params.reference}`,
    html: layout(
      "Merci pour votre candidature !",
      `<p>Bonjour <strong>${params.name}</strong>,</p>
       <p>Nous avons bien reçu votre candidature pour le programme <strong>${params.programName}</strong>.</p>
       <p>Votre numéro de référence est : <strong style="font-size:16px">${params.reference}</strong>. Conservez-le : il identifie votre dossier auprès du registrariat.</p>
       <p>Prochaine étape : préparez vos pièces (acte de naissance, relevés, photos). Vous serez convoqué(e) au test d'entrée et à l'entretien de motivation.</p>`,
    ),
  }
}

export function contactNotificationEmail(params: { message: string; subject: string }): MailInput {
  return {
    to: "infos@abs-univ.com",
    subject: `Nouveau message de contact : ${params.subject}`,
    html: layout(
      "Nouveau message depuis le site",
      `<p>${params.message.replace(/\n/g, "<br/>")}</p>`,
    ),
  }
}
