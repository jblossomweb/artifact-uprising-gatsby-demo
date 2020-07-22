import { createSelector } from "reselect"
import { Cart } from "../../types"
import { ApiError } from "../../services/cart/types"
import { AppState } from "../types"
import { CartState } from "./types"
import initialState from "./initialState"

export const selectCartState: (state: AppState) => CartState = state =>
  state.cart || initialState

export const selectCart: (state: AppState) => Cart = createSelector(
  [selectCartState],
  (cartState: CartState) => ({
    items: cartState.items,
    count: cartState.count,
    total: cartState.total,
    total_numeric: cartState.total_numeric,
  })
)

export const selectCartItems: (
  state: AppState
) => Cart["items"] = createSelector(
  [selectCartState],
  (cartState: CartState) => cartState.items
)

export const selectCartFetching: (state: AppState) => boolean = createSelector(
  [selectCartState],
  (cartState: CartState) => !!cartState.fetching
)

export const selectCartFetched: (state: AppState) => boolean = createSelector(
  [selectCartState],
  (cartState: CartState) => !!cartState.fetched
)

export const selectCartError: (
  state: AppState
) => ApiError | undefined = createSelector(
  [selectCartState],
  (cartState: CartState) => cartState.error
)

// CAN DO: selectIsCartValid (reselect, calculate cart total vs provided total, return boolean)
