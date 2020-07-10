import React from "react"
import Layout, { Props } from "../layout"

export default ({ children }: Props) => {
  const title = "Test Title"
  return <Layout title={title}>{children}</Layout>
}
