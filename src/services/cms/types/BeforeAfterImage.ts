import type { Asset, Entry, EntryFields } from 'contentful'

export interface BeforeAfterImageFields {
  slug: EntryFields.Symbol
  beforeImage: Asset
  afterImage: Asset
  description?: EntryFields.Symbol
}

export type BeforeAfterImage = Entry<BeforeAfterImageFields>
