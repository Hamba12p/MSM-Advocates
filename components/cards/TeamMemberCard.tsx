import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Tag } from '@/components/primitives/Typography'

interface TeamMemberCardProps {
  name:         string
  slug:         string
  role:         string
  tier:         'partner' | 'associate' | 'assistant'
  photoUrl?:    string
  specialisms?: readonly string[]
  className?:   string
  /** Larger variant for partner highlights */
  size?:        'default' | 'large'
}

// Initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

// Background colours for initials avatar by tier
const tierBg: Record<string, string> = {
  partner:   'bg-msm-slate',
  associate: 'bg-msm-steel',
  assistant: 'bg-msm-mist',
}

export function TeamMemberCard({
  name,
  slug,
  role,
  tier,
  photoUrl,
  specialisms = [],
  className,
  size = 'default',
}: TeamMemberCardProps) {
  const href      = `/team/${slug}`
  const initials  = getInitials(name)
  const isLarge   = size === 'large'

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col bg-white',
        'border border-msm-mist/30 rounded-sm overflow-hidden',
        'transition-shadow duration-300 hover:shadow-card-lg',
        className,
      )}
      aria-label={`${name}, ${role}`}
    >
      {/* Portrait */}
      <div
        className={cn(
          'relative w-full overflow-hidden shrink-0 bg-msm-cream',
          isLarge ? 'aspect-[4/5]' : 'aspect-[3/4]',
        )}
      >
        {photoUrl ? (
          <Image
            src={photoUrl}
            alt={`Portrait of ${name}`}
            fill
            sizes={isLarge ? '(max-width: 768px) 100vw, 360px' : '(max-width: 768px) 50vw, 240px'}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              tierBg[tier] ?? 'bg-msm-slate',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'font-serif font-normal text-white select-none',
                isLarge ? 'text-5xl' : 'text-3xl',
              )}
            >
              {initials}
            </span>
          </div>
        )}

        {/* Tier badge overlay */}
        <div className="absolute top-3 left-3">
          <Tag variant="gold" className="backdrop-blur-sm bg-white/80">
            {tier === 'partner'   ? 'Partner'
           : tier === 'associate' ? 'Associate'
           : 'Legal Assistant'}
          </Tag>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-5">
        <div>
          <h3
            className={cn(
              'font-serif font-normal text-msm-slate leading-tight',
              'group-hover:text-msm-gold transition-colors duration-250',
              isLarge ? 'text-xl' : 'text-lg',
            )}
          >
            {name}
          </h3>
          <p className="font-sans text-xs text-msm-steel mt-0.5">{role}</p>
        </div>

        {/* Specialism tags */}
        {specialisms.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {specialisms.slice(0, 3).map((s) => (
              <Tag key={s} variant="outline">{s}</Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
