import type { Entry, EntryFields } from 'contentful'
import type { Document } from '@contentful/rich-text-types'

export interface QuestionAnswerFields {
  question: EntryFields.Symbol
  answer: Document
}

export type QuestionAnswer = Entry<QuestionAnswerFields>
