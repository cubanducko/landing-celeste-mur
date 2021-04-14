import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Metadata } from './Metadata.component'

export function DefaultMetadata() {
  const metadata = useRootMetadata()
  return <Metadata metadata={metadata} />
}

function useRootMetadata() {
  const queryData = useStaticQuery(graphql`
    query RootMetadata {
      contentfulMetadata(slug: { eq: "root-metadata" }, node_locale: { eq: "en" }) {
        description
        title
        url
        twitterUsername
        thumbnail {
          fixed(width: 1000, height: 1000) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  `)
  return queryData.contentfulMetadata
}
