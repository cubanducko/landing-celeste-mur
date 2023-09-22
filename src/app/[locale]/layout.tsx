import type { Metadata } from 'next'
import '@/theme/globals.css'

import clsx from 'clsx'
import { Source_Sans_3 } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { Main } from '../../components'
import { Footer, Header } from './__components__'
import { LandingParams } from './types'
import { PageProps } from '@/utils/types'
import { getHomeMetadata } from './Home.seo'
import { transformToMetadata } from '@/utils/metadata'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '400'],
  style: ['italic', 'normal'],
  display: 'swap',
})

const locales = ['en', 'es']

export async function generateMetadata({ params: { locale } }: PageProps<LandingParams>): Promise<Metadata> {
  const metadata = await getHomeMetadata(locale)

  return {
    metadataBase: new URL('https://celestemur.com'),
    ...transformToMetadata(metadata),
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: LandingParams
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang={locale}>
      <body
        className={clsx(
          sourceSans.className,
          'flex min-h-screen flex-col justify-between leading-relaxed text-typography-main',
        )}
      >
        <Header className="flex-shrink-0" />
        <Main className="flex-grow">{children}</Main>
        <Footer className="flex-shrink-0" />
      </body>
    </html>
  )
}
