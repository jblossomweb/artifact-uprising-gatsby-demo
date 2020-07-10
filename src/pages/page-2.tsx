import React from "react"
import { Link } from "gatsby"

import Template from "../templates/default"
import SEO from "../components/seo"

const SecondPage: React.FC = () => (
  <Template>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Template>
)

export default SecondPage
