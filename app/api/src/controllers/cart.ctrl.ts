import { Controller } from '../types'
import * as cartModel from '../models/cart.model'

export const getCartTotals: Controller = async (req, res, next) => {
  const { cart } = req.session!
  const totals = await cartModel.getTotals(cart).catch(next)
  res.status(200)
  res.send(totals)
}

export const addToCart: Controller = async (req, res, next) => {
  const item = req.body
  const { cart } = req.session!
  req.session!.cart = await cartModel.addItem(cart, item).catch(next)
  const totals = await cartModel.getTotals(req.session!.cart).catch(next)
  res.status(200)
  res.send(totals)
}

export const removeFromCart: Controller = async (req, res, next) => {
  const item = req.body
  const { cart } = req.session!
  req.session!.cart = await cartModel.removeItem(cart, item).catch(next)
  const totals = await cartModel.getTotals(req.session!.cart).catch(next)
  res.status(200)
  res.send(totals)
}

export const emptyCart: Controller = async (req, res, next) => {
  const { cart } = req.session!
  req.session!.cart = await cartModel.removeAllItems(cart).catch(next)
  const totals = await cartModel.getTotals(req.session!.cart).catch(next)
  res.status(200)
  res.send(totals)
}
