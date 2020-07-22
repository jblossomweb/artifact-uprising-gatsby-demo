import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import Footer from "./Footer"

const story = () =>
  // knobProps: Props,
  (
    knobs: KnobsInterface
    // props: Props = knobProps,
  ) => <Footer />

export const stories: Stories = {
  default: story(),
}

storyBuilder(stories, "layouts/default/footer")
