import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import { useSelector, useDispatch } from "react-redux"

import { Cart } from "../../types"
import { CartState } from "../../store/cart/types"

import useCartService, { CartServiceInterface } from "../../services/cart"

import {
  selectCart,
  selectCartError,
  selectCartFetching,
  selectCartFetched,
} from "../../store/cart/selectors"

import { fetchCart, setCartQty } from "../../store/cart/actions"

import Layout, { Props } from "./layout"

export interface Data {
  site: {
    siteMetadata: {
      title: string
    }
  }
  page: {
    nodes: Array<{
      context: {
        imageId: string
        productId: number
      }
    }>
  }
  file: {
    nodes: Array<{
      imageId: string
      image: {
        fixed: FixedObject
      }
    }>
  }
}

export const query = graphql`
  query DefaultLayout {
    site {
      siteMetadata {
        title
      }
    }
    page: allSitePage(
      filter: { context: { imageId: { ne: null }, productId: { ne: null } } }
    ) {
      nodes {
        context {
          imageId
          productId
        }
      }
    }
    file: allFile(
      filter: {
        dir: { ne: "/gatsby/src/images" }
        extension: { in: ["png", "jpg", "gif"] }
      }
    ) {
      nodes {
        imageId: id
        image: childImageSharp {
          fixed(width: 40, height: 40) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
`

interface Inject {
  inject?: {
    cartService: CartServiceInterface
  }
}

export default ({ children, inject }: Partial<Props> & Inject) => {
  const { site, page, file }: Data = useStaticQuery(query)
  const cartService = inject?.cartService || useCartService()
  const cart: Cart = useSelector(selectCart)
  const error: CartState["error"] = useSelector(selectCartError)
  const fetching: boolean = useSelector(selectCartFetching)
  const fetched: boolean = useSelector(selectCartFetched)
  const dispatch = useDispatch()

  const { title } = site.siteMetadata

  const productImages: Props["productImages"] = page.nodes
    .map((node: any) => node.context)
    .reduce(
      (images, context) => ({
        ...images,
        [context.productId]: (
          file.nodes.find((node: any) => node.imageId === context.imageId) || {}
        ).image,
      }),
      {}
    )

  const setQty: Props["setQty"] = (id, qty) => {
    dispatch(setCartQty(id, qty, cart, cartService)(dispatch))
  }

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchCart(cartService)(dispatch))
    }
  }, [fetched])

  return (
    <Layout
      title={title}
      cart={cart}
      productImages={productImages}
      error={error}
      fetching={fetching}
      setQty={setQty}
    >
      {children}
    </Layout>
  )
}
