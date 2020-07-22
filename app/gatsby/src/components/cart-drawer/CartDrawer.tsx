import React from "react"
import Img, { FixedObject } from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import FolderIcon from "@material-ui/icons/Folder"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import DeleteIcon from "@material-ui/icons/Delete"
import ClearIcon from "@material-ui/icons/Clear"

import * as Style from "./CartDrawer.style"

const useStyles = makeStyles({
  root: {
    width: 400,
    overflowY: "auto",
    maxWidth: "100vw",
    boxShadow: "none",
  },
})

import { Cart, CartItem } from "../../types"

export interface Props {
  cart: Cart
  productImages?: {
    [id: number]: {
      fixed: FixedObject
    }
  }
  setQty: (id: CartItem["id"], qty: CartItem["qty"]) => void
  closeCart: () => void
}

const CartDrawer: React.FC<Props> = ({
  cart,
  productImages,
  setQty,
  closeCart,
}) => {
  const classes = useStyles()
  const isEmpty: boolean = !cart.count || !cart.items.length
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <IconButton onClick={closeCart} style={{ marginTop: -8 }}>
            <ClearIcon fontSize={"small"} />
          </IconButton>
          <Typography gutterBottom variant="h5" component="h3">
            {cart.count || 0} item{cart.count !== 1 && "s"} in your cart
          </Typography>
        </Box>
      </CardContent>
      {!isEmpty ? (
        <List dense style={{ width: "100%" }}>
          {cart.items.map(item => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  {productImages && productImages[item.id] ? (
                    <Img fixed={productImages[item.id].fixed} />
                  ) : (
                    <FolderIcon />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondaryTypographyProps={{ component: "div" }}
                secondary={
                  <Style.QtyField>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={item.qty}
                      inputProps={{ min: 0, max: 99 }}
                      onChange={({ target: { value } }) => {
                        setQty(item.id, Number(value))
                      }}
                    />
                    &nbsp;x&nbsp;{item.price}&nbsp;
                    <Tooltip title="remove all">
                      <DeleteIcon
                        onClick={() => {
                          setQty(item.id, 0)
                        }}
                      />
                    </Tooltip>
                  </Style.QtyField>
                }
                style={{ maxWidth: "70%" }}
              />
              <ListItemSecondaryAction>{item.ext}</ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : null}

      <CardContent>
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Typography gutterBottom variant="h5" component="h3">
            Total: {cart.total}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="flex-end" width="100%">
          <Button size="large" color="primary" disabled={isEmpty}>
            Checkout&nbsp;
            <ShoppingCartIcon />
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}

export default CartDrawer
