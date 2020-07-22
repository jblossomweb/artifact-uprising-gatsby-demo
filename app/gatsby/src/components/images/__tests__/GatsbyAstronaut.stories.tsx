import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import MockImageGatsbyAstronautQuery from "../../../../__mocks__/query/image-gatsby-astronaut.query.json"
import { GatsbyAstronaut, Props } from "../GatsbyAstronaut"

const sampleProps: Props = {
  fluid:
    MockImageGatsbyAstronautQuery.data.placeholderImage.childImageSharp.fluid,
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => <GatsbyAstronaut fluid={knobs.object("fluid", props.fluid)} />

export const stories: Stories = {
  default: story({
    ...sampleProps,
  }),
}

storyBuilder(stories, "components/images/GatsbyAstronaut")
