import { describe, expect, it, vi } from "vitest"

import {
  handleContact,
  MIN_FILL_TIME_MS,
  readEmailConfig,
  type ContactDeps,
} from "@/lib/contact/handler"

const NOW = 1_800_000_000_000

const config = { serviceId: "s", templateId: "t", publicKey: "pk", privateKey: "sk" }

function deps(overrides: Partial<ContactDeps> = {}): ContactDeps {
  return {
    config,
    recipient: "me@example.com",
    now: () => NOW,
    send: vi.fn().mockResolvedValue({ status: 200 }),
    ...overrides,
  }
}

const valid = {
  name: "Jane Client",
  email: "jane@example.com",
  reason: "mission",
  message: "We need help shipping a marketplace MVP by March.",
  website: "",
  startedAt: NOW - 30_000,
}

describe("handleContact", () => {
  it("sends a valid message through EmailJS", async () => {
    const d = deps()
    await expect(handleContact(valid, d)).resolves.toEqual({ ok: true })
    expect(d.send).toHaveBeenCalledWith(
      config,
      expect.objectContaining({
        from_name: "Jane Client",
        from_email: "jane@example.com",
        reply_to: "jane@example.com",
        reason: "mission",
        to_email: "me@example.com",
      }),
    )
  })

  it("returns field error codes for invalid input", async () => {
    const d = deps()
    const result = await handleContact(
      { ...valid, name: "J", email: "nope", reason: "spam", message: "short" },
      d,
    )
    expect(result).toEqual({
      ok: false,
      error: "validation",
      fieldErrors: {
        name: "nameShort",
        email: "emailInvalid",
        reason: "reasonInvalid",
        message: "messageShort",
      },
    })
    expect(d.send).not.toHaveBeenCalled()
  })

  it("silently drops submissions that fill the honeypot", async () => {
    const d = deps()
    await expect(handleContact({ ...valid, website: "https://spam.example" }, d)).resolves.toEqual({
      ok: true,
    })
    expect(d.send).not.toHaveBeenCalled()
  })

  it("silently drops submissions sent too fast", async () => {
    const d = deps()
    await handleContact({ ...valid, startedAt: NOW - MIN_FILL_TIME_MS + 1 }, d)
    expect(d.send).not.toHaveBeenCalled()
  })

  it("reports the form as unavailable when EmailJS is not configured", async () => {
    await expect(handleContact(valid, deps({ config: null }))).resolves.toEqual({
      ok: false,
      error: "unavailable",
    })
  })

  it("reports a server error when sending fails", async () => {
    const d = deps({ send: vi.fn().mockRejectedValue(new Error("boom")), log: vi.fn() })
    await expect(handleContact(valid, d)).resolves.toEqual({ ok: false, error: "server" })
    expect(d.log).toHaveBeenCalled()
  })
})

describe("readEmailConfig", () => {
  it("returns null unless every key is present", () => {
    expect(readEmailConfig({ EMAILJS_SERVICE_ID: "s" })).toBeNull()
    expect(
      readEmailConfig({
        EMAILJS_SERVICE_ID: "s",
        EMAILJS_TEMPLATE_ID: "t",
        EMAILJS_PUBLIC_KEY: "pk",
        EMAILJS_PRIVATE_KEY: "sk",
      }),
    ).toEqual(config)
  })
})
