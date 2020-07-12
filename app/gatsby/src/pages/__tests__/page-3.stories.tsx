import React from "react"
import storyBuilder, { Stories } from "../../../utils/story-builder"
import ThirdPage from "../page-3"

const story = () => () => <ThirdPage />

export const stories: Stories = {
  sample: story(),
}

storyBuilder(stories, "pages/page-3")
