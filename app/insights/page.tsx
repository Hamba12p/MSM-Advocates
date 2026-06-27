import type { Metadata } from 'next'
import Link               from 'next/link'
import { PageHeader }     from '@/components/primitives/PageHeader'
import { Section }        from '@/components/primitives/Section'
import { SectionIntro }   from '@/components/primitives/Typography'
import { MotionWrapper, StaggerContainer } from '@/components/motion/MotionWrapper'
import { InsightCard }    from '@/components/cards/InsightCard'
import { SectionCTA }     from '@/components/shared/SectionCTA'
import { INSIGHTS_SEED }  from '@/lib/seeds'
import { cn }             from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Legal updates, commentary, and analysis from the MSM Advocates team on matters affecting individuals and businesses in Uganda.',
}

const CATEGORIES = ['All', 'Legal Update', 'Commentary', 'Case Note'] as const

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const active = category ?? 'All'

  const insights =
    active === 'All'
      ? [...INSIGHTS_SEED]
      : INSIGHTS_SEED.filter((i) => i.category === active)

  return (
    <>
      <PageHeader
        title="Insights"
        subtitle="Legal updates, commentary, and analysis on the issues most relevant to individuals and businesses in Uganda."
        crumbs={[{ label: 'Insights' }]}
        eyebrow="From the Team"
      />

      <Section bg="cream" pad="lg">
        <MotionWrapper className="mb-10">
          <SectionIntro
            label="Browse"
            heading="Recent publications"
          />
        </MotionWrapper>

        {/* Category filter */}
        <MotionWrapper className="mb-10">
          <nav aria-label="Filter insights by category">
            <ul className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={cat === 'All' ? '/insights' : `/insights?category=${encodeURIComponent(cat)}`}
                    className={cn(
                      'inline-flex items-center px-4 py-2 rounded-sm',
                      'font-sans text-xs font-medium uppercase tracking-label',
                      'border transition-colors duration-250',
                      active === cat
                        ? 'bg-msm-slate text-white border-msm-slate'
                        : 'bg-white text-msm-steel border-msm-mist/40 hover:border-msm-slate hover:text-msm-slate',
                    )}
                    aria-current={active === cat ? 'true' : undefined}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </MotionWrapper>

        {/* Articles grid */}
        {insights.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <MotionWrapper key={insight.id} type="fade-up">
                <InsightCard
                  title={insight.title}
                  slug={insight.slug}
                  publishedAt={insight.publishedAt}
                  category={insight.category}
                  excerpt={insight.excerpt}
                  authorName={insight.author.name}
                  showImage={false}
                  className="h-full"
                />
              </MotionWrapper>
            ))}
          </StaggerContainer>
        ) : (
          <MotionWrapper>
            <p className="font-sans text-base text-msm-steel py-12">
              No insights found in this category.{' '}
              <Link href="/insights" className="text-msm-gold hover:text-msm-gold-dark underline">
                View all insights
              </Link>
              .
            </p>
          </MotionWrapper>
        )}
      </Section>

      <SectionCTA
        heading="Have a question about a legal matter?"
        body="Our insights are for general information only. If you have a specific legal question, we are glad to assist."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Practice Areas', href: '/practice-areas' }}
      />
    </>
  )
}
