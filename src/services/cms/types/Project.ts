import type { Asset, Entry, EntryFields } from 'contentful'
import type { CategoryFields } from './Category'
import type { MetadataFields } from './Metadata'
import type { Document } from '@contentful/rich-text-types'

export interface ProjectFields {
  slug: EntryFields.Symbol
  title: EntryFields.Symbol
  previewImage: Asset
  categories: Entry<CategoryFields>[]
  description?: Document
  metadata?: Entry<MetadataFields>
}

export type Project = Entry<ProjectFields>
