import type { Metadata } from 'next'
import Link from 'next/link'
import { Section }          from '@/components/primitives/Section'
import { Container }        from '@/components/primitives/Container'
import { Heading, BodyText, Label, SectionIntro } from '@/components/primitives/Typography'
import { CTAButton }        from '@/components/primitives/CTAButton'
import { MotionWrapper, StaggerContainer } from '@/components/motion/MotionWrapper'
import { PracticeAreaCard } from '@/components/cards/PracticeAreaCard'
import { TeamMemberCard }   from '@/components/cards/TeamMemberCard'
import { InsightCard }      from '@/components/cards/InsightCard'
import { SectionCTA }       from '@/components/shared/SectionCTA'
import { PRACTICE_AREAS_SEED, TEAM_SEED, FIRM } from '@/lib/constants'
import { INSIGHTS_SEED }    from '@/lib/seeds'

export const metadata: Metadata = {
  title: 'MSM Advocates | Commercial and Litigation Law Firm in Kampala, Uganda',
  description:
    'MSM Advocates is a full-service law firm in Kampala offering corporate, litigation, land, employment, banking, IP, and taxation legal services across Uganda.',
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-msm-slate-dark via-msm-slate to-msm-steel overflow-hidden"
      aria-label="Introduction"
    >
      {/* Decorative three-column echo of the logo mark */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-0 h-full flex items-stretch gap-4 pr-0 opacity-[0.07]">
          <div className="w-20 lg:w-28 bg-msm-slate-mid mt-16 mb-8 rounded-l-sm" />
          <div className="w-20 lg:w-28 bg-msm-steel    mt-8  mb-16 rounded-l-sm" />
          <div className="w-20 lg:w-28 bg-msm-mist     mt-24 mb-4  rounded-l-sm" />
        </div>
      </div>

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <MotionWrapper type="fade-up" delay={0.05}>
            <Label color="mist" className="mb-6">
              Kampala, Uganda. Est. 2007.
            </Label>
          </MotionWrapper>

          <MotionWrapper type="fade-up" delay={0.15}>
            <h1 className="font-serif font-normal text-display-xl md:text-display-2xl text-white leading-[1.05] tracking-tight mb-6 text-balance">
              Authoritative legal counsel in Uganda since 2007.
            </h1>
          </MotionWrapper>

          <MotionWrapper type="fade-up" delay={0.25}>
            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-[52ch]">
              A full-service law firm based in Kampala. From corporate transactions
              to Supreme Court litigation, MSM Advocates provides clear, practical,
              and reliable legal representation.
            </p>
          </MotionWrapper>

          <MotionWrapper type="fade-up" delay={0.35}>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/contact" variant="primary" size="lg" arrow>
                Request a Consultation
              </CTAButton>
              <CTAButton href="/practice-areas" variant="ghost" size="lg">
                View Practice Areas
              </CTAButton>
            </div>
          </MotionWrapper>
        </div>

        {/* Scroll cue */}
        <MotionWrapper type="fade-in" delay={0.9}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-white">Scroll</span>
            <div className="w-px h-10 bg-white/50" />
          </div>
        </MotionWrapper>
      </Container>
    </section>
  )
}

// ─── Stats bar ────────────────────────────────────────────────────────────

const STATS = [
  { value: '2007',  label: 'Year Established' },
  { value: '7',     label: 'Practice Areas' },
  { value: '4',     label: 'Partners' },
  { value: 'All',   label: 'Courts in Uganda' },
] as const

