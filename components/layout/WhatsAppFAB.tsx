'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FIRM } from '@/lib/constants'
import { cn } from '@/lib/utils'

// ─── WhatsApp SVG icon ────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11 1C5.477 1 1 5.477 1 11c0 1.83.48 3.55 1.32 5.05L1 21l5.1-1.31A10 10 0 1 0 11 1Z"
        fill="#25D366"
      />
      <path
        d="M8.1 6.8c-.2-.05-.45-.07-.7.03-.25.1-.95.93-.95 2.28 0 1.35.98 2.66 1.12 2.84.14.18 1.92 3 4.7 4.07 2.33.9 2.8.72 3.3.67.5-.05 1.62-.66 1.85-1.3.22-.64.22-1.18.15-1.3-.07-.1-.25-.17-.52-.3-.27-.13-1.62-.8-1.87-.89-.25-.1-.43-.14-.61.14-.18.28-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.13-1.15-.42-2.18-1.35-.81-.72-1.35-1.6-1.51-1.88-.16-.27-.01-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.1-.18.05-.34-.02-.48-.07-.13-.6-1.47-.83-2Z"
        fill="white"
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const message = encodeURIComponent(
    'Hello, I would like to request a consultation with MSM Advocates.'
  )
  const href = `${FIRM.whatsappUrl}?text=${message}`

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="whatsapp-fab"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MSM Advocates on WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1,   y: 0 }}
          exit={{    opacity: 0, scale: 0.8,  y: 8 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{  scale: 0.96 }}
          className={cn(
            'fixed bottom-6 right-6 z-50',
            'flex items-center gap-2.5',
            'bg-white text-msm-slate shadow-card-lg',
            'pl-3.5 pr-4 py-2.5 rounded-full',
            'font-sans text-xs font-medium',
            'transition-shadow duration-250 hover:shadow-card-lg',
            // Collapse to icon-only on very small screens
            'sm:flex',
          )}
        >
          <WhatsAppIcon />
          <span className="hidden sm:inline whitespace-nowrap">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
