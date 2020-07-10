import React from "react"
import storyBuilder, {
  KnobsInterface,
  Stories,
} from "../../../utils/story-builder"
import SEO, { Props } from "./SEO"

const defaultProps = {
  lang: SEO.defaultProps!.lang as string,
  meta: SEO.defaultProps!.meta as any[],
  description: SEO.defaultProps!.description as string,
}

const sampleProps: Props = {
  title: "Sample Title",
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <SEO
    title={knobs.text("title", props.title || "")}
    description={knobs.text(
      "description",
      props.description || defaultProps.description
    )}
    author={knobs.text("author", props.author || "")}
    lang={knobs.text("lang", props.lang || defaultProps.lang)}
    meta={knobs.object("meta", props.meta || defaultProps.meta)}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  description: story({
    ...sampleProps,
    description: "Sample Description",
  }),
  author: story({
    ...sampleProps,
    author: "Sample Author",
  }),
}

storyBuilder(stories, "components/seo")
