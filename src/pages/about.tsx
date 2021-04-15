import { Metadata } from 'components/SEO'
import { SocialLinkList } from 'components/SocialLinks/SocialLinkList.component'
import { Theme } from 'design-system'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import { css, makeStyles } from 'services/styles'

export default function About({ data }) {
  const { title, description, profilePicture, metadata } = data.contentfulAbout
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
      <Metadata metadata={metadata} />
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
      metadata {
        description
        title
        url
        thumbnail {
          fixed(width: 1000, height: 1000) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      profilePicture {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
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
}))
