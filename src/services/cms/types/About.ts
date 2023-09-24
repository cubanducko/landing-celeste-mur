import type { Asset, Entry, EntryFields } from 'contentful'
import type { MetadataFields } from './Metadata'
import type { Document } from '@contentful/rich-text-types'

export interface AboutFields {
  slug: EntryFields.Symbol
  title: EntryFields.Symbol
  profilePicture: Asset
  description: Document
  metadata: Entry<MetadataFields>
}

export type About = Entry<AboutFields>
