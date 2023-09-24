import Image from 'next/image'
import React from 'react'

import { getAutoFillImageProps } from '@/services/cms'

import { SocialLinkList } from '../__components__'
import { getAboutData } from './About.data'
import { PageProps } from '@/utils/types'
import { LandingParams } from '../types'

import { Metadata, ResolvingMetadata } from 'next'
import { transformToMetadata } from '@/utils/metadata'
import deepMerge from 'deepmerge'

export async function generateMetadata(
  { params: { locale } }: PageProps<LandingParams>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { metadata } = await getAboutData(locale)
  const parentMetadata = await parent
  return deepMerge(parentMetadata, transformToMetadata(metadata))
}

export default async function About({ params }: PageProps<LandingParams>) {
  const { title, description, profilePicture } = await getAboutData(params.locale)

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <aside className="w-full flex-shrink-0">
        <Image className="object-contain" {...getAutoFillImageProps(profilePicture)} priority />
      </aside>
      <article>
        <h1 className="mb-6">{title}</h1>
        <section className="mb-4 flex flex-col" dangerouslySetInnerHTML={{ __html: description }} />
        <SocialLinkList />
      </article>
    </section>
  )
}
