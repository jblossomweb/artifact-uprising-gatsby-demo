import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

import slugify from "../helpers/slugify"
import Layout from "../layouts/default"
import SEO from "../components/seo"

export type Data = {
  db: {
    products: {
      id: number
      title: string
      imageUrl: string
      price: number
    }[]
  }
  page: {
    pageNodes: {
      context: {
        imageId: string
        productId: number
      }
    }[]
  }
  file: {
    fileNodes: {
      id: string
      image: {
        fluid: FluidObject
      }
    }[]
  }
}

export interface Props extends Partial<PageProps<Data>> {
  data: Data
}

const IndexPage: React.FC<Props> = ({
  data: {
    db: { products },
    page: { pageNodes },
    file: { fileNodes },
  }
}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100%`, display: `flex`, flexWrap: `wrap` }}>
      {products.map(product => {
        const path = `/product/${product.id}/${slugify(product.title)}`
        const page = pageNodes.find(({ context }) => context.productId === product.id)
        const { image } = fileNodes.find(({ id }) => id === page?.context.imageId)!
        return (
          <div key={product.id} style={{ width: `280px`, marginBottom: `1.45rem`, marginRight: `1.45rem` }}>
            <div style={{ maxWidth: `280px`, maxHeight: `280px`, marginBottom: `1.45rem` }}>
              <Link to={path}>
                <Img fluid={image.fluid} />
              </Link>
            </div>
            <div style={{ width: `100%`, display: `flex`, justifyContent: `space-between` }}>
              <h6>
                {product.title}
              </h6>
              <h6>
                ${product.price.toFixed(2)}
              </h6>
            </div>
            <div style={{ width: `100%` }}>
              <button style={{ width: `100%`, cursor: `pointer`}}>
                Add To Cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    db: postgres {
      products: allProductsList {
        id
        title
        imageUrl
        price
      }
    }
    page: allSitePage(filter: {context: {productId: { ne: null }}}) {
      pageNodes: nodes {
        context {
          imageId
          productId
        }
      }
    }
    file: allFile(filter: {dir: { ne: "/gatsby/src/images"}, extension: {in: ["png", "jpg", "gif"]}}) {
      fileNodes: nodes {
        id
        image: childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            aspectRatio
            src
            srcSet
            sizes
            base64
            tracedSVG
            srcSetWebp
          }
        }
      }
    }
  }
`

export default IndexPage
