import React from "react"
import storyBuilder, {
  KnobsInterface,
  Stories,
} from "../../../utils/story-builder"
import MockSiteBuildTimeQuery from "../../../__mocks__/query/site-buildtime-query.json"
import UsingTypescript, { Props, DataProps } from "../using-typescript"

const data: DataProps = MockSiteBuildTimeQuery.data

const sampleProps: Props = {
  path: "/using-typescript/",
  data,
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <UsingTypescript
    path={knobs.text("path", props.path || "")}
    data={knobs.object("data", props.data || {})}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  path: story({
    ...sampleProps,
    path: "/a-different-path",
  }),
  "build time": story({
    ...sampleProps,
    data: {
      ...data,
      site: {
        ...data.site,
        buildTime: "2020-07-10 02:22 am UTC",
      },
    },
  }),
}

storyBuilder(stories, "pages/using-typescript")
