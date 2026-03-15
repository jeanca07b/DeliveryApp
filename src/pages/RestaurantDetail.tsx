import { useParams } from "react-router-dom"
import { restaurants } from "../data/restaurants"
import { menu } from "../data/menu"
import MenuItem from "../components/MenuItem"

export default function RestaurantDetail() {

  const { id } = useParams()

  const restaurant = restaurants.find(
    (r) => r.id === Number(id)
  )

  if (!restaurant) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        Restaurante no encontrado
      </div>
    )
  }

  const restaurantMenu = menu.filter(
    (item) => item.restaurantId === restaurant.id
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <img
        src={restaurant.image}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {restaurant.name}
      </h1>

      <p className="text-gray-500 mt-2">
        ⭐ {restaurant.rating} • {restaurant.deliveryTime}
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-6">
        Menú
      </h2>

      <div className="space-y-6">

        {restaurantMenu.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
          />
        ))}

      </div>

    </section>
  )
}