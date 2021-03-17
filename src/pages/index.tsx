import { Category, CategoryTag } from 'components/Category'
import { ProjectPreview, ProjectPreviewData } from 'components/Project'
import { rhythm, Theme } from 'design-system'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'
import React from 'react'
import { useLocation } from 'react-use'
import { css, makeStyles } from 'services/styles'
import queryString from 'query-string'

export default function Home({ data }) {
  const classes = useStyles()
  const { projects, currentCategory } = useProjectsData(data.allContentfulProject.edges)
  const categories = useCategories(data.allContentfulCategory.edges)
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>
        <FormattedMessage id="works" />
      </h1>
      <nav className={classes.categoryList}>
        {categories.map((category, index) => (
          <CategoryTag
            className={classes.category}
            key={`${category.slug}-${index}`}
            category={category}
            isActive={currentCategory === category.slug}
          />
        ))}
      </nav>
      <article className={classes.projects}>
        {projects.map(({ node }) => (
          <ProjectPreview key={node.slug} {...node} />
        ))}
      </article>
    </section>
  )
}

function useCategories(baseCategories: { node: Category }[]): Category[] {
  return [
    {
      name: <FormattedMessage id="category.all" />,
      slug: undefined as any,
    },
    ...baseCategories.map(({ node }) => node),
  ]
}

function useProjectsData(projects: { node: ProjectPreviewData }[]) {
  const { search = '' } = useLocation()
  const { category: currentCategory } = queryString.parse(search)

  const filteredProjects =
    currentCategory && !Array.isArray(currentCategory)
      ? projects.filter(filterProjectsByCategory(currentCategory))
      : projects

  return {
    projects: filteredProjects,
    currentCategory,
  }
}

function filterProjectsByCategory(category: string) {
  return ({ node }: { node: ProjectPreviewData }) => {
    return node.categories.findIndex(({ slug }) => category === slug) !== -1
  }
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  container: css`
    margin-bottom: ${spacing(15)};
  `,
  title: css`
    margin-bottom: ${rhythm(2)};
  `,
  categoryList: css`
    display: flex;
    margin-bottom: ${rhythm(1)};
  `,
  category: css`
    margin-right: ${spacing()};
  `,
  projects: css`
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
          categories {
            name
            slug
          }
        }
      }
    }
    allContentfulCategory(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
