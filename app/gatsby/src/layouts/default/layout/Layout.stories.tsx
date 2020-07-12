import React from "react"
import storyBuilder, {
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import Layout, { Props } from "./Layout"

const sampleProps: Props = {
  title: "Sample Title",
  children: "Sample Children",
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <Layout title={knobs.text("title", props.title || "")}>
    {knobs.text("children", props.children as string)}
  </Layout>
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  "no title": story({
    ...sampleProps,
    title: undefined,
  }),
}

storyBuilder(stories, "templates/default/layout")
