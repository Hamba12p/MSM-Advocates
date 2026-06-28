import { teamMember  } from './teamMember'
import { practiceArea } from './practiceArea'
import { insight      } from './insight'
import { siteSettings } from './siteSettings'

/**
 * All Sanity schema types, in the order they appear in the Studio sidebar.
 * Add new schemas here and they will be automatically registered.
 */
export const schemaTypes = [
  // Singleton (appears once at the top)
  siteSettings,

  // Primary content documents
  practiceArea,
  teamMember,
  insight,
]
