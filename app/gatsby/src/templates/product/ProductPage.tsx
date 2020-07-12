import React from "react"
import Img from "gatsby-image"
import Layout from "../../layouts/default"
import { Data } from "./index"

export interface Props {
  image: Data["file"]["image"]
  product: Data["db"]["product"]
}

const ProductPage: React.FC<Props> = ({ image, product }) => (
  <Layout>
    <div>
      <h1>{product.title}</h1>
      <h3>{product.vendor.name}</h3>
      <h3>
        <Img fluid={image.fluid} />
      </h3>
      <p>{product.description}</p>
    </div>
  </Layout>
)

export default ProductPage
