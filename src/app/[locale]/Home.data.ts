import { HomepageFields, getEntryBy } from '@/services/cms'

export async function getHomeData(locale: string) {
  const homePage = await getEntryBy<HomepageFields>({
    content_type: 'homepage',
    locale,
  })

  const data = homePage.fields
  const portfolio = data.portfolio.map(({ fields: { slug, title, previewImage, categories } }) => ({
    slug,
    title,
    previewImage,
    categories,
  }))

  return {
    portfolio,
    categories: data.categories,
  }
}
