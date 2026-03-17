import type { CartsMap } from "../types/cart"

const CARTS_KEY = "foodexpress_carts"
const ACTIVE_CART_KEY = "foodexpress_active_cart"

export function loadCarts(): CartsMap {
  try {
    const stored = localStorage.getItem(CARTS_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function saveCarts(carts: CartsMap): void {
  localStorage.setItem(CARTS_KEY, JSON.stringify(carts))
}

export function loadActiveCartId(): number | null {
  try {
    const stored = localStorage.getItem(ACTIVE_CART_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function saveActiveCartId(id: number | null): void {
  localStorage.setItem(ACTIVE_CART_KEY, JSON.stringify(id))
}