'use client'

import { useState, type FormEvent } from 'react'
import { CTAButton } from '@/components/primitives/CTAButton'
import { MATTER_TYPES } from '@/lib/constants'
import { cn } from '@/lib/utils'

// ─── Field components ─────────────────────────────────────────────────────

interface FieldProps {
  label:       string
  htmlFor:     string
  required?:   boolean
  children:    React.ReactNode
  error?:      string
}

function Field({ label, htmlFor, required, children, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-sans text-xs font-medium uppercase tracking-label text-msm-steel"
      >
        {label}
        {required && <span className="text-msm-gold ml-1" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="font-sans text-xs text-red-600 mt-0.5">{error}</p>
      )}
    </div>
  )
}

const inputBase = [
  'w-full font-sans text-sm text-msm-ink',
  'bg-white border border-msm-mist/60',
  'px-4 py-3 rounded-sm',
  'placeholder:text-msm-mist',
  'focus:outline-none focus:border-msm-gold focus:ring-1 focus:ring-msm-gold/30',
  'transition-colors duration-200',
].join(' ')

// ─── Form state ───────────────────────────────────────────────────────────

interface FormState {
  name:        string
  email:       string
  phone:       string
  matterType:  string
  message:     string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const INITIAL: FormState = {
  name:       '',
  email:      '',
  phone:      '',
  matterType: '',
  message:    '',
}

// ─── Component ────────────────────────────────────────────────────────────

export function ContactForm() {
  const [form,      setForm]      = useState<FormState>(INITIAL)
  const [errors,    setErrors]    = useState<Partial<FormState>>({})
  const [submitState, setSubmit]  = useState<SubmitState>('idle')

  function validate(): boolean {
    const e: Partial<FormState> = {}
    if (!form.name.trim())                       e.name    = 'Please enter your name.'
    if (!form.email.trim())                      e.email   = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                                 e.email   = 'Please enter a valid email address.'
    if (!form.message.trim())                    e.message = 'Please describe your matter.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((err) => ({ ...err, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return

    setSubmit('submitting')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

    try {
      const res = await fetch(
        formspreeId
          ? `https://formspree.io/f/${formspreeId}`
          : 'https://formspree.io/f/placeholder',
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body:    JSON.stringify({
            name:         form.name,
            email:        form.email,
            phone:        form.phone || 'Not provided',
            matter_type:  form.matterType || 'Not specified',
            message:      form.message,
          }),
        }
      )

      if (res.ok) {
        setSubmit('success')
        setForm(INITIAL)
      } else {
        setSubmit('error')
      }
    } catch {
      setSubmit('error')
    }
  }

  // ─── Success state ───────────────────────────────────────────────────────

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <div className="w-10 h-[3px] bg-msm-gold rounded-full" />
        <h3 className="font-serif text-display-sm text-msm-slate">
          Message received.
        </h3>
        <p className="font-sans text-base text-msm-steel max-w-[48ch] leading-relaxed">
          Thank you for reaching out. A member of the MSM Advocates team will
          respond to your inquiry within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmit('idle')}
          className="font-sans text-xs uppercase tracking-label text-msm-gold hover:text-msm-gold-dark transition-colors mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  // ─── Form ────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Full Name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={cn(inputBase, errors.name && 'border-red-400')}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={cn(inputBase, errors.email && 'border-red-400')}
          />
        </Field>
      </div>

      {/* Phone + Matter type row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Optional"
            className={inputBase}
          />
        </Field>
        <Field label="Matter Type" htmlFor="matterType">
          <select
            id="matterType"
            name="matterType"
            value={form.matterType}
            onChange={handleChange}
            className={cn(inputBase, 'cursor-pointer')}
          >
            <option value="">Select a practice area</option>
            {MATTER_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Describe Your Matter" htmlFor="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Please give a brief description of the legal matter you need assistance with."
          className={cn(inputBase, 'resize-none', errors.message && 'border-red-400')}
        />
      </Field>

      {/* Disclaimer */}
      <p className="font-sans text-xs text-msm-mist leading-relaxed max-w-[56ch]">
        This form is for general inquiries only. Submitting this form does not
        create an advocate-client relationship. Please do not include confidential
        information in your initial message.
      </p>

      {/* Error state */}
      {submitState === 'error' && (
        <p role="alert" className="font-sans text-sm text-red-600">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:info@msmadvocates.co.ug" className="underline">
            info@msmadvocates.co.ug
          </a>
          .
        </p>
      )}

      {/* Submit */}
      <div>
        <CTAButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitState === 'submitting'}
          arrow={submitState !== 'submitting'}
        >
          {submitState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
        </CTAButton>
      </div>
    </form>
  )
}
