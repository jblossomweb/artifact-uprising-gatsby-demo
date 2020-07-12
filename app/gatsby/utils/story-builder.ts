import * as knobs from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"

const { withKnobs } = knobs

export interface KnobsInterface {
  text: (name: string, val: string) => string
  number: (name: string, val: number) => number
  date: (name: string, val: number) => number
  boolean: (name: string, val: boolean) => boolean
  object: (name: string, val: any) => any
  select: (name: string, options: any, val: any) => any
}

export type Story = (...args: any[]) => JSX.Element

export interface Stories {
  [key: string]: Story
}

const storyBuilder = (stories: Stories, storyPath: string) => {
  const builtStories = storiesOf(storyPath, module)
  builtStories.addDecorator(withKnobs as any)

  Object.keys(stories).forEach(key => {
    builtStories.add(key, () => stories[key](knobs))
  })
}

export default storyBuilder
