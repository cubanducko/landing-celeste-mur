import type { Entry, EntryFields } from 'contentful'

export interface IconLinkFields {
  linkUrl: EntryFields.Symbol
  iconName: EntryFields.Symbol
  slug: EntryFields.Symbol
}

export type IconLink = Entry<IconLinkFields>
