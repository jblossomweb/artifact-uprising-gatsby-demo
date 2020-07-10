import React from "react"
import Img, { FluidObject } from "gatsby-image"
import MockImageGatsbyAstronautQuery from "../../../../__mocks__/query/image-gatsby-astronaut.query.json"

export interface Props {
  fluid?: FluidObject | FluidObject[]
}

export const GatsbyAstronaut: React.FC<Props> = ({ fluid }) => (
  <Img fluid={fluid} />
)

export default () => {
  const { placeholderImage } = MockImageGatsbyAstronautQuery.data
  return <GatsbyAstronaut fluid={placeholderImage.childImageSharp.fluid} />
}
