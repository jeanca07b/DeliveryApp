import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { useCart } from "../../context/CartContext"

interface Props {
  restaurantId: number
}

export default function CartFloatingBar({ restaurantId }: Props) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { carts, getTotalItemsByRestaurant, getTotalPriceByRestaurant } = useCart()
  const [showOptions, setShowOptions] = useState(false)

  const totalItems = getTotalItemsByRestaurant(restaurantId)
  const totalPrice = getTotalPriceByRestaurant(restaurantId)

  const otherCarts = Object.values(carts).filter(
    (c) => c.restaurantId !== restaurantId
  )

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 space-y-2">

      {/* Otros carritos activos */}
      {otherCarts.map((otherCart) => {
        const otherTotal = otherCart.items.reduce((acc, i) => acc + i.price * i.quantity, 0)
        const otherItems = otherCart.items.reduce((acc, i) => acc + i.quantity, 0)
        return (
          <div
            key={otherCart.restaurantId}
            className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 flex items-center justify-between shadow-md"
          >
            <div>
              <p className="text-xs text-gray-400">{t("cart.other_cart")}</p>
              <p className="text-sm font-semibold text-gray-700">
                {otherCart.restaurantName}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {otherItems} item{otherItems > 1 ? "s" : ""} · ${otherTotal.toFixed(2)}
              </span>
              <button
                onClick={() => navigate("/cart")}
                className="text-orange-500 text-sm font-semibold hover:underline cursor-pointer"
              >
                {t("restaurant_detail.view_cart")}
              </button>
            </div>
          </div>
        )
      })}

      {/* Carrito del restaurante actual */}
      <div className="w-full bg-orange-500 text-white rounded-2xl px-4 py-4 flex items-center justify-between shadow-xl">
        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-3 flex-1 cursor-pointer"
        >
          <span className="bg-orange-600 text-white text-sm font-bold w-7 h-7 rounded-lg flex items-center justify-center">
            {totalItems}
          </span>
          <span className="font-semibold">{t("restaurant_detail.view_cart")}</span>
        </button>
        <div className="flex items-center gap-3">
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
          <div className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="text-white font-bold text-lg px-1 hover:opacity-75 transition cursor-pointer"
            >
              ···
            </button>
            {showOptions && (
              <div className="absolute bottom-10 right-0 bg-white rounded-xl shadow-xl p-2 min-w-36">
                <button
                  onClick={() => { navigate("/cart"); setShowOptions(false) }}
                  className="w-full text-left text-sm text-gray-700 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  {t("restaurant_detail.view_cart")}
                </button>
                <button
                  onClick={() => { navigate("/checkout"); setShowOptions(false) }}
                  className="w-full text-left text-sm text-gray-700 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  {t("checkout.title")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}