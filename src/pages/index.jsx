import React from "react"
import MasterStyle from "../assets/styles/MasterStyle"
import Helmet from "react-helmet"
// import favicon from "../assets/logos/16maincir.png"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <html lang="pl" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <title>{data.site.siteMetadata.title}</title>
        {/* <link rel="icon" href={favicon} /> */}
      </Helmet>
      <MasterStyle>asdf</MasterStyle>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
  }
`
