import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { HeadingLevel } from '@/types'

// ─── Heading ──────────────────────────────────────────────────────────────
// DM Serif Display at regular weight. Size is independent from semantic level
// so h1 can render at display-sm when used as a sub-section label, etc.

type HeadingSize = 'display-2xl' | 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' | 'xl' | 'lg' | 'md' | 'sm'
type HeadingColor = 'slate' | 'white' | 'gold' | 'steel' | 'inherit'

interface HeadingProps {
  children:   ReactNode
  as?:        HeadingLevel
  size?:      HeadingSize
  color?:     HeadingColor
  className?: string
  italic?:    boolean
  balance?:   boolean
}

const headingSizeMap: Record<HeadingSize, string> = {
  'display-2xl': 'text-display-2xl',
  'display-xl':  'text-display-xl',
  'display-lg':  'text-display-lg',
  'display-md':  'text-display-md',
  'display-sm':  'text-display-sm',
  'xl':          'text-4xl',
  'lg':          'text-3xl',
  'md':          'text-2xl',
  'sm':          'text-xl',
}

const headingColorMap: Record<HeadingColor, string> = {
  slate:   'text-msm-slate',
  white:   'text-white',
  gold:    'text-msm-gold',
  steel:   'text-msm-steel',
  inherit: 'text-inherit',
}

export function Heading({
  children,
  as: Tag   = 'h2',
  size      = 'display-md',
  color     = 'slate',
  className,
  italic    = false,
  balance   = false,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        'font-serif font-normal',
        headingSizeMap[size],
        headingColorMap[color],
        italic  && 'italic',
        balance && 'text-balance',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

// ─── BodyText ─────────────────────────────────────────────────────────────
// Inter for all body copy. size='lead' is for intro paragraphs.

type BodySize  = 'lead' | 'base' | 'sm' | 'xs'
type BodyColor = 'ink' | 'steel' | 'mist' | 'white' | 'slate' | 'inherit'

interface BodyTextProps {
  children:   ReactNode
  as?:        'p' | 'div' | 'span'
  size?:      BodySize
  color?:     BodyColor
  className?: string
  maxWidth?:  boolean
}

const bodySizeMap: Record<BodySize, string> = {
  lead: 'text-lg leading-relaxed',
  base: 'text-base leading-[1.7]',
  sm:   'text-sm leading-relaxed',
  xs:   'text-xs leading-normal',
}

const bodyColorMap: Record<BodyColor, string> = {
  ink:     'text-msm-ink',
  steel:   'text-msm-steel',
  mist:    'text-msm-mist',
  white:   'text-white',
  slate:   'text-msm-slate',
  inherit: 'text-inherit',
}

export function BodyText({
  children,
  as: Tag   = 'p',
  size      = 'base',
  color     = 'ink',
  className,
  maxWidth  = true,
}: BodyTextProps) {
  return (
    <Tag
      className={cn(
        'font-sans',
        bodySizeMap[size],
        bodyColorMap[color],
        maxWidth && 'max-w-[72ch]',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

// ─── PullQuote ────────────────────────────────────────────────────────────
// Large DM Serif Display italic for standout editorial moments.
// The left border is a gold rule — no decorative quotation marks or dashes.

interface PullQuoteProps {
  children:   ReactNode
  attribution?: string
  className?: string
  onDark?:    boolean
}

export function PullQuote({ children, attribution, className, onDark = false }: PullQuoteProps) {
  return (
    <figure
      className={cn(
        'border-l-[3px] border-msm-gold pl-8 md:pl-10',
        className,
      )}
    >
      <blockquote
        className={cn(
          'pull-quote font-serif italic font-normal',
          onDark ? 'text-white' : 'text-msm-slate',
        )}
      >
        {children}
      </blockquote>
      {attribution && (
        <figcaption
          className={cn(
            'mt-4 font-sans text-xs uppercase tracking-label font-medium',
            onDark ? 'text-msm-mist' : 'text-msm-steel',
          )}
        >
          {attribution}
        </figcaption>
      )}
    </figure>
  )
}

// ─── Label ────────────────────────────────────────────────────────────────
// Eyebrow text: small, uppercase, tracked Inter.
// Sits above section headings to establish context before the heading lands.

type LabelColor = 'gold' | 'steel' | 'mist' | 'white' | 'slate'

interface LabelProps {
  children:   ReactNode
  color?:     LabelColor
  className?: string
  as?:        'p' | 'span' | 'div'
}

const labelColorMap: Record<LabelColor, string> = {
  gold:  'text-msm-gold',
  steel: 'text-msm-steel',
  mist:  'text-msm-mist',
  white: 'text-white/70',
  slate: 'text-msm-slate',
}

export function Label({ children, color = 'gold', className, as: Tag = 'p' }: LabelProps) {
  return (
    <Tag
      className={cn(
        'font-sans text-xs font-medium uppercase tracking-label',
        labelColorMap[color],
        className,
      )}
    >
      {children}
    </Tag>
  )
}

// ─── Tag ─────────────────────────────────────────────────────────────────
// Small pill-style label for practice area specialism chips and insight
// category badges.

type TagVariant = 'outline' | 'filled' | 'gold'

interface TagProps {
  children:   ReactNode
  variant?:   TagVariant
  className?: string
}

const tagVariantMap: Record<TagVariant, string> = {
  outline: 'border border-msm-mist text-msm-steel bg-transparent',
  filled:  'bg-msm-cream text-msm-steel border border-transparent',
  gold:    'border border-msm-gold/40 text-msm-gold bg-transparent',
}

export function Tag({ children, variant = 'outline', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-sans text-[0.6875rem] font-medium uppercase tracking-tag px-[0.5rem] py-[0.2rem] rounded-sm',
        tagVariantMap[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

// ─── SectionIntro ─────────────────────────────────────────────────────────
// Convenience compound: Label + Heading + optional lead BodyText
// stacked with consistent spacing. Used at the top of most sections.

interface SectionIntroProps {
  label?:       string
  heading:      ReactNode
  headingSize?: HeadingSize
  body?:        ReactNode
  centered?:    boolean
  onDark?:      boolean
  className?:   string
}

export function SectionIntro({
  label,
  heading,
  headingSize = 'display-md',
  body,
  centered    = false,
  onDark      = false,
  className,
}: SectionIntroProps) {
  return (
    <div className={cn('max-w-[52rem]', centered && 'mx-auto text-center', className)}>
      {label && (
        <Label color={onDark ? 'mist' : 'gold'} className="mb-4">
          {label}
        </Label>
      )}
      <Heading
        size={headingSize}
        color={onDark ? 'white' : 'slate'}
        balance
      >
        {heading}
      </Heading>
      {body && (
        <BodyText
          size="lead"
          color={onDark ? 'mist' : 'steel'}
          className={cn('mt-5', centered && 'mx-auto')}
        >
          {body}
        </BodyText>
      )}
    </div>
  )
}
