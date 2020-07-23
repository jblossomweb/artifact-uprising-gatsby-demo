import { resolve } from "path"
import { createRemoteFileNode } from "gatsby-source-filesystem"

import { GatsbyCreatePages } from "./types"
import slugify from "../src/helpers/slugify"

export const createPages: (
  createRemoteFileNode: Function
) => GatsbyCreatePages = createRemoteFileNode => async ({
  graphql,
  store,
  cache,
  actions: { createPage, createNode },
  createNodeId,
}) => {
  const {
    data: {
      postgres: { products },
    },
  } = await graphql(`
    {
      postgres {
        products: allProductsList {
          id
          title
          imageUrl
        }
      }
    }
  `)

  const processProduct = async (product: any) => {
    const path = `/product/${product.id}/${slugify(product.title)}`
    const imageNode = await createRemoteFileNode({
      url: product.imageUrl,
      store,
      cache,
      createNode,
      createNodeId,
      reporter: {},
    })

    await createPage({
      path,
      component: resolve("./src/page-templates/product/index.tsx"),
      context: {
        productId: product.id,
        imageId: imageNode.id,
      },
    })
  }

  await Promise.all(products.map(processProduct))
}

export default createPages(createRemoteFileNode)
