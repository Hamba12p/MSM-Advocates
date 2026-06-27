import type { Metadata } from 'next'
import { PageHeader }    from '@/components/primitives/PageHeader'
import { Section }       from '@/components/primitives/Section'
import { Container }     from '@/components/primitives/Container'
import { Label, Heading, BodyText } from '@/components/primitives/Typography'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { ContactForm }   from '@/components/shared/ContactForm'
import { FIRM }          from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact MSM Advocates to arrange a consultation. We are based at Plot 55, Kira Road, Kamwokya, Kampala. All inquiries are responded to within one business day.',
}

// ─── Icon helpers ─────────────────────────────────────────────────────────

function Icon({ d }: { d: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-msm-gold mt-0.5"
    >
      <path d={d} />
    </svg>
  )
}

const ICONS = {
  phone:    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
  email:    'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
  location: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  clock:    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2',
  whatsapp: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
} as const

// ─── Office details sidebar ───────────────────────────────────────────────

function OfficeDetails() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Label color="gold" className="mb-4">Office</Label>
        <address className="not-italic flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <Icon d={ICONS.location} />
            <p className="font-sans text-sm text-msm-steel leading-relaxed">
              {FIRM.address.street}<br />
              {FIRM.address.area}<br />
              {FIRM.address.city}, {FIRM.address.country}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Icon d={ICONS.phone} />
            <a
              href={`tel:${FIRM.phoneIntl}`}
              className="font-sans text-sm text-msm-steel hover:text-msm-gold transition-colors duration-250"
            >
              {FIRM.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon d={ICONS.email} />
            <a
              href={`mailto:${FIRM.email}`}
              className="font-sans text-sm text-msm-steel hover:text-msm-gold transition-colors duration-250 break-all"
            >
              {FIRM.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon d={ICONS.whatsapp} />
            <a
              href={FIRM.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-msm-steel hover:text-msm-gold transition-colors duration-250"
            >
              WhatsApp us
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Icon d={ICONS.clock} />
            <div>
              <p className="font-sans text-sm text-msm-steel">Monday to Friday</p>
              <p className="font-sans text-sm text-msm-mist">8:30 am to 5:00 pm EAT</p>
            </div>
          </div>
        </address>
      </div>

      {/* Divider */}
      <div className="h-px bg-msm-mist/30" />

      {/* Response commitment */}
      <div className="flex flex-col gap-2">
        <Label color="gold">Response Time</Label>
        <p className="font-sans text-sm text-msm-steel leading-relaxed">
          We respond to all inquiries within one business day. For urgent matters,
          call us directly or send a WhatsApp message.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-msm-mist/30" />

      {/* Disclaimer */}
      <p className="font-sans text-xs text-msm-mist leading-relaxed">
        Sending a message does not create an advocate-client relationship.
        All communications are treated in confidence.
      </p>
    </div>
  )
}

// ─── Map section ──────────────────────────────────────────────────────────

function MapSection() {
  const query = encodeURIComponent('Plot 55 Kira Road Kamwokya Kampala Uganda')
  return (
    <Section bg="cream" pad="none" contained={false}>
      <div className="relative w-full h-[320px] md:h-[400px] bg-msm-mist/20">
        {/* Google Maps iframe */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999!2d32.5913!3d0.3322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${query}!5e0!3m2!1sen!2sug!4v1000000000`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MSM Advocates office location"
          className="grayscale"
        />
        {/* Overlay pin card */}
        <div className="absolute top-4 left-4 bg-white shadow-card px-4 py-3 rounded-sm border border-msm-mist/30 max-w-[220px]">
          <p className="font-serif text-sm text-msm-slate leading-snug">MSM Advocates</p>
          <p className="font-sans text-xs text-msm-steel mt-0.5">{FIRM.address.full}</p>
          <a
            href={`https://maps.google.com/?q=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-msm-gold hover:text-msm-gold-dark transition-colors mt-2 inline-block"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We welcome inquiries from individuals and businesses. Reach out to arrange a consultation or to direct a question to the right member of our team."
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Get in Touch"
        compact
      />

      <Section bg="white" pad="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 lg:gap-20">

          {/* Form */}
          <MotionWrapper type="fade-left">
            <div className="flex flex-col gap-8">
              <div>
                <Label color="gold" className="mb-3">Send an Inquiry</Label>
                <Heading as="h2" size="display-sm" className="mb-2">
                  How can we help?
                </Heading>
                <BodyText color="steel">
                  Complete the form below and a member of the team will be in touch
                  within one business day.
                </BodyText>
              </div>
              <ContactForm />
            </div>
          </MotionWrapper>

          {/* Sidebar */}
          <MotionWrapper type="fade-right" delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <OfficeDetails />
            </div>
          </MotionWrapper>
        </div>
      </Section>

      <MapSection />
    </>
  )
}
