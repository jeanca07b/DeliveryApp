import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useCart } from "../context/CartContext"
import type { CartItem } from "../types/cart"
import StepBadge from "../components/checkout/StepBadge"
import DeliveryForm from "../components/checkout/DeliveryForm"
import PaymentStep from "../components/checkout/PaymentStep"
import OrderSummary from "../components/checkout/OrderSummary"
import type { CheckoutForm } from "../components/checkout/DeliveryForm"

const INITIAL_FORM: CheckoutForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  notes: "",
}

const DELIVERY_FEE = 2.99

export default function Checkout() {
  const { carts, clearCart, activeCartId } = useCart()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [form, setForm] = useState<CheckoutForm>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<CheckoutForm>>({})
  const [step, setStep] = useState<"form" | "payment">("form")

  const resolvedCartId = activeCartId ?? Object.keys(carts).map(Number)[0] ?? null
  const activeCart = resolvedCartId ? carts[resolvedCartId] : null
  const cartItems: CartItem[] = activeCart?.items ?? []

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const total = subtotal + DELIVERY_FEE

  if (cartItems.length === 0) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h2 className="text-2xl font-bold mb-2">{t("checkout.empty_title")}</h2>
        <p className="text-gray-500 mb-6">{t("checkout.empty_subtitle")}</p>
        <button
          onClick={() => navigate("/restaurants")}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          {t("checkout.see_restaurants")}
        </button>
      </section>
    )
  }

  function validate(): boolean {
    const newErrors: Partial<CheckoutForm> = {}
    if (!form.name.trim()) newErrors.name = t("checkout.errors.name_required")
    if (!form.email.trim()) newErrors.email = t("checkout.errors.email_required")
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = t("checkout.errors.email_invalid")
    if (!form.phone.trim()) newErrors.phone = t("checkout.errors.phone_required")
    if (!form.address.trim()) newErrors.address = t("checkout.errors.address_required")
    if (!form.city.trim()) newErrors.city = t("checkout.errors.city_required")
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof CheckoutForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleContinue() {
    if (validate()) setStep("payment")
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">{t("checkout.title")}</h1>

      {activeCart && (
        <p className="text-gray-500 text-sm mb-6">
          {t("checkout.order_from")}{" "}
          <span className="font-semibold text-orange-500">
            {activeCart.restaurantName}
          </span>
        </p>
      )}

      <div className="flex items-center gap-3 mb-10">
        <StepBadge
          number={1}
          label={t("checkout.delivery_data")}
          active={step === "form"}
          done={step === "payment"}
        />
        <div className="flex-1 h-px bg-gray-200" />
        <StepBadge
          number={2}
          label={t("checkout.payment")}
          active={step === "payment"}
          done={false}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {step === "form" ? (
            <DeliveryForm
              form={form}
              errors={errors}
              onChange={handleChange}
              onContinue={handleContinue}
            />
          ) : (
            <PaymentStep
              form={form}
              total={total}
              onBack={() => setStep("form")}
              onConfirm={() => {
                if (resolvedCartId) clearCart(resolvedCartId)
                navigate("/order-tracking")
              }}
            />
          )}
        </div>
        <aside>
          <OrderSummary
            cart={cartItems}
            subtotal={subtotal}
            deliveryFee={DELIVERY_FEE}
            total={total}
          />
        </aside>
      </div>
    </section>
  )
}