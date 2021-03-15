import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { Question, QuestionProps } from 'components/Question'
import { css, makeStyles } from 'services/styles'
import { rhythm, Theme } from 'design-system'

export default function FAQ({ data }) {
  const { title, questions, faqDetail } = data.contentfulFaq
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <aside className={classes.imageWrapper}>
        <Img {...faqDetail} />
      </aside>
      <article>
        <h1 className={classes.title}>{title}</h1>
        {questions.map((question: Pick<QuestionProps, 'answer' | 'question'>) => (
          <Question className={classes.question} key={question.question} {...question} />
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
    grid-gap: ${spacing(4)};
    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  imageWrapper: css`
    width: 100%;
  `,
  title: css`
    margin-bottom: ${rhythm(3)};
  `,
  question: css`
    margin-bottom: ${rhythm(1)};
  `,
}))
