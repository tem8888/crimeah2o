import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const SEO = ({ description, lang, meta, title, keywords}) => {
  const {site} = useStaticQuery(graphql`
    query SEO {
        site {
            siteMetadata {
                title
                description
                keywords
                siteUrl
            }
          }
    }
  `)
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      keywords={keywords}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
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

export default SEO

SEO.defaultProps = {
    lang: `ru`,
    meta: [],
    description: ``,
    keywords: ``,
  }
  
  SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }
