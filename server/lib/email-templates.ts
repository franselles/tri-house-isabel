import type { EmailMessage } from './mail'

export type SurveyThankYouEmail = EmailMessage

type SurveyThankYouInput = {
  to: string
  name: string
  baseUrl: string
}

const company = {
  name: 'Los Carriones S.L.',
  taxId: 'B-03318383',
  address: 'Calle Lepanto, 18. Plt. Bj. 15. Edif. Provima. -03503- Benidorm (Alicante)',
  email: 'pedro@gruporoman.es',
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/$/, '')
}

export function buildSurveyThankYouEmail(
  { to, name, baseUrl }: SurveyThankYouInput,
): SurveyThankYouEmail {
  const safeName = escapeHtml(name.trim())
  const greeting = safeName ? `Hola ${safeName},` : 'Hola,'
  const plainGreeting = name.trim() ? `Hola ${name.trim()},` : 'Hola,'
  const siteUrl = normalizeBaseUrl(baseUrl)
  const privacyUrl = `${siteUrl}/privacidad`
  const legalUrl = `${siteUrl}/aviso-legal`

  return {
    to,
    subject: 'Gracias por participar en nuestra encuesta',
    text: `${plainGreeting}

Gracias por participar en la encuesta de Residencial en Proyecto. Hemos recibido correctamente tus preferencias.

Tal y como nos has autorizado, en el futuro podremos ponernos en contacto contigo para compartir novedades e información sobre la evolución del proyecto.

Si deseas dejar de recibir estas comunicaciones o ejercer tus derechos, puedes escribirnos a ${company.email}.

${company.name}
NIF: ${company.taxId}
${company.address}

Política de privacidad: ${privacyUrl}
Aviso legal: ${legalUrl}`,
    html: `<!doctype html>
<html lang="es">
  <body style="margin:0;background:#f5f2ec;color:#34312d;font-family:Arial,Helvetica,sans-serif;">
    <div style="padding:32px 16px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#fffdf9;border:1px solid #ded7cc;">
        <tr>
          <td style="height:5px;background:#aa8d58;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
        <tr>
          <td style="padding:34px 32px 28px;">
            <p style="margin:0 0 24px;color:#94784d;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">Residencial en Proyecto</p>
            <h1 style="margin:0 0 20px;color:#332d25;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:normal;line-height:1.2;">Gracias por participar</h1>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">${greeting}</p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;">Gracias por participar en nuestra encuesta. Hemos recibido correctamente tus preferencias.</p>
            <p style="margin:0;font-size:15px;line-height:1.7;">Tal y como nos has autorizado, en el futuro podremos ponernos en contacto contigo para compartir novedades e información sobre la evolución del proyecto.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 28px;">
            <div style="height:1px;background:#ded7cc;"></div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 32px 32px;color:#706b63;font-size:12px;line-height:1.7;">
            <p style="margin:0 0 12px;">Si deseas dejar de recibir estas comunicaciones o ejercer tus derechos, puedes escribirnos a <a href="mailto:${company.email}" style="color:#927548;">${company.email}</a>.</p>
            <p style="margin:0 0 12px;"><strong style="color:#34312d;">${company.name}</strong><br>NIF: ${company.taxId}<br>${company.address}</p>
            <p style="margin:0;"><a href="${privacyUrl}" style="color:#927548;">Política de privacidad</a> · <a href="${legalUrl}" style="color:#927548;">Aviso legal</a></p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`,
  }
}
