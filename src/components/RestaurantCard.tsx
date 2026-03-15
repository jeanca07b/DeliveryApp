import { Link } from "react-router-dom"

type Props = {
  id: number
  name: string
  image: string
  rating: number
}

export default function RestaurantCard({ id, name, image, rating }: Props) {
  return (

    <Link to={`/restaurants/${id}`}>

      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover"
        />

        <div className="p-4">

          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <div className="flex items-center mt-2 text-yellow-500 font-medium">
            ⭐ {rating}
          </div>

          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer">
            Ver menú
          </button>

        </div>

      </div>

    </Link>
  )
}