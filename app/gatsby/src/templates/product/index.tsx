import React from "react"
import { graphql, PageProps } from "gatsby"
import { FluidObject } from "gatsby-image"
import ProductPage from "./ProductPage"


export interface Data {
  file: {
    image: {
      fluid: FluidObject
    }
  }
  db: {
    product: {
      title: string
      description: string
      imageUrl: string
      vendor: {
        name: string
      }
    }
  }
}

export const query = graphql`
  query($productId: Int!, $imageId: String!) {
    file: file(id: { eq: $imageId }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          aspectRatio
          src
          srcSet
          sizes
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
    }
    db: postgres {
      product: productById(id: $productId) {
        title
        description
        imageUrl
        vendor: vendorByVendorId {
          name
        }
      }
    }
  }
`

export default ({
  data: {
    file: { image },
    db: { product },
  },
}: {
  data: Data
}) => <ProductPage image={image} product={product} />
