import type { Entry, EntryFields } from 'contentful'

export interface CategoryFields {
  slug: EntryFields.Symbol
  name: EntryFields.Symbol
  parent?: Entry<Record<string, any>>
}

export type Category = Entry<CategoryFields>
