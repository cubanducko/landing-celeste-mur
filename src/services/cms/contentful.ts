import { Entry, createClient } from 'contentful'

const contentfulDevConfig = {
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: 'preview.contentful.com',
}

const contentfulProdConfig = {
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  host: 'cdn.contentful.com',
}

export const contentfulClient = createClient(
  process.env.NODE_ENV === 'development' ? contentfulDevConfig : contentfulProdConfig,
)

export async function getEntryBySlug<ContentFields>(slug: string, options: any) {
  const content = await contentfulClient.getEntries<ContentFields>({
    'fields.slug[in]': slug,
    limit: 1,
    ...options,
  })

  if (content.items.length === 0) {
    throw new Error('Item not found')
  }

  return content.items[0]
}

export async function getEntryBy<ContentFields>(options: any) {
  const content = await contentfulClient.getEntries<ContentFields>({
    limit: 1,
    ...options,
  })

  if (content.items.length === 0) {
    throw new Error('Item not found')
  }

  return content.items[0]
}
