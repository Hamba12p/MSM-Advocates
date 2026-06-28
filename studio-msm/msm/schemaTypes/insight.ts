import { defineField, defineType } from 'sanity'

export const insight = defineType({
  name:  'insight',
  title: 'Insight',
  type:  'document',
  icon: () => '📝',

  orderings: [
    {
      title: 'Newest First',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name:  'publishedAtAsc',
      by:    [{ field: 'publishedAt', direction: 'asc' }],
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
      subtitle: 'publishedAt',
      media:    'coverImage',
    },
    prepare({ title, subtitle, media }) {
      const date = subtitle
        ? new Date(subtitle).toLocaleDateString('en-UG', {
            day: 'numeric', month: 'short', year: 'numeric',
          })
        : 'No date'
      return { title, subtitle: date, media }
    },
  },

  fields: [
    // ─── Title and metadata ───────────────────────────────────────────────

    defineField({
      name:       'title',
      title:      'Article Title',
      type:       'string',
      validation: (R) => R.required(),
    }),

    defineField({
      name:  'slug',
      title: 'Slug',
      type:  'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),

    defineField({
      name:       'publishedAt',
      title:      'Published At',
      type:       'datetime',
      options:    { dateFormat: 'YYYY-MM-DD' },
      validation: (R) => R.required(),
    }),

    defineField({
      name:  'category',
      title: 'Category',
      type:  'string',
      options: {
        list: [
          { title: 'Legal Update', value: 'Legal Update' },
          { title: 'Commentary',   value: 'Commentary' },
          { title: 'Case Note',    value: 'Case Note' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),

    defineField({
      name:  'tags',
      title: 'Tags',
      type:  'array',
      of:    [{ type: 'string' }],
      description: 'Used for filtering. e.g. Land Law, Employment, Tax, Constitutional',
      options: {
        layout: 'tags',
      },
    }),

    // ─── Author ───────────────────────────────────────────────────────────

    defineField({
      name:  'author',
      title: 'Author',
      type:  'reference',
      to:    [{ type: 'teamMember' }],
    }),

    // ─── Cover image ──────────────────────────────────────────────────────

    defineField({
      name:  'coverImage',
      title: 'Cover Image',
      type:  'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name:       'alt',
          title:      'Alt text',
          type:       'string',
          validation: (R) => R.required(),
        }),
      ],
      description: 'Shown on the insights index card and as the article hero. Minimum 1200 x 675px.',
    }),

    // ─── Excerpt ──────────────────────────────────────────────────────────

    defineField({
      name:        'excerpt',
      title:       'Excerpt',
      type:        'text',
      rows:        3,
      description: '2-3 sentence summary used on the index card and as the meta description. No em dashes.',
      validation:  (R) => R.required().max(280),
    }),

    // ─── Body ─────────────────────────────────────────────────────────────

    defineField({
      name:  'body',
      title: 'Article Body',
      type:  'array',
      of: [
        // Rich text blocks
        {
          type:  'block',
          styles: [
            { title: 'Normal',     value: 'normal' },
            { title: 'Lead',       value: 'lead' },
            { title: 'H2',         value: 'h2' },
            { title: 'H3',         value: 'h3' },
            { title: 'Quote',      value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong',   value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name:  'link',
                type:  'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  {
                    name:  'blank',
                    type:  'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        // Inline images
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt',     type: 'string', title: 'Alt text' },
            { name: 'caption', type: 'string', title: 'Caption (optional)' },
          ],
        },
      ],
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
          description: 'Defaults to the article title. Max 60 characters.',
          validation:  (R) => R.max(60),
        }),
        defineField({
          name:        'metaDescription',
          title:       'Meta Description',
          type:        'text',
          rows:        2,
          description: 'Defaults to the excerpt. 120-160 characters.',
          validation:  (R) => R.max(160),
        }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
})
