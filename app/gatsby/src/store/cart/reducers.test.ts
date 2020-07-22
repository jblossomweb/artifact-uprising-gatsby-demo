import { Action } from "redux"
import { Cart } from "../../types"
import { CartState, CartActions } from "./types"
import { ApiError } from "../../services/cart/types"
import {
  fetchingCart,
  fetchedCartSuccess,
  fetchedCartError,
  setCartQty,
} from "./reducers"

import initialCartState from "./initialState"
import mockCartResponse from "../../../__mocks__/api/cart.json"
import mockErrorResponse from "../../../__mocks__/api/cart-error.json"

const mockCart: Cart = mockCartResponse
const mockError: ApiError = mockErrorResponse

describe("store/cart/reducers", () => {
  describe("fetchingCart", () => {
    it("should set fetching to true", () => {
      const mockAction: Action = { type: "FETCH_CART" }
      const oldState = {
        ...initialCartState,
        fetching: false,
      }
      const newState = fetchingCart(oldState, mockAction)
      expect(newState.fetching).toBe(true)
    })

    it("should initialize state if necessary", () => {
      const mockAction: Action = { type: "FETCH_CART" }
      const oldState = undefined
      const newState = fetchingCart(oldState, mockAction)
      expect(newState).toEqual({
        ...initialCartState,
        fetching: true,
      })
    })
  })

  describe("fetchedCartSuccess", () => {
    it("should set fetching to false", () => {
      const mockAction: CartActions["FETCH_CART_SUCCESS"] = {
        type: "FETCH_CART_SUCCESS",
        payload: {
          cart: mockCart,
        },
      }
      const oldState = {
        ...initialCartState,
        fetching: true,
        fetched: false,
      }
      const newState = fetchedCartSuccess(oldState, mockAction)
      expect(newState.fetching).toBe(false)
    })

    it("should set fetched to true", () => {
      const mockAction: CartActions["FETCH_CART_SUCCESS"] = {
        type: "FETCH_CART_SUCCESS",
        payload: {
          cart: mockCart,
        },
      }
      const oldState = {
        ...initialCartState,
        fetching: true,
        fetched: false,
      }
      const newState = fetchedCartSuccess(oldState, mockAction)
      expect(newState.fetched).toBe(true)
    })

    it("should set cart from payload", () => {
      const mockAction: CartActions["FETCH_CART_SUCCESS"] = {
        type: "FETCH_CART_SUCCESS",
        payload: {
          cart: mockCart,
        },
      }
      const oldState = {
        ...initialCartState,
        fetching: true,
        fetched: false,
      }
      const newState = fetchedCartSuccess(oldState, mockAction)
      expect(newState.items).toEqual(mockCart.items)
      expect(newState.count).toEqual(mockCart.count)
      expect(newState.total).toEqual(mockCart.total)
      expect(newState.total_numeric).toEqual(mockCart.total_numeric)
    })

    it("should initialize state if necessary", () => {
      const mockAction: CartActions["FETCH_CART_SUCCESS"] = {
        type: "FETCH_CART_SUCCESS",
        payload: {
          cart: initialCartState,
        },
      }
      const oldState = undefined
      const newState = fetchedCartSuccess(oldState, mockAction)
      expect(newState).toEqual({
        ...initialCartState,
        fetching: false,
        fetched: true,
      })
    })
  })

  describe("fetchedCartError", () => {
    it("should set fetching to false", () => {
      const mockAction: CartActions["FETCH_CART_ERROR"] = {
        type: "FETCH_CART_ERROR",
        payload: {
          error: mockError,
        },
      }
      const oldState = {
        ...initialCartState,
        fetching: true,
        fetched: false,
      }
      const newState = fetchedCartError(oldState, mockAction)
      expect(newState.fetching).toBe(false)
    })

    it("should set error from payload", () => {
      const mockAction: CartActions["FETCH_CART_ERROR"] = {
        type: "FETCH_CART_ERROR",
        payload: {
          error: mockError,
        },
      }
      const oldState = {
        ...initialCartState,
        fetching: true,
        fetched: false,
        error: undefined,
      }
      const newState = fetchedCartError(oldState, mockAction)
      expect(newState.error).toEqual(mockError)
    })

    it("should initialize state if necessary", () => {
      const mockAction: CartActions["FETCH_CART_ERROR"] = {
        type: "FETCH_CART_ERROR",
        payload: {
          error: mockError,
        },
      }
      const oldState = undefined
      const newState = fetchedCartError(oldState, mockAction)
      expect(newState).toEqual({
        ...initialCartState,
        fetching: false,
        error: mockError,
      })
    })
  })

  describe("setCartQty", () => {
    it("should not mutate state (yet)", () => {
      const mockAction: CartActions["SET_CART_QTY"] = {
        type: "SET_CART_QTY",
        payload: {
          id: 1,
          qty: 1,
        },
      }
      const oldState = {
        ...initialCartState,
      }
      const newState = setCartQty(oldState, mockAction)
      expect(newState).toEqual(oldState)
    })

    it("should initialize state if necessary", () => {
      const mockAction: CartActions["SET_CART_QTY"] = {
        type: "SET_CART_QTY",
        payload: {
          id: 1,
          qty: 1,
        },
      }
      const oldState = undefined
      const newState = setCartQty(oldState, mockAction)
      expect(newState).toEqual(initialCartState)
    })
  })
})
