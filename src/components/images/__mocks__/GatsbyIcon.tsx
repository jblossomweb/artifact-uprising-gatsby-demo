import React from "react"
import Img, { FluidObject } from "gatsby-image"
import MockImageGatsbyIconQuery from "../../../../__mocks__/query/image-gatsby-icon.query.json"

export interface Props {
  fluid?: FluidObject | FluidObject[]
}

export const GatsbyIcon: React.FC<Props> = ({ fluid }) => <Img fluid={fluid} />

export default () => {
  const { placeholderImage } = MockImageGatsbyIconQuery.data
  return <GatsbyIcon fluid={placeholderImage.childImageSharp.fluid} />
}
