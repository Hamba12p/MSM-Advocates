import type { Metadata } from 'next'
import { PageHeader }    from '@/components/primitives/PageHeader'
import { Section }       from '@/components/primitives/Section'
import { Container }     from '@/components/primitives/Container'
import { Heading, BodyText, Label, SectionIntro, PullQuote } from '@/components/primitives/Typography'
import { CTAButton }     from '@/components/primitives/CTAButton'
import { MotionWrapper, StaggerContainer } from '@/components/motion/MotionWrapper'
import { SectionCTA }   from '@/components/shared/SectionCTA'
import { SECTORS }       from '@/lib/seeds'

export const metadata: Metadata = {
  title: 'Clientele',
  description:
    'MSM Advocates serves commercial banks, real estate developers, government agencies, energy companies, technology businesses, NGOs, and individual clients across Uganda.',
}

// ─── Sector icon map ──────────────────────────────────────────────────────

function SectorIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    bank:     'M2 20h20M4 20V10M8 20V10M12 20V10M16 20V10M20 20V10M12 4L2 10h20L12 4Z',
    building: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
    flag:     'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7',
    bolt:     'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    chip:     'M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 14l2 2 4-4',
    globe:    'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z',
    person:   'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    shield:   'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={paths[icon] ?? paths.person} />
    </svg>
  )
}

// ─── Sectors ──────────────────────────────────────────────────────────────

function SectorsSection() {
  return (
    <Section bg="white" pad="lg">
      <MotionWrapper className="mb-12">
        <SectionIntro
          label="Who We Serve"
          heading="Sectors we advise"
          body="MSM Advocates acts for clients across the public and private sectors. Our practice covers a broad range of industries and individual needs."
        />
      </MotionWrapper>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SECTORS.map((sector, i) => (
          <MotionWrapper key={sector.title} type="fade-up" delay={i * 0.05}>
            <div className="flex items-start gap-5 p-7 border border-msm-mist/30 rounded-sm bg-white hover:shadow-card transition-shadow duration-300">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-msm-cream flex items-center justify-center text-msm-gold mt-0.5">
                <SectorIcon icon={sector.icon} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-lg text-msm-slate">{sector.title}</h3>
                <p className="font-sans text-sm text-msm-steel leading-relaxed">{sector.description}</p>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </Section>
  )
}

// ─── Client commitment section ────────────────────────────────────────────

function CommitmentSection() {
  return (
    <Section bg="parchment" pad="lg">
      <Container size="narrow">
        <MotionWrapper type="fade-up">
          <PullQuote attribution="Our Commitment to Clients">
            Every client is a priority. Every matter receives partner attention.
          </PullQuote>
          <div className="mt-10 flex flex-col gap-4">
            <BodyText size="lead" color="steel" maxWidth={false}>
              MSM Advocates has built its reputation on consistent delivery. Our clients
              return to us because they trust our counsel and rely on our representation.
              We take that trust seriously.
            </BodyText>
            <BodyText color="ink" maxWidth={false}>
              We hold all client matters in strict confidence. Our fee arrangements are
              discussed transparently at the outset, and we keep clients informed at
              every stage of their matter. We do not take instructions we cannot
              properly serve.
            </BodyText>
          </div>
        </MotionWrapper>
      </Container>
    </Section>
  )
}

// ─── Engagement section ───────────────────────────────────────────────────

const HOW_WE_WORK = [
  {
    step:  'Initial Consultation',
    body:  'We begin with a consultation to understand your matter, your objectives, and the context. This allows us to advise on the appropriate course of action and the relevant practice area.',
  },
  {
    step:  'Engagement and Fees',
    body:  'We confirm the scope of our instructions and the fee arrangement in writing before commencing work. No surprises.',
  },
  {
    step:  'Partner Supervision',
    body:  'A named partner supervises your matter from start to finish. You will know who is handling your case and how to reach them.',
  },
  {
    step:  'Regular Updates',
    body:  'We keep you informed at key stages of the matter. If circumstances change, we advise promptly on the implications and next steps.',
  },
] as const

function HowWeWorkSection() {
  return (
    <Section bg="dark" pad="lg">
      <MotionWrapper className="mb-12">
        <SectionIntro
          label="Our Process"
          heading="How we work with clients"
          onDark
        />
      </MotionWrapper>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {HOW_WE_WORK.map(({ step, body }, i) => (
          <MotionWrapper key={step} type="fade-up" delay={i * 0.07}>
            <div className="flex flex-col gap-3 p-7 border border-white/10 rounded-sm">
              <div className="w-8 h-[2px] bg-msm-gold rounded-full" />
              <h3 className="font-serif text-lg text-white">{step}</h3>
              <p className="font-sans text-sm text-white/65 leading-relaxed">{body}</p>
            </div>
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function ClientelePage() {
  return (
    <>
      <PageHeader
        title="Clientele"
        subtitle="MSM Advocates acts for individuals, businesses, financial institutions, and public sector bodies across Uganda and East Africa."
        crumbs={[{ label: 'Clientele' }]}
        eyebrow="Who We Serve"
      />
      <SectorsSection />
      <CommitmentSection />
      <HowWeWorkSection />
      <SectionCTA
        heading="Looking for legal counsel you can rely on?"
        body="Reach out to discuss your matter. We welcome inquiries from new clients and respond within one business day."
        primaryCTA={{ label: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'View Practice Areas', href: '/practice-areas' }}
      />
    </>
  )
}
