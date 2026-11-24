"use server"

import emailjs from "@emailjs/nodejs"

import { siteConfig } from "@/lib/site"

import { handleContact, readEmailConfig } from "./handler"
import type { ContactResult } from "./schema"

export async function sendContactMessage(input: unknown): Promise<ContactResult> {
  return handleContact(input, {
    config: readEmailConfig(process.env),
    recipient: siteConfig.email,
    now: Date.now,
    send: (config, params) =>
      emailjs.send(config.serviceId, config.templateId, params, {
        publicKey: config.publicKey,
        privateKey: config.privateKey,
      }),
    log: (message, error) => console.error(message, error ?? ""),
  })
}
