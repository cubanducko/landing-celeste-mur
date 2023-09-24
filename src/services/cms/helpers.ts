import { Asset } from 'contentful'
import queryString from 'query-string'

export function getImageUrl(partialUrl: string, width?: number, format = 'webp') {
  const additionalFlags = queryString.stringify({ fm: format, w: width ? width * 2.5 : undefined })
  return `https:${partialUrl}?${additionalFlags}`
}

export function getImageProps(file: Asset, width?: number) {
  return {
    src: getImageUrl(file.fields.file.url, width),
    alt: file.fields.title,
    width: file.fields.file.details.image?.width,
    height: file.fields.file.details.image?.height,
  }
}

export function getAutoFillImageProps(file: Asset, width?: number) {
  return {
    ...getImageProps(file, width),
    width: 0,
    height: 0,
    sizes: '100vw',
    style: { width: '100%', height: '100%' },
  }
}
