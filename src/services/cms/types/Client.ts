import type { Asset, Entry, EntryFields } from 'contentful'

export interface ClientFields {
  name: EntryFields.Symbol
  logo: Asset
  href?: EntryFields.Symbol
}

export type Client = Entry<ClientFields>
