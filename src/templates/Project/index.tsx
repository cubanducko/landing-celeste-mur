import { graphql } from 'gatsby'
import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BeforeAfterImage, ImageRow } from './Assets'
import { Metadata } from 'components'
import { AppearOnScreen } from 'components/Animations/AppearOnScreen.component'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { css, makeStyles } from 'services/styles'
import { StyledLink, Theme } from 'design-system'
import { Divider } from './Divider.component'

export default function Project({ data, pageContext }) {
  const classes = useStyles()
  const { nextProjectPath, previousProjectPath } = pageContext
  const { description, title, metadata } = data.contentfulProject

  return (
    <section>
      <h1>{title}</h1>
      {renderRichText(description, options)}
      <div className={classes.navigation}>
        {previousProjectPath && (
          <StyledLink to={previousProjectPath}>
            <FormattedMessage id="project.previous" />
          </StyledLink>
        )}
        {nextProjectPath && (
          <StyledLink to={nextProjectPath}>
            <FormattedMessage id="project.next" />
          </StyledLink>
        )}
      </div>
      <Metadata metadata={metadata} />
    </section>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  navigation: css`
    display: flex;
    margin-top: ${spacing(3)};
    justify-content: space-between;
  `,
}))

const options = {
  renderNode: {
    [BLOCKS.HR]: (node, children) => (
      <AppearOnScreen component="span">
        <Divider />
      </AppearOnScreen>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <AppearOnScreen component="p">{children}</AppearOnScreen>,
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const entryData = node.data.target
      switch (entryData.__typename) {
        case 'ContentfulImageRow':
          return (
            <AppearOnScreen>
              <ImageRow images={entryData.imageGroup} />
            </AppearOnScreen>
          )
        case 'ContentfulBeforeAfterImage':
          return (
            <AppearOnScreen>
              <BeforeAfterImage
                before={entryData.beforeImage}
                after={entryData.afterImage}
                description={entryData.description}
              />
            </AppearOnScreen>
          )
        default:
          return <AppearOnScreen>{children}</AppearOnScreen>
      }
    },
  },
}

export const query = graphql`
  query ProjectQuery($locale: String, $slug: String) {
    contentfulProject(node_locale: { eq: $locale }, slug: { eq: $slug }) {
      slug
      title
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
      description {
        references {
          __typename
          ... on Node {
            ... on ContentfulImageRow {
              contentful_id
              imageGroup {
                fluid(maxWidth: 1140) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
            ... on ContentfulBeforeAfterImage {
              contentful_id
              beforeImage {
                fluid(maxWidth: 1140) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              afterImage {
                fluid(maxWidth: 1140) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              description
            }
          }
        }
        raw
      }
    }
  }
`
