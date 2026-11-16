import nodemailer from 'nodemailer'
import type { SentMessageInfo, Transporter } from 'nodemailer'

export type EmailMessage = {
  to: string | string[]
  subject: string
  text?: string
  html?: string
  from?: string
  cc?: string | string[]
  bcc?: string | string[]
  replyTo?: string
}

type MailConfig = {
  smtpHost?: string
  smtpPort?: number | string
  smtpSecure?: boolean | string
  smtpUser?: string
  smtpPass?: string
  smtpFrom?: string
}

let transporter: Transporter | undefined

function getMailConfig(): MailConfig {
  const config = useRuntimeConfig()

  return {
    smtpHost: config.smtpHost,
    smtpPort: config.smtpPort,
    smtpSecure: config.smtpSecure,
    smtpUser: config.smtpUser,
    smtpPass: config.smtpPass,
    smtpFrom: config.smtpFrom,
  }
}

function parseSecure(value: boolean | string | undefined): boolean {
  return value === true || value === 'true'
}

function getTransporter(): Transporter {
  if (transporter) {
    return transporter
  }

  const config = getMailConfig()

  if (
    !config.smtpHost ||
    !config.smtpPort ||
    !config.smtpUser ||
    !config.smtpPass ||
    !config.smtpFrom
  ) {
    throw new Error('La configuración SMTP está incompleta.')
  }

  transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: parseSecure(config.smtpSecure),
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  return transporter
}

/** Verifica que el servidor SMTP esté disponible y acepte conexiones. */
export async function verifyEmailConnection(): Promise<void> {
  await getTransporter().verify()
}

/** Envía un email usando la configuración SMTP de la aplicación. */
export async function sendEmail(message: EmailMessage): Promise<SentMessageInfo> {
  const config = getMailConfig()

  return getTransporter().sendMail({
    from: message.from || config.smtpFrom,
    to: message.to,
    cc: message.cc,
    bcc: message.bcc,
    replyTo: message.replyTo,
    subject: message.subject,
    text: message.text,
    html: message.html,
  })
}
