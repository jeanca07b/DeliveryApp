import { createContext, useContext, useState, useEffect } from "react"
import type { CartItem, CartsMap } from "../types/cart"
import {
  loadCarts,
  saveCarts,
  loadActiveCartId,
  saveActiveCartId,
} from "../utils/cartStorage"
import {
  getTotalItemsByRestaurant,
  getTotalPriceByRestaurant,
} from "../utils/cartCalculations"

interface CartContextType {
  carts: CartsMap
  activeCartId: number | null
  setActiveCartId: (id: number) => void
  addToCart: (item: CartItem, restaurantName: string) => void
  removeFromCart: (restaurantId: number, itemId: number) => void
  decreaseFromCart: (restaurantId: number, itemId: number) => void
  clearCart: (restaurantId: number) => void
  clearAllCarts: () => void
  getCartByRestaurant: (restaurantId: number) => CartItem[]
  getTotalItemsByRestaurant: (restaurantId: number) => number
  getTotalPriceByRestaurant: (restaurantId: number) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [carts, setCarts] = useState<CartsMap>(loadCarts)
  const [activeCartId, setActiveCartIdState] = useState<number | null>(loadActiveCartId)

  useEffect(() => { saveCarts(carts) }, [carts])
  useEffect(() => { saveActiveCartId(activeCartId) }, [activeCartId])

  const setActiveCartId = (id: number) => setActiveCartIdState(id)

  const addToCart = (item: CartItem, restaurantName: string) => {
    setActiveCartIdState(item.restaurantId)
    setCarts((prev) => {
      const existing = prev[item.restaurantId]
      const currentItems = existing?.items ?? []
      const existingItem = currentItems.find((i) => i.id === item.id)
      const updatedItems = existingItem
        ? currentItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...currentItems, { ...item, quantity: 1 }]
      return {
        ...prev,
        [item.restaurantId]: {
          restaurantId: item.restaurantId,
          restaurantName,
          items: updatedItems,
        },
      }
    })
  }

  const removeFromCart = (restaurantId: number, itemId: number) => {
    setCarts((prev) => {
      const cart = prev[restaurantId]
      if (!cart) return prev
      const updatedItems = cart.items.filter((i) => i.id !== itemId)
      if (updatedItems.length === 0) {
        const { [restaurantId]: _, ...rest } = prev
        if (activeCartId === restaurantId) setActiveCartIdState(null)
        return rest
      }
      return { ...prev, [restaurantId]: { ...cart, items: updatedItems } }
    })
  }

  const decreaseFromCart = (restaurantId: number, itemId: number) => {
    setCarts((prev) => {
      const cart = prev[restaurantId]
      if (!cart) return prev
      const updatedItems = cart.items
        .map((i) => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i)
        .filter((i) => i.quantity > 0)
      if (updatedItems.length === 0) {
        const { [restaurantId]: _, ...rest } = prev
        if (activeCartId === restaurantId) setActiveCartIdState(null)
        return rest
      }
      return { ...prev, [restaurantId]: { ...cart, items: updatedItems } }
    })
  }

  const clearCart = (restaurantId: number) => {
    setCarts((prev) => {
      const { [restaurantId]: _, ...rest } = prev
      return rest
    })
    if (activeCartId === restaurantId) setActiveCartIdState(null)
  }

  const clearAllCarts = () => {
    setCarts({})
    setActiveCartIdState(null)
  }

  const getCartByRestaurant = (restaurantId: number): CartItem[] =>
    carts[restaurantId]?.items ?? []

  return (
    <CartContext.Provider value={{
      carts,
      activeCartId,
      setActiveCartId,
      addToCart,
      removeFromCart,
      decreaseFromCart,
      clearCart,
      clearAllCarts,
      getCartByRestaurant,
      getTotalItemsByRestaurant: (id) => getTotalItemsByRestaurant(carts, id),
      getTotalPriceByRestaurant: (id) => getTotalPriceByRestaurant(carts, id),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}