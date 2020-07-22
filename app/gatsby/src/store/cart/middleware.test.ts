import { Cart, CartItem } from "../../types"
import { ServiceRequest, ServiceResponse } from "../../services/cart/types"
import { mockCartService, CartServiceInterface } from "../../services/cart"
import mockCartResponse from "../../../__mocks__/api/cart.json"
import mockEmptyCartResponse from "../../../__mocks__/api/cart-empty.json"
import mockErrorResponse from "../../../__mocks__/api/cart-error.json"

import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  setCartQty,
} from "./middleware"

import * as actions from "./actions"

const mockDispatch = jest.fn()
const mockAxios = jest.mock("axios")
const mockService = mockCartService(mockAxios)

const mockServiceSuccess: CartServiceInterface = {
  getCart: () => Promise.resolve({ data: mockCartResponse } as ServiceResponse),
  addToCart: () =>
    Promise.resolve({ data: mockCartResponse } as ServiceResponse),
  removeFromCart: () =>
    Promise.resolve({ data: mockCartResponse } as ServiceResponse),
  clearCart: () =>
    Promise.resolve({ data: mockEmptyCartResponse } as ServiceResponse),
}

const mockServiceError: CartServiceInterface = {
  getCart: () => Promise.reject({ data: mockErrorResponse } as ServiceResponse),
  addToCart: () =>
    Promise.reject({ data: mockErrorResponse } as ServiceResponse),
  removeFromCart: () =>
    Promise.reject({ data: mockErrorResponse } as ServiceResponse),
  clearCart: () =>
    Promise.reject({ data: mockErrorResponse } as ServiceResponse),
}

const mockItem: ServiceRequest["body"] = { id: 1, qty: 1 }

const actionSpies = {
  fetchCartSuccess: jest.spyOn(actions, "fetchCartSuccess"),
  fetchCartError: jest.spyOn(actions, "fetchCartError"),
}

describe("store/cart/middleware", () => {
  describe("getCart", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call service.getCart", () => {
      const serviceSpy = jest.spyOn(mockService, "getCart")
      expect(serviceSpy).not.toHaveBeenCalled()
      getCart(mockService)(mockDispatch)
      expect(serviceSpy).toHaveBeenCalled()
      expect(serviceSpy).toHaveBeenCalledWith()
    })

    describe("service fetch success", () => {
      it("should dispatch fetchCartSuccess action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await getCart(mockServiceSuccess)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalledWith(
          mockCartResponse
        )
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
      })
    })

    describe("service fetch error", () => {
      it("should dispatch fetchCartError action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await getCart(mockServiceError)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalledWith(
          mockErrorResponse
        )
      })
    })
  })

  describe("addToCart", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call service.addToCart", () => {
      const spy = jest.spyOn(mockService, "addToCart")
      expect(spy).not.toHaveBeenCalled()
      addToCart(mockItem, mockService)(mockDispatch)
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(mockItem)
    })

    describe("service fetch success", () => {
      it("should dispatch fetchCartSuccess action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await addToCart(mockItem, mockServiceSuccess)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalledWith(
          mockCartResponse
        )
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
      })
    })

    describe("service fetch error", () => {
      it("should dispatch fetchCartError action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await addToCart(mockItem, mockServiceError)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalledWith(
          mockErrorResponse
        )
      })
    })
  })

  describe("removeFromCart", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call service.removeFromCart", () => {
      const spy = jest.spyOn(mockService, "removeFromCart")
      expect(spy).not.toHaveBeenCalled()
      removeFromCart(mockItem, mockService)(mockDispatch)
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(mockItem)
    })

    describe("service fetch success", () => {
      it("should dispatch fetchCartSuccess action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await removeFromCart(mockItem, mockServiceSuccess)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalledWith(
          mockCartResponse
        )
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
      })
    })

    describe("service fetch error", () => {
      it("should dispatch fetchCartError action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await removeFromCart(mockItem, mockServiceError)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalledWith(
          mockErrorResponse
        )
      })
    })
  })

  describe("clearCart", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("should call service.clearCart", () => {
      const spy = jest.spyOn(mockService, "clearCart")
      expect(spy).not.toHaveBeenCalled()
      clearCart(mockService)(mockDispatch)
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith()
    })

    describe("service fetch success", () => {
      it("should dispatch fetchCartSuccess action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await clearCart(mockServiceSuccess)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).toHaveBeenCalledWith(
          mockEmptyCartResponse
        )
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
      })
    })

    describe("service fetch error", () => {
      it("should dispatch fetchCartError action", async () => {
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).not.toHaveBeenCalled()
        await clearCart(mockServiceError)(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartSuccess).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalled()
        expect(actionSpies.fetchCartError).toHaveBeenCalledWith(
          mockErrorResponse
        )
      })
    })
  })

  describe("setCartQty", () => {
    const actionSpies = {
      fetchCartAdd: jest.spyOn(actions, "fetchCartAdd"),
      fetchCartRemove: jest.spyOn(actions, "fetchCartRemove"),
    }

    beforeEach(() => {
      jest.clearAllMocks()
    })

    describe("qty is more than existing", () => {
      it("should dispatch fetchCartAdd with expected args", () => {
        const mockItems: CartItem[] = mockCartResponse.items
        const mockArgs = {
          id: mockItems[0].id,
          qty: mockItems[0].qty + 1,
        }
        const expectedQtyToAdd: number = 1
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).not.toHaveBeenCalled()
        setCartQty(
          mockArgs.id,
          mockArgs.qty,
          mockItems,
          mockService
        )(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).toHaveBeenCalledWith(
          { id: mockArgs.id, qty: expectedQtyToAdd },
          mockService
        )
      })
    })

    describe("qty is less than existing", () => {
      it("should dispatch fetchCartRemove with expected args", () => {
        const mockItems: CartItem[] = mockCartResponse.items
        const mockArgs = {
          id: mockItems[0].id,
          qty: mockItems[0].qty - 1,
        }
        const expectedQtyToSubtract: number = 1
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartRemove).not.toHaveBeenCalled()
        setCartQty(
          mockArgs.id,
          mockArgs.qty,
          mockItems,
          mockService
        )(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartRemove).toHaveBeenCalled()
        expect(actionSpies.fetchCartRemove).toHaveBeenCalledWith(
          { id: mockArgs.id, qty: expectedQtyToSubtract },
          mockService
        )
      })
    })

    describe("qty is same as existing", () => {
      it("should not dispatch an action", () => {
        const mockItems: CartItem[] = mockCartResponse.items
        const mockArgs = {
          id: mockItems[0].id,
          qty: mockItems[0].qty,
        }
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartRemove).not.toHaveBeenCalled()
        setCartQty(
          mockArgs.id,
          mockArgs.qty,
          mockItems,
          mockService
        )(mockDispatch)
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartRemove).not.toHaveBeenCalled()
      })
    })

    describe("item is not in cart", () => {
      it("should dispatch fetchCartAdd with expected args", () => {
        const mockItems: CartItem[] = []
        const mockArgs = {
          id: 1,
          qty: 1,
        }
        expect(mockDispatch).not.toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).not.toHaveBeenCalled()
        setCartQty(
          mockArgs.id,
          mockArgs.qty,
          mockItems,
          mockService
        )(mockDispatch)
        expect(mockDispatch).toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).toHaveBeenCalled()
        expect(actionSpies.fetchCartAdd).toHaveBeenCalledWith(
          mockArgs,
          mockService
        )
      })
    })
  })
})
