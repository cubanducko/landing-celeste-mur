import { ProjectPreview, ProjectPreviewData } from 'components/Project'
import { graphql } from 'gatsby'
import React from 'react'

export default function Home({ data }) {
  const projects = data.allContentfulProject.edges
  console.log(data)
  return (
    <section>
      {projects.map(({ node }: { node: ProjectPreviewData }) => (
        <ProjectPreview key={node.slug} {...node} />
      ))}
    </section>
  )
}

export const query = graphql`
  query HomePageQuery($locale: String) {
    allContentfulProject(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          slug
          title
          previewImage {
            fluid(maxWidth: 360, maxHeight: 240) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
