import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../utils/story-builder"
import CartButton, { Props } from "./CartButton"

const sampleProps: Props = {
  qtyInCart: 0,
  setQty: (qty: number) => {
    console.log(`setQty(${qty})`)
  },
  addToCart: () => {
    console.log(`addToCart()`)
  },
  subtractFromCart: () => {
    console.log(`subtractFromCart()`)
  },
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <CartButton
    qtyInCart={knobs.number("qtyInCart", props.qtyInCart)}
    setQty={props.setQty}
    addToCart={props.addToCart}
    subtractFromCart={props.subtractFromCart}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  "qty in cart": story({
    ...sampleProps,
    qtyInCart: 1,
  }),
  "invalid qty": story({
    ...sampleProps,
    qtyInCart: -1,
  }),
}

storyBuilder(stories, "components/cart-button")
