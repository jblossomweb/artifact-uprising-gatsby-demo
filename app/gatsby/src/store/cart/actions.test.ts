import { Cart } from "../../types"
import { ServiceRequest, ApiError } from "../../services/cart/types"
import {
  fetchCart,
  fetchCartAdd,
  fetchCartRemove,
  fetchCartClear,
  fetchCartSuccess,
  fetchCartError,
  setCartQty,
} from "./actions"
import * as middleware from "./middleware"
import { mockCartService } from "../../services/cart"
import mockCartResponse from "../../../__mocks__/api/cart.json"
import mockErrorResponse from "../../../__mocks__/api/cart-error.json"

const mockDispatch = jest.fn()
const mockAxios = jest.mock("axios")
const mockService = mockCartService(mockAxios)
const mockCart: Cart = mockCartResponse
const mockError: ApiError = mockErrorResponse

const middlewareSpies = {
  getCart: jest.spyOn(middleware, "getCart"),
  addToCart: jest.spyOn(middleware, "addToCart"),
  removeFromCart: jest.spyOn(middleware, "removeFromCart"),
  clearCart: jest.spyOn(middleware, "clearCart"),
  setCartQty: jest.spyOn(middleware, "setCartQty"),
}

describe("store/cart/actions", () => {
  describe("fetchCart", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it("should call getCart middleware", () => {
      fetchCart(mockService)(mockDispatch)
      expect(middlewareSpies.getCart).toHaveBeenCalled()
      expect(middlewareSpies.getCart).toHaveBeenCalledWith(mockService)
    })

    it("should return expected action type", () => {
      const action = fetchCart(mockService)(mockDispatch)
      expect(action.type).toEqual("FETCH_CART")
    })
  })

  describe("fetchCartAdd", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it("should call addToCart middleware", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      fetchCartAdd(mockItem, mockService)(mockDispatch)
      expect(middlewareSpies.addToCart).toHaveBeenCalled()
      expect(middlewareSpies.addToCart).toHaveBeenCalledWith(
        mockItem,
        mockService
      )
    })

    it("should return expected action type", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      const action = fetchCartAdd(mockItem, mockService)(mockDispatch)
      expect(action.type).toEqual("FETCH_CART_ADD")
    })
  })

  describe("fetchCartRemove", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it("should call removeFromCart middleware", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      fetchCartRemove(mockItem, mockService)(mockDispatch)
      expect(middlewareSpies.removeFromCart).toHaveBeenCalled()
      expect(middlewareSpies.removeFromCart).toHaveBeenCalledWith(
        mockItem,
        mockService
      )
    })

    it("should return expected action type", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      const action = fetchCartRemove(mockItem, mockService)(mockDispatch)
      expect(action.type).toEqual("FETCH_CART_REMOVE")
    })
  })

  describe("fetchCartClear", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it("should call getCart middleware", () => {
      fetchCartClear(mockService)(mockDispatch)
      expect(middlewareSpies.clearCart).toHaveBeenCalled()
      expect(middlewareSpies.clearCart).toHaveBeenCalledWith(mockService)
    })

    it("should return expected action type", () => {
      const action = fetchCartClear(mockService)(mockDispatch)
      expect(action.type).toEqual("FETCH_CART_CLEAR")
    })
  })

  describe("fetchCartSuccess", () => {
    it("should return expected action type", () => {
      const action = fetchCartSuccess(mockCart)
      expect(action.type).toEqual("FETCH_CART_SUCCESS")
    })

    it("should return expected action payload", () => {
      const action = fetchCartSuccess(mockCart)
      const expectedPayload = { cart: mockCart }
      expect(action.payload).toEqual(expectedPayload)
    })
  })

  describe("fetchCartError", () => {
    it("should return expected action type", () => {
      const action = fetchCartError(mockError)
      expect(action.type).toEqual("FETCH_CART_ERROR")
    })

    it("should return expected action payload", () => {
      const action = fetchCartError(mockError)
      const expectedPayload = { error: mockError }
      expect(action.payload).toEqual(expectedPayload)
    })
  })

  describe("setCartQty", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })
    it("should call setCartQty middleware", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      setCartQty(mockItem.id, mockItem.qty, mockCart, mockService)(mockDispatch)
      expect(middlewareSpies.setCartQty).toHaveBeenCalled()
      expect(middlewareSpies.setCartQty).toHaveBeenCalledWith(
        mockItem.id,
        mockItem.qty,
        mockCart.items,
        mockService
      )
    })

    it("should return expected action type", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      const action = setCartQty(
        mockItem.id,
        mockItem.qty,
        mockCart,
        mockService
      )(mockDispatch)
      expect(action.type).toEqual("SET_CART_QTY")
    })

    it("should return expected action payload", () => {
      const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }
      const action = setCartQty(
        mockItem.id,
        mockItem.qty,
        mockCart,
        mockService
      )(mockDispatch)
      const expectedPayload = mockItem
      expect(action.payload).toEqual(expectedPayload)
    })
  })
})
