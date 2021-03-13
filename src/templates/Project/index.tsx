import { graphql } from 'gatsby'
import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { ImageRow } from './Assets'

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
      const { type } = entryData.internal
      switch (type) {
        case 'ContentfulImageRow':
          return <ImageRow images={entryData.imageGroup} />
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
          ... on ContentfulImageRow {
            contentful_id
            internal {
              type
            }
            imageGroup {
              fluid(maxWidth: 1140) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
        raw
      }
    }
  }
`
