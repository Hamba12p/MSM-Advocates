import type { Metadata }  from 'next'
import { notFound }        from 'next/navigation'
import Link                from 'next/link'
import { PageHeader }      from '@/components/primitives/PageHeader'
import { Section }         from '@/components/primitives/Section'
import { Container }       from '@/components/primitives/Container'
import { Heading, BodyText, Label, Tag } from '@/components/primitives/Typography'
import { CTAButton }       from '@/components/primitives/CTAButton'
import { MotionWrapper }   from '@/components/motion/MotionWrapper'
import { SectionCTA }      from '@/components/shared/SectionCTA'
import { TEAM_SEED, PRACTICE_AREAS_SEED, FIRM } from '@/lib/constants'

export async function generateStaticParams() {
  return TEAM_SEED.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const member = TEAM_SEED.find((m) => m.slug === slug)
  if (!member) return { title: 'Team Member' }
  return {
    title:       `${member.name}, ${member.role}`,
    description: `${member.name} is ${member.role} at MSM Advocates, specialising in ${member.specialisms.join(', ')}.`,
  }
}

// ─── Tier label helper ────────────────────────────────────────────────────

function tierLabel(tier: string) {
  if (tier === 'partner')   return 'Partner'
  if (tier === 'associate') return 'Associate'
  return 'Legal Assistant'
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = TEAM_SEED.find((m) => m.slug === slug)
  if (!member) notFound()

  const needsContent = member.bio.startsWith('[NEEDS CONTENT]')

  // Initials avatar (used in absence of a photo)
  const initials = member.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <>
      <PageHeader
        title={member.name}
        subtitle={`${member.role} at MSM Advocates`}
        crumbs={[
          { label: 'Team', href: '/team' },
          { label: member.name },
        ]}
        eyebrow={tierLabel(member.tier)}
        compact
      />

      <Section bg="white" pad="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: Portrait + quick facts */}
          <MotionWrapper type="fade-left" className="flex flex-col gap-6">
            {/* Portrait placeholder */}
            <div className="aspect-[3/4] bg-gradient-to-br from-msm-slate to-msm-steel rounded-sm flex items-center justify-center">
              <span className="font-serif text-6xl text-white/60 select-none">{initials}</span>
            </div>

            {/* Contact block */}
            <div className="bg-msm-cream p-6 rounded-sm border border-msm-mist/30 flex flex-col gap-4">
              <p className="font-sans text-xs uppercase tracking-label text-msm-steel">
                Contact
              </p>
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="font-sans text-sm text-msm-slate hover:text-msm-gold transition-colors"
                >
                  {member.email}
                </a>
              ) : (
                <a
                  href={`mailto:${FIRM.email}`}
                  className="font-sans text-sm text-msm-slate hover:text-msm-gold transition-colors"
                >
                  {FIRM.email}
                </a>
              )}
              <a
                href={`tel:${FIRM.phoneIntl}`}
                className="font-sans text-sm text-msm-slate hover:text-msm-gold transition-colors"
              >
                {FIRM.phone}
              </a>
              <CTAButton href="/contact" variant="secondary" size="sm" arrow block>
                Send a Message
              </CTAButton>
            </div>
          </MotionWrapper>

          {/* Right: Bio and details */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <MotionWrapper type="fade-right" delay={0.1}>
              {/* Header info */}
              <div className="flex flex-col gap-3 pb-6 border-b border-msm-cream">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag variant="gold">{tierLabel(member.tier)}</Tag>
                </div>
                <Heading as="h2" size="display-sm">
                  {member.name}
                </Heading>
                <p className="font-sans text-base text-msm-steel">{member.role}</p>
                {member.credentials && (
                  <p className="font-sans text-sm text-msm-mist">{member.credentials}</p>
                )}
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-4 py-6 border-b border-msm-cream">
                <Label color="gold">Biography</Label>
                {needsContent ? (
                  <BodyText color="steel">
                    {member.name} is a {member.role} at MSM Advocates,
                    specialising in {member.specialisms.join(', ')}.
                    Further biographical information will be added shortly.
                  </BodyText>
                ) : (
                  <BodyText color="ink" maxWidth>{member.bio}</BodyText>
                )}
              </div>

              {/* Specialisms */}
              {member.specialisms.length > 0 && (
                <div className="flex flex-col gap-3 py-6 border-b border-msm-cream">
                  <Label color="gold">Areas of Specialism</Label>
                  <div className="flex flex-wrap gap-2">
                    {member.specialisms.map((s) => (
                      <Tag key={s} variant="outline">{s}</Tag>
                    ))}
                  </div>
                </div>
              )}

              {/* Memberships */}
              {member.memberships.length > 0 && (
                <div className="flex flex-col gap-3 py-6 border-b border-msm-cream">
                  <Label color="gold">Memberships and Affiliations</Label>
                  <ul className="flex flex-col gap-1.5">
                    {member.memberships.map((m) => (
                      <li key={m} className="flex items-center gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-msm-gold shrink-0" />
                        <span className="font-sans text-sm text-msm-steel">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Practice areas cross-links */}
              <div className="flex flex-col gap-3 pt-6">
                <Label color="gold">Practice Areas</Label>
                <div className="flex flex-wrap gap-2">
                  {PRACTICE_AREAS_SEED.slice(0, 4).map((area) => (
                    <Link
                      key={area.slug}
                      href={`/practice-areas/${area.slug}`}
                      className="font-sans text-xs text-msm-steel hover:text-msm-gold border border-msm-mist/40 hover:border-msm-gold/40 px-3 py-1.5 rounded-sm transition-colors duration-250"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </Section>

      <SectionCTA
        heading={`Work with ${member.name.split(' ')[0]}.`}
        body="Send an inquiry and a member of the team will be in touch within one business day."
        primaryCTA={{ label: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Back to Team', href: '/team' }}
      />
    </>
  )
}
