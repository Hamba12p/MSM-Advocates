import Link       from 'next/link'
import { CTAButton } from '@/components/primitives/CTAButton'
import { NAV_LINKS } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-msm-cream flex items-center justify-center px-6">
      <div className="max-w-lg w-full py-24">
        {/* Gold rule */}
        <div className="w-10 h-[3px] bg-msm-gold rounded-full mb-8" />

        {/* 404 numeral */}
        <p className="font-serif text-[6rem] md:text-[8rem] text-msm-slate/10 leading-none select-none mb-2">
          404
        </p>

        <h1 className="font-serif text-display-md text-msm-slate mb-4">
          Page not found.
        </h1>
        <p className="font-sans text-base text-msm-steel leading-relaxed mb-10 max-w-[44ch]">
          The page you are looking for does not exist or has been moved. Try one
          of the links below, or return to the home page.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <CTAButton href="/" variant="primary" size="md">
            Home
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" size="md">
            Contact Us
          </CTAButton>
        </div>

        {/* Quick links */}
        <nav aria-label="Helpful links">
          <p className="font-sans text-xs uppercase tracking-label text-msm-mist mb-4">
            Quick Links
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-msm-steel hover:text-msm-gold transition-colors duration-250"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
