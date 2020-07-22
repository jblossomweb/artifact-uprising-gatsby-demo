import { Cart, CartItem } from "../../types"
import { ApiError } from "../../services/cart/types"

export interface CartState extends Cart {
  fetching?: boolean
  fetched?: boolean
  error?: ApiError
}

export interface CartActions {
  FETCH_CART: {
    type: "FETCH_CART"
  }
  FETCH_CART_ADD: {
    type: "FETCH_CART_ADD"
  }
  FETCH_CART_REMOVE: {
    type: "FETCH_CART_REMOVE"
  }
  FETCH_CART_CLEAR: {
    type: "FETCH_CART_CLEAR"
  }
  FETCH_CART_SUCCESS: {
    type: "FETCH_CART_SUCCESS"
    payload: {
      cart: Cart
    }
  }
  FETCH_CART_ERROR: {
    type: "FETCH_CART_ERROR"
    payload: {
      error: ApiError
    }
  }
  SET_CART_QTY: {
    type: "SET_CART_QTY"
    payload: {
      id: CartItem["id"]
      qty: CartItem["qty"]
    }
  }
}
