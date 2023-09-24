import { TranslationValues, useTranslations } from 'next-intl'

export type FormattedMessageProps = {
  id: string
  values?: TranslationValues
}

export function FormattedMessage({ id, values }: FormattedMessageProps) {
  const t = useTranslations()
  return <>{t(id, values)}</>
}
