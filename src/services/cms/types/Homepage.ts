import type { Entry, EntryFields } from 'contentful'
import type { CategoryFields } from './Category'
import type { ProjectFields } from './Project'

export interface HomepageFields {
  slug: EntryFields.Symbol
  categories: Entry<CategoryFields>[]
  portfolio: Entry<ProjectFields>[]
}

export type Homepage = Entry<HomepageFields>
