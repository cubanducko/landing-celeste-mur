import { contentClient, MetadataFields } from '@/services/cms'

export async function getHomeMetadata(locale: string) {
  const result = await contentClient.getEntries<MetadataFields>({
    content_type: 'metadata',
    'fields.slug': 'root-metadata',
    locale,
  })

  return result.items[0].fields
}
