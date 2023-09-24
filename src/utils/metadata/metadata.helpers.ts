import { MetadataFields, getImageUrl } from '@/services/cms'
import type { Metadata } from 'next'

export function transformToMetadata(metadata: MetadataFields | undefined): Metadata {
  if (!metadata) {
    return {}
  }

  const { title, description, url, thumbnail, twitterUsername } = metadata
  const imageUrl = thumbnail?.fields.file.url
  return {
    title,
    description,
    creator: twitterUsername,
    openGraph: {
      type: 'website',
      siteName: title,
      title,
      description,
      url,
      images: imageUrl && getImageUrl(imageUrl),
    },
    twitter: {
      title,
      description,
      images: imageUrl && getImageUrl(imageUrl),
      creator: twitterUsername,
      card: 'summary_large_image',
    },
  }
}
