import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../utils/story-builder"
import mockQuery from "../../../__mocks__/query/index.query.json"
import mockCart from "../../../__mocks__/api/cart.json"
import MockRedux from "../../../__mocks__/storybook-redux"
import { Cart, CartItem } from "../../types"
import { IndexPage, Props, Data } from "../index"

const addToCart: Props["addToCart"] = (id: CartItem["id"]) => {
  console.log(`addToCart(${id})`)
}

const subtractFromCart: Props["subtractFromCart"] = (id: CartItem["id"]) => {
  console.log(`subtractFromCart(${id})`)
}

const setQty: Props["setQty"] = (id: CartItem["id"], qty: CartItem["qty"]) => {
  console.log(`setQty(${id},${qty})`)
}

const sampleProps: Props = {
  data: mockQuery.data as Data,
  cart: mockCart as Cart,
  addToCart,
  subtractFromCart,
  setQty,
}

const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <MockRedux>
    <IndexPage
      data={knobs.object("data", props.data || {})}
      cart={knobs.object("cart", props.cart || {})}
      addToCart={props.addToCart}
      subtractFromCart={props.subtractFromCart}
      setQty={props.setQty}
    />
  </MockRedux>
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
}

storyBuilder(stories, "pages/index")
