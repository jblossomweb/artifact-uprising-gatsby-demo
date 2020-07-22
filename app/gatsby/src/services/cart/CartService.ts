import { AxiosInstance } from "axios"
import { Service, ServiceRequest } from "./types"

class CartService implements Service {
  private apiUrl: string
  private axios: AxiosInstance

  constructor(apiUrl: string, axios: AxiosInstance) {
    this.apiUrl = apiUrl
    this.axios = axios
  }

  public getCart() {
    const headers = {
      "Content-Type": "application/json",
    }
    const endpoint = `/cart`
    const url = `${this.apiUrl}${endpoint}`
    try {
      return this.axios.get(url, {
        headers,
        withCredentials: true,
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public addToCart(item: ServiceRequest["body"]) {
    const headers = {
      "Content-Type": "application/json",
    }
    const endpoint = `/cart`
    const url = `${this.apiUrl}${endpoint}`
    try {
      return this.axios.post(url, item, {
        headers,
        withCredentials: true,
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public removeFromCart(item: ServiceRequest["body"]) {
    const headers = {
      "Content-Type": "application/json",
    }
    const endpoint = `/cart`
    const url = `${this.apiUrl}${endpoint}`
    try {
      return this.axios.delete(url, {
        headers,
        data: item,
        withCredentials: true,
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public clearCart() {
    const headers = {
      "Content-Type": "application/json",
    }
    const endpoint = `/cart`
    const url = `${this.apiUrl}${endpoint}`
    try {
      return this.axios({
        method: "PURGE",
        url,
        headers,
        withCredentials: true,
      } as any)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default CartService
