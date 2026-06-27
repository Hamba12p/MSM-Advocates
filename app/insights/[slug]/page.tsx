import type { Metadata }    from 'next'
import { notFound }          from 'next/navigation'
import Link                  from 'next/link'
import { PageHeader }        from '@/components/primitives/PageHeader'
import { Section }           from '@/components/primitives/Section'
import { Container }         from '@/components/primitives/Container'
import { Heading, BodyText, Label, Tag } from '@/components/primitives/Typography'
import { CTAButton }         from '@/components/primitives/CTAButton'
import { MotionWrapper }     from '@/components/motion/MotionWrapper'
import { InsightCard, formatInsightDate } from '@/components/cards/InsightCard'
import { SectionCTA }        from '@/components/shared/SectionCTA'
import { INSIGHTS_SEED }     from '@/lib/seeds'
import { cn }                from '@/lib/utils'

export async function generateStaticParams() {
  return INSIGHTS_SEED.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = INSIGHTS_SEED.find((i) => i.slug === slug)
  if (!article) return { title: 'Insight' }
  return {
    title:       article.title,
    description: article.excerpt,
    openGraph: {
      title:       article.title,
      description: article.excerpt,
      type:        'article',
      publishedTime: article.publishedAt,
      authors:     [article.author.name],
    },
  }
}

// ─── Seed body renderer ───────────────────────────────────────────────────
// Renders the structured seed body (array of {heading, paragraphs}) until
// the Sanity CMS is connected and real PortableText is available.

type SeedBody = {
  heading:    string
  paragraphs: readonly string[]
}

function SeedArticleBody({ body }: { body: readonly SeedBody[] }) {
  return (
    <div className="flex flex-col gap-0">
      {body.map((section) => (
        <div key={section.heading} className="mb-8">
          <h2 className="font-serif text-2xl text-msm-slate mb-4 mt-10 first:mt-0">
            {section.heading}
          </h2>
          {section.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-sans text-base text-msm-ink leading-[1.75] mb-4 last:mb-0 max-w-[72ch]"
            >
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = INSIGHTS_SEED.find((i) => i.slug === slug)
  if (!article) notFound()

  const related = INSIGHTS_SEED
    .filter((i) => i.slug !== article.slug && i.category === article.category)
    .slice(0, 3)

  const allRelated = related.length > 0
    ? related
    : INSIGHTS_SEED.filter((i) => i.slug !== article.slug).slice(0, 3)

  const authorInitials = article.author.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')

  return (
    <>
      {/* Article header */}
      <header className="relative bg-gradient-to-br from-msm-slate-dark via-msm-slate to-msm-steel overflow-hidden pt-[calc(var(--nav-height)+4rem)] pb-16">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)',
            backgroundSize: '8px 8px',
          }}
        />
        <Container className="relative z-10 max-w-[860px]">
          <MotionWrapper type="fade-up" delay={0.05}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 flex-wrap">
              <Link href="/insights" className="font-sans text-xs text-white/50 hover:text-white/80 uppercase tracking-label transition-colors">
                Insights
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <Tag variant="gold">{article.category}</Tag>
            </nav>
          </MotionWrapper>

          <MotionWrapper type="fade-up" delay={0.1}>
            <h1 className="font-serif font-normal text-display-md md:text-display-lg text-white leading-[1.08] tracking-tight mb-5 text-balance">
              {article.title}
            </h1>
          </MotionWrapper>

          <MotionWrapper type="fade-up" delay={0.18}>
            <p className="font-sans text-lg text-white/65 leading-relaxed max-w-[60ch] mb-8">
              {article.excerpt}
            </p>
          </MotionWrapper>

          <MotionWrapper type="fade-up" delay={0.24}>
            <div className="flex items-center gap-4 pt-6 border-t border-white/15">
              {/* Author avatar */}
              <div className="w-9 h-9 rounded-full bg-msm-mist/30 flex items-center justify-center shrink-0">
                <span className="font-serif text-sm text-white select-none">{authorInitials}</span>
              </div>
              <div>
                <p className="font-sans text-sm text-white font-medium">{article.author.name}</p>
                <p className="font-sans text-xs text-white/50">{article.author.role}</p>
              </div>
              <time
                dateTime={article.publishedAt}
                className="ml-auto font-sans text-xs text-white/50"
              >
                {formatInsightDate(article.publishedAt)}
              </time>
            </div>
          </MotionWrapper>
        </Container>
      </header>

      {/* Article body */}
      <Section bg="white" pad="lg" contained={false}>
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">

            {/* Main article */}
            <MotionWrapper type="fade-up">
              <article>
                <SeedArticleBody body={article.body as unknown as SeedBody[]} />
              </article>

              {/* Tags */}
              {article.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-msm-cream flex items-center flex-wrap gap-2">
                  <span className="font-sans text-xs uppercase tracking-label text-msm-mist mr-1">Tags:</span>
                  {article.tags.map((t) => (
                    <Tag key={t} variant="outline">{t}</Tag>
                  ))}
                </div>
              )}
            </MotionWrapper>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <MotionWrapper type="fade-left" delay={0.15}>
                {/* Author card */}
                <div className="bg-msm-cream p-6 rounded-sm border border-msm-mist/30">
                  <p className="font-sans text-xs uppercase tracking-label text-msm-gold mb-4">Author</p>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-msm-slate flex items-center justify-center shrink-0">
                      <span className="font-serif text-sm text-white select-none">{authorInitials}</span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-msm-slate">{article.author.name}</p>
                      <p className="font-sans text-xs text-msm-steel">{article.author.role}</p>
                    </div>
                  </div>
                  <CTAButton
                    href={`/team/${article.author.slug}`}
                    variant="secondary"
                    size="sm"
                    arrow
                    block
                  >
                    View Profile
                  </CTAButton>
                </div>

                {/* Consult box */}
                <div className="bg-msm-slate p-6 rounded-sm mt-4">
                  <p className="font-sans text-xs text-white/60 uppercase tracking-label mb-3">
                    Need Legal Advice?
                  </p>
                  <p className="font-sans text-sm text-white/75 leading-relaxed mb-5">
                    This article is for general information only. If you have a specific
                    legal question, our team is ready to help.
                  </p>
                  <CTAButton href="/contact" variant="primary" size="sm" arrow block>
                    Request a Consultation
                  </CTAButton>
                </div>
              </MotionWrapper>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Related articles */}
      {allRelated.length > 0 && (
        <Section bg="cream" pad="lg">
          <MotionWrapper className="mb-8">
            <h2 className="font-serif text-display-sm text-msm-slate">Related Insights</h2>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allRelated.map((r) => (
              <MotionWrapper key={r.id} type="fade-up">
                <InsightCard
                  title={r.title}
                  slug={r.slug}
                  publishedAt={r.publishedAt}
                  category={r.category}
                  excerpt={r.excerpt}
                  authorName={r.author.name}
                  showImage={false}
                />
              </MotionWrapper>
            ))}
          </div>
        </Section>
      )}

      <SectionCTA
        heading="Stay informed on Ugandan law."
        body="Our insights cover the legal developments most relevant to individuals and businesses in Uganda."
        primaryCTA={{ label: 'All Insights', href: '/insights' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
