import React from "react"
import { Link } from "gatsby"

import Template from "../templates/default"
import { GatsbyAstronaut } from "../components/images"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Template>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <GatsbyAstronaut />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Template>
)

export default IndexPage
