'use client'

import { type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────

type AnimationType = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up'

interface MotionWrapperProps {
  children:    ReactNode
  type?:       AnimationType
  delay?:      number
  duration?:   number
  /** Trigger once only — avoids re-animating on scroll back */
  once?:       boolean
  /** Fraction of element visible before triggering (0–1) */
  threshold?:  number
  className?:  string
  as?:         'div' | 'section' | 'article' | 'li' | 'span'
}

// ─── Variant definitions ─────────────────────────────────────────────────

const variants: Record<AnimationType, { hidden: object; visible: object }> = {
  'fade-up': {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  'fade-left': {
    hidden:  { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden:  { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-up': {
    hidden:  { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
}

// ─── Component ────────────────────────────────────────────────────────────

export function MotionWrapper({
  children,
  type       = 'fade-up',
  delay      = 0,
  duration   = 0.55,
  once       = true,
  threshold  = 0.15,
  className,
  as: Tag    = 'div',
}: MotionWrapperProps) {
  const reducedMotion = useReducedMotion()

  // When the user has requested reduced motion, render children with no
  // animation. The visible state is still applied so styles are correct.
  if (reducedMotion) {
    const MotionTag = motion[Tag]
    return (
      <MotionTag
        initial="visible"
        animate="visible"
        variants={variants[type]}
        className={className}
      >
        {children}
      </MotionTag>
    )
  }

  const MotionTag = motion[Tag]

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}

// ─── Stagger container ────────────────────────────────────────────────────
// Wrap a list of MotionWrapper children to stagger them automatically.

interface StaggerContainerProps {
  children:    ReactNode
  staggerBy?:  number
  delayStart?: number
  className?:  string
  as?:         'div' | 'ul' | 'ol' | 'section'
}

const staggerVariants = {
  hidden:  {},
  visible: (staggerBy: number) => ({
    transition: {
      staggerChildren: staggerBy,
    },
  }),
}

export function StaggerContainer({
  children,
  staggerBy  = 0.1,
  delayStart = 0,
  className,
  as: Tag    = 'div',
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion()
  const MotionTag = motion[Tag]

  if (reducedMotion) {
    // Render as plain element without motion when reduced motion is preferred
    const PlainTag = Tag as keyof JSX.IntrinsicElements
    return <PlainTag className={className}>{children}</PlainTag>
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerVariants}
      custom={staggerBy}
      transition={{ delay: delayStart }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
