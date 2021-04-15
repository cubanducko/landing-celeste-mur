import GatsbyImage, { FixedObject, GatsbyImageFixedProps } from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'

export type MetadataProps = {
  metadata: MetadataInfo
}

export type MetadataInfo = {
  title?: string
  description?: string
  thumbnail?: { fixed: FixedObject }
  url?: string
  twitterUsername?: string
}

export function Metadata({ metadata }: MetadataProps) {
  const { title, description, thumbnail, twitterUsername, url } = metadata ?? {}
  return (
    <Helmet>
      {/* Other metadata */}
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />

      {/* Title metadata */}
      {title && <title>{title}</title>}
      {title && <meta name="og:name" content={title} />}
      {title && <meta name="og:site_name" content={title} />}
      {title && <meta name="twitter:name" content={title} />}

      {/* Description metadata */}
      {description && <meta itemProp="description" content={description} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}

      {/* URL */}
      {url && <meta itemProp={url} content={url} />}
      {url && <meta property="og:url" content={url} />}
      {url && <meta property="twitter:url" content={url} />}
      {url && <link rel="canonical" href={url} />}

      {/* Thumbnail */}
      {thumbnail && <meta itemProp="image" content={thumbnail.fixed.src} />}
      {thumbnail && <meta itemProp="thumbnailUrl" content={thumbnail.fixed.src} />}
      {thumbnail && <link rel="image_src" href={thumbnail.fixed.src} />}
      {thumbnail && <meta property="og:image" content={thumbnail.fixed.src} />}
      {thumbnail && <meta name="og:image:width" content={String(thumbnail.fixed.width)} />}
      {thumbnail && <meta name="og:image:height" content={String(thumbnail.fixed.height)} />}
      {thumbnail && <meta name="twitter:image" content={thumbnail.fixed.src} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
    </Helmet>
  )
}
