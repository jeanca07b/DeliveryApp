import { useTranslation } from "react-i18next"
import { useCart } from "../context/CartContext"

interface Props {
  id: number
  restaurantId: number
  name: string
  description: string
  price: number
  image: string
  restaurantName: string
}

export default function MenuItem({
  id,
  restaurantId,
  name,
  description,
  price,
  image,
  restaurantName,
}: Props) {
  const { addToCart, decreaseFromCart, getCartByRestaurant } = useCart()
  const { t } = useTranslation()

  const cart = getCartByRestaurant(restaurantId)
  const quantity = cart.find((item) => item.id === id)?.quantity ?? 0

  return (
    <div className="flex gap-4 border-b pb-6">
      <img src={image} className="w-24 h-24 object-cover rounded-lg shrink-0" />

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <p className="font-semibold mt-2">${price}</p>
      </div>

      <div className="flex items-center h-fit mt-2">
        {quantity === 0 ? (
          <button
            onClick={() => addToCart({ id, restaurantId, name, price, image, quantity: 1 }, restaurantName)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium cursor-pointer"
          >
            {t("menu_item.add")}
          </button>
        ) : (
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-lg px-2 py-1">
            <button
              onClick={() => decreaseFromCart(restaurantId, id)}
              className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center hover:bg-orange-600 transition cursor-pointer"
            >
              −
            </button>
            <span className="font-semibold text-orange-500 w-4 text-center">
              {quantity}
            </span>
            <button
              onClick={() => addToCart({ id, restaurantId, name, price, image, quantity: 1 }, restaurantName)}
              className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center hover:bg-orange-600 transition cursor-pointer"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  )
}