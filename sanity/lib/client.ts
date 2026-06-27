import { createClient } from 'next-sanity'

const projectId  = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset    = process.env.NEXT_PUBLIC_SANITY_DATASET    ?? 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01'

// When no project ID is present the app runs entirely on seed data.
// All pages import from lib/constants.ts and lib/seeds.ts directly,
// so Sanity is never called at runtime until credentials are configured.
const SANITY_CONFIGURED = Boolean(projectId)

if (!SANITY_CONFIGURED && process.env.NODE_ENV !== 'test') {
  console.info(
    '[MSM] NEXT_PUBLIC_SANITY_PROJECT_ID not set — running on static seed data. ' +
    'Add credentials to .env.local when the CMS is ready.',
  )
}

// ─── Read-only client (public data) ───────────────────────────────────────

export const sanityClient = createClient({
  projectId:   projectId ?? 'placeholder',
  dataset,
  apiVersion,
  useCdn:      true,
  perspective: 'published',
  stega:       { enabled: false, studioUrl: '/studio' },
})

// ─── Server-side write/draft client ───────────────────────────────────────

export const sanityServerClient = createClient({
  projectId:   projectId ?? 'placeholder',
  dataset,
  apiVersion,
  useCdn:      false,
  token:       process.env.SANITY_API_TOKEN,
  perspective: 'raw',
  stega:       { enabled: false, studioUrl: '/studio' },
})

// ─── Shared fetch helper ───────────────────────────────────────────────────
// Returns null when Sanity is not configured so every page falls back
// silently to its static seed data without throwing.

export async function sanityFetch<T>({
  query,
  params = {},
  tags   = [],
}: {
  query:   string
  params?: Record<string, unknown>
  tags?:   string[]
}): Promise<T | null> {
  if (!SANITY_CONFIGURED) return null

  return sanityClient.fetch<T>(query, params, {
    next: {
      revalidate: 60,
      tags: ['all', ...tags],
    },
  })
}
