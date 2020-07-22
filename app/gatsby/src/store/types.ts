import { Action } from "redux"
import { CartState } from "./cart/types"

export interface AppState {
  cart: CartState
}

export interface AppAction extends Action {
  payload?: any
}

export interface AppActions {
  [type: string]: AppAction
}
