import React from "react"
import SEO, { Props } from "./SEO"
import { useStaticQuery, graphql } from "gatsby"
export * from "./SEO"

export const query = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default (props: Props) => {
  const { site } = useStaticQuery(query)
  const title = `${props.title} ${site.siteMetadata.title}`
  const description = props.description || site.siteMetadata.description
  const author = props.author || site.siteMetadata.author
  return (
    <SEO {...props} title={title} description={description} author={author} />
  )
}
