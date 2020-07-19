import memoize from 'lodash.memoize'
import commaNumber from 'comma-number'
import { Model } from '../types'
import { ValidationError } from '../errors'
import { productById, productsByIds } from '../models/products.model'
import * as Product from '../entities/product.entity'
import * as CartItem from '../entities/cart-item.entity'

export const getItems: Model = async (cart: CartItem.Props[]) => {
  if (!cart) {
    cart = []
  }
  return cart
}

export const addItem: Model = async (cart: CartItem.Props[], item: CartItem.Props) => {
  const validation = CartItem.schema.validate(item)
  if (validation.error) {
    const { message } = validation.error
    throw new ValidationError(message)
  }

  await productById(item.id).catch(({ message }) => {
    throw new ValidationError(message)
  })
  
  if (!cart) {
    cart = []
  }
  const index: number = findItemIndex(cart, item)
  if (index > -1) {
    cart[index].qty += item.qty
    if (cart[index].qty <= 0) {
      cart.splice(index, 1)
    }
  } else {
    cart.push(item)
  }

  return cart
}

export const removeItem: Model = async (cart: CartItem.Props[], item: CartItem.Props) => {
  const validation = CartItem.schema.validate(item)
  if (validation.error) {
    const { message } = validation.error
    throw new ValidationError(message)
  }
  if (!cart) {
    cart = []
  }
  const index: number = findItemIndex(cart, item)
  if (index > -1) {
    cart[index].qty -= item.qty
    if (cart[index].qty <= 0) {
      cart.splice(index, 1)
    }
  }

  return cart
}

export const removeAllItems: Model = (cart: CartItem.Props[]) => {
  cart = []
  return Promise.resolve(cart)
}

export const getTotals: Model = async (cart: CartItem.Props[]) => {
  if (!cart) {
    cart = []
  }
  const $ = (n: string | number) => `$${commaNumber(Number(n).toFixed(2))}`
  const numeric = (n: string) => Number(n.replace(/\$/g,'').replace(/,/g,''))
  const ids = cart.map(({ id }) => id)
  const products: Product.Props[] = await productsByIds(ids)
  const product = memoize((id: number) => products.find(p => id === p.id))
  const items = cart
    .filter(item => !!product(item.id))
    .map(item => ({
      id: product(item.id)!.id,
      title: product(item.id)!.title,
      price: $(product(item.id)!.price),
      qty: item.qty,
      ext: $(product(item.id)!.price * item.qty),
    }))
  const total: string = $(items.reduce((acc, item) => acc + numeric(item.ext), 0))
  const total_numeric: number = numeric(total)
  return {
    items,
    total,
    total_numeric,
  }
}

const findItemIndex = memoize((cart: CartItem.Props[], item: CartItem.Props) => cart.findIndex(
  (existing: CartItem.Props) => item.id === existing.id
))
