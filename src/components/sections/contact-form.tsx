"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircleIcon, SendIcon } from "lucide-react"
import { useEffect, useTransition } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { Messages } from "@/i18n/messages/en"
import { sendContactMessage } from "@/lib/contact/action"
import {
  contactReasons,
  contactSchema,
  type ContactErrorCode,
  type ContactField,
  type ContactInput,
} from "@/lib/contact/schema"

type ContactFormProps = { labels: Messages["contactForm"] }

const emptyValues: ContactInput = {
  name: "",
  email: "",
  reason: undefined as unknown as ContactInput["reason"],
  message: "",
  website: "",
  startedAt: 0,
}

export function ContactForm({ labels }: ContactFormProps) {
  const [pending, startTransition] = useTransition()

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: emptyValues,
  })
  const { errors } = form.formState

  // Record when the form became interactive (used server-side to spot bots).
  useEffect(() => {
    form.setValue("startedAt", Date.now())
  }, [form])

  const errorText = (field: ContactField) => {
    const code = errors[field]?.message as ContactErrorCode | undefined
    return code ? labels.errors[code] : undefined
  }

  const onSubmit = form.handleSubmit((values) => {
    startTransition(async () => {
      const result = await sendContactMessage(values)

      if (result.ok) {
        toast.success(labels.success)
        form.reset({ ...emptyValues, startedAt: Date.now() })
        return
      }

      if (result.error === "validation") {
        for (const [field, code] of Object.entries(result.fieldErrors ?? {})) {
          form.setError(field as ContactField, { message: code })
        }
        return
      }

      toast.error(labels.errors[result.error])
    })
  })

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-busy={pending}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label={labels.name} error={errorText("name")}>
          <Input
            id="contact-name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...form.register("name")}
          />
        </Field>
        <Field id="contact-email" label={labels.email} error={errorText("email")}>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...form.register("email")}
          />
        </Field>
      </div>

      <Field id="contact-reason" label={labels.reason} error={errorText("reason")}>
        <Controller
          control={form.control}
          name="reason"
          render={({ field }) => (
            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger
                id="contact-reason"
                className="w-full pointer-coarse:h-11"
                aria-invalid={!!errors.reason}
                aria-describedby={errors.reason ? "contact-reason-error" : undefined}
                onBlur={field.onBlur}
              >
                <SelectValue placeholder={labels.reasonPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {contactReasons.map((reason) => (
                  <SelectItem key={reason} value={reason}>
                    {labels.reasons[reason]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>

      <Field id="contact-message" label={labels.message} error={errorText("message")}>
        <Textarea
          id="contact-message"
          rows={6}
          className="min-h-36"
          placeholder={labels.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...form.register("message")}
        />
      </Field>

      {/* Honeypot — invisible to people and assistive tech, tempting for bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">{labels.honeypot}</label>
        <input
          id="contact-website"
          tabIndex={-1}
          autoComplete="off"
          {...form.register("website")}
        />
      </div>

      <Button type="submit" size="lg" disabled={pending} className="h-11 justify-self-start px-5">
        {pending ? <LoaderCircleIcon className="animate-spin" /> : <SendIcon />}
        {pending ? labels.sending : labels.submit}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
