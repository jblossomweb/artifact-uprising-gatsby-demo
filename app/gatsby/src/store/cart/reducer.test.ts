import { Action } from "redux"
import { CartState, CartActions } from "./types"
import initialCartState from "./initialState"
import cartReducer from "./reducer"
import * as reducers from "./reducers"

import mockCartResponse from "../../../__mocks__/api/cart.json"
import mockErrorResponse from "../../../__mocks__/api/cart-error.json"

const spies = {
  fetchingCart: jest.spyOn(reducers, "fetchingCart"),
  fetchedCartSuccess: jest.spyOn(reducers, "fetchedCartSuccess"),
  fetchedCartError: jest.spyOn(reducers, "fetchedCartError"),
  setCartQty: jest.spyOn(reducers, "setCartQty"),
}

describe("store/cart/reducer", () => {
  ;[
    "FETCH_CART",
    "FETCH_CART_ADD",
    "FETCH_CART_REMOVE",
    "FETCH_CART_CLEAR",
  ].forEach(actionType => {
    describe(`${actionType} action`, () => {
      beforeEach(() => {
        jest.clearAllMocks()
      })

      it("should call fetchingCart reducer", () => {
        const mockAction: Action = { type: actionType }
        const mockState: CartState = initialCartState
        expect(spies.fetchingCart).not.toHaveBeenCalled()
        cartReducer(mockState, mockAction)
        expect(spies.fetchingCart).toHaveBeenCalled()
        expect(spies.fetchingCart).toHaveBeenCalledWith(mockState, mockAction)
      })
    })
  })

  describe(`FETCH_CART_SUCCESS action`, () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call fetchedCartSuccess reducer", () => {
      const mockAction: CartActions["FETCH_CART_SUCCESS"] = {
        type: "FETCH_CART_SUCCESS",
        payload: {
          cart: mockCartResponse,
        },
      }
      const mockState: CartState = initialCartState
      expect(spies.fetchedCartSuccess).not.toHaveBeenCalled()
      cartReducer(mockState, mockAction)
      expect(spies.fetchedCartSuccess).toHaveBeenCalled()
      expect(spies.fetchedCartSuccess).toHaveBeenCalledWith(
        mockState,
        mockAction
      )
    })
  })

  describe(`FETCH_CART_ERROR action`, () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call fetchedCartError reducer", () => {
      const mockAction: CartActions["FETCH_CART_ERROR"] = {
        type: "FETCH_CART_ERROR",
        payload: {
          error: mockErrorResponse,
        },
      }
      const mockState: CartState = initialCartState
      expect(spies.fetchedCartError).not.toHaveBeenCalled()
      cartReducer(mockState, mockAction)
      expect(spies.fetchedCartError).toHaveBeenCalled()
      expect(spies.fetchedCartError).toHaveBeenCalledWith(mockState, mockAction)
    })
  })

  describe(`SET_CART_QTY action`, () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call setCartQty reducer", () => {
      const mockAction: CartActions["SET_CART_QTY"] = {
        type: "SET_CART_QTY",
        payload: {
          id: 1,
          qty: 1,
        },
      }
      const mockState: CartState = initialCartState
      expect(spies.setCartQty).not.toHaveBeenCalled()
      cartReducer(mockState, mockAction)
      expect(spies.setCartQty).toHaveBeenCalled()
      expect(spies.setCartQty).toHaveBeenCalledWith(mockState, mockAction)
    })
  })
})
