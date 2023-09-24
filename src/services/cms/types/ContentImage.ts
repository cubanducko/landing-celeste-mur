import type { Asset, Entry, EntryFields } from 'contentful'

export interface ContentImageFields {
  slug: EntryFields.Symbol
  imageGroup: Asset[]
  description?: EntryFields.RichText
}

export type ContentImage = Entry<ContentImageFields>
