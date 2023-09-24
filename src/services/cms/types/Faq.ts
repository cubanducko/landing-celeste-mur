import type { Asset, Entry, EntryFields } from 'contentful'
import type { MetadataFields } from './Metadata'
import type { QuestionAnswerFields } from './QuestionAnswer'

export interface FaqFields {
  slug: EntryFields.Symbol
  title: EntryFields.Symbol
  faqDetail: Asset
  questions: Entry<QuestionAnswerFields>[]
  metadata?: Entry<MetadataFields>
}

export type Faq = Entry<FaqFields>
