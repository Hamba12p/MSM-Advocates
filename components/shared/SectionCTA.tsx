import { Section }    from '@/components/primitives/Section'
import { Heading }    from '@/components/primitives/Typography'
import { CTAButton }  from '@/components/primitives/CTAButton'
import { cn }         from '@/lib/utils'

interface SectionCTAProps {
  heading:      string
  body?:        string
  primaryCTA:   { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  className?:   string
}

export function SectionCTA({
  heading,
  body,
  primaryCTA,
  secondaryCTA,
  className,
}: SectionCTAProps) {
  return (
    <Section bg="dark" pad="lg" className={cn('relative overflow-hidden', className)}>
      {/* Decorative column echoes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-full flex gap-3 opacity-[0.07]">
          <div className="w-16 md:w-20 bg-msm-slate-mid self-stretch mt-8 mb-4 rounded-sm" />
          <div className="w-16 md:w-20 bg-msm-steel   self-stretch mt-4 mb-8 rounded-sm" />
          <div className="w-16 md:w-20 bg-msm-mist    self-stretch mt-12 mb-2 rounded-sm" />
        </div>
      </div>

      <div className="relative z-10 max-w-2xl">
        {/* Gold rule */}
        <div className="w-10 h-[3px] bg-msm-gold mb-8 rounded-full" aria-hidden="true" />

        <Heading
          as="h2"
          size="display-md"
          color="white"
          balance
          className="mb-5"
        >
          {heading}
        </Heading>

        {body && (
          <p className="font-sans text-lg text-white/70 leading-relaxed mb-10 max-w-[52ch]">
            {body}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <CTAButton href={primaryCTA.href} variant="primary" size="lg" arrow>
            {primaryCTA.label}
          </CTAButton>
          {secondaryCTA && (
            <CTAButton href={secondaryCTA.href} variant="ghost" size="lg">
              {secondaryCTA.label}
            </CTAButton>
          )}
        </div>
      </div>
    </Section>
  )
}
