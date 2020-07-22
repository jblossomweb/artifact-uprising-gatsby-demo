import axios, { AxiosInstance } from "axios"
import Class from "./CartService"
import { Service } from "./types"

export const CartService = Class
export type CartServiceInterface = Service

export const mockCartService = (mockAxios: AxiosInstance) => {
  return new CartService("", mockAxios)
}

export default () => {
  const { GATSBY_CART_API_URL } = process.env
  if (!GATSBY_CART_API_URL) throw new Error("cart api is not set")
  return new CartService(GATSBY_CART_API_URL, axios)
}
