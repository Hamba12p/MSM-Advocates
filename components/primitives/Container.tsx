import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children:  ReactNode
  className?: string
  /**
   * 'default' = 1280px (standard pages)
   * 'wide'    = 1440px (hero / full-bleed layouts)
   * 'narrow'  = 768px  (editorial / long-form reading)
   * 'fluid'   = 100%   (no max-width, just horizontal padding)
   */
  size?: 'default' | 'wide' | 'narrow' | 'fluid'
  as?: keyof JSX.IntrinsicElements
}

const sizeMap: Record<NonNullable<ContainerProps['size']>, string> = {
  default: 'max-w-[1280px]',
  wide:    'max-w-[1440px]',
  narrow:  'max-w-3xl',
  fluid:   'max-w-none',
}

export function Container({
  children,
  className,
  size = 'default',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10',
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
