import type { Asset, Entry, EntryFields } from 'contentful'

export interface MetadataFields {
  slug: EntryFields.Symbol
  title?: EntryFields.Symbol
  description?: EntryFields.Symbol
  thumbnail?: Asset
  url?: EntryFields.Symbol
  twitterUsername?: EntryFields.Symbol
}

export type Metadata = Entry<MetadataFields>
