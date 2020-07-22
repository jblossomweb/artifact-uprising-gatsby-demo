import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { Cart, CartItem } from "../../types"
import invokeCartService, { CartServiceInterface } from "../../services/cart"
import {
  setCartQty,
  fetchCartAdd,
  fetchCartRemove,
} from "../../store/cart/actions"
import { selectCart } from "../../store/cart/selectors"

import ProductPage, { Props } from "./ProductPage"

export interface Data {
  file: {
    image: {
      fluid: FluidObject
    }
  }
  db: {
    product: {
      id: number
      title: string
      description: string
      price: number
      imageUrl: string
      vendor: {
        name: string
      }
    }
  }
}

export const query = graphql`
  query($productId: Int!, $imageId: String!) {
    file: file(id: { eq: $imageId }) {
      image: childImageSharp {
        fluid(maxWidth: 600) {
          aspectRatio
          src
          srcSet
          sizes
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
    db: postgres {
      product: productById(id: $productId) {
        id
        title
        description
        price
        imageUrl
        vendor: vendorByVendorId {
          name
        }
      }
    }
  }
`

export default ({
  data: {
    file: { image },
    db: { product },
  },
  inject,
}: {
  data: Data
  inject?: {
    cartService: CartServiceInterface
  }
}) => {
  const dispatch = useDispatch()
  const cart: Cart = useSelector(selectCart)
  const cartService: CartServiceInterface =
    inject?.cartService || invokeCartService()
  const inCart: CartItem | undefined = cart.items.find((item: CartItem) => {
    return item.id === product.id
  })
  const qtyInCart: Props["qtyInCart"] = !!inCart ? inCart.qty : 0

  const addToCart: Props["addToCart"] = () => {
    const { id } = product
    dispatch(fetchCartAdd({ id, qty: 1 }, cartService)(dispatch))
  }
  const subtractFromCart: Props["subtractFromCart"] = () => {
    const { id } = product
    dispatch(fetchCartRemove({ id, qty: 1 }, cartService)(dispatch))
  }
  const setQty: Props["setQty"] = qty => {
    dispatch(setCartQty(product.id, qty, cart, cartService)(dispatch))
  }

  return (
    <ProductPage
      image={image}
      product={product}
      qtyInCart={qtyInCart}
      addToCart={addToCart}
      subtractFromCart={subtractFromCart}
      setQty={setQty}
    />
  )
}
