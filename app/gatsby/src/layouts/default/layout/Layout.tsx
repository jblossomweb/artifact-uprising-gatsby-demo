import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import "./Layout.style.css"

export interface Props {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <Header siteTitle={title} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
