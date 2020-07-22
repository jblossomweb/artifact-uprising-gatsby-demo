import React from "react"
import Img from "gatsby-image"

import Grid from "@material-ui/core/Grid"

import { CartItem } from "../../types"
import Layout from "../../layouts/default"
import CartButton from "../../components/cart-button"
import { Data } from "./index"

export interface Props {
  image: Data["file"]["image"]
  product: Data["db"]["product"]
  qtyInCart: number
  addToCart: () => void
  subtractFromCart: () => void
  setQty: (qty: CartItem["qty"]) => void
}

const ProductPage: React.FC<Props> = ({
  image,
  product,
  qtyInCart,
  addToCart,
  subtractFromCart,
  setQty,
}) => (
  <Layout>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Img fluid={image.fluid} style={{ width: 600, maxWidth: "100%" }} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <h1>{product.title}</h1>
        <h3>{product.vendor.name}</h3>
        <h4>${product.price.toFixed(2)}</h4>
        <p>
          <CartButton
            qtyInCart={qtyInCart}
            setQty={setQty}
            addToCart={addToCart}
            subtractFromCart={subtractFromCart}
          />
        </p>
        <p>{product.description}</p>
      </Grid>
    </Grid>
  </Layout>
)

export default ProductPage
