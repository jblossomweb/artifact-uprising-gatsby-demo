import { createStore, combineReducers, Reducer } from "redux"
import { AppState } from "./types"
import initialState from "./initialState"

// import reducers
import cartReducer from "./cart/reducer"

const reducer: Reducer<AppState> = combineReducers({
  // register reducers
  cart: cartReducer,
})

export default (preloadedState: AppState = initialState) =>
  createStore(
    reducer,
    preloadedState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
