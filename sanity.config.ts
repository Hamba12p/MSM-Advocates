import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool }    from '@sanity/vision'
import { schemaTypes }   from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  name:       'msm-advocates-studio',
  title:      'MSM Advocates CMS',
  projectId,
  dataset,
  basePath:   '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Site Settings appears as a single item, not a list
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings'),
              ),

            S.divider(),

            // Standard list items for content collections
            S.listItem()
              .title('Practice Areas')
              .schemaType('practiceArea')
              .child(
                S.documentTypeList('practiceArea')
                  .title('Practice Areas')
                  .defaultOrdering([{ field: 'orderIndex', direction: 'asc' }]),
              ),

            S.listItem()
              .title('Team Members')
              .schemaType('teamMember')
              .child(
                S.documentTypeList('teamMember')
                  .title('Team Members')
                  .defaultOrdering([{ field: 'orderIndex', direction: 'asc' }]),
              ),

            S.listItem()
              .title('Insights')
              .schemaType('insight')
              .child(
                S.documentTypeList('insight')
                  .title('Insights')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
              ),
          ]),
    }),

    visionTool({
      defaultApiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
      defaultDataset:    dataset,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
