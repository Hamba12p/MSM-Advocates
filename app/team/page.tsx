import type { Metadata } from 'next'
import { PageHeader }    from '@/components/primitives/PageHeader'
import { Section }       from '@/components/primitives/Section'
import { SectionIntro }  from '@/components/primitives/Typography'
import { MotionWrapper, StaggerContainer } from '@/components/motion/MotionWrapper'
import { TeamMemberCard } from '@/components/cards/TeamMemberCard'
import { SectionCTA }    from '@/components/shared/SectionCTA'
import { TEAM_SEED }     from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the partners, associates, and legal assistants at MSM Advocates. Four partners and a dedicated support team practising across seven areas of Ugandan law.',
}

export default function TeamPage() {
  const partners   = TEAM_SEED.filter((m) => m.tier === 'partner')
  const associates = TEAM_SEED.filter((m) => m.tier === 'associate')
  const assistants = TEAM_SEED.filter((m) => m.tier === 'assistant')

  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Partners, associates, and legal assistants committed to delivering quality legal services across Uganda."
        crumbs={[{ label: 'Team' }]}
        eyebrow="The People"
      />

      {/* Partners */}
      <Section bg="white" pad="lg">
        <MotionWrapper className="mb-12">
          <SectionIntro
            label="Leadership"
            heading="Partners"
            body="Four partners with complementary expertise and a combined practice spanning over 60 years of legal experience in Uganda and East Africa."
          />
        </MotionWrapper>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((m) => (
            <MotionWrapper key={m.slug} type="fade-up">
              <TeamMemberCard
                name={m.name}
                slug={m.slug}
                role={m.role}
                tier={m.tier}
                specialisms={m.specialisms}
                size="large"
                className="h-full"
              />
            </MotionWrapper>
          ))}
        </StaggerContainer>
      </Section>

      {/* Associates */}
      <Section bg="cream" pad="lg">
        <MotionWrapper className="mb-10">
          <SectionIntro
            label="The Team"
            heading="Associates"
            body="A team of dedicated associates supporting partners and managing client matters across all practice areas."
          />
        </MotionWrapper>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {associates.map((m) => (
            <MotionWrapper key={m.slug} type="fade-up">
              <TeamMemberCard
                name={m.name}
                slug={m.slug}
                role={m.role}
                tier={m.tier}
                specialisms={m.specialisms}
                className="h-full"
              />
            </MotionWrapper>
          ))}
        </StaggerContainer>
      </Section>

      {/* Legal Assistants */}
      <Section bg="white" pad="md">
        <MotionWrapper className="mb-8">
          <h2 className="font-sans text-xs uppercase tracking-label text-msm-steel mb-1">Support</h2>
          <h3 className="font-serif text-display-sm text-msm-slate">Legal Assistants</h3>
        </MotionWrapper>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {assistants.map((m) => (
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

      <SectionCTA
        heading="Work with a team you can trust."
        body="Contact us to arrange a consultation with the right partner for your matter."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Practice Areas', href: '/practice-areas' }}
      />
    </>
  )
}
