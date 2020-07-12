import { resolve } from "path"
import { createRemoteFileNode } from "gatsby-source-filesystem"

import { GatsbyCreatePages } from "./types"
import slugify from "../src/helpers/slugify"

const createPages: GatsbyCreatePages = async ({
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

  for (let i = 0; i < products.length; i++) {
    const product = products[i]
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
      component: resolve("./src/templates/product/index.tsx"),
      context: {
        productId: product.id,
        imageId: imageNode.id,
      },
    })
  }
}

export default createPages
