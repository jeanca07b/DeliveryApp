import { useCart } from "../context/CartContext"

interface Props {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  image
}: Props) {

  const { addToCart } = useCart()

  const handleAdd = () => {
    addToCart({
      id,
      name,
      price,
      image,
      quantity: 1
    })
  }

  return (
    <div className="flex gap-4 border-b pb-6">

      <img
        src={image}
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="flex-1">

        <h3 className="font-semibold text-lg">
          {name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {description}
        </p>

        <p className="font-semibold mt-2">
          ${price}
        </p>

      </div>

      <button
        onClick={handleAdd}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 h-fit"
      >
        Add
      </button>

    </div>
  )
}