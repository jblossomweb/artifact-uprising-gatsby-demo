import React from "react"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"

import * as Style from "./CartButton.style"

export interface Props {
  qtyInCart: number
  addToCart: () => void
  subtractFromCart: () => void
  setQty: (qty: number) => void
}

const CartButton: React.FC<Props> = ({
  qtyInCart,
  addToCart,
  subtractFromCart,
  setQty,
}) => {
  if (qtyInCart < 0) qtyInCart = 0
  return qtyInCart ? (
    <Style.Input>
      <Input
        data-testid="qtyInput"
        type="number"
        disableUnderline
        value={qtyInCart}
        inputProps={{ min: 0, max: 99 }}
        startAdornment={
          <Button
            data-testid="subtractButton"
            variant="outlined"
            onClick={() => {
              subtractFromCart()
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
        }
        endAdornment={
          <Button
            data-testid="addButton"
            variant="outlined"
            onClick={() => {
              addToCart()
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        }
        onChange={({ target: { value } }) => {
          setQty(Number(value))
        }}
      />
      &nbsp;
      <ShoppingCartIcon fontSize="small" />
    </Style.Input>
  ) : (
    <Button
      data-testid="addToCartButton"
      variant="outlined"
      onClick={() => {
        addToCart()
      }}
    >
      Add to Cart&nbsp;
      <AddShoppingCartIcon />
    </Button>
  )
}

export default CartButton
