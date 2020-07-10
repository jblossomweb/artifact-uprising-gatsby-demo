import React from "react"
import storyBuilder, {
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import MockImageGatsbyIconQuery from "../../../../__mocks__/query/image-gatsby-icon.query.json"
import { GatsbyIcon, Props } from "../GatsbyIcon"

const sampleProps: Props = {
  fluid: MockImageGatsbyIconQuery.data.placeholderImage.childImageSharp.fluid,
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => <GatsbyIcon fluid={knobs.object("fluid", props.fluid)} />

export const stories: Stories = {
  default: story({
    ...sampleProps,
  }),
}

storyBuilder(stories, "components/images/GatsbyIcon")
