import { graphql } from 'gatsby'
import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BeforeAfterImage, ImageRow } from './Assets'

export default function Project({ data }) {
  const { description, title } = data.contentfulProject
  return (
    <section>
      <h1>{title}</h1>
      {renderRichText(description, options)}
    </section>
  )
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const entryData = node.data.target
      console.log(entryData)
      switch (entryData.__typename) {
        case 'ContentfulImageRow':
          return <ImageRow images={entryData.imageGroup} />
        case 'ContentfulBeforeAfterImage':
          return (
            <BeforeAfterImage
              before={entryData.beforeImage}
              after={entryData.afterImage}
              description={entryData.description}
            />
          )
        default:
          return children
      }
    },
  },
}

export const query = graphql`
  query ProjectQuery($locale: String, $slug: String) {
    contentfulProject(node_locale: { eq: $locale }, slug: { eq: $slug }) {
      slug
      title
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
