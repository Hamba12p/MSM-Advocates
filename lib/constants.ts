import type { NavLink } from '@/types'

// ─── Firm identity ─────────────────────────────────────────────────────────

export const FIRM = {
  name:      'MSM Advocates',
  fullName:  'MSM Advocates',
  formerly:  'Mwebe, Sebaggala and Co. Advocates',
  founded:   2007,
  tagline:   'Counsel you can rely on. Representation at every court.',
  phone:     '0414 660 288',
  phoneIntl: '+256414660288',
  email:     'info@msmadvocates.co.ug',
  web:       'www.msmadvocates.co.ug',
  address: {
    street:  'Plot 55, Kira Road',
    area:    'Kamwokya',
    city:    'Kampala',
    country: 'Uganda',
    full:    'Plot 55, Kira Road, Kamwokya, Kampala, Uganda',
  },
  whatsapp:       '256414660288',
  whatsappUrl:    'https://wa.me/256414660288',
  mapsQuery:      'Plot+55+Kira+Road+Kamwokya+Kampala+Uganda',
  mapsEmbedUrl:   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.0!2d32.5913!3d0.3322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPlot+55+Kira+Road+Kamwokya!5e0!3m2!1sen!2sug!4v1000000000000',
} as const

// ─── Navigation ────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'About',          href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Team',           href: '/team' },
  { label: 'Clientele',      href: '/clientele' },
  { label: 'Insights',       href: '/insights' },
  { label: 'Contact',        href: '/contact' },
]

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: 'About the Firm',   href: '/about' },
  { label: 'Practice Areas',   href: '/practice-areas' },
  { label: 'Our Team',         href: '/team' },
  { label: 'Clientele',        href: '/clientele' },
  { label: 'Insights',         href: '/insights' },
  { label: 'Request a Consultation', href: '/contact' },
]

// ─── Legal disclaimer ──────────────────────────────────────────────────────

export const LEGAL_DISCLAIMER =
  'Information on this website is provided for general guidance only and does not constitute legal advice or create an advocate-client relationship.'

// ─── Vision, mission, values ───────────────────────────────────────────────

export const FIRM_VISION =
  'To be a professional class law firm in Uganda, with a global network.'

export const FIRM_MISSION =
  'To provide quality legal services and practical, effective solutions to individuals and businesses at a fair cost, with a focus on client satisfaction.'

export const FIRM_VALUES = [
  'Client Satisfaction',
  'Hard Work',
  'Open Communication',
  'Supportive',
  'Teamwork',
  'Integrity',
]

// ─── Practice areas (static seed — CMS is source of truth in production) ──

