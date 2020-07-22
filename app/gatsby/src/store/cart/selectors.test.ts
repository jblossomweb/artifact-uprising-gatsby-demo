import { AppState } from "../types"
import initialAppState from "../initialState"
import {
  selectCartState,
  selectCart,
  selectCartItems,
  selectCartFetching,
  selectCartFetched,
  selectCartError,
} from "./selectors"

describe("store/cart/selectors", () => {
  describe("selectCartState", () => {
    it("should select cart state", () => {
      const mockState: AppState = initialAppState
      const selected = selectCartState(mockState)
      expect(selected).toEqual(mockState.cart)
    })

    it("should select from initial state if necessary", () => {
      const mockState = {}
      const selected = selectCartState(mockState as AppState)
      expect(selected).toEqual(initialAppState.cart)
    })
  })

  describe("selectCart", () => {
    it("should select cart only", () => {
      const mockState: AppState = initialAppState
      const selected = selectCart(mockState)
      expect(selected).toEqual({
        items: mockState.cart.items,
        count: mockState.cart.count,
        total: mockState.cart.total,
        total_numeric: mockState.cart.total_numeric,
      })
    })

    it("should select from initial state if necessary", () => {
      const mockState = {}
      const selected = selectCartState(mockState as AppState)
      expect(selected).toEqual({
        items: initialAppState.cart.items,
        count: initialAppState.cart.count,
        total: initialAppState.cart.total,
        total_numeric: initialAppState.cart.total_numeric,
      })
    })
  })

  describe("selectCartItems", () => {
    it("should select cart items", () => {
      const mockState: AppState = initialAppState
      const selected = selectCartItems(mockState)
      expect(selected).toEqual(mockState.cart.items)
    })

    it("should select from initial state if necessary", () => {
      const mockState = {}
      const selected = selectCartItems(mockState as AppState)
      expect(selected).toEqual(initialAppState.cart.items)
    })
  })

  describe("selectCartFetching", () => {
    it("should select cart fetching boolean", () => {
      const mockState: AppState = initialAppState
      const selected = selectCartFetching(mockState)
      expect(selected).toEqual(!!mockState.cart.fetching)
    })

    it("should select from initial state if necessary", () => {
      const mockState = {}
      const selected = selectCartFetching(mockState as AppState)
      expect(selected).toEqual(!!initialAppState.cart.fetching)
    })
  })

  describe("selectCartFetched", () => {
    it("should select cart fetched boolean", () => {
      const mockState: AppState = initialAppState
      const selected = selectCartFetched(mockState)
      expect(selected).toEqual(!!mockState.cart.fetched)
    })

    it("should select from initial state if necessary", () => {
      const mockState = {}
      const selected = selectCartFetched(mockState as AppState)
      expect(selected).toEqual(!!initialAppState.cart.fetched)
    })
  })

  describe("selectCartError", () => {
    it("should select cart error", () => {
      const mockState: AppState = initialAppState
      const selected = selectCartError(mockState)
      expect(selected).toEqual(mockState.cart.error)
    })

    it("should select from initial state if necessary", () => {
      const mockState = {}
      const selected = selectCartError(mockState as AppState)
      expect(selected).toEqual(initialAppState.cart.error)
    })
  })
})
