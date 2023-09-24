import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { AboutFields, getEntryBy } from '@/services/cms'

export async function getAboutData(locale: string) {
  const data = await getEntryBy<AboutFields>({
    content_type: 'about',
    locale,
  })

  const { metadata, title, profilePicture, description } = data.fields

  return {
    metadata: metadata.fields,
    title,
    profilePicture,
    description: documentToHtmlString(description),
  }
}
