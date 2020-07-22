export interface Cart {
  items: CartItem[]
  count: number
  total: string
  total_numeric: number
}

export interface CartItem {
  id: number
  title: string
  price: string
  qty: number
  ext: string
}
