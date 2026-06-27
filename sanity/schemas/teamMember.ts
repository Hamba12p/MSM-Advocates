import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name:  'teamMember',
  title: 'Team Member',
  type:  'document',
  icon: () => '👤',

  orderings: [
    {
      title:      'Display Order',
      name:       'orderIndexAsc',
      by:         [{ field: 'orderIndex', direction: 'asc' }],
    },
    {
      title:      'Name A-Z',
      name:       'nameAsc',
      by:         [{ field: 'name', direction: 'asc' }],
    },
  ],

  preview: {
    select: {
      title:    'name',
      subtitle: 'role',
      media:    'photo',
    },
  },

  fields: [
    // ─── Identity ────────────────────────────────────────────────────────

    defineField({
      name:        'name',
      title:       'Full Name',
      type:        'string',
      validation:  (R) => R.required(),
    }),

    defineField({
      name:  'slug',
      title: 'Slug',
      type:  'slug',
      options: { source: 'name', maxLength: 80 },
      validation: (R) => R.required(),
    }),

    defineField({
      name:        'role',
      title:       'Role',
      type:        'string',
      description: 'e.g. Managing Partner, Associate, Legal Assistant',
      validation:  (R) => R.required(),
    }),

    defineField({
      name:        'formalTitle',
      title:       'Formal Title',
      type:        'string',
      description: 'Displayed after the name, e.g. Advocate (High Court of Uganda)',
    }),

    defineField({
      name:  'tier',
      title: 'Tier',
      type:  'string',
      options: {
        list: [
          { title: 'Partner',         value: 'partner' },
          { title: 'Associate',       value: 'associate' },
          { title: 'Legal Assistant', value: 'assistant' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),

    defineField({
      name:        'orderIndex',
      title:       'Display Order',
      type:        'number',
      description: 'Lower numbers appear first. Partners should be 1-10, associates 11-20.',
    }),

    // ─── Photo ───────────────────────────────────────────────────────────

    defineField({
      name:  'photo',
      title: 'Portrait Photo',
      type:  'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name:        'alt',
          title:       'Alt text',
          type:        'string',
          description: 'Describe the image for screen readers and search engines.',
        }),
      ],
    }),

    // ─── Credentials ─────────────────────────────────────────────────────

    defineField({
      name:        'credentials',
      title:       'Academic Credentials',
      type:        'string',
      description: 'e.g. LLB (Makerere), PGD Legal Practice, LLM (Oil & Gas, Aberdeen)',
    }),

    defineField({
      name:  'memberships',
      title: 'Memberships and Affiliations',
      type:  'array',
      of:    [{ type: 'string' }],
      description: 'e.g. Uganda Law Society, East African Law Society',
    }),

    // ─── Biography ───────────────────────────────────────────────────────

    defineField({
      name:  'bio',
      title: 'Biography',
      type:  'array',
      of: [
        {
          type:  'block',
          styles: [
            { title: 'Normal',          value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong',  value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      description: '2-4 paragraphs. Cover education, past firms, areas of practice, notable work, and any teaching or civic roles.',
    }),

    // ─── Practice specialisms ─────────────────────────────────────────────

    defineField({
      name:        'specialisms',
      title:       'Specialisms',
      type:        'array',
      of:          [{ type: 'string' }],
      description: 'Short tags shown on the team card. e.g. Litigation, Tax Law, Oil and Gas',
    }),

    defineField({
      name:  'practiceAreas',
      title: 'Practice Areas',
      type:  'array',
      of: [
        {
          type: 'reference',
          to:   [{ type: 'practiceArea' }],
        },
      ],
      description: 'Which practice area pages should list this person?',
    }),

    // ─── Contact ─────────────────────────────────────────────────────────

    defineField({
      name:        'email',
      title:       'Direct Email',
      type:        'string',
      description: 'Leave blank to use the firm\'s general address.',
      validation:  (R) => R.email(),
    }),

    defineField({
      name:  'linkedIn',
      title: 'LinkedIn URL',
      type:  'url',
      validation: (R) =>
        R.uri({ scheme: ['https'] }).warning('Use a full HTTPS URL.'),
    }),
  ],
})
