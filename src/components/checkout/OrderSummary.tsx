import { useTranslation } from "react-i18next"
import type { CartItem } from "../../types/cart"

interface Props {
  cart: CartItem[]
  subtotal: number
  deliveryFee: number
  total: number
}

export default function OrderSummary({ cart, subtotal, deliveryFee, total }: Props) {
  const { t } = useTranslation()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24">
      <h2 className="font-semibold text-gray-800 mb-4">
        {t("checkout.order_summary")}
      </h2>

      <ul className="space-y-3 mb-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between text-sm text-gray-700">
            <span>
              {item.name}{" "}
              <span className="text-gray-400">x{item.quantity}</span>
            </span>
            <span className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t pt-3 space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>{t("cart.subtotal")}</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>{t("checkout.delivery_fee")}</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base pt-2 border-t">
          <span>{t("checkout.total")}</span>
          <span className="text-orange-500">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}