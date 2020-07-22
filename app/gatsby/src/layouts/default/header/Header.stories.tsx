import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import mockCart from "../../../../__mocks__/api/cart.json"
import mockError from "../../../../__mocks__/api/cart-error.json"
import Header, { Props } from "./Header"

const defaultProps = {
  title: Header.defaultProps!.title as Props["title"],
  cart: Header.defaultProps!.cart as Props["cart"],
}

const sampleProps: Props = {
  title: "Sample Site Title",
  cart: mockCart,
  setQty: (id, qty) => {
    console.log(`setQty(${id}, ${qty})`)
  },
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <Header
    title={knobs.text("title", props.title || "")}
    fetching={knobs.boolean("fetching", !!props.fetching)}
    cart={knobs.object("cart", props.cart)}
    error={knobs.object("error", props.error)}
    setQty={props.setQty}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  "no title": story({
    ...sampleProps,
    title: undefined,
  }),
  "empty cart": story({
    ...sampleProps,
    cart: defaultProps.cart,
  }),
  fetching: story({
    ...sampleProps,
    fetching: true,
  }),
  error: story({
    ...sampleProps,
    error: mockError,
  }),
}

storyBuilder(stories, "layouts/default/header")
