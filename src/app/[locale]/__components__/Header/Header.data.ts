import { HeaderFields, contentClient } from '@/services/cms'

export async function getHeaderData() {
  const query = {
    content_type: 'header',
    limit: 1,
    select: 'fields.logo',
    include: 1,
  }

  // Execute the query and return the result
  const result = await contentClient.getEntries<HeaderFields>(query)
  return result.items[0].fields
}
