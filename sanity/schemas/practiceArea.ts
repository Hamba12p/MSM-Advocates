import { defineField, defineType } from 'sanity'

export const practiceArea = defineType({
  name:  'practiceArea',
  title: 'Practice Area',
  type:  'document',
  icon: () => '⚖️',

  orderings: [
    {
      title: 'Display Order',
      name:  'orderIndexAsc',
      by:    [{ field: 'orderIndex', direction: 'asc' }],
    },
    {
      title: 'Title A-Z',
      name:  'titleAsc',
      by:    [{ field: 'title', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title:    'title',
      subtitle: 'shortDescription',
      media:    'heroImage',
    },
  },

  fields: [
    // ─── Identity ────────────────────────────────────────────────────────

    defineField({
      name:       'title',
      title:      'Practice Area Title',
      type:       'string',
      validation: (R) => R.required(),
    }),

    defineField({
      name:  'slug',
      title: 'Slug',
      type:  'slug',
      options: { source: 'title', maxLength: 80 },
      validation: (R) => R.required(),
    }),

    defineField({
      name:        'orderIndex',
      title:       'Display Order',
      type:        'number',
      description: 'Controls card order on the Practice Areas index page. Lower appears first.',
    }),

    // ─── Descriptions ─────────────────────────────────────────────────────

    defineField({
      name:        'shortDescription',
      title:       'Short Description',
      type:        'text',
      rows:        3,
      description: '1-2 sentences used on cards and index pages. No em dashes.',
      validation:  (R) => R.required().max(220),
    }),

    defineField({
      name:  'fullDescription',
      title: 'Full Description',
      type:  'array',
      of: [
        {
          type:  'block',
          styles: [
            { title: 'Normal',    value: 'normal' },
            { title: 'Lead',      value: 'lead'   },
          ],
          marks: {
            decorators: [
              { title: 'Strong',   value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name:  'link',
                type:  'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  {
                    name:    'blank',
                    type:    'boolean',
                    title:   'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Shown on the individual practice area page. 3-5 paragraphs.',
    }),

    // ─── Media ────────────────────────────────────────────────────────────

    defineField({
      name:  'heroImage',
      title: 'Hero Image',
      type:  'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name:  'alt',
          title: 'Alt text',
          type:  'string',
          validation: (R) => R.required(),
        }),
      ],
      description: 'Used as the background of the PageHeader for this practice area. Minimum 1600 x 900px.',
    }),

    // ─── Services list ────────────────────────────────────────────────────

    defineField({
      name:        'keyServices',
      title:       'Key Services',
      type:        'array',
      of:          [{ type: 'string' }],
      description: 'Bullet points shown on the practice area page and cards. 4-8 items.',
    }),

    // ─── Lead partner reference ───────────────────────────────────────────

    defineField({
      name:  'leadPartner',
      title: 'Lead Partner',
      type:  'reference',
      to:    [{ type: 'teamMember' }],
      description: 'The partner whose contact details appear on this practice area page.',
    }),

    // ─── SEO ──────────────────────────────────────────────────────────────

    defineField({
      name:  'seo',
      title: 'SEO',
      type:  'object',
      fields: [
        defineField({
          name:        'metaTitle',
          title:       'Meta Title',
          type:        'string',
          description: 'Overrides the default page title in search results. Max 60 characters.',
          validation:  (R) => R.max(60),
        }),
        defineField({
          name:        'metaDescription',
          title:       'Meta Description',
          type:        'text',
          rows:        2,
          description: 'Shown in search results. 120-160 characters.',
          validation:  (R) => R.max(160),
        }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
})
