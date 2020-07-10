import React from "react"
import storyBuilder, { Stories } from "../../../utils/story-builder"
import NotFoundPage from "../404"

const story = () => () => <NotFoundPage />

export const stories: Stories = {
  sample: story(),
}

storyBuilder(stories, "pages/404")
