import { defineField, defineType } from 'sanity'

/**
 * Singleton document — only one document of this type should exist.
 * In the Sanity Studio, hide the "Create new" button via __experimental_actions.
 */
export const siteSettings = defineType({
  name:  'siteSettings',
  title: 'Site Settings',
  type:  'document',
  icon: () => '⚙️',

  preview: {
    select: { title: 'firmTagline' },
    prepare({ title }) {
      return { title: title ?? 'Site Settings' }
    },
  },

  groups: [
    { name: 'identity',  title: 'Firm Identity' },
    { name: 'homepage',  title: 'Homepage Copy' },
    { name: 'contact',   title: 'Contact Details' },
    { name: 'social',    title: 'Social Links' },
    { name: 'seo',       title: 'SEO Defaults' },
  ],

  fields: [
    // ─── Firm identity ────────────────────────────────────────────────────

    defineField({
      name:        'firmTagline',
      title:       'Firm Tagline',
      type:        'string',
      group:       'identity',
      description: 'Short positioning line shown in the footer and meta. Max 80 characters. No em dashes.',
      validation:  (R) => R.max(80),
    }),

    defineField({
      name:        'aboutSummary',
      title:       'About Summary',
      type:        'text',
      rows:        3,
      group:       'identity',
      description: 'A single focused paragraph describing the firm. Used in structured data and where a concise firm description is needed.',
      validation:  (R) => R.max(400),
    }),

    // ─── Homepage copy ────────────────────────────────────────────────────

    defineField({
      name:        'heroStatement',
      title:       'Hero Statement',
      type:        'string',
      group:       'homepage',
      description: 'The main headline on the homepage hero. Keep it short and declarative. Max 80 characters. No em dashes.',
      validation:  (R) => R.max(80),
    }),

    defineField({
      name:        'heroSubheading',
      title:       'Hero Subheading',
      type:        'text',
      rows:        2,
      group:       'homepage',
      description: '1-2 sentences below the hero headline. Expand on the headline, do not restate it.',
      validation:  (R) => R.max(200),
    }),

    defineField({
      name:        'whyChooseUs',
      title:       'Why Choose MSM — Short Points',
      type:        'array',
      of: [
        {
          type:   'object',
          fields: [
            { name: 'point',       type: 'string', title: 'Point',       validation: (R) => R.required().max(60) },
            { name: 'description', type: 'text',   title: 'Description', validation: (R) => R.max(160) },
          ],
          preview: {
            select: { title: 'point', subtitle: 'description' },
          },
        },
      ],
      group:       'homepage',
      description: '3-4 short value propositions for the homepage "Why MSM" strip.',
      validation:  (R) => R.max(4),
    }),

    // ─── Contact details ──────────────────────────────────────────────────

    defineField({
      name:        'phone',
      title:       'Phone Number',
      type:        'string',
      group:       'contact',
      description: 'Display format, e.g. 0414 660 288',
    }),

    defineField({
      name:        'phoneIntl',
      title:       'Phone (International Format)',
      type:        'string',
      group:       'contact',
      description: 'For tel: links, e.g. +256414660288',
    }),

    defineField({
      name:        'email',
      title:       'General Email',
      type:        'string',
      group:       'contact',
      validation:  (R) => R.email(),
    }),

    defineField({
      name:        'address',
      title:       'Physical Address',
      type:        'text',
      rows:        3,
      group:       'contact',
    }),

    defineField({
      name:        'whatsapp',
      title:       'WhatsApp Number',
      type:        'string',
      group:       'contact',
      description: 'International format without + or spaces, e.g. 256414660288',
    }),

    defineField({
      name:        'officeHours',
      title:       'Office Hours',
      type:        'string',
      group:       'contact',
      description: 'e.g. Monday to Friday, 8:30 am to 5:00 pm',
    }),

    // ─── Social links ─────────────────────────────────────────────────────

    defineField({
      name:  'socialLinks',
      title: 'Social Links',
      type:  'object',
      group: 'social',
      fields: [
        defineField({
          name:  'linkedin',
          title: 'LinkedIn',
          type:  'url',
          validation: (R) => R.uri({ scheme: ['https'] }),
        }),
        defineField({
          name:  'twitter',
          title: 'Twitter / X',
          type:  'url',
          validation: (R) => R.uri({ scheme: ['https'] }),
        }),
      ],
    }),

    // ─── SEO defaults ─────────────────────────────────────────────────────

    defineField({
      name:  'seoDefaults',
      title: 'SEO Defaults',
      type:  'object',
      group: 'seo',
      fields: [
        defineField({
          name:        'metaTitle',
          title:       'Default Meta Title',
          type:        'string',
          description: 'Max 60 characters. Used when a page has no specific title override.',
          validation:  (R) => R.max(60),
        }),
        defineField({
          name:        'metaDescription',
          title:       'Default Meta Description',
          type:        'text',
          rows:        2,
          description: 'Used when a page has no specific description override. 120-160 characters.',
          validation:  (R) => R.max(160),
        }),
        defineField({
          name:  'ogImage',
          title: 'Default OG Image',
          type:  'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text' },
          ],
          description: 'Shown when the page is shared on social media. Ideal size: 1200 x 630px.',
        }),
      ],
      options: { collapsible: false },
    }),
  ],
})
