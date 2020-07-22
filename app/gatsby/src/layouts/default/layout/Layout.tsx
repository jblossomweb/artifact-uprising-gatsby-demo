import React from "react"
import PropTypes from "prop-types"
import { FixedObject } from "gatsby-image"
import { Cart, CartItem } from "../../../types"
import Header from "../header"
import Footer from "../footer"
import { Theme } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

import "fontsource-roboto"
import "./Layout.style.css"

export interface Props {
  children: React.ReactNode
  title?: string
  cart?: Cart
  productImages?: {
    [id: number]: {
      fixed: FixedObject
    }
  }
  fetching?: boolean
  error?: any
  setQty: (id: CartItem["id"], qty: CartItem["qty"]) => void
}

const Layout: React.FC<Props> = ({
  children,
  title,
  cart,
  productImages,
  fetching,
  error,
  setQty,
}) => {
  const {
    mixins: { toolbar },
    spacing,
  }: Theme = useTheme()
  const marginTop: React.CSSProperties["marginTop"] = `${
    Number(toolbar.minHeight) + spacing() * 2
  }px`
  return (
    <>
      <Header
        title={title}
        cart={cart}
        productImages={productImages}
        fetching={fetching}
        error={error}
        setQty={setQty}
      />
      <Container>
        <main style={{ marginTop }}>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Layout
