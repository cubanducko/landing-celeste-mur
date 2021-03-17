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
      allContentfulProject: { edges: projectSlugs },
    },
  } = await getProjectSlugs(graphql, 'es')
  const projectTemplate = path.resolve(`src/templates/Project/index.tsx`)
  projectSlugs.forEach(({ node }) => {
    const { slug } = node

    createPage({
      // Path for this page — required
      path: `/project/${slug}`,
      component: projectTemplate,
      context: {
        slug,
      },
    })
  })
}

async function getProjectSlugs(graphql, locale) {
  return graphql(
    `
      {
        allContentfulProject(filter: {node_locale: {eq: "${locale}"}}) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
}
