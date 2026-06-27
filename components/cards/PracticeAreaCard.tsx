import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PracticeAreaCardProps {
  title:            string
  slug:             string
  shortDescription: string
  keyServices?:     readonly string[]
  className?:       string
  /** Show up to this many key services in the preview list */
  servicesShown?:   number
}

export function PracticeAreaCard({
  title,
  slug,
  shortDescription,
  keyServices    = [],
  className,
  servicesShown  = 3,
}: PracticeAreaCardProps) {
  const href     = `/practice-areas/${slug}`
  const services = keyServices.slice(0, servicesShown)

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col bg-white',
        'border border-msm-mist/40',
        'p-7 md:p-8',
        'rounded-sm',
        'transition-shadow duration-300',
        'hover:shadow-card-lg',
        // Gold left-border slides in on hover
        'before:absolute before:left-0 before:top-6 before:bottom-6',
        'before:w-[3px] before:bg-msm-gold before:rounded-r-full',
        'before:scale-y-0 before:origin-top',
        'before:transition-transform before:duration-300',
        'hover:before:scale-y-100',
        className,
      )}
      aria-label={`${title}: learn more`}
    >
      {/* Title */}
      <h3
        className={cn(
          'font-serif text-xl md:text-2xl text-msm-slate font-normal leading-tight',
          'group-hover:text-msm-slate-mid',
          'transition-colors duration-250',
          'mb-3',
        )}
      >
        {title}
      </h3>

      {/* Short description */}
      <p className="font-sans text-sm text-msm-steel leading-relaxed mb-5">
        {shortDescription}
      </p>

      {/* Services preview */}
      {services.length > 0 && (
        <ul className="flex flex-col gap-1.5 mb-6 flex-1" aria-label="Key services">
          {services.map((s, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-[0.55rem] shrink-0 w-1 h-1 rounded-full bg-msm-gold"
              />
              <span className="font-sans text-xs text-msm-steel leading-relaxed">{s}</span>
            </li>
          ))}
          {keyServices.length > servicesShown && (
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-[0.55rem] shrink-0 w-1 h-1 rounded-full bg-msm-mist" />
              <span className="font-sans text-xs text-msm-mist">
                +{keyServices.length - servicesShown} more
              </span>
            </li>
          )}
        </ul>
      )}

      {/* Arrow link */}
      <div className="mt-auto flex items-center gap-2 font-sans text-xs uppercase tracking-label text-msm-gold group-hover:text-msm-gold-dark transition-colors duration-250 pt-4 border-t border-msm-cream">
        Explore
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="transition-transform duration-250 group-hover:translate-x-0.5"
        >
          <path
            d="M2 6H10M10 6L6 2M10 6L6 10"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  )
}
