import type { Metadata } from 'next'
import { notFound }         from 'next/navigation'
import Link                 from 'next/link'
import { PageHeader }       from '@/components/primitives/PageHeader'
import { Section }          from '@/components/primitives/Section'
import { Container }        from '@/components/primitives/Container'
import { Heading, BodyText, Label, SectionIntro, Tag } from '@/components/primitives/Typography'
import { CTAButton }        from '@/components/primitives/CTAButton'
import { MotionWrapper, StaggerContainer } from '@/components/motion/MotionWrapper'
import { TeamMemberCard }   from '@/components/cards/TeamMemberCard'
import { SectionCTA }       from '@/components/shared/SectionCTA'
import { PRACTICE_AREAS_SEED, TEAM_SEED, FIRM } from '@/lib/constants'

// ─── Static params from seed ───────────────────────────────────────────────

export async function generateStaticParams() {
  return PRACTICE_AREAS_SEED.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = PRACTICE_AREAS_SEED.find((a) => a.slug === slug)
  if (!area) return { title: 'Practice Area' }
  return {
    title:       area.title,
    description: area.shortDescription,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = PRACTICE_AREAS_SEED.find((a) => a.slug === slug)
  if (!area) notFound()

  // Team members who list this area as a specialism (broad match on seed)
  const relatedTeam = TEAM_SEED.filter((m) => m.tier !== 'assistant').slice(0, 4)

  // Other practice areas for cross-links
  const others = PRACTICE_AREAS_SEED.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHeader
        title={area.title}
        subtitle={area.shortDescription}
        crumbs={[
          { label: 'Practice Areas', href: '/practice-areas' },
          { label: area.title },
        ]}
        eyebrow="Practice Area"
        variant="default"
      />

      {/* Main content */}
      <Section bg="white" pad="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: Description */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <MotionWrapper type="fade-left">
              <Label color="gold" className="mb-2">About this Practice Area</Label>
              <Heading as="h2" size="display-sm" className="mb-5">
                How we can help
              </Heading>
              <BodyText size="lead" color="steel" className="mb-4">
                {area.shortDescription}
              </BodyText>
              <BodyText>
                MSM Advocates provides comprehensive legal support in {area.title.toLowerCase()}.
                Our team combines technical expertise with practical knowledge of the Ugandan
                legal and regulatory environment, giving clients clear, actionable advice at
                every stage of their matter.
              </BodyText>
              <BodyText>
                Whether you are navigating a complex transaction, resolving a dispute, or seeking
                advice on compliance and risk, our partners work closely with you to understand
                your objectives and deliver outcomes that serve your interests.
              </BodyText>
            </MotionWrapper>
          </div>

          {/* Right: Key services + contact */}
          <div className="flex flex-col gap-8">
            <MotionWrapper type="fade-right" delay={0.1}>
              {/* Key services */}
              <div className="bg-msm-cream p-6 rounded-sm border border-msm-mist/30">
                <h3 className="font-sans text-xs uppercase tracking-label text-msm-gold mb-4">
                  Key Services
                </h3>
                <ul className="flex flex-col gap-3">
                  {area.keyServices.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-[0.55rem] shrink-0 w-1.5 h-1.5 rounded-full bg-msm-gold" />
                      <span className="font-sans text-sm text-msm-steel leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick consult */}
              <div className="bg-msm-slate p-6 rounded-sm mt-5">
                <p className="font-sans text-xs uppercase tracking-label text-msm-mist/70 mb-3">
                  Speak to a Partner
                </p>
                <p className="font-sans text-sm text-white/80 leading-relaxed mb-5">
                  Reach out to discuss your {area.title.toLowerCase()} matter. We respond
                  to all inquiries within one business day.
                </p>
                <CTAButton href="/contact" variant="primary" size="sm" arrow block>
                  Request a Consultation
                </CTAButton>
                <a
                  href={`tel:${FIRM.phoneIntl}`}
                  className="block mt-3 font-sans text-xs text-msm-mist/60 hover:text-msm-gold transition-colors text-center"
                >
                  {FIRM.phone}
                </a>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section bg="cream" pad="lg">
        <MotionWrapper>
          <SectionIntro
            label="The Team"
            heading="Partners and associates in this area"
            body="Our advocates bring sector experience and practical knowledge to every mandate."
            className="mb-10"
          />
        </MotionWrapper>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {relatedTeam.map((m) => (
            <MotionWrapper key={m.slug} type="fade-up">
              <TeamMemberCard
                name={m.name}
                slug={m.slug}
                role={m.role}
                tier={m.tier}
                specialisms={m.specialisms}
              />
            </MotionWrapper>
          ))}
        </StaggerContainer>
      </Section>

      {/* Other practice areas */}
      <Section bg="white" pad="md">
        <MotionWrapper>
          <h2 className="font-sans text-xs uppercase tracking-label text-msm-steel mb-6">
            Other Practice Areas
          </h2>
        </MotionWrapper>
        <div className="flex flex-wrap gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/practice-areas/${o.slug}`}
              className="font-sans text-sm text-msm-steel hover:text-msm-gold border border-msm-mist/40 hover:border-msm-gold/40 px-4 py-2.5 rounded-sm transition-colors duration-250"
            >
              {o.title}
            </Link>
          ))}
          <Link
            href="/practice-areas"
            className="font-sans text-sm text-msm-gold border border-msm-gold/30 hover:border-msm-gold px-4 py-2.5 rounded-sm transition-colors duration-250"
          >
            View all
          </Link>
        </div>
      </Section>

      <SectionCTA
        heading={`Ready to discuss your ${area.title.toLowerCase()} matter?`}
        body="Contact us to arrange a consultation. All inquiries are treated in confidence."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Our Team', href: '/team' }}
      />
    </>
  )
}
