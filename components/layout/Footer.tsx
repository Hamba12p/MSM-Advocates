import Link from 'next/link'
import Image from 'next/image'
import { FIRM, FOOTER_QUICK_LINKS, LEGAL_DISCLAIMER, PRACTICE_AREAS_SEED } from '@/lib/constants'
import { Container } from '@/components/primitives/Container'

// ─── Icon primitives ──────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M13 9.8v1.8A1.2 1.2 0 0 1 11.73 13 11.88 11.88 0 0 1 1 2.27 1.2 1.2 0 0 1 2.2 1H4a1.2 1.2 0 0 1 1.2 1.03c.11.93.35 1.84.7 2.71A1.2 1.2 0 0 1 5.6 6L4.73 6.87A9.6 9.6 0 0 0 7.13 9.27L8 8.4a1.2 1.2 0 0 1 1.27-.3c.87.35 1.78.59 2.71.7A1.2 1.2 0 0 1 13 9.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="2.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M1 4L7 8.5L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="5" r="1.4" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4 6.5V12M4 4.5V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M7.5 12V9c0-1.1.9-2 2-2s2 .9 2 2v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M7.5 6.5V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

// ─── Column: Firm identity ────────────────────────────────────────────────

function FirmColumn() {
  return (
    <div className="flex flex-col gap-5">
      {/* Logo + name */}
      <Link href="/" className="flex items-center gap-3 w-fit" aria-label="MSM Advocates home">
        <div className="relative w-9 h-9">
          <Image
            src="/msm-logo.png"
            alt="MSM Advocates logo"
            fill
            sizes="36px"
            className="object-contain"
          />
        </div>
        <span className="font-serif text-base text-white font-normal">
          MSM Advocates
        </span>
      </Link>

      <p className="font-sans text-sm text-msm-mist leading-relaxed max-w-[30ch]">
        {FIRM.tagline}
      </p>

      <p className="font-sans text-xs text-msm-mist/60 leading-relaxed max-w-[30ch]">
        Formerly Mwebe, Sebaggala and Co. Advocates. Practising before all courts
        in Uganda since 2007.
      </p>

      {/* Social links */}
      <div className="flex items-center gap-3 mt-1">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MSM Advocates on LinkedIn"
          className="text-msm-mist/50 hover:text-msm-gold transition-colors duration-250"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

// ─── Column: Quick links ──────────────────────────────────────────────────

function LinksColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-sans text-xs font-medium uppercase tracking-label text-msm-mist/60">
        Quick Links
      </h3>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-col gap-2.5">
          {FOOTER_QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm text-msm-mist/80 hover:text-msm-gold transition-colors duration-250"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

// ─── Column: Practice areas (links) ──────────────────────────────────────

function PracticeColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-sans text-xs font-medium uppercase tracking-label text-msm-mist/60">
        Practice Areas
      </h3>

      <nav aria-label="Practice areas navigation">
        <ul className="flex flex-col gap-2.5">
          {PRACTICE_AREAS_SEED.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="font-sans text-sm text-msm-mist/80 hover:text-msm-gold transition-colors duration-250 leading-tight"
              >
                {area.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

// ─── Column: Contact ──────────────────────────────────────────────────────

function ContactColumn() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-sans text-xs font-medium uppercase tracking-label text-msm-mist/60">
        Contact
      </h3>

      <address className="not-italic flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <LocationIcon />
          <p className="font-sans text-sm text-msm-mist/80 leading-relaxed">
            {FIRM.address.street}<br />
            {FIRM.address.area}<br />
            {FIRM.address.city}, {FIRM.address.country}
          </p>
        </div>

        <a
          href={`tel:${FIRM.phoneIntl}`}
          className="flex items-center gap-3 font-sans text-sm text-msm-mist/80 hover:text-msm-gold transition-colors duration-250 w-fit"
        >
          <PhoneIcon />
          {FIRM.phone}
        </a>

        <a
          href={`mailto:${FIRM.email}`}
          className="flex items-center gap-3 font-sans text-sm text-msm-mist/80 hover:text-msm-gold transition-colors duration-250 w-fit"
        >
          <EmailIcon />
          {FIRM.email}
        </a>

        <a
          href={FIRM.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-xs text-msm-gold hover:text-msm-gold-light transition-colors duration-250 uppercase tracking-label"
        >
          WhatsApp us
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </a>
      </address>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-msm-slate-dark text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer grid */}
      <div className="border-b border-white/8">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12">
            <FirmColumn />
            <LinksColumn />
            <PracticeColumn />
            <ContactColumn />
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <Container>
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-msm-mist/40 leading-relaxed max-w-[60ch]">
            {LEGAL_DISCLAIMER}
          </p>
          <p className="font-sans text-xs text-msm-mist/40 whitespace-nowrap shrink-0">
            &copy; {currentYear} MSM Advocates. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
