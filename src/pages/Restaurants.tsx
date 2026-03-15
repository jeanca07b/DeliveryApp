import { restaurants } from "../data/restaurants"
import RestaurantCard from "../components/RestaurantCard"
import { searchRestaurants } from "../utils/searchRestaurants"

interface Props {
  query?: string
}

export default function Restaurants({ query = "" }: Props) {

  const filteredRestaurants = searchRestaurants(restaurants, query)

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Restaurantes
      </h2>

      {filteredRestaurants.length === 0 ? (
        <p className="text-gray-500">
          No se encontraron restaurantes.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}

        </div>
      )}

    </section>
  )
}