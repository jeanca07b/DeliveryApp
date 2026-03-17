import type { CartsMap } from "../types/cart"

export function getTotalItemsByRestaurant(carts: CartsMap, restaurantId: number): number {
  return (carts[restaurantId]?.items ?? []).reduce(
    (acc, item) => acc + item.quantity, 0
  )
}

export function getTotalPriceByRestaurant(carts: CartsMap, restaurantId: number): number {
  return (carts[restaurantId]?.items ?? []).reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  )
}

export function getTotalItemsAllCarts(carts: CartsMap): number {
  return Object.values(carts).reduce(
    (acc, restaurantCart) =>
      acc + restaurantCart.items.reduce((a, item) => a + item.quantity, 0),
    0
  )
}