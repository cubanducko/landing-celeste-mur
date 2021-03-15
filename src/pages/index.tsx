import { ProjectPreview, ProjectPreviewData } from 'components/Project'
import { Theme } from 'design-system'
import { graphql } from 'gatsby'
import React from 'react'
import { css, makeStyles } from 'services/styles'

export default function Home({ data }) {
  const projects = data.allContentfulProject.edges
  const classes = useStyles()
  return (
    <section className={classes.container}>
      {projects.map(({ node }: { node: ProjectPreviewData }) => (
        <ProjectPreview key={node.slug} {...node} />
      ))}
    </section>
  )
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  container: css`
    display: grid;
    grid-gap: ${spacing(4)};
    @media (min-width: ${breakpoints.sm}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${breakpoints.md}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `,
}))

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
