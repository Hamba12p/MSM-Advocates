import { sanityFetch } from './client'
import type {
  TeamMember,
  TeamMemberRef,
  PracticeArea,
  Insight,
  SiteSettings,
} from '@/types'

// ─── Reusable field projections ───────────────────────────────────────────
// Keep projections DRY by defining common fragments once.

const IMAGE_FIELDS = `
  asset->{ _id, url, metadata { dimensions, lqip } },
  hotspot, crop,
  alt
`

const TEAM_MEMBER_REF_FIELDS = `
  _id,
  name,
  "slug": slug.current,
  role,
  tier,
  photo { ${IMAGE_FIELDS} },
  specialisms
`

// ─── Site Settings ────────────────────────────────────────────────────────

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    firmTagline,
    heroStatement,
    heroSubheading,
    aboutSummary,
    whyChooseUs,
    phone,
    phoneIntl,
    email,
    address,
    whatsapp,
    officeHours,
    socialLinks,
    seoDefaults {
      metaTitle,
      metaDescription,
      ogImage { ${IMAGE_FIELDS} }
    }
  }
`

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings | null>({
    query: SITE_SETTINGS_QUERY,
    tags:  ['siteSettings'],
  })
}

// ─── Team ─────────────────────────────────────────────────────────────────

const ALL_TEAM_QUERY = `
  *[_type == "teamMember"] | order(orderIndex asc) {
    _id,
    name,
    "slug": slug.current,
    role,
    formalTitle,
    tier,
    photo { ${IMAGE_FIELDS} },
    credentials,
    specialisms,
    memberships,
    email,
    linkedIn,
    orderIndex,
    "practiceAreaSlugs": practiceAreas[]->slug.current
  }
`

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return (await sanityFetch<TeamMember[]>({
    query: ALL_TEAM_QUERY,
    tags:  ['teamMember'],
  })) ?? []
}

const TEAM_MEMBER_BY_SLUG_QUERY = `
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    role,
    formalTitle,
    tier,
    photo { ${IMAGE_FIELDS} },
    credentials,
    specialisms,
    memberships,
    bio,
    email,
    linkedIn,
    orderIndex,
    practiceAreas[]-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`

export async function getTeamMemberBySlug(
  slug: string,
): Promise<TeamMember | null> {
  return sanityFetch<TeamMember | null>({
    query:  TEAM_MEMBER_BY_SLUG_QUERY,
    params: { slug },
    tags:   ['teamMember'],
  })
}

export async function getAllTeamSlugs(): Promise<string[]> {
  const result = (await sanityFetch<{ slug: string }[]>({
    query: `*[_type == "teamMember"]{ "slug": slug.current }`,
    tags:  ['teamMember'],
  })) ?? []
  return result.map((r) => r.slug)
}

// ─── Practice Areas ───────────────────────────────────────────────────────

const ALL_PRACTICE_AREAS_QUERY = `
  *[_type == "practiceArea"] | order(orderIndex asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    heroImage { ${IMAGE_FIELDS} },
    keyServices,
    orderIndex,
    leadPartner-> { ${TEAM_MEMBER_REF_FIELDS} }
  }
`

export async function getAllPracticeAreas(): Promise<PracticeArea[]> {
  return (await sanityFetch<PracticeArea[]>({
    query: ALL_PRACTICE_AREAS_QUERY,
    tags:  ['practiceArea'],
  })) ?? []
}

const PRACTICE_AREA_BY_SLUG_QUERY = `
  *[_type == "practiceArea" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    fullDescription,
    heroImage { ${IMAGE_FIELDS} },
    keyServices,
    orderIndex,
    leadPartner-> { ${TEAM_MEMBER_REF_FIELDS} },
    seo,
    // Team members who work in this practice area
    "teamMembers": *[_type == "teamMember" && references(^._id)] | order(orderIndex asc) {
      ${TEAM_MEMBER_REF_FIELDS}
    }
  }
