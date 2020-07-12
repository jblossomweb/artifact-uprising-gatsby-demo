import React from "react"
import storyBuilder, { Stories } from "../../../utils/story-builder"
import SecondPage from "../page-2"

const story = () => () => <SecondPage />

export const stories: Stories = {
  sample: story(),
}

storyBuilder(stories, "pages/page-2")
