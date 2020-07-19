import { Controller } from '../types'
import * as model from '../models/products.model'

export const getProducts: Controller = async (req, res, next) => {
  try {
    const { query } = req
    const products = await model.allProducts(query)
    res.status(200).send(products)
  } catch (error) {
    next(error)
  }
}

export const getProduct: Controller = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await model.productById(id)
    res.status(200).send(product)
  } catch (error) {
    next(error)
  }
}
