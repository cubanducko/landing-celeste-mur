import type { Asset, Entry, EntryFields } from 'contentful'

export interface HeaderFields {
  slug: EntryFields.Symbol
  logo: Asset
}

export type Header = Entry<HeaderFields>
