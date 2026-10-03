
import { google } from 'googleapis'

type SurveyBody = {
  bedrooms?: number | string
  bathrooms?: number | string
  garageSpaces?: number | string
  storage?: boolean | string
  name?: string
  email?: string
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
      statusMessage: `El campo ${field} no es válido.`,
    })
  }

  return parsed
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SurveyBody>(event)

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Los datos del formulario no son válidos.',
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

  if (name.length > 150 || email.length > 254) {
    throw createError({
      statusCode: 400,
      statusMessage: 'El nombre o el email son demasiado largos.',
    })
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'El email no tiene un formato válido.',
    })
  }

  if (wantsUpdates && (!name || !email)) {
    throw createError({
      statusCode: 400,
      statusMessage:
        'Indica tu nombre y email si quieres recibir novedades.',
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
      statusMessage: 'El servicio de encuestas no está configurado.',
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
      range: config.googleSpreadsheetRange || 'Respuestas!A:H',
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
      statusMessage: 'No se ha podido guardar la encuesta. Inténtalo de nuevo.',
    })
  }
})
