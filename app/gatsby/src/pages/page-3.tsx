import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default"
import { GatsbyIcon } from "../components/images"
import SEO from "../components/seo"

const ThirdPage: React.FC = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <div style={{ maxWidth: `256px`, marginBottom: `1.45rem` }}>
      <GatsbyIcon />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
