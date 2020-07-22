import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FixedObject } from "gatsby-image"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Drawer from "@material-ui/core/Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Badge from "@material-ui/core/Badge"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import LinearProgress from "@material-ui/core/LinearProgress"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import { Cart, CartItem } from "../../../types"
import CartDrawer from "../../../components/cart-drawer"
import * as Style from "./Header.style"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export interface Props {
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

const Header: React.FC<Props> = ({
  title,
  cart,
  productImages,
  fetching,
  error,
  setQty,
}) => {
  const classes = useStyles()
  const [cartOpen, setCartOpen] = useState(false)
  let cartCount: number = 0
  if (cart && cart.count) {
    cartCount = cart.count
  }
  let badgeContent: string | number = cartCount
  if (fetching) badgeContent = 0
  if (error) badgeContent = "?"
  return (
    <Style.Root>
      {fetching ? (
        <LinearProgress
          style={{
            position: "absolute",
            top: 0,
            zIndex: 10000,
          }}
        />
      ) : null}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button
            color="inherit"
            disabled={fetching || !!error}
            onClick={() => {
              setCartOpen(true)
            }}
          >
            Cart&nbsp;
            <Badge
              badgeContent={badgeContent}
              color={error ? "error" : "secondary"}
            >
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
      {cart ? (
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => {
            setCartOpen(false)
          }}
        >
          <CartDrawer
            cart={cart}
            productImages={productImages}
            setQty={setQty}
            closeCart={() => {
              setCartOpen(false)
            }}
          />
        </Drawer>
      ) : null}
    </Style.Root>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
  cart: { items: [], total: "$0.00", count: 0, total_numeric: 0 },
}

export default Header
