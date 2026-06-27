import type { PortableTextBlock } from '@portabletext/react'

// ─── Sanity image reference ────────────────────────────────────────────────

export interface SanityImageAsset {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  alt?: string
}

// ─── Team ──────────────────────────────────────────────────────────────────

export type Tier = 'partner' | 'associate' | 'assistant'

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  slug: { current: string }
  role: string
  title?: string
  tier: Tier
  photo?: SanityImageAsset
  bio?: PortableTextBlock[]
  specialisms?: string[]
  practiceAreas?: PracticeAreaRef[]
  memberships?: string[]
  email?: string
  linkedIn?: string
  orderIndex?: number
}

export interface TeamMemberRef {
  _id: string
  name: string
  slug: { current: string }
  role: string
  tier: Tier
  photo?: SanityImageAsset
  specialisms?: string[]
}

// ─── Practice areas ────────────────────────────────────────────────────────

export interface PracticeArea {
  _id: string
  _type: 'practiceArea'
  title: string
  slug: { current: string }
  shortDescription: string
  fullDescription?: PortableTextBlock[]
  heroImage?: SanityImageAsset
  keyServices?: string[]
  leadPartner?: TeamMemberRef
  orderIndex?: number
}

export interface PracticeAreaRef {
  _id: string
  title: string
  slug: { current: string }
}

// ─── Insights ──────────────────────────────────────────────────────────────

export type InsightCategory = 'Legal Update' | 'Commentary' | 'Case Note'

export interface Insight {
  _id: string
  _type: 'insight'
  title: string
  slug: { current: string }
  publishedAt: string
  author?: TeamMemberRef
  category: InsightCategory
  excerpt: string
  body?: PortableTextBlock[]
  coverImage?: SanityImageAsset
  tags?: string[]
}

// ─── Site settings ─────────────────────────────────────────────────────────

export interface SocialLinks {
  linkedin?: string
  twitter?: string
}

export interface SeoDefaults {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImageAsset
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  firmTagline?: string
  heroStatement?: string
  aboutSummary?: string
  phone?: string
  email?: string
  address?: string
  whatsapp?: string
  socialLinks?: SocialLinks
  seoDefaults?: SeoDefaults
}

// ─── Navigation ────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

// ─── Props helpers ─────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold-outline'
export type ButtonSize    = 'sm' | 'md' | 'lg'
export type HeadingLevel  = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type SectionBg     = 'white' | 'cream' | 'parchment' | 'dark' | 'slate'
export type SectionPad    = 'none' | 'sm' | 'md' | 'lg' | 'xl'
