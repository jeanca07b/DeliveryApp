import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import type { RestaurantCart } from "../../types/cart"

interface Props {
  restaurantCart: RestaurantCart
}

export default function RestaurantCartCard({ restaurantCart }: Props) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { removeFromCart, decreaseFromCart, addToCart, clearCart, setActiveCartId } = useCart()
  const [openOptions, setOpenOptions] = useState(false)

  const { restaurantId, restaurantName, items } = restaurantCart
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

  
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h2 className="font-bold text-lg text-gray-800">{restaurantName}</h2>
          <p className="text-sm text-gray-400">{totalItems} item{totalItems > 1 ? "s" : ""}</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpenOptions(!openOptions)}
            className="text-gray-400 hover:text-gray-600 font-bold text-xl px-2 transition cursor-pointer"
          >
            ···
          </button>
          {openOptions && (
            <div className="absolute right-0 top-8 bg-white border border-gray-100 rounded-xl shadow-xl p-2 min-w-40 z-10">
              <button
                onClick={() => {
                  clearCart(restaurantId)
                  setOpenOptions(false)
                }}
                className="w-full text-left text-sm text-red-500 px-3 py-2 hover:bg-red-50 rounded-lg cursor-pointer"
              >
                {t("cart.clear_cart")}
              </button>
            </div>
          )}
        </div>
      </div>


      <div className="px-5 py-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image}
              className="w-16 h-16 object-cover rounded-xl shrink-0"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-400">${item.price.toFixed(2)} c/u</p>
            </div>

            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-2 py-1">
              <button
                onClick={() => decreaseFromCart(restaurantId, item.id)}
                className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center hover:bg-orange-600 transition cursor-pointer"
              >
                −
              </button>
              <span className="font-semibold text-orange-500 w-4 text-center text-sm">
                {item.quantity}
              </span>
              <button
                onClick={() => addToCart({ ...item }, restaurantName)}
                className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center hover:bg-orange-600 transition cursor-pointer"
              >
                +
              </button>
            </div>

            <p className="font-semibold text-gray-800 w-16 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(restaurantId, item.id)}
              className="text-gray-300 hover:text-red-400 transition text-lg cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>


      <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{t("cart.subtotal")}</p>
          <p className="font-bold text-lg text-gray-800">${subtotal.toFixed(2)}</p>
        </div>
        
        <button
          onClick={() => {
            setActiveCartId(restaurantId)
            navigate("/checkout")
          }}
          className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition cursor-pointer"
        >
          {t("cart.checkout")}
        </button>
      </div>

    </div>
  )
}