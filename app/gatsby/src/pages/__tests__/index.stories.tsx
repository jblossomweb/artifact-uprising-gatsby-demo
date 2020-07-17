import React from "react"
import storyBuilder, {
  KnobsInterface,
  Stories,
} from "../../../utils/story-builder"
import mockQuery from "../../../__mocks__/query/index.query.json"
import IndexPage, { Props, Data } from "../index"

const data: Data = mockQuery.data

const sampleProps: Props = {
  data,
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <IndexPage
    data={knobs.object("data", props.data || {})}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
}

storyBuilder(stories, "pages/index")
