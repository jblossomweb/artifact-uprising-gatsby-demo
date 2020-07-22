import { Reducer } from "redux"
import { AppAction } from "../types"
import { CartState, CartActions } from "./types"
import * as reducers from "./reducers"
import initalState from "./initialState"

const cartReducer: Reducer<CartState, AppAction> = (state, action) => {
  switch (action.type) {
    case "FETCH_CART":
    case "FETCH_CART_ADD":
    case "FETCH_CART_REMOVE":
    case "FETCH_CART_CLEAR":
      return reducers.fetchingCart(state, action)
    case "FETCH_CART_SUCCESS":
      return reducers.fetchedCartSuccess(
        state,
        action as CartActions["FETCH_CART_SUCCESS"]
      )
    case "FETCH_CART_ERROR":
      return reducers.fetchedCartError(
        state,
        action as CartActions["FETCH_CART_ERROR"]
      )
    case "SET_CART_QTY":
      return reducers.setCartQty(state, action as CartActions["SET_CART_QTY"])
  }
  return state || initalState
}

export default cartReducer
