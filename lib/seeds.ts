/**
 * Static seed data used before Sanity is connected.
 * Replace individual fetches with the GROQ helpers in sanity/lib/queries.ts
 * once NEXT_PUBLIC_SANITY_PROJECT_ID is set in .env.local.
 */

// ─── Insights seed ────────────────────────────────────────────────────────

export const INSIGHTS_SEED = [
  {
    id:          '1',
    slug:        'uganda-employment-law-changes-2024',
    title:       'Key Changes to Uganda\'s Employment Law in 2024',
    category:    'Legal Update' as const,
    publishedAt: '2024-03-15',
    excerpt:
      'Recent amendments to the Employment Act introduce new provisions on contract termination, severance pay, and employer obligations under the NSSF Act. This update summarises the changes most relevant to employers operating in Uganda.',
    tags:   ['Employment', 'Labour Law'],
    author: { name: 'Ali Sebaggala Sengendo', slug: 'ali-sebaggala-sengendo', role: 'Managing Partner' },
    body: [
      {
        heading: 'Background',
        paragraphs: [
          'Uganda\'s Employment Act has undergone a series of amendments in recent years, reflecting the government\'s commitment to strengthening labour protections while maintaining a competitive business environment. The 2024 amendments introduce changes that employers must act on promptly to remain compliant.',
          'The amendments touch on three principal areas: notice periods and contract termination, severance entitlements, and updated NSSF contribution obligations. Each is summarised below.',
        ],
      },
      {
        heading: 'Notice Periods and Termination',
        paragraphs: [
          'The amended Act clarifies the minimum notice periods applicable to different categories of employee. Employees on monthly salaries are now entitled to a minimum of one month\'s notice of termination, or payment in lieu. The amendments also introduce a requirement that termination letters state the reasons for dismissal in all cases, removing the prior exception for short-term contract employees.',
          'Employers should review their standard employment contracts and HR policies to ensure compliance with the new notice requirements before the end of the transition period.',
        ],
      },
      {
        heading: 'Severance Entitlements',
        paragraphs: [
          'The basis for calculating severance pay has been clarified. Employees who have served continuously for at least one year and whose employment is terminated by the employer (other than for gross misconduct) are entitled to severance pay calculated at a rate of not less than one month\'s basic salary for each completed year of service.',
          'The amendments also clarify the treatment of benefits and allowances in the severance calculation, bringing Uganda\'s framework closer to regional standards.',
        ],
      },
      {
        heading: 'NSSF Obligations',
        paragraphs: [
          'Employers are reminded that the NSSF Amendment Act increased the total contribution rate. Both employer and employee contributions have been revised. Employers who have not yet updated their payroll systems should do so as a matter of urgency to avoid penalties.',
        ],
      },
      {
        heading: 'Next Steps',
        paragraphs: [
          'Employers should conduct an audit of existing employment contracts and policies, update offer letter templates, and brief HR teams on the new requirements. MSM Advocates\' employment law team is available to assist with contract reviews and staff training.',
        ],
      },
    ],
  },
  {
    id:          '2',
    slug:        'land-registration-uganda-guide',
    title:       'Land Registration Under the Registration of Titles Act: A Practical Guide',
    category:    'Commentary' as const,
    publishedAt: '2024-02-20',
    excerpt:
      'The Registration of Titles Act remains the cornerstone of Uganda\'s land tenure system. This guide sets out the key steps in registering a land transaction, the documents required, and the common pitfalls that delay or invalidate transfers.',
    tags:   ['Land Law', 'Conveyancing'],
    author: { name: 'Muwonge Hamza', slug: 'muwonge-hamza', role: 'Partner' },
    body: [
      {
        heading: 'Introduction',
        paragraphs: [
          'Uganda\'s land registration system is governed primarily by the Registration of Titles Act (RTA) and the Land Act. Under the Torrens system adopted by the RTA, the register is conclusive evidence of title. This makes proper registration not merely a formality but a legal necessity for anyone acquiring or transferring land.',
        ],
      },
      {
        heading: 'Types of Land Tenure',
        paragraphs: [
          'Uganda recognises four main tenure systems: freehold, leasehold, Mailo, and customary. Each has different registration requirements. Freehold and leasehold interests are registered at the relevant Zonal Office of the Ministry of Lands, Housing and Urban Development. Mailo land is registered under the same system but has historical distinctions that affect how transactions are structured.',
        ],
      },
      {
        heading: 'The Registration Process',
        paragraphs: [
          'A typical transfer of registered land requires: a duly executed Transfer Form, the original certificate of title, a valuation for stamp duty purposes, payment of stamp duty at the prescribed rate, and a consent to transfer where the land is leasehold and held from a licensor.',
          'The documents are lodged at the relevant Zonal Office. The Registrar examines the instruments and, if satisfied, endorses the transfer on the folium of the register and issues a new certificate of title in the transferee\'s name.',
        ],
      },
      {
        heading: 'Common Pitfalls',
        paragraphs: [
          'Several issues recur in land transactions. Informal or undated agreements, failure to conduct a proper search before execution, outstanding caveats or encumbrances not disclosed by the vendor, and errors in the description of the land on the transfer instrument are among the most frequent causes of delay or dispute.',
          'Pre-purchase due diligence, including a formal search at the Land Registry, a physical inspection, and a review of any tenancy or occupancy arrangements, is essential before any commitment is made.',
        ],
      },
    ],
  },
  {
    id:          '3',
    slug:        'corporate-governance-requirements-uganda',
    title:       'Corporate Governance Requirements for Companies in Uganda',
    category:    'Commentary' as const,
    publishedAt: '2024-01-10',
    excerpt:
      'The Companies Act 2012 sets out the governance framework applicable to Ugandan companies. This commentary examines the key obligations for boards of directors, the annual return and filing requirements, and the penalties for non-compliance.',
    tags:   ['Corporate Law', 'Compliance'],
    author: { name: 'Musiige Faisal', slug: 'musiige-faisal', role: 'Partner' },
    body: [
      {
        heading: 'Overview',
        paragraphs: [
          'The Companies Act 2012 introduced a substantially modernised framework for company law in Uganda, replacing the earlier Companies Act of 1964. The Act applies to all companies incorporated in Uganda and imposes a range of governance and reporting obligations on directors and company secretaries.',
        ],
      },
      {
        heading: 'Board Composition and Duties',
        paragraphs: [
          'Private companies are required to have at least one director, while public companies must have at least two. The Act codifies directors\' duties, requiring them to act within their powers, promote the success of the company, exercise independent judgment, and avoid conflicts of interest.',
          'Directors are also subject to specific duties in relation to the preparation and approval of financial statements and the signing of the annual return.',
        ],
      },
      {
        heading: 'Filing Requirements',
        paragraphs: [
          'Every company must file an annual return with the Uganda Registration Services Bureau within 60 days of its annual general meeting. The return must be accompanied by the most recent financial statements. Failure to file on time attracts a penalty for each day of default, and persistent non-compliance can result in the company being struck off the register.',
          'Companies must also notify the URSB within 14 days of any change in directors, the registered office address, or share capital.',
        ],
      },
    ],
  },
  {
    id:          '4',
    slug:        'banking-finance-regulatory-framework-uganda',
    title:       'Recent Developments in Uganda\'s Banking and Finance Regulatory Framework',
    category:    'Legal Update' as const,
    publishedAt: '2023-11-05',
    excerpt:
      'The Bank of Uganda has issued several new directives affecting credit institutions, microfinance deposit-taking institutions, and SACCOs. This update covers the key changes and their practical implications for financial institutions and their legal counsel.',
    tags:   ['Banking', 'Finance', 'Regulation'],
    author: { name: 'Mwebe Henry', slug: 'mwebe-henry', role: 'Partner' },
    body: [
      {
        heading: 'New Directives from the Bank of Uganda',
        paragraphs: [
          'The Bank of Uganda has in recent months issued new directives on minimum capital requirements, credit classification and provisioning, and consumer protection in financial services. These directives apply to all supervised financial institutions, including commercial banks, credit institutions, and microfinance deposit-taking institutions.',
        ],
      },
      {
        heading: 'Capital Requirements',
        paragraphs: [
          'The revised minimum capital requirements increase the paid-up capital thresholds for commercial banks and credit institutions. Institutions that do not meet the new thresholds are required to submit a capital restoration plan to the Bank of Uganda within a prescribed period. Legal counsel should advise boards on the implications of a capital shortfall and the options available under the Financial Institutions Act.',
        ],
      },
      {
        heading: 'Consumer Protection',
        paragraphs: [
          'The new consumer protection directive requires financial institutions to provide clear, written disclosure of all fees and charges before a product is sold or a loan is disbursed. Institutions must also establish a formal complaints handling procedure and report complaints statistics to the Bank of Uganda on a quarterly basis.',
          'Product documentation, terms and conditions, and staff training programmes should be reviewed in light of these new requirements.',
        ],
      },
    ],
  },
  {
    id:          '5',
    slug:        'intellectual-property-protection-uganda',
    title:       'Intellectual Property Protection for Businesses in Uganda: A Practical Guide',
    category:    'Commentary' as const,
    publishedAt: '2023-09-22',
    excerpt:
      'Trademarks, patents, and copyright are valuable business assets that require active protection. This guide explains the registration process in Uganda, the rights that registration confers, and the enforcement options available when those rights are infringed.',
    tags:   ['Intellectual Property', 'Trademarks', 'Patents'],
    author: { name: 'Ali Sebaggala Sengendo', slug: 'ali-sebaggala-sengendo', role: 'Managing Partner' },
    body: [
      {
        heading: 'Why IP Registration Matters',
        paragraphs: [
          'Intellectual property rights are among the most commercially valuable assets a business can hold. A registered trademark gives the owner the exclusive right to use that mark in Uganda in relation to the goods or services for which it is registered. A registered patent gives the owner the exclusive right to prevent others from making, using, or selling the patented invention for a period of 20 years.',
          'Without registration, an owner\'s rights are significantly weaker. It becomes much harder to prevent copying, to license the right to third parties, or to obtain relief from a court when infringement occurs.',
        ],
      },
      {
        heading: 'Trademark Registration',
        paragraphs: [
          'Trademark applications are filed with the Uganda Registration Services Bureau. The applicant must specify the class or classes of goods or services for which protection is sought, under the Nice Classification system. The Bureau examines the application and, if accepted, publishes it in the Uganda Gazette for opposition purposes. If no opposition is filed within 60 days, the trademark is registered and a certificate issued.',
          'Registered trademarks must be renewed every ten years to remain in force. Failure to renew results in the mark being removed from the register, which may allow a competitor to register an identical or confusingly similar mark.',
        ],
      },
      {
        heading: 'Patent Protection',
        paragraphs: [
          'Uganda is a member of the African Regional Intellectual Property Organisation (ARIPO), which allows inventors to file a single patent application that covers multiple African member states. Alternatively, a direct national application can be filed with the URSB.',
          'Before filing, a patentability assessment is advisable. The invention must be novel, involve an inventive step, and be capable of industrial application. Prior disclosure of the invention, even by the inventor, can destroy novelty and prevent registration.',
        ],
      },
      {
        heading: 'Enforcement',
        paragraphs: [
          'Registered IP owners whose rights are infringed can seek an injunction, damages or an account of profits, and an order for delivery up or destruction of infringing goods. Where the infringement is deliberate and on a commercial scale, criminal proceedings may also be available.',
          'MSM Advocates\' IP team advises on registration strategy, drafts licensing and assignment agreements, and represents clients in infringement proceedings before the High Court of Uganda.',
        ],
      },
    ],
  },
] as const

