import { type ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Container } from './Container'
import { Label }     from './Typography'

// ─── Types ────────────────────────────────────────────────────────────────

interface Crumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  title:       ReactNode
  subtitle?:   ReactNode
  crumbs?:     Crumb[]
  /**
   * 'default' = slate gradient  (most inner pages)
   * 'light'   = cream bg        (soft approach for lighter pages)
   * 'image'   = pass imageUrl   (hero with overlay)
   */
  variant?:    'default' | 'light' | 'image'
  imageUrl?:   string
  imageAlt?:   string
  /** Optional label/eyebrow above the title */
  eyebrow?:    string
  /** Compact reduces the vertical height */
  compact?:    boolean
  className?:  string
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────

function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link
            href="/"
            className="font-sans text-xs uppercase tracking-label text-white/50 hover:text-white/80 transition-colors"
          >
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-white/30 text-xs">/</span>
            {crumb.href && i < crumbs.length - 1 ? (
              <Link
                href={crumb.href}
                className="font-sans text-xs uppercase tracking-label text-white/50 hover:text-white/80 transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="font-sans text-xs uppercase tracking-label text-white/80"
              >
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ─── Component ────────────────────────────────────────────────────────────

export function PageHeader({
  title,
  subtitle,
  crumbs,
  variant  = 'default',
  imageUrl,
  imageAlt,
  eyebrow,
  compact  = false,
  className,
}: PageHeaderProps) {
  const isLight = variant === 'light'

  return (
    <header
      className={cn(
        'relative w-full overflow-hidden',
        compact  ? 'pt-[calc(var(--nav-height)+3rem)] pb-12'
                 : 'pt-[calc(var(--nav-height)+5rem)] pb-20 md:pb-28',
        // Light variant
        isLight && 'bg-msm-cream',
        // Default dark gradient
        variant === 'default' && 'bg-gradient-to-br from-msm-slate-dark via-msm-slate to-msm-steel',
        // Image variant uses relative positioning for overlay
        variant === 'image' && 'bg-msm-slate-dark',
        className,
      )}
      role="banner"
    >
      {/* Background image + overlay for image variant */}
      {variant === 'image' && imageUrl && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={imageAlt ?? ''}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-msm-slate-dark/90 via-msm-slate/75 to-msm-slate/40"
          />
        </>
      )}

      {/* Subtle texture overlay for dark variants */}
      {!isLight && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize:  '8px 8px',
          }}
        />
      )}

      <Container className="relative z-10">
        {/* Breadcrumb */}
        {crumbs && crumbs.length > 0 && (
          <Breadcrumb crumbs={crumbs} />
        )}

        {/* Eyebrow label */}
        {eyebrow && (
          <Label
            color={isLight ? 'gold' : 'mist'}
            className="mb-4"
          >
            {eyebrow}
          </Label>
        )}

        {/* Title */}
        <h1
          className={cn(
            'font-serif font-normal text-display-lg md:text-display-xl leading-[1.05] tracking-tight',
            isLight ? 'text-msm-slate' : 'text-white',
            'max-w-[20ch]',
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={cn(
              'mt-5 font-sans text-lg leading-relaxed max-w-[52ch]',
              isLight ? 'text-msm-steel' : 'text-white/70',
            )}
          >
            {subtitle}
          </p>
        )}

        {/* Gold accent rule below title */}
        <div
          aria-hidden="true"
          className="mt-8 h-[3px] w-16 bg-msm-gold rounded-full"
        />
      </Container>
    </header>
  )
}
