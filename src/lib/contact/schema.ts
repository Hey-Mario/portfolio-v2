import { z } from "zod"

export const contactReasons = ["mission", "job", "other"] as const

export type ContactReason = (typeof contactReasons)[number]

/**
 * Error messages are stable codes, translated on the client
 * (see `contactForm.errors` in the UI messages).
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "nameShort").max(100, "nameLong"),
  email: z.string().trim().max(200, "emailInvalid").pipe(z.email("emailInvalid")),
  reason: z.enum(contactReasons, "reasonInvalid"),
  message: z.string().trim().min(20, "messageShort").max(5000, "messageLong"),
  /** Honeypot: hidden from people, often filled by bots. */
  website: z.string().max(200).optional(),
  /** Timestamp (ms) at which the form was displayed. */
  startedAt: z.number().int().nonnegative(),
})

export type ContactInput = z.input<typeof contactSchema>

export type ContactErrorCode =
  "nameShort" | "nameLong" | "emailInvalid" | "reasonInvalid" | "messageShort" | "messageLong"

export type ContactField = "name" | "email" | "reason" | "message"

export type ContactResult =
  | { ok: true }
  | {
      ok: false
      error: "validation" | "unavailable" | "server"
      fieldErrors?: Partial<Record<ContactField, ContactErrorCode>>
    }
