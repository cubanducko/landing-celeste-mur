import React from 'react'
import { ExtendableStyles, Testable } from '@/utils/types'
import clsx from 'clsx'

export type QuestionProps = ExtendableStyles &
  Testable & {
    question: string
    answer: string
  }

export function Question({ className, question, answer, ...otherProps }: QuestionProps) {
  return (
    <li className={clsx(className, 'flex flex-col')} {...otherProps}>
      <h2>{question}</h2>
      <span dangerouslySetInnerHTML={{ __html: answer }} />
    </li>
  )
}
