import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

export const query = graphql`
  query ImageGatsbyAstronautQuery {
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          aspectRatio
          src
          srcSet
          sizes
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`

export interface Props {
  fluid?: FluidObject | FluidObject[]
}

export const GatsbyAstronaut: React.FC<Props> = ({ fluid }) => (
  <Img fluid={fluid} />
)

export default () => {
  const { placeholderImage } = useStaticQuery(query)
  return <GatsbyAstronaut fluid={placeholderImage.childImageSharp.fluid} />
}
