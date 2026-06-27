import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { buildImageUrl } from '@/sanity/lib/image'
import { cn } from '@/lib/utils'

// ─── Custom components ────────────────────────────────────────────────────

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-sans text-base text-msm-ink leading-[1.75] mb-5 last:mb-0 max-w-[72ch]">
        {children}
      </p>
    ),
    lead: ({ children }) => (
      <p className="font-sans text-lg text-msm-steel leading-relaxed mb-6 last:mb-0 max-w-[66ch]">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-display-sm text-msm-slate mt-12 mb-4 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl text-msm-slate mt-10 mb-3 first:mt-0">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-msm-gold pl-6 my-8">
        <p className="font-serif text-xl italic text-msm-slate leading-relaxed">
          {children}
        </p>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 pl-0 space-y-2 max-w-[66ch]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 pl-0 space-y-2 counter-reset-[list-counter] max-w-[66ch]">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 font-sans text-base text-msm-ink leading-relaxed">
        <span
          aria-hidden="true"
          className="mt-[0.6rem] shrink-0 w-1 h-1 rounded-full bg-msm-gold"
        />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="flex gap-3 font-sans text-base text-msm-ink leading-relaxed">
        <span>{children}</span>
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-msm-slate">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }) => (
      <u className="underline underline-offset-2">{children}</u>
    ),
    link: ({ value, children }) => {
      const href = value?.href ?? '#'
      const isExternal = href.startsWith('http')
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-msm-gold underline underline-offset-2 hover:text-msm-gold-dark transition-colors"
          >
            {children}
          </a>
        )
      }
      return (
        <Link
          href={href}
          className="text-msm-gold underline underline-offset-2 hover:text-msm-gold-dark transition-colors"
        >
          {children}
        </Link>
      )
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-10">
          <div className="relative w-full overflow-hidden rounded-sm">
            <Image
              src={buildImageUrl(value, { width: 1200, height: 675 })}
              alt={value.alt ?? ''}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 font-sans text-xs text-msm-steel text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

// ─── Component ────────────────────────────────────────────────────────────

interface PortableTextRendererProps {
  value: PortableTextBlock[]
  className?: string
}

export function PortableTextRenderer({ value, className }: PortableTextRendererProps) {
  if (!value || value.length === 0) return null
  return (
    <div className={cn('portable-text', className)}>
      <PortableText value={value} components={components} />
    </div>
  )
}
