import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

export const query = graphql`
  query ImageGatsbyIconQuery {
    placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
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

export const GatsbyIcon: React.FC<Props> = ({ fluid }) => <Img fluid={fluid} />

export default () => {
  const { placeholderImage } = useStaticQuery(query)
  return <GatsbyIcon fluid={placeholderImage.childImageSharp.fluid} />
}
