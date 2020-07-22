import { Dispatch, AnyAction } from "redux"
import { Cart, CartItem } from "../../types"
import * as cart from "../../services/cart/types"
import * as actions from "./actions"

export const getCart = (service: cart.Service) => (dispatch: Dispatch) =>
  service
    .getCart()
    .then((response: cart.ServiceResponse) => {
      dispatch(actions.fetchCartSuccess(response.data as Cart) as AnyAction)
    })
    .catch((response: cart.ServiceResponse) => {
      dispatch(
        actions.fetchCartError(response.data as cart.ApiError) as AnyAction
      )
    })

export const addToCart = (
  item: cart.ServiceRequest["body"],
  service: cart.Service
) => (dispatch: Dispatch) =>
  service
    .addToCart(item)
    .then((response: cart.ServiceResponse) => {
      dispatch(actions.fetchCartSuccess(response.data as Cart) as AnyAction)
    })
    .catch((response: cart.ServiceResponse) => {
      dispatch(
        actions.fetchCartError(response.data as cart.ApiError) as AnyAction
      )
    })

export const removeFromCart = (
  item: cart.ServiceRequest["body"],
  service: cart.Service
) => (dispatch: Dispatch) =>
  service
    .removeFromCart(item)
    .then((response: cart.ServiceResponse) => {
      dispatch(actions.fetchCartSuccess(response.data as Cart) as AnyAction)
    })
    .catch((response: cart.ServiceResponse) => {
      dispatch(
        actions.fetchCartError(response.data as cart.ApiError) as AnyAction
      )
    })

export const clearCart = (service: cart.Service) => (dispatch: Dispatch) =>
  service
    .clearCart()
    .then((response: cart.ServiceResponse) => {
      dispatch(actions.fetchCartSuccess(response.data as Cart) as AnyAction)
    })
    .catch((response: cart.ServiceResponse) => {
      dispatch(
        actions.fetchCartError(response.data as cart.ApiError) as AnyAction
      )
    })

export const setCartQty = (
  id: number,
  qty: number,
  items: CartItem[],
  service: cart.Service
) => (dispatch: Dispatch) => {
  const existing = items.find(item => id === item.id)
  if (existing) {
    if (qty > existing.qty) {
      dispatch(
        actions.fetchCartAdd({ id, qty: qty - existing.qty }, service)(dispatch)
      )
    } else if (qty < existing.qty) {
      dispatch(
        actions.fetchCartRemove(
          { id, qty: existing.qty - qty },
          service
        )(dispatch)
      )
    }
  } else {
    dispatch(actions.fetchCartAdd({ id, qty }, service)(dispatch))
  }
}
