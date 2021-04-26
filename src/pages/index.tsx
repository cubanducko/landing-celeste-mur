import { Category, CategoryTag } from 'components/Category'
import { ProjectPreview, ProjectPreviewData } from 'components/Project'
import { rhythm, Theme } from 'design-system'
import { graphql } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-intl'
import React from 'react'
import { useLocation } from 'react-use'
import { css, makeStyles } from 'services/styles'
import queryString from 'query-string'
import { AnimatePresence, motion } from 'framer-motion'
import { Metadata } from 'components/SEO'

export default function Home({ data }) {
  const classes = useStyles()
  console.log(data)
  const { projects, currentCategory } = useProjectsData(data.contentfulHomepage.portfolio)
  const categories = useCategories(data.contentfulHomepage.categories)

  return (
    <section className={classes.container}>
      <Metadata metadata={data.contentfulMetadata} />
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
      <article>
        <AnimatePresence exitBeforeEnter>
          <motion.ul
            className={classes.projects}
            key={`${projects.length}-${currentCategory}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit={'hidden'}
          >
            {projects.map((node, index) => (
              <motion.li key={`${node.slug}-${index}`} variants={item}>
                <ProjectPreview {...node} />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </article>
    </section>
  )
}

function useCategories(baseCategories: Category[]): Category[] {
  return [
    {
      name: <FormattedMessage id="category.all" />,
      slug: undefined as any,
    },
    ...baseCategories,
  ]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

function useProjectsData(projects: ProjectPreviewData[]) {
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
  return (node: ProjectPreviewData) => {
    return node.categories.findIndex(({ slug }) => category === slug) !== -1
  }
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  container: css`
    margin-bottom: ${spacing(15)};
    min-height: 55vh;
  `,
  title: css`
    margin-bottom: ${rhythm(2)};
  `,
  categoryList: css`
    display: flex;
    margin-bottom: ${rhythm(1)};
  `,
  category: css`
    margin-right: ${spacing(3)};
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
    contentfulHomepage(node_locale: { eq: "es" }) {
      portfolio {
        slug
        title
        previewImage {
          fluid(maxWidth: 720, maxHeight: 420) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        categories {
          name
          slug
        }
      }
      categories {
        name
        slug
      }
    }
    contentfulMetadata(slug: { eq: "root-metadata" }, node_locale: { eq: $locale }) {
      description
      title
    }
  }
`
