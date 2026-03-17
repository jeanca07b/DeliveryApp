import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import RestaurantCartCard from "../components/cart/RestaurantCartCard"

export default function Cart() {
  const { carts } = useCart()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const cartList = Object.values(carts)

  if (cartList.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h2 className="text-2xl font-bold mb-2">{t("cart.empty_title")}</h2>
        <p className="text-gray-500 mb-6">{t("cart.empty_subtitle")}</p>
        <button
          onClick={() => navigate("/restaurants")}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          {t("cart.see_restaurants")}
        </button>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">{t("cart.title")}</h1>
      <div className="space-y-8">
        {cartList.map((restaurantCart) => (
          <RestaurantCartCard
            key={restaurantCart.restaurantId}
            restaurantCart={restaurantCart}
          />
        ))}
      </div>
    </section>
  )
}