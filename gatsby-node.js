const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      projects: allMongodbPortfolioProjects {
        edges {
          node {
            href
            language
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve("./src/templates/project.jsx")

  for (const { node } of data.projects.edges) {
    createPage({
      path: `/projects/${node.language}/${node.href}/`,
      component: pageTemplate,
      context: {
        href: node.href,
        lang: node.language,
      },
    })
  }
}
