import React from "react"

const Footer: React.FC = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org" target="_blank">
      Gatsby
    </a>
  </footer>
)

export default Footer
