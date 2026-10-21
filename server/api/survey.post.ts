
import { google } from 'googleapis'

type SurveyBody = {
  bedrooms?: number | string
  bathrooms?: number | string
  garageSpaces?: number | string
  storage?: boolean | string
  name?: string
  email?: string
  phone?: string
  wantsUpdates?: boolean
}

function requiredNumber(value: unknown, field: string): number {
  const parsed = Number(value)

  if (
    value === undefined ||
    value === null ||
    value === '' ||
    !Number.isFinite(parsed) ||
    parsed < 0
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Error interno',
      message: `El campo ${field} no es válido.`,
    })
  }

  return parsed
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SurveyBody>(event)

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Error interno',
      message: 'Los datos del formulario no son válidos.',
    })
  }

  const bedrooms = requiredNumber(body.bedrooms, 'dormitorios')
  const bathrooms = requiredNumber(body.bathrooms, 'baños')
  const garageSpaces = requiredNumber(body.garageSpaces, 'plazas de garaje')

  const storage = body.storage ?? false
  const wantsUpdates = body.wantsUpdates === true

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string'
    ? body.email.trim().toLowerCase()
    : ''
  const phone = typeof body.phone === 'string'
    ? body.phone.trim()
    : ''

  if (name.length > 150 || email.length > 254 || phone.length > 30) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Error interno',      
      message: 'El nombre o el email son demasiado largos.',
    })
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Error interno',      
      message: 'El email no tiene un formato válido.',
    })
  }

  const phoneDigits = phone.replace(/\D/g, '')

  if (
    phone &&
    (!/^[+\d\s().-]{7,30}$/.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15)
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Error interno',
      message: 'El teléfono no tiene un formato válido.',
    })
  }

  if (wantsUpdates && (!name || !email || !phone)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Error interno',
      message:
        'Indica tu nombre, email y teléfono si quieres recibir novedades.',
    })
  }

  const config = useRuntimeConfig(event)

  if (
    !config.googleServiceAccountEmail ||
    !config.googlePrivateKey ||
    !config.googleSpreadsheetId
  ) {
    console.error('Falta configurar la conexión con Google Sheets.')

    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno',
      message: 'El servicio de encuestas no está configurado.',
    })
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: config.googleServiceAccountEmail,
        private_key: config.googlePrivateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({
      version: 'v4',
      auth,
    })

    // Fecha y hora generadas por el servidor en formato ISO 8601 (UTC).
    const registeredAt = new Date().toISOString()

    await sheets.spreadsheets.values.append({
      spreadsheetId: config.googleSpreadsheetId,
      range: config.googleSpreadsheetRange || 'Respuestas!A:I',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[
          registeredAt,
          bedrooms,
          bathrooms,
          garageSpaces,
          storage,
          name,
          email,
          phone,
          wantsUpdates,
        ]],
      },
    })

    return {
      success: true,
      message: 'Encuesta registrada correctamente.',
    }
  } catch (error) {
    // No se registran los datos personales del formulario en los logs.
    console.error('Error al guardar la encuesta en Google Sheets:', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Error interno',
      message: 'No se ha podido guardar la encuesta. Inténtalo de nuevo.',
    })
  }
})
