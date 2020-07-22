import { Dispatch, AnyAction } from "redux"
import { Service, ApiError } from "../../services/cart/types"
import { AppState } from "../types"
import * as cart from "../../services/cart/types"
import * as middleware from "./middleware"

/*
 * FETCH_CART
 */
export const fetchCart = (service: Service) => (
  dispatch: Dispatch<AnyAction>
) => {
  middleware.getCart(service)(dispatch)
  return {
    type: "FETCH_CART",
  }
}

/*
 * FETCH_CART_ADD
 */
export const fetchCartAdd = (
  item: cart.ServiceRequest["body"],
  service: Service
) => (dispatch: Dispatch<AnyAction>) => {
  middleware.addToCart(item, service)(dispatch)
  return {
    type: "FETCH_CART_ADD",
  }
}

/*
 * FETCH_CART_REMOVE
 */
export const fetchCartRemove = (
  item: cart.ServiceRequest["body"],
  service: Service
) => (dispatch: Dispatch<AnyAction>) => {
  middleware.removeFromCart(item, service)(dispatch)
  return {
    type: "FETCH_CART_REMOVE",
  }
}

/*
 * FETCH_CART_CLEAR
 */
export const fetchCartClear = (service: Service) => (
  dispatch: Dispatch<AnyAction>
) => {
  middleware.clearCart(service)(dispatch)
  return {
    type: "FETCH_CART_CLEAR",
  }
}

/*
 * FETCH_CART_SUCCESS
 */
export const fetchCartSuccess = (cart: AppState["cart"]) => ({
  type: "FETCH_CART_SUCCESS",
  payload: {
    cart,
  },
})

/*
 * FETCH_CART_ERROR
 */
export const fetchCartError = (error: ApiError) => ({
  type: "FETCH_CART_ERROR",
  payload: {
    error,
  },
})

/*
 * SET_CART_QTY
 */
export const setCartQty = (
  id: number,
  qty: number,
  cart: AppState["cart"],
  service: Service
) => (dispatch: Dispatch<AnyAction>) => {
  middleware.setCartQty(id, qty, cart.items, service)(dispatch)
  return {
    type: "SET_CART_QTY",
    payload: {
      id,
      qty,
    },
  }
}
