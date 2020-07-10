import { KnobsInterface } from "../utils/story-builder"

const mockKnobs: KnobsInterface = {
  text: (name: string, val: string) => val,
  number: (name: string, val: number) => val,
  date: (name: string, val: number) => val,
  boolean: (name: string, val: boolean) => val,
  object: (name: string, val: object) => val,
  select: (name: string, options: any, val: any) => val,
}

export default mockKnobs