`

export async function getPracticeAreaBySlug(
  slug: string,
): Promise<PracticeArea | null> {
  return sanityFetch<PracticeArea | null>({
    query:  PRACTICE_AREA_BY_SLUG_QUERY,
    params: { slug },
    tags:   ['practiceArea'],
  })
}

export async function getAllPracticeAreaSlugs(): Promise<string[]> {
  const result = (await sanityFetch<{ slug: string }[]>({
    query: `*[_type == "practiceArea"]{ "slug": slug.current }`,
    tags:  ['practiceArea'],
  })) ?? []
  return result.map((r) => r.slug)
}

// ─── Insights ─────────────────────────────────────────────────────────────

const INSIGHT_CARD_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  excerpt,
  tags,
  coverImage { ${IMAGE_FIELDS} },
  author-> { ${TEAM_MEMBER_REF_FIELDS} }
`

const ALL_INSIGHTS_QUERY = `
  *[_type == "insight"] | order(publishedAt desc) {
    ${INSIGHT_CARD_FIELDS}
  }
`

export async function getAllInsights(): Promise<Insight[]> {
  return (await sanityFetch<Insight[]>({
    query: ALL_INSIGHTS_QUERY,
    tags:  ['insight'],
  })) ?? []
}

const INSIGHTS_PAGINATED_QUERY = `
  *[_type == "insight"] | order(publishedAt desc) [$from...$to] {
    ${INSIGHT_CARD_FIELDS}
  }
`

export async function getInsightsPaginated(
  page: number,
  perPage = 9,
): Promise<Insight[]> {
  const from = (page - 1) * perPage
  const to   = from + perPage
  return (await sanityFetch<Insight[]>({
    query:  INSIGHTS_PAGINATED_QUERY,
    params: { from, to },
    tags:   ['insight'],
  })) ?? []
}

const INSIGHT_BY_SLUG_QUERY = `
  *[_type == "insight" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    category,
    excerpt,
    tags,
    body,
    coverImage { ${IMAGE_FIELDS} },
    author-> { ${TEAM_MEMBER_REF_FIELDS} },
    seo
  }
`

export async function getInsightBySlug(
  slug: string,
): Promise<Insight | null> {
  return sanityFetch<Insight | null>({
    query:  INSIGHT_BY_SLUG_QUERY,
    params: { slug },
    tags:   ['insight'],
  })
}

export async function getAllInsightSlugs(): Promise<string[]> {
  const result = (await sanityFetch<{ slug: string }[]>({
    query: `*[_type == "insight"]{ "slug": slug.current }`,
    tags:  ['insight'],
  })) ?? []
  return result.map((r) => r.slug)
}

// ─── Related insights (same category or shared tag) ───────────────────────

const RELATED_INSIGHTS_QUERY = `
  *[
    _type == "insight" &&
    slug.current != $currentSlug &&
    (category == $category || count((tags[])[@ in $tags]) > 0)
  ] | order(publishedAt desc)[0...3] {
    ${INSIGHT_CARD_FIELDS}
  }
`

export async function getRelatedInsights(
  currentSlug: string,
  category:    string,
  tags:        string[],
): Promise<Insight[]> {
  return (await sanityFetch<Insight[]>({
    query:  RELATED_INSIGHTS_QUERY,
    params: { currentSlug, category, tags },
    tags:   ['insight'],
  })) ?? []
}

// ─── Homepage data bundle ─────────────────────────────────────────────────
// Single query for all data the homepage needs to avoid waterfalls.

const HOMEPAGE_QUERY = `
  {
    "practiceAreas": *[_type == "practiceArea"] | order(orderIndex asc) {
      _id, title, "slug": slug.current, shortDescription,
      heroImage { ${IMAGE_FIELDS} }
    },
    "partners": *[_type == "teamMember" && tier == "partner"] | order(orderIndex asc) {
      _id, name, "slug": slug.current, role, tier,
      photo { ${IMAGE_FIELDS} },
      specialisms
    },
    "latestInsights": *[_type == "insight"] | order(publishedAt desc)[0...3] {
      ${INSIGHT_CARD_FIELDS}
    }
  }
`

export async function getHomepageData(): Promise<{
  practiceAreas: PracticeArea[]
  partners:      TeamMemberRef[]
  latestInsights: Insight[]
}> {
  return (await sanityFetch<{
    practiceAreas: PracticeArea[]
    partners: TeamMemberRef[]
    latestInsights: Insight[]
  }>({
    query: HOMEPAGE_QUERY,
    tags:  ['practiceArea', 'teamMember', 'insight'],
  })) ?? {
    practiceAreas: [],
    partners: [],
    latestInsights: [],
  }
}
