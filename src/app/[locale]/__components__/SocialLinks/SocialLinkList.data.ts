import { IconLinkFields, contentClient } from '@/services/cms'

export async function getSocialLinkList() {
  const result = await contentClient.getEntries<IconLinkFields>({
    content_type: 'iconLink',
  })

  return result.items
}
