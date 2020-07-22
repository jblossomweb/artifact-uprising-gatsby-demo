import { Store } from "redux"
import { AppState } from "./types"
import initialState from "./initialState"
import createStore from "./createStore"
;(window as any).__REDUX_DEVTOOLS_EXTENSION__ = jest.fn()

describe("store/createStore", () => {
  it("should create a store from initial state", () => {
    const createdStore: Store = createStore()
    const createdState: AppState = createdStore.getState()
    expect(createdState).toEqual(initialState)
  })

  it("should create a store from a preloaded state", () => {
    const preloadedState: AppState = {
      cart: {
        ...initialState.cart,
        count: 999,
      },
    }
    const createdStore: Store = createStore(preloadedState)
    const createdState: AppState = createdStore.getState()
    expect(createdState).toEqual(preloadedState)
  })

  it("should enable redux devtools extension", () => {
    const createdStore: Store = createStore()
    expect((window as any).__REDUX_DEVTOOLS_EXTENSION__).toHaveBeenCalled()
  })
})
