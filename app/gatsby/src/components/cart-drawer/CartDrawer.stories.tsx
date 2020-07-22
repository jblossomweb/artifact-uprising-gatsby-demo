import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../utils/story-builder"
import mockCart from "../../../__mocks__/api/cart.json"
import emptyCart from "../../../__mocks__/api/cart-empty.json"
import CartDrawer, { Props } from "./CartDrawer"

const sampleProps: Props = {
  cart: mockCart,
  setQty: (id, qty) => {
    console.log(`setQty(${id}, ${qty})`)
  },
  closeCart: () => {
    console.log(`closeCart()`)
  },
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <CartDrawer
    cart={knobs.object("cart", props.cart)}
    setQty={props.setQty}
    closeCart={props.closeCart}
  />
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  empty: story({
    ...sampleProps,
    cart: emptyCart,
  }),
}

storyBuilder(stories, "components/cart-drawer")
