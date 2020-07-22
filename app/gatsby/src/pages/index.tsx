import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { PageProps, Link, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import { Cart, CartItem } from "../types"
import cartService from "../services/cart"
import { selectCart } from "../store/cart/selectors"
import {
  setCartQty,
  fetchCartAdd,
  fetchCartRemove,
} from "../store/cart/actions"

import slugify from "../helpers/slugify"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import CartButton from "../components/cart-button"

export type Data = {
  db: {
    products: {
      id: number
      title: string
      imageUrl: string
      price: number
    }[]
  }
  page: {
    pageNodes: {
      context: {
        imageId: string
        productId: number
      }
    }[]
  }
  file: {
    fileNodes: {
      id: string
      image: {
        fluid: FluidObject
      }
    }[]
  }
}

export const query = graphql`
  query {
    db: postgres {
      products: allProductsList {
        id
        title
        imageUrl
        price
      }
    }
    page: allSitePage(filter: { context: { productId: { ne: null } } }) {
      pageNodes: nodes {
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
      fileNodes: nodes {
        id
        image: childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcSetWebp
          }
        }
      }
    }
  }
`

export interface Props extends Partial<PageProps<Data>> {
  data: Data
  cart: Cart
  addToCart: (id: CartItem["id"]) => void
  subtractFromCart: (id: CartItem["id"]) => void
  setQty: (id: CartItem["id"], qty: CartItem["qty"]) => void
}

export const IndexPage: React.FC<Props> = ({
  data: {
    db: { products },
    page: { pageNodes },
    file: { fileNodes },
  },
  cart,
  addToCart,
  subtractFromCart,
  setQty,
}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100%`, display: `flex`, flexWrap: `wrap` }}>
      {products.map(product => {
        const path = `/product/${product.id}/${slugify(product.title)}`
        const page = pageNodes.find(
          ({ context }) => context.productId === product.id
        )
        const { image } = fileNodes.find(
          ({ id }) => id === page?.context.imageId
        )!

        const inCart: CartItem | undefined = cart.items.find(
          (item: CartItem) => {
            return item.id === product.id
          }
        )
        const qtyInCart: number = !!inCart ? inCart.qty : 0
        return (
          <div
            key={product.id}
            style={{
              width: `280px`,
              marginBottom: `1.45rem`,
              marginRight: `1.45rem`,
            }}
          >
            <div
              style={{
                maxWidth: `280px`,
                maxHeight: `280px`,
                marginBottom: `1.45rem`,
              }}
            >
              <Link to={path}>
                <Img fluid={image.fluid} />
              </Link>
            </div>
            <div
              style={{
                width: `100%`,
                display: `flex`,
                justifyContent: `space-between`,
              }}
            >
              <h6>{product.title}</h6>
              <h6>${product.price.toFixed(2)}</h6>
            </div>
            <div
              style={{
                width: `100%`,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CartButton
                qtyInCart={qtyInCart}
                setQty={(qty: number) => {
                  setQty(product.id, qty)
                }}
                addToCart={() => {
                  addToCart(product.id)
                }}
                subtractFromCart={() => {
                  subtractFromCart(product.id)
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default ({ data }: { data: Data }) => {
  const dispatch = useDispatch()
  const cart: Cart = useSelector(selectCart)

  const addToCart: Props["addToCart"] = (id: CartItem["id"]) => {
    dispatch(fetchCartAdd({ id, qty: 1 }, cartService())(dispatch))
  }
  const subtractFromCart: Props["subtractFromCart"] = (id: CartItem["id"]) => {
    dispatch(fetchCartRemove({ id, qty: 1 }, cartService())(dispatch))
  }
  const setQty: Props["setQty"] = (
    id: CartItem["id"],
    qty: CartItem["qty"]
  ) => {
    dispatch(setCartQty(id, qty, cart, cartService())(dispatch))
  }

  return (
    <IndexPage
      data={data}
      cart={cart}
      addToCart={addToCart}
      subtractFromCart={subtractFromCart}
      setQty={setQty}
    />
  )
}
