import type { Metadata } from 'next'
import { PageHeader }    from '@/components/primitives/PageHeader'
import { Section }       from '@/components/primitives/Section'
import { Container }     from '@/components/primitives/Container'
import { Heading, BodyText, Label, SectionIntro, PullQuote } from '@/components/primitives/Typography'
import { MotionWrapper } from '@/components/motion/MotionWrapper'
import { SectionCTA }    from '@/components/shared/SectionCTA'
import { FIRM_VALUES, FIRM_VISION, FIRM_MISSION } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    'MSM Advocates is a full-service Kampala law firm established in 2007. Learn about our history, values, and commitment to quality legal services in Uganda.',
}

// ─── Story ────────────────────────────────────────────────────────────────

function StorySection() {
  return (
    <Section bg="white" pad="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <MotionWrapper type="fade-left">
          <div className="flex flex-col gap-6">
            <Label color="gold">Our Story</Label>
            <Heading as="h2" size="display-md" balance>
              From a founding partnership to a full-service firm.
            </Heading>
            <div className="w-10 h-[3px] bg-msm-gold rounded-full" />
          </div>
        </MotionWrapper>

        <MotionWrapper type="fade-right" delay={0.1}>
          <div className="flex flex-col gap-5">
            <BodyText size="lead" color="steel">
              MSM Advocates was established in 2007 as Mwebe, Sebaggala and Co.
              Advocates. Over 17 years, the firm has grown into one of Kampala's
              recognised full-service law firms, serving a broad range of individual
              and institutional clients across Uganda and the wider East African region.
            </BodyText>
            <BodyText>
              The firm is based at Plot 55, Kira Road, Kamwokya in Kampala, and
              maintains an active practice before all courts in Uganda, including
              the Supreme Court, Court of Appeal, High Court, and subordinate courts.
              Partner Muwonge Hamza leads the firm's East African practice, with
              qualified advocates admitted in Uganda and Tanzania.
            </BodyText>
            <BodyText>
              Our clients include commercial banks and financial institutions, real
              estate developers and investors, government agencies, energy sector
              companies, technology businesses, NGOs, and individuals with matters
              spanning land, employment, civil litigation, and probate.
            </BodyText>
            <BodyText>
              The firm carries forward the commitment to quality, integrity, and
              client satisfaction that has defined its practice since its founding.
            </BodyText>
          </div>
        </MotionWrapper>
      </div>
    </Section>
  )
}

// ─── Pull quote ───────────────────────────────────────────────────────────

function QuoteSection() {
  return (
    <Section bg="parchment" pad="lg">
      <Container size="narrow">
        <MotionWrapper type="fade-up">
          <PullQuote attribution="MSM Advocates, Mission Statement">
            Quality legal services and practical, effective solutions at a fair cost.
          </PullQuote>
        </MotionWrapper>
      </Container>
    </Section>
  )
}

// ─── Vision and mission ───────────────────────────────────────────────────

function VisionMissionSection() {
  return (
    <Section bg="white" pad="lg">
      <MotionWrapper>
        <SectionIntro
          label="Our Purpose"
          heading="Vision and Mission"
          className="mb-12"
        />
      </MotionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MotionWrapper type="fade-up" delay={0.05}>
          <div className="flex flex-col gap-4 p-8 border border-msm-mist/40 rounded-sm h-full">
            <div className="w-8 h-[3px] bg-msm-gold rounded-full" />
            <h3 className="font-serif text-2xl text-msm-slate">Vision</h3>
            <p className="font-sans text-base text-msm-steel leading-relaxed">{FIRM_VISION}</p>
          </div>
        </MotionWrapper>

        <MotionWrapper type="fade-up" delay={0.1}>
          <div className="flex flex-col gap-4 p-8 border border-msm-mist/40 rounded-sm h-full">
            <div className="w-8 h-[3px] bg-msm-gold rounded-full" />
            <h3 className="font-serif text-2xl text-msm-slate">Mission</h3>
            <p className="font-sans text-base text-msm-steel leading-relaxed">{FIRM_MISSION}</p>
          </div>
        </MotionWrapper>
      </div>
    </Section>
  )
}

// ─── Values ───────────────────────────────────────────────────────────────

function ValuesSection() {
  return (
    <Section bg="cream" pad="lg">
      <MotionWrapper>
        <SectionIntro
          label="What Guides Us"
          heading="Our Values"
          body="Six principles that inform how we work, how we treat our clients, and how we represent them."
          className="mb-12"
        />
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FIRM_VALUES.map((value, i) => (
          <MotionWrapper key={value} type="fade-up" delay={i * 0.07}>
            <div className="flex items-start gap-4 p-6 bg-white border border-msm-mist/30 rounded-sm">
              <span
                aria-hidden="true"
                className="font-serif text-msm-gold/50 text-xl leading-none mt-1 select-none w-7 shrink-0"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-lg text-msm-slate leading-snug">{value}</h3>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </Section>
  )
}

// ─── Objectives ───────────────────────────────────────────────────────────

const OBJECTIVES = [
  'To retain and develop legal professionals with extensive experience across a wide range of legal environments.',
  'To build a dedicated, results-driven team committed to delivering quality outcomes for every client.',
  'To foster a culture of open communication within the firm and with clients throughout the conduct of their matters.',
  'To expand the firm\'s reach across East Africa while maintaining the quality and values that have defined our practice since 2007.',
] as const

function ObjectivesSection() {
  return (
    <Section bg="dark" pad="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <MotionWrapper type="fade-left">
          <SectionIntro
            label="Our Direction"
            heading="Objectives"
            onDark
          />
        </MotionWrapper>

        <MotionWrapper type="fade-right" delay={0.1}>
          <ul className="flex flex-col gap-6">
            {OBJECTIVES.map((obj, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span
                  aria-hidden="true"
                  className="font-sans text-xs text-msm-gold uppercase tracking-label pt-0.5 shrink-0 w-5"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-sans text-sm text-white/75 leading-relaxed">{obj}</p>
              </li>
            ))}
          </ul>
        </MotionWrapper>
      </div>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About MSM Advocates"
        subtitle="Trusted legal counsel in Uganda since 2007. Practising before all courts, across seven specialised areas of law."
        crumbs={[{ label: 'About' }]}
        eyebrow="The Firm"
      />
      <StorySection />
      <QuoteSection />
      <VisionMissionSection />
      <ValuesSection />
      <ObjectivesSection />
      <SectionCTA
        heading="Speak with our team."
        body="We welcome inquiries from individuals and businesses. Contact us to arrange a consultation at our Kampala office."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Meet the Team', href: '/team' }}
      />
    </>
  )
}
