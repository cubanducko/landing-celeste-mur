import React from 'react'
import { Question, QuestionProps } from './__components__/Question.component'
import { getFaqData } from './FAQ.data'
import Image from 'next/image'
import { getAutoFillImageProps } from '@/services/cms'
import { PageProps } from '@/utils/types'
import { LandingParams } from '../types'
import { Metadata, ResolvingMetadata } from 'next'
import { transformToMetadata } from '@/utils/metadata'
import deepMerge from 'deepmerge'

export async function generateMetadata(
  { params: { locale } }: PageProps<LandingParams>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { metadata } = await getFaqData(locale)
  const parentMetadata = await parent
  return deepMerge(parentMetadata, transformToMetadata(metadata))
}

export default async function FAQ({ params: { locale } }: PageProps<LandingParams>) {
  const { title, questions, faqImage } = await getFaqData(locale)

  return (
    <section className="grid-gap-6 grid lg:grid-cols-2">
      <aside className="order-2 w-full lg:order-1">
        <Image className="max-h-[900px] object-contain" {...getAutoFillImageProps(faqImage)} priority />
      </aside>
      <article className="order-1 lg:order-2">
        <h1 className="mb-8">{title}</h1>
        <ul className="flex flex-col gap-4">
          {questions.map((question: Pick<QuestionProps, 'answer' | 'question'>) => (
            <Question className="mb-4" key={question.question} {...question} />
          ))}
        </ul>
      </article>
    </section>
  )
}
