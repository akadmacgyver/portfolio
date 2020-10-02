const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      projects: allMongodbPortfolioProjects {
        edges {
          node {
            href
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve("./src/templates/Project.jsx")

  for (const { node } of data.projects.edges) {
    console.log("created", node.href)
    createPage({
      path: `/projects/${node.href}/`,
      component: pageTemplate,
      context: {
        href: node.href,
      },
    })
  }
}
