import type { Restaurant } from "../types/restaurant"

export function searchRestaurants(
  restaurants: Restaurant[],
  query: string
) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  )
}