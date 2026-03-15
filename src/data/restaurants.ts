import type { Restaurant } from "../types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza House",
    image: "/images/pizza.jpg",
    rating: 4.8,
    category: "Pizza",
    deliveryTime: 25
  },
  {
    id: 2,
    name: "Burger City",
    image: "/images/burger.jpg",
    rating: 4.7,
    category: "Burgers",
    deliveryTime: 20
  },
  {
    id: 3,
    name: "Sushi World",
    image: "/images/sushi.jpg",
    rating: 4.9,
    category: "Sushi",
    deliveryTime: 30
  }
]