import { AxiosResponse } from "axios"
import { Cart, CartItem } from "../../types"

export interface ApiError {
  type: string
  message: string
  status: number
}

export interface ServiceRequest {
  body?: {
    id: CartItem["id"]
    qty: CartItem["qty"]
  }
}

export type ServiceResponse = AxiosResponse<Cart | ApiError>

export interface Service {
  getCart: () => Promise<ServiceResponse>
  addToCart: (item: ServiceRequest["body"]) => Promise<ServiceResponse>
  removeFromCart: (item: ServiceRequest["body"]) => Promise<ServiceResponse>
  clearCart: () => Promise<ServiceResponse>
}
