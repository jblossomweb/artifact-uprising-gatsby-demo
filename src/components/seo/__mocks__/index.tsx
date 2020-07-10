import React from "react"
import mockSeoQuery from "../../../../__mocks__/query/seo-query.json"
import SEO, { Props } from "../SEO"

export default (props: Props) => {
  const { site } = mockSeoQuery.data
  const title = `${props.title} ${site.siteMetadata.title}`
  const description = props.description || site.siteMetadata.description
  const author = props.author || site.siteMetadata.author
  return (
    <SEO {...props} title={title} description={description} author={author} />
  )
}
