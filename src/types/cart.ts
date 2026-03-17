export interface CartItem {
  id: number
  restaurantId: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface RestaurantCart {
  restaurantId: number
  restaurantName: string
  items: CartItem[]
}

export type CartsMap = Record<number, RestaurantCart>