import { Reducer, Action } from "redux"
import { CartState, CartActions } from "./types"
import initialCartState from "./initialState"

/*
 * FETCH_CART
 * FETCH_CART_ADD
 * FETCH_CART_REMOVE
 * FETCH_CART_CLEAR
 */
export const fetchingCart: Reducer<
  CartState,
  Action<
    "FETCH_CART" | "FETCH_CART_ADD" | "FETCH_CART_REMOVE" | "FETCH_CART_CLEAR"
  >
> = (state = initialCartState) => ({
  ...state,
  fetching: true,
})

/*
 * FETCH_CART_SUCCESS
 */
export const fetchedCartSuccess: Reducer<
  CartState,
  CartActions["FETCH_CART_SUCCESS"]
> = (state = initialCartState, { payload }) => ({
  ...state,
  ...payload.cart,
  fetching: false,
  fetched: true,
})

/*
 * FETCH_CART_ERROR
 */
export const fetchedCartError: Reducer<
  CartState,
  CartActions["FETCH_CART_ERROR"]
> = (state = initialCartState, { payload }) => ({
  ...state,
  ...payload,
  fetching: false,
})

/*
 * SET_CART_QTY
 */
export const setCartQty: Reducer<CartState, CartActions["SET_CART_QTY"]> = (
  state = initialCartState,
  { payload }
) => {
  // TODO: optimisitic client state update
  return state
}
