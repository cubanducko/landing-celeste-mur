const path = require('path')

exports.onCreatePage = ({ page, actions, ...other }) => {
  const { createPage, deletePage } = actions
  deletePage(page, other)
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}

// Dynamic routes
exports.createPages = async ({ graphql, actions, ...otherProps }) => {
  const { createPage } = actions

  // Project routes
  const {
    data: {
      contentfulHomepage: { portfolio },
    },
  } = await getProjectSlugs(graphql, 'es')
  const projectTemplate = path.resolve(`src/templates/Project/index.tsx`)
  const getProjectPath = (slug) => `/project/${slug}`
  portfolio.forEach((node, index) => {
    const { slug } = node
    const previousProject = index > 0 ? portfolio[index - 1] : undefined
    const nextProject = index < portfolio.length ? portfolio[index + 1] : undefined

    createPage({
      // Path for this page — required
      path: getProjectPath(slug),
      component: projectTemplate,
      context: {
        slug,
        previousProjectPath: previousProject ? getProjectPath(previousProject.slug) : undefined,
        nextProjectPath: nextProject ? getProjectPath(nextProject.slug) : undefined,
      },
    })
  })
}

async function getProjectSlugs(graphql, locale) {
  return graphql(
    `
      {
        contentfulHomepage(node_locale: { eq: "${locale}" }) {
          portfolio {
            slug
          }
        }
      }
    `
  )
}
