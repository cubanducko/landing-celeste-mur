import { SocialLinkList } from 'components/SocialLinks/SocialLinkList.component'
import { Theme } from 'design-system'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import { css, makeStyles } from 'services/styles'

export default function About({ data }) {
  const { title, description, profilePicture } = data.contentfulAbout
  const classes = useStyles()
  return (
    <section className={classes.container}>
      <aside className={classes.imageWrapper}>
        <Img {...profilePicture} />
      </aside>
      <article>
        <h1>{title}</h1>
        <section>{renderRichText(description)}</section>
        <SocialLinkList />
      </article>
    </section>
  )
}

export const query = graphql`
  query AboutPageQuery($locale: String) {
    contentfulAbout(node_locale: { eq: $locale }) {
      title
      description {
        raw
      }
      profilePicture {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
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
