'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { ButtonVariant, ButtonSize } from '@/types'

interface CTAButtonProps {
  children:    ReactNode
  variant?:    ButtonVariant
  size?:       ButtonSize
  href?:       string
  /** Use when href is an external URL */
  external?:   boolean
  onClick?:    () => void
  disabled?:   boolean
  type?:       'button' | 'submit' | 'reset'
  arrow?:      boolean
  className?:  string
  /** Render as a full-width block element */
  block?:      boolean
}

// ─── Style maps ───────────────────────────────────────────────────────────

const variantMap: Record<ButtonVariant, string> = {
  primary: [
    'bg-msm-gold text-white',
    'hover:bg-msm-gold-dark',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-msm-gold',
    'active:bg-msm-gold-dark',
    'disabled:opacity-50 disabled:pointer-events-none',
  ].join(' '),

  secondary: [
    'bg-transparent text-msm-slate',
    'border border-msm-slate',
    'hover:bg-msm-slate hover:text-white',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-msm-slate',
    'active:bg-msm-slate-dark active:text-white',
    'disabled:opacity-50 disabled:pointer-events-none',
  ].join(' '),

  ghost: [
    'bg-transparent text-white',
    'border border-white/40',
    'hover:bg-white/10 hover:border-white/70',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white',
    'active:bg-white/20',
    'disabled:opacity-50 disabled:pointer-events-none',
  ].join(' '),

  'gold-outline': [
    'bg-transparent text-msm-gold',
    'border border-msm-gold',
    'hover:bg-msm-gold hover:text-white',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-msm-gold',
    'active:bg-msm-gold-dark active:text-white',
    'disabled:opacity-50 disabled:pointer-events-none',
  ].join(' '),
}

const sizeMap: Record<ButtonSize, string> = {
  sm: 'text-[0.6875rem] tracking-nav px-4 py-2.5 gap-1.5',
  md: 'text-xs tracking-nav px-5 py-3 gap-2',
  lg: 'text-xs tracking-nav px-7 py-4 gap-2',
}

const baseClasses =
  'inline-flex items-center justify-center font-sans font-medium uppercase rounded-sm transition-colors duration-250 cursor-pointer select-none'

// ─── Arrow icon ───────────────────────────────────────────────────────────

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-250 group-hover:translate-x-0.5"
    >
      <path
        d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────

export function CTAButton({
  children,
  variant  = 'primary',
  size     = 'md',
  href,
  external = false,
  onClick,
  disabled = false,
  type     = 'button',
  arrow    = false,
  className,
  block    = false,
}: CTAButtonProps) {
  const classes = cn(
    baseClasses,
    variantMap[variant],
    sizeMap[size],
    block && 'w-full',
    'group',
    className,
  )

  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  )
}
