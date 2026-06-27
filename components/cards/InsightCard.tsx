import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Tag } from '@/components/primitives/Typography'

// ─── Date helper ──────────────────────────────────────────────────────────

export function formatInsightDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-UG', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  }).format(new Date(dateStr))
}

// ─── Category colour map ──────────────────────────────────────────────────

const categoryVariant: Record<string, 'outline' | 'gold' | 'filled'> = {
  'Legal Update': 'gold',
  'Commentary':   'outline',
  'Case Note':    'filled',
}

// ─── Props ────────────────────────────────────────────────────────────────

interface InsightCardProps {
  title:       string
  slug:        string
  publishedAt: string
  category:    string
  excerpt:     string
  coverUrl?:   string
  authorName?: string
  className?:  string
  /** Show cover image or use colour block fallback */
  showImage?:  boolean
}

// ─── Component ────────────────────────────────────────────────────────────

export function InsightCard({
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  coverUrl,
  authorName,
  className,
  showImage = true,
}: InsightCardProps) {
  const href = `/insights/${slug}`

  return (
    <article
      className={cn(
        'group flex flex-col bg-white',
        'border border-msm-mist/30 rounded-sm overflow-hidden',
        'transition-shadow duration-300 hover:shadow-card-lg',
        className,
      )}
    >
      {/* Cover image or colour block */}
      {showImage && (
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden shrink-0">
          {coverUrl ? (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={coverUrl}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] bg-gradient-to-br from-msm-slate to-msm-steel flex items-end p-5">
              <Tag variant="gold">{category}</Tag>
            </div>
          )}
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* Category + date */}
        <div className="flex items-center gap-3 flex-wrap">
          <Tag variant={categoryVariant[category] ?? 'outline'}>{category}</Tag>
          <time
            dateTime={publishedAt}
            className="font-sans text-xs text-msm-mist"
          >
            {formatInsightDate(publishedAt)}
          </time>
        </div>

        {/* Title */}
        <Link href={href} className="flex-1">
          <h3
            className={cn(
              'font-serif text-xl text-msm-slate font-normal leading-snug',
              'group-hover:text-msm-gold transition-colors duration-250',
              'line-clamp-3',
            )}
          >
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="font-sans text-sm text-msm-steel leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Footer: author + read link */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-msm-cream">
          {authorName && (
            <p className="font-sans text-xs text-msm-mist truncate">
              {authorName}
            </p>
          )}
          <Link
            href={href}
            className={cn(
              'ml-auto flex items-center gap-1.5',
              'font-sans text-xs uppercase tracking-label',
              'text-msm-gold hover:text-msm-gold-dark transition-colors duration-250',
              'shrink-0',
            )}
          >
            Read
            <svg
              aria-hidden="true"
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-250 group-hover:translate-x-0.5"
            >
              <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
