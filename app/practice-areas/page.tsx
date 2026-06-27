import type { Metadata } from 'next'
import { PageHeader }        from '@/components/primitives/PageHeader'
import { Section }           from '@/components/primitives/Section'
import { MotionWrapper }     from '@/components/motion/MotionWrapper'
import { SectionIntro }      from '@/components/primitives/Typography'
import { SectionCTA }        from '@/components/shared/SectionCTA'
import { PracticeAreaCard }  from '@/components/cards/PracticeAreaCard'
import { PRACTICE_AREAS_SEED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'MSM Advocates offers seven specialist practice areas: corporate law, conveyancing, employment, litigation, banking, intellectual property, and revenue law.',
}

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        title="Practice Areas"
        subtitle="Seven specialised areas of law, each led by a named partner with deep experience in that field."
        crumbs={[{ label: 'Practice Areas' }]}
        eyebrow="What We Do"
      />

      <Section bg="cream" pad="lg">
        <MotionWrapper className="mb-12">
          <SectionIntro
            label="Our Practice"
            heading="Comprehensive legal services under one roof."
            body="From the boardroom to the courtroom, MSM Advocates provides expert legal counsel across the matters that matter most to our clients."
          />
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS_SEED.map((area, i) => (
            <MotionWrapper key={area.slug} type="fade-up" delay={i * 0.06}>
              <PracticeAreaCard
                title={area.title}
                slug={area.slug}
                shortDescription={area.shortDescription}
                keyServices={area.keyServices}
                servicesShown={4}
                className="h-full"
              />
            </MotionWrapper>
          ))}
        </div>
      </Section>

      <SectionCTA
        heading="Not sure where your matter fits?"
        body="Contact us and a member of the team will direct your inquiry to the right partner. We respond to all inquiries within one business day."
        primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ label: 'Meet the Team', href: '/team' }}
      />
    </>
  )
}
