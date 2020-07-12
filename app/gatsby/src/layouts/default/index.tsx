import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout, { Props } from "./layout"

export const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ children }: Props) => {
  const { site } = useStaticQuery(siteTitleQuery)
  const { title } = site.siteMetadata
  return <Layout title={title}>{children}</Layout>
}
