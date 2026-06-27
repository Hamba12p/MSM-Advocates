'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NAV_LINKS, FIRM } from '@/lib/constants'
import { CTAButton } from '@/components/primitives/CTAButton'
import { Container } from '@/components/primitives/Container'

// ─── Icons ────────────────────────────────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-4 flex flex-col justify-between" aria-hidden="true">
      <span
        className={cn(
          'block h-px w-5 bg-current origin-center transition-all duration-300',
          open ? 'rotate-45 translate-y-[7.5px]' : '',
        )}
      />
      <span
        className={cn(
          'block h-px bg-current transition-all duration-300',
          open ? 'w-0 opacity-0' : 'w-5 opacity-100',
        )}
      />
      <span
        className={cn(
          'block h-px w-5 bg-current origin-center transition-all duration-300',
          open ? '-rotate-45 -translate-y-[7.5px]' : '',
        )}
      />
    </div>
  )
}

// ─── Mobile menu overlay ──────────────────────────────────────────────────

const drawerVariants = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.2,  ease: [0.4, 0, 0.2, 1] } },
}

const linkListVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
}

const linkItemVariants = {
  hidden:  { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0,   transition: { duration: 0.22, ease: 'easeOut' } },
}

interface MobileMenuProps {
  open:     boolean
  onClose:  () => void
  scrolled: boolean
}

function MobileMenu({ open, onClose, scrolled }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-msm-ink/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'fixed top-[var(--nav-height)] left-0 right-0 z-50',
              'bg-white shadow-card-lg border-b border-msm-mist/30',
              'max-h-[calc(100dvh-var(--nav-height))] overflow-y-auto',
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <Container className="py-8">
              {/* Nav links */}
              <motion.nav
                variants={linkListVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={linkItemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center justify-between',
                        'py-3.5 border-b border-msm-cream',
                        'font-sans text-xs uppercase tracking-nav font-medium',
                        'text-msm-slate hover:text-msm-gold',
                        'transition-colors duration-200',
                        'group',
                      )}
                    >
                      {link.label}
                      <svg
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-msm-mist group-hover:text-msm-gold transition-colors"
                      >
                        <path
                          d="M2 6H10M10 6L6 2M10 6L6 10"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* CTA + contact in mobile drawer */}
              <div className="mt-8 flex flex-col gap-4">
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  block
                  arrow
                  onClick={onClose}
                >
                  Request a Consultation
                </CTAButton>

                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href={`tel:${FIRM.phoneIntl}`}
                    className="font-sans text-xs text-msm-steel hover:text-msm-gold transition-colors"
                  >
                    {FIRM.phone}
                  </a>
                  <a
                    href={`mailto:${FIRM.email}`}
                    className="font-sans text-xs text-msm-steel hover:text-msm-gold transition-colors"
                  >
                    {FIRM.email}
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 24)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change (Next.js soft navigation)
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('popstate', close)
    return () => window.removeEventListener('popstate', close)
  }, [])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-350',
          scrolled
            ? 'navbar-frosted py-3'
            : 'bg-transparent py-5',
        )}
        style={{ height: 'var(--nav-height)' }}
      >
        <Container className="h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="MSM Advocates — return to home"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/msm-logo.png"
                alt="MSM Advocates logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span
              className={cn(
                'font-serif text-base font-normal hidden sm:block',
                'transition-colors duration-250',
                scrolled ? 'text-msm-slate' : 'text-white',
              )}
            >
              MSM Advocates
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9" role="menubar">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={cn(
                  'nav-link-style link-gold relative',
                  'transition-colors duration-250',
                  scrolled ? 'text-msm-slate' : 'text-white/90 hover:text-white',
                  // Override link-gold gold colour when not scrolled
                  !scrolled && '[&::after]:bg-white',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <CTAButton href="/contact" variant="primary" size="sm" arrow>
              Consult
            </CTAButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              'lg:hidden flex items-center justify-center',
              'w-9 h-9 rounded-sm',
              'transition-colors duration-250',
              scrolled ? 'text-msm-slate hover:text-msm-gold' : 'text-white hover:text-white/70',
            )}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </Container>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu">
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          scrolled={scrolled}
        />
      </div>
    </>
  )
}