export type InsightSeed = (typeof INSIGHTS_SEED)[number]

// ─── Clientele sectors ────────────────────────────────────────────────────

export const SECTORS = [
  {
    title:       'Banking and Financial Institutions',
    description: 'Commercial banks, credit institutions, microfinance deposit-taking institutions, and SACCOs requiring regulatory counsel, product documentation, and enforcement support.',
    icon:        'bank',
  },
  {
    title:       'Real Estate and Property Development',
    description: 'Developers, investors, and landowners requiring due diligence, title searches, sale agreements, leases, and dispute resolution across Uganda.',
    icon:        'building',
  },
  {
    title:       'Government Agencies and Public Bodies',
    description: 'Public institutions requiring procurement advice, employment law support, and legal opinions on constitutional or administrative matters.',
    icon:        'flag',
  },
  {
    title:       'Energy and Extractive Industries',
    description: 'Oil and gas companies, mining interests, and energy sector investors navigating Uganda\'s regulatory environment and transactional requirements.',
    icon:        'bolt',
  },
  {
    title:       'Technology and Digital Business',
    description: 'Technology companies, digital platforms, and startups requiring IP protection, commercial contracts, employment structures, and regulatory guidance.',
    icon:        'chip',
  },
  {
    title:       'NGOs and Civil Society',
    description: 'Non-governmental organisations, international agencies, and civil society bodies operating in Uganda and the wider East African region.',
    icon:        'globe',
  },
  {
    title:       'Individuals and High-Net-Worth Clients',
    description: 'Individuals requiring personal legal services across land, employment, family matters, probate, and civil litigation.',
    icon:        'person',
  },
  {
    title:       'Insurance',
    description: 'Insurance companies and intermediaries requiring product review, claims handling advice, and litigation support across Uganda.',
    icon:        'shield',
  },
] as const
