import React from "react"
import PropTypes from "prop-types"
import { Helmet, HelmetProps } from "react-helmet"

export interface Meta {
  title?: string
  description?: string
  author?: string
  [key: string]: string | undefined
}

export interface Props {
  title: string
  description?: string
  author?: string
  lang?: string
  meta?: HelmetProps["meta"] | Meta[] | any[]
}

const SEO: React.FC<Props> = ({ title, description, author, lang, meta }) => {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta as any[])}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
