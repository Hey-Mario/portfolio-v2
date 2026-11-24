import {
  contactSchema,
  type ContactField,
  type ContactErrorCode,
  type ContactResult,
} from "./schema"

/** Real people need more than a couple of seconds to fill the form in. */
export const MIN_FILL_TIME_MS = 3_000

export type EmailConfig = {
  serviceId: string
  templateId: string
  publicKey: string
  privateKey: string
}

export type ContactDeps = {
  config: EmailConfig | null
  recipient: string
  now: () => number
  send: (config: EmailConfig, params: Record<string, string>) => Promise<unknown>
  log?: (message: string, error?: unknown) => void
}

export function readEmailConfig(env: Record<string, string | undefined>): EmailConfig | null {
  const config = {
    serviceId: env.EMAILJS_SERVICE_ID,
    templateId: env.EMAILJS_TEMPLATE_ID,
    publicKey: env.EMAILJS_PUBLIC_KEY,
    privateKey: env.EMAILJS_PRIVATE_KEY,
  }
  return Object.values(config).every(Boolean) ? (config as EmailConfig) : null
}

export async function handleContact(input: unknown, deps: ContactDeps): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input)

  if (!parsed.success) {
    const fieldErrors: Partial<Record<ContactField, ContactErrorCode>> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField
      fieldErrors[field] ??= issue.message as ContactErrorCode
    }
    return { ok: false, error: "validation", fieldErrors }
  }

  const { website, startedAt, ...message } = parsed.data

  // Likely a bot: pretend it worked so it learns nothing, but send nothing.
  if (website || deps.now() - startedAt < MIN_FILL_TIME_MS) return { ok: true }

  if (!deps.config) {
    deps.log?.("Contact form is not configured: missing EmailJS environment variables.")
    return { ok: false, error: "unavailable" }
  }

  try {
    await deps.send(deps.config, {
      from_name: message.name,
      from_email: message.email,
      reply_to: message.email,
      reason: message.reason,
      message: message.message,
      to_name: "Mario",
      to_email: deps.recipient,
    })
    return { ok: true }
  } catch (error) {
    deps.log?.("Contact form: EmailJS send failed.", error)
    return { ok: false, error: "server" }
  }
}
