export interface MenuItem {
  id: number
  restaurantId: number
  name: string
  description: string
  price: number
  image: string
}

export const menu = [

  {
    id: 1,
    restaurantId: 1,
    name: "Pepperoni Pizza",
    description: "Pizza clásica con pepperoni y queso mozzarella",
    price: 12.99,
    image: "/images/pepperoni.jpg"
  },

  {
    id: 2,
    restaurantId: 1,
    name: "Cheese Pizza",
    description: "Pizza con salsa de tomate y queso",
    price: 10.99,
    image: "/images/cheese-pizza.jpg"
  },

  {
    id: 3,
    restaurantId: 2,
    name: "Classic Burger",
    description: "Hamburguesa con carne, queso y lechuga",
    price: 9.99,
    image: "/images/burger.jpg"
  },

  {
    id: 4,
    restaurantId: 2,
    name: "Double Burger",
    description: "Hamburguesa doble carne con queso",
    price: 12.99,
    image: "/images/double-burger.jpg"
  },

  {
    id: 5,
    restaurantId: 3,
    name: "California Roll",
    description: "Cangrejo, aguacate y pepino",
    price: 8.99,
    image: "/images/california-roll.jpg"
  },

  {
    id: 6,
    restaurantId: 3,
    name: "Salmon Sushi",
    description: "Sushi fresco de salmón",
    price: 11.99,
    image: "/images/salmon-sushi.jpg"
  }

]