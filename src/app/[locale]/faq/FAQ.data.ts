import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { FaqFields, getEntryBy } from '@/services/cms'

export async function getFaqData(locale: string) {
  const faq = await getEntryBy<FaqFields>({
    content_type: 'faq',
    limit: 1,
    locale,
  })

  const questions = faq.fields.questions.map(({ fields: { question, answer } }) => ({
    question,
    answer: documentToHtmlString(answer),
  }))

  return {
    metadata: faq.fields.metadata?.fields,
    title: faq.fields.title,
    faqImage: faq.fields.faqDetail,
    questions,
  }
}
