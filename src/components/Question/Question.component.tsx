import { Theme } from 'design-system'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import React from 'react'
import { makeStyles, cx, css } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'

export type QuestionProps = ExtendableStyles &
  Testable & {
    question: string
    answer: RenderRichTextData<ContentfulRichTextGatsbyReference>
  }

export function Question({ className, question, answer, ...otherProps }: QuestionProps) {
  const classes = useStyles()
  return (
    <div className={cx(className, classes.container)} {...otherProps}>
      <h2>{question}</h2>
      {renderRichText(answer)}
    </div>
  )
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  container: css`
    display: flex;
    flex-direction: column;
  `,
}))
