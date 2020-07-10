import React from "react"
import storyBuilder, { Stories } from "../../../utils/story-builder"
import Index from "../index"

const story = () => () => <Index />

export const stories: Stories = {
  sample: story(),
}

storyBuilder(stories, "pages/index")
