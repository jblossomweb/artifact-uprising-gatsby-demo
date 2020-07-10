import React from "react"
import storyBuilder, {
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import Header, { Props } from "./Header"

const defaultProps = {
  siteTitle: Header.defaultProps!.siteTitle as string,
}

const sampleProps: Props = {
  siteTitle: "Sample Site Title",
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <Header
    siteTitle={knobs.text(
      "siteTitle",
      props.siteTitle || defaultProps.siteTitle
    )}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  "no title": story({
    ...sampleProps,
    siteTitle: undefined,
  }),
}

storyBuilder(stories, "templates/default/header")