export const PRACTICE_AREAS_SEED = [
  {
    slug:             'corporate-commercial-law',
    title:            'Corporate and Commercial Law',
    shortDescription: 'Company secretarial, board resolutions, corporate governance, and principal legal advisor services for businesses operating in Uganda.',
    keyServices: [
      'Company secretarial and registrar filings',
      'Board and shareholder resolutions',
      'Corporate governance advisory',
      'Principal legal advisor to boards of directors',
      'Legal opinions on corporate and commercial matters',
      'Negotiation and contract drafting',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1200&q=80',
    imageAlt: 'Corporate boardroom meeting',
    orderIndex: 1,
  },
  {
    slug:             'conveyancing-land',
    title:            'Conveyancing and Land Transactions',
    shortDescription: 'Comprehensive land and property legal services: acquisition, due diligence, transfers, mortgages, mutation, and dispute resolution.',
    keyServices: [
      'Pre-purchase due diligence and land searches',
      'Negotiation for land acquisition and compensation',
      'Processing transfers, mortgages, and easements',
      'Drafting and reviewing sale agreements and leases',
      'Sub-division, mutation, and valuation processing',
      'Land dispute resolution including fraud and trespass matters',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    imageAlt: 'Property documents and land title',
    orderIndex: 2,
  },
  {
    slug:             'employment-labour-law',
    title:            'Employment and Labour Law',
    shortDescription: 'Advising employers and employees on contracts, termination, NSSF obligations, and representation in labour disputes.',
    keyServices: [
      'Drafting and reviewing employment contracts',
      'Advice on termination, redundancy, and severance',
      'NSSF, Trade Unions Act, and Workmen\'s Compensation compliance',
      'Employer-employee dispute resolution',
      'Liaison with Ministry of Labour and trade unions',
      'Court representation in employment matters',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    imageAlt: 'Professional workplace consultation',
    orderIndex: 3,
  },
  {
    slug:             'litigation-arbitration-adr',
    title:            'Litigation, Arbitration and ADR',
    shortDescription: 'A robust team of litigation advocates representing clients before all courts in Uganda, including the Supreme Court, and in arbitration and mediation proceedings.',
    keyServices: [
      'Civil litigation across all courts, including the Supreme Court',
      'Commercial and contractual disputes',
      'Constitutional and human rights matters',
      'Arbitration and mediation',
      'Criminal law representation',
      'Cross-jurisdictional matters in Uganda and Tanzania',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    imageAlt: 'Courtroom proceedings',
    orderIndex: 4,
  },
  {
    slug:             'banking-finance',
    title:            'Banking and Finance',
    shortDescription: 'Legal support for banks, financial institutions, and SACCOs: product compliance, mortgages, debentures, guarantees, and debt recovery.',
    keyServices: [
      'Legal counsel for banks and financial institutions',
      'SACCO advisory and compliance',
      'Mortgages, debentures, and guarantee structuring',
      'Innovative financing product compliance',
      'Debt collection and receivables enforcement',
      'Charge enforcement over properties',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    imageAlt: 'Banking and financial documents',
    orderIndex: 5,
  },
  {
    slug:             'intellectual-property',
    title:            'Intellectual Property, Trademarks and Patents',
    shortDescription: 'Protecting the creative and commercial assets of businesses through trademark registration, patent applications, and copyright enforcement.',
    keyServices: [
      'Trademark and patent application procedures',
      'Declarations of use and renewal',
      'Copyright protection and enforcement',
      'IP rights agreement drafting',
      'Design registration',
      'Product liability advisory',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    imageAlt: 'Document review and writing',
    orderIndex: 6,
  },
  {
    slug:             'revenue-law-taxation',
    title:            'Revenue Law and Taxation',
    shortDescription: 'Tax advisory for corporate transactions, mergers, reorganisations, and dispute resolution with Uganda Revenue Authority.',
    keyServices: [
      'Corporate merger and acquisition tax structuring',
      'Reorganisation and financing tax advice',
      'Tax dispute resolution with relevant authorities',
      'URA liaison and compliance advisory',
      'Transfer pricing guidance',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80',
    imageAlt: 'Tax and financial compliance documents',
    orderIndex: 7,
  },
] as const

// ─── Team (static seed — CMS is source of truth in production) ────────────

export interface TeamSeedMember {
  slug: string
  name: string
  role: string
  tier: 'partner' | 'associate' | 'assistant'
  specialisms: string[]
  credentials: string
  memberships: string[]
  bio: string
  orderIndex: number
  email?: string
}

export const TEAM_SEED: TeamSeedMember[] = [
  {
    slug:       'ali-sebaggala-sengendo',
    name:       'Ali Sebaggala Sengendo',
    role:       'Managing Partner',
    tier:       'partner' as const,
    specialisms:['Litigation', 'Tax Law', 'Islamic Law'],
    credentials:'LLB (Makerere), PGD Legal Practice, Diploma in Taxation (East African School of Law)',
    memberships:['Uganda Muslim Lawyers Association'],
    bio:        'Ali Sebaggala Sengendo is the founding Managing Partner of MSM Advocates and a specialist in litigation and taxation. He previously served as a Senior Lecturer at the Islamic University in Uganda (IUIU) and is an active member of the Uganda Muslim Lawyers Association. His practice spans commercial disputes, constitutional matters, and corporate tax.',
    orderIndex: 1,
    email:      'alisebaggala@yahoo.co.uk',
  },
  {
    slug:       'mwebe-henry',
    name:       'Mwebe Henry',
    role:       'Partner',
    tier:       'partner' as const,
    specialisms:['Oil and Gas Law', 'Human Rights', 'Commercial Law'],
    credentials:'LLB, LLM (Oil and Gas Law, Aberdeen/Dundee)',
    memberships:['Uganda Law Society'],
    bio:        'Mwebe Henry is a Partner specialising in Oil and Gas Law, with postgraduate studies from the Universities of Aberdeen and Dundee. He previously practised at Bwengye and Co. Advocates and serves as a lecturer at Uganda Christian University, teaching Human Rights, Peace and Conflict. His practice covers energy sector advisory, commercial law, and human rights matters.',
    orderIndex: 2,
  },
  {
    slug:       'muwonge-hamza',
    name:       'Muwonge Hamza',
    role:       'Partner',
    tier:       'partner' as const,
    specialisms:['East African Practice', 'Litigation', 'Commercial Law'],
    credentials:'LLB, PGD Legal Practice',
    memberships:['Uganda Law Society', 'East African Law Society'],
    bio:        'Muwonge Hamza is a Partner with a broad commercial and litigation practice spanning Uganda and East Africa. He previously practised at Nyanzi Kiboneka and Mbabazi Advocates and serves as a lecturer at the Islamic University of Uganda. He leads the firm\'s East African practice.',
    orderIndex: 3,
  },
  {
    slug:       'musiige-faisal',
    name:       'Musiige Faisal',
    role:       'Partner',
    tier:       'partner' as const,
    specialisms:['Corporate Law', 'Conveyancing', 'Commercial Transactions'],
    credentials:'LLB, PGD Legal Practice',
    memberships:['Uganda Law Society'],
    bio:        '[NEEDS CONTENT] Musiige Faisal is a Partner at MSM Advocates.',
    orderIndex: 4,
  },
  {
    slug:       'dorah-bwambale',
    name:       'Dorah Bwambale',
    role:       'Associate',
    tier:       'associate' as const,
    specialisms:['Litigation', 'Case Management', 'Insurance Law'],
    credentials:'LLB, High Court Advocate',
    memberships:['Uganda Law Society'],
    bio:        'Dorah Bwambale is a High Court advocate specialising in litigation and case management. She serves concurrently as Secretary and Legal Counsel to First Insurance Company, bringing direct insurance sector experience to the firm\'s practice.',
    orderIndex: 5,
  },
  {
    slug:       'tumuramye-petua',
    name:       'Tumuramye Petua',
    role:       'Associate',
    tier:       'associate' as const,
    specialisms:['Legal Research', 'Drafting', 'Corporate Support'],
    credentials:'LLB, PGD Legal Practice',
    memberships:['Uganda Law Society'],
    bio:        '[NEEDS CONTENT] Tumuramye Petua is an Associate at MSM Advocates.',
    orderIndex: 6,
  },
  {
    slug:       'sengendo-abdul',
    name:       'Sengendo Abdul',
    role:       'Legal Assistant',
    tier:       'assistant' as const,
    specialisms:['Legal Research', 'Document Management'],
    credentials:'LLB',
    memberships:[],
    bio:        '[NEEDS CONTENT]',
    orderIndex: 7,
  },
  {
    slug:       'matovu-moses',
    name:       'Matovu Moses',
    role:       'Legal Assistant',
    tier:       'assistant' as const,
    specialisms:['Legal Research', 'Conveyancing Support'],
    credentials:'LLB',
    memberships:[],
    bio:        '[NEEDS CONTENT]',
    orderIndex: 8,
  },
  {
    slug:       'mark-musinguzi',
    name:       'Mark Musinguzi',
    role:       'Legal Assistant',
    tier:       'assistant' as const,
    specialisms:['Litigation Support', 'Case Filing'],
    credentials:'LLB',
    memberships:[],
    bio:        '[NEEDS CONTENT]',
    orderIndex: 9,
  },
  {
    slug:       'mulumba-kasim',
    name:       'Mulumba Kasim',
    role:       'Legal Assistant',
    tier:       'assistant' as const,
    specialisms:['Legal Research', 'Document Management', 'Litigation Support'],
    credentials:'',
    memberships:[],
    bio:        '[NEEDS CONTENT]',
    orderIndex: 10,
  },
] as const

// ─── Contact form — matter type options ────────────────────────────────────

export const MATTER_TYPES = [
  'Corporate and Commercial',
  'Conveyancing and Land',
  'Employment and Labour',
  'Litigation and Arbitration',
  'Banking and Finance',
  'Intellectual Property',
  'Revenue and Tax',
  'Other',
] as const

export type MatterType = (typeof MATTER_TYPES)[number]

// ─── Contact methods ───────────────────────────────────────────────────────

export const CONTACT_METHODS = ['Email', 'Phone', 'WhatsApp'] as const
