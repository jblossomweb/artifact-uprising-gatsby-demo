import { createPages } from "./create-pages"
import mockGraphQLResponse from "../__mocks__/query/product-page-template.query.json"

const mockImageNode = { id: "mockImageNodeId" }

const mockCreateRemoteFileNode = jest
  .fn()
  .mockReturnValue(Promise.resolve(mockImageNode))

const mockArgs = {
  graphql: jest.fn().mockReturnValue(Promise.resolve(mockGraphQLResponse)),
  store: {},
  cache: {},
  actions: {
    createNode: jest.fn(),
    createPage: jest.fn(),
    deletePage: jest.fn(),
    createRedirect: jest.fn(),
  },
  createNodeId: jest.fn(),
}

describe("runners/create-pages", () => {
  it("should query graphql", () => {
    jest.clearAllMocks()
    expect(mockArgs.graphql).not.toHaveBeenCalled()
    createPages(mockCreateRemoteFileNode)(mockArgs)
    expect(mockArgs.graphql).toHaveBeenCalled()
    expect(mockArgs.graphql).toHaveBeenCalledWith(
      `
    {
      postgres {
        products: allProductsList {
          id
          title
          imageUrl
        }
      }
    }
  `
    )
  })

  it("should create a remote file node for each product image", async () => {
    jest.clearAllMocks()
    const { products } = mockGraphQLResponse.data.postgres
    expect(mockCreateRemoteFileNode).not.toHaveBeenCalled()
    await createPages(mockCreateRemoteFileNode)(mockArgs)
    expect(mockCreateRemoteFileNode).toHaveBeenCalled()
    expect(mockCreateRemoteFileNode).toHaveBeenCalledTimes(products.length)
  })

  it("should create a page for each product", async () => {
    jest.clearAllMocks()
    const { products } = mockGraphQLResponse.data.postgres
    const { createPage } = mockArgs.actions
    expect(createPage).not.toHaveBeenCalled()
    await createPages(mockCreateRemoteFileNode)(mockArgs)
    expect(createPage).toHaveBeenCalled()
    expect(createPage).toHaveBeenCalledTimes(products.length)
  })
})
