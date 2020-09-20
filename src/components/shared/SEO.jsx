import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from '../../assets/img/favicon.png'

const SEO = ({ description, lang, meta, titleSuffix }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title + titleSuffix}
      link={[
        {"rel": "icon", 
          "type": "image/png", 
          "href": favicon
        }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title + titleSuffix,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}
SEO.defaultProps = {
  lang: `en`,
  titleSuffix: 'Portfolio',
  meta: [],
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  titleSuffix: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
}

export default SEO
