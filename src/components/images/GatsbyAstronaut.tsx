import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const GatsbyAstronaut: React.FC = () => {
  const { placeholderImage } = useStaticQuery(query)
  return <Img fluid={placeholderImage.childImageSharp.fluid} />
}

export default GatsbyAstronaut
