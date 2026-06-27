import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'
import type { SectionBg, SectionPad } from '@/types'

interface SectionProps {
  children:    ReactNode
  className?:  string
  bg?:         SectionBg
  pad?:        SectionPad
  /** Wrap children in a Container automatically */
  contained?:  boolean
  containerSize?: 'default' | 'wide' | 'narrow' | 'fluid'
  id?:         string
  as?:         keyof JSX.IntrinsicElements
}

const bgMap: Record<SectionBg, string> = {
  white:     'bg-white',
  cream:     'bg-msm-cream',
  parchment: 'bg-msm-parchment',
  dark:      'bg-msm-slate text-white',
  slate:     'bg-msm-slate-dark text-white',
}

const padMap: Record<SectionPad, string> = {
  none: '',
  sm:   'py-12 md:py-16',
  md:   'py-16 md:py-24',
  lg:   'py-24 md:py-32',
  xl:   'py-32 md:py-40',
}

export function Section({
  children,
  className,
  bg         = 'white',
  pad        = 'md',
  contained  = true,
  containerSize = 'default',
  id,
  as: Tag    = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(bgMap[bg], padMap[pad], className)}
    >
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </Tag>
  )
}
