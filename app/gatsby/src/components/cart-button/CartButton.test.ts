import storyMounter from "../../../utils/story-mounter"
import snapshotTests from "../../../utils/story-snapshot-tests"
import { makeStories } from "./CartButton.stories"
import CartButton from "./CartButton"

const mockActions = {
  addToCart: jest.fn(),
  subtractFromCart: jest.fn(),
  setQty: jest.fn(),
}

const stories = makeStories(mockActions)

const mountedStories = storyMounter(stories, CartButton, component => ({
  addToCartButton: component.find('button[data-testid="addToCartButton"]'),
  qtyInput: component.find('[data-testid="qtyInput"]').find("input"),
  addButton: component.find('button[data-testid="addButton"]'),
  subtractButton: component.find('button[data-testid="subtractButton"]'),
}))

describe("components/cart-button", () => {
  snapshotTests(stories)

  describe("qty in cart, click add button", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("calls addToCart", () => {
      const story = mountedStories["qty in cart"]
      const { addButton } = story.elements
      const { addToCart } = mockActions
      expect(addButton.length).toBe(1)
      expect(addToCart).not.toHaveBeenCalled()
      addButton.simulate("click")
      expect(addToCart).toHaveBeenCalled()
    })
  })

  describe("qty in cart, click subtract button", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("calls subtractFromCart", () => {
      const story = mountedStories["qty in cart"]
      const { subtractButton } = story.elements
      const { subtractFromCart } = mockActions
      expect(subtractButton.length).toBe(1)
      expect(subtractFromCart).not.toHaveBeenCalled()
      subtractButton.simulate("click")
      expect(subtractFromCart).toHaveBeenCalled()
    })
  })

  describe("qty in cart, change number input", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("calls setQty", () => {
      const story = mountedStories["qty in cart"]
      const { qtyInput } = story.elements
      const { setQty } = mockActions
      const mockEvent = { target: { value: 1 } }
      expect(qtyInput.length).toBe(1)
      expect(setQty).not.toHaveBeenCalled()
      qtyInput.simulate("change", mockEvent)
      expect(setQty).toHaveBeenCalled()
      expect(setQty).toHaveBeenCalledWith(mockEvent.target.value)
    })
  })

  describe("sample, click add to cart button", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    it("calls addToCart", () => {
      const story = mountedStories["sample"]
      const { addToCartButton } = story.elements
      const { addToCart } = mockActions
      expect(addToCartButton.length).toBe(1)
      expect(addToCart).not.toHaveBeenCalled()
      addToCartButton.simulate("click")
      expect(addToCart).toHaveBeenCalled()
    })
  })
})