function StatsBar() {
  return (
    <div className="bg-msm-gold">
      <Container>
        <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-msm-gold-dark/30">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center py-6 px-4 gap-0.5">
              <dt className="font-serif text-3xl text-white">{value}</dt>
              <dd className="font-sans text-[0.65rem] uppercase tracking-label text-white/75">{label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}

// ─── Practice areas strip ─────────────────────────────────────────────────

function PracticeAreasSection() {
  return (
    <Section bg="cream" pad="lg" id="practice-areas">
      <MotionWrapper>
        <SectionIntro
          label="What We Do"
          heading="Seven practice areas. One team."
          body="Specialist expertise across the legal needs most critical to individuals and businesses in Uganda. Each area is led by a named partner with deep experience in that field."
          className="mb-12"
        />
      </MotionWrapper>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {PRACTICE_AREAS_SEED.map((area) => (
          <MotionWrapper key={area.slug} type="fade-up">
            <PracticeAreaCard
              title={area.title}
              slug={area.slug}
              shortDescription={area.shortDescription}
              keyServices={area.keyServices}
              servicesShown={3}
            />
          </MotionWrapper>
        ))}
      </StaggerContainer>

      <div className="mt-10">
        <CTAButton href="/practice-areas" variant="secondary" size="md" arrow>
          All Practice Areas
        </CTAButton>
      </div>
    </Section>
  )
}

// ─── Why MSM ──────────────────────────────────────────────────────────────

const WHY_MSM = [
  {
    heading:     'Established in 2007',
    body:        'Over 17 years of practice before all courts in Uganda, including the Supreme Court and Court of Appeal. Our track record speaks for itself.',
  },
  {
    heading:     'Partner-led delivery',
    body:        'Every matter is supervised by a named partner from the first instruction through to resolution. Clients deal directly with experience.',
  },
  {
    heading:     'Full-service under one roof',
    body:        'Corporate, land, employment, litigation, banking, IP, and tax: the seven areas where our clients need counsel most, all available in-house.',
  },
  {
    heading:     'East African reach',
    body:        'Qualified advocates admitted in Uganda and Tanzania, with an expanding regional network across East Africa.',
  },
] as const

function WhyMSMSection() {
  return (
    <Section bg="white" pad="lg">
      <MotionWrapper>
        <SectionIntro
          label="The Firm"
          heading="Why clients choose MSM Advocates"
          className="mb-12"
        />
      </MotionWrapper>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-msm-mist/20">
        {WHY_MSM.map(({ heading, body }) => (
          <MotionWrapper key={heading} type="fade-up">
            <div className="bg-white p-8 md:p-10 flex flex-col gap-3">
              <div className="w-8 h-[2px] bg-msm-gold rounded-full mb-1" />
              <h3 className="font-serif text-xl text-msm-slate">{heading}</h3>
              <p className="font-sans text-sm text-msm-steel leading-relaxed max-w-[48ch]">{body}</p>
            </div>
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </Section>
  )
}

// ─── Partners preview ─────────────────────────────────────────────────────

function PartnersSection() {
  const partners = TEAM_SEED.filter((m) => m.tier === 'partner')

  return (
    <Section bg="parchment" pad="lg">
      <MotionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionIntro
            label="Leadership"
            heading="Our Partners"
            body="Four partners with complementary expertise, each with a history of advocacy before Uganda's highest courts."
          />
          <CTAButton href="/team" variant="secondary" size="sm" arrow className="shrink-0">
            Full Team
          </CTAButton>
        </div>
      </MotionWrapper>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {partners.map((p) => (
          <MotionWrapper key={p.slug} type="fade-up">
            <TeamMemberCard
              name={p.name}
              slug={p.slug}
              role={p.role}
              tier={p.tier}
              specialisms={p.specialisms}
              size="large"
            />
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </Section>
  )
}

// ─── Latest insights ──────────────────────────────────────────────────────

function InsightsSection() {
  const latest = INSIGHTS_SEED.slice(0, 3)

  return (
    <Section bg="white" pad="lg">
      <MotionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionIntro
            label="Insights"
            heading="From the MSM Advocates team"
            body="Legal updates, commentary, and analysis on the issues most relevant to our clients."
          />
          <CTAButton href="/insights" variant="secondary" size="sm" arrow className="shrink-0">
            All Insights
          </CTAButton>
        </div>
      </MotionWrapper>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latest.map((insight) => (
          <MotionWrapper key={insight.id} type="fade-up">
            <InsightCard
              title={insight.title}
              slug={insight.slug}
              publishedAt={insight.publishedAt}
              category={insight.category}
              excerpt={insight.excerpt}
              authorName={insight.author.name}
              showImage={false}
            />
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <PracticeAreasSection />
      <WhyMSMSection />
      <PartnersSection />
      <InsightsSection />
      <SectionCTA
        heading="Ready to speak with an advocate?"
        body="Reach out to discuss your matter. We welcome inquiries from individuals and businesses and respond to all inquiries within one business day."
        primaryCTA={{ label: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'View Practice Areas', href: '/practice-areas' }}
      />
    </>
  )
}
