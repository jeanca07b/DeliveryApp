import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { restaurants } from "../data/restaurants"
import { menu } from "../data/menu"
import MenuItem from "../components/MenuItem"
import CartFloatingBar from "../components/cart/CartFloatingBar"

export default function RestaurantDetail() {
  const { id } = useParams()
  const { t } = useTranslation()

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        {t("restaurant_detail.not_found")}
      </div>
    )
  }

  const restaurantMenu = menu.filter(
    (item) => item.restaurantId === restaurant.id
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <img src={restaurant.image} className="w-full h-64 object-cover rounded-xl" />

      <h1 className="text-4xl font-bold mt-6">{restaurant.name}</h1>

      <p className="text-gray-500 mt-2">
        ⭐ {restaurant.rating} • {restaurant.deliveryTime} min
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-6">
        {t("restaurant_detail.menu_title")}
      </h2>

      <div className="space-y-6">
        {restaurantMenu.map((item) => (
          <MenuItem key={item.id} {...item} restaurantName={restaurant.name} />
        ))}
      </div>

      <CartFloatingBar restaurantId={restaurant.id} />

    </section>
  )
}