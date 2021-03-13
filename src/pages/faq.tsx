import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { Question, QuestionProps } from 'components/Question'
import { css, makeStyles } from 'services/styles'
import { Theme } from 'design-system'

export default function FAQ({ data }) {
  const { title, questions, faqDetail } = data.contentfulFaq
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <aside className={classes.imageWrapper}>
        <Img {...faqDetail} />
      </aside>
      <article>
        <h1>{title}</h1>
        {questions.map((question: Pick<QuestionProps, 'answer' | 'question'>) => (
          <Question key={question.question} {...question} />
        ))}
      </article>
    </section>
  )
}

export const query = graphql`
  query FAQPageQuery($locale: String) {
    contentfulFaq(node_locale: { eq: $locale }) {
      faqDetail {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      questions {
        answer {
          raw
        }
        question
      }
      title
    }
  }
`

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  container: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${spacing(4)};
  `,
  imageWrapper: css`
    width: 100%;
  `,
}))
