import { useState } from "react"
import { useTranslation } from "react-i18next"
import type { CheckoutForm } from "./DeliveryForm"

interface Props {
  form: CheckoutForm
  total: number
  onBack: () => void
  onConfirm: () => void
}

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim()
}

function formatExpiry(value: string) {
  const clean = value.replace(/\D/g, "").slice(0, 4)
  if (clean.length >= 3) return clean.slice(0, 2) + "/" + clean.slice(2)
  return clean
}

export default function PaymentStep({ form, total, onBack, onConfirm }: Props) {
  const { t } = useTranslation()
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardErrors, setCardErrors] = useState<Record<string, string>>({})
  const [processing, setProcessing] = useState(false)

  function handlePay() {
    const errs: Record<string, string> = {}
    if (cardNumber.replace(/\s/g, "").length < 16) errs.cardNumber = t("checkout.errors.card_invalid")
    if (expiry.length < 5) errs.expiry = t("checkout.errors.expiry_invalid")
    if (cvv.length < 3) errs.cvv = t("checkout.errors.cvv_invalid")
    setCardErrors(errs)
    if (Object.keys(errs).length > 0) return
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      onConfirm()
    }, 2000)
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-5">
      <h2 className="text-lg font-semibold text-gray-800">
        {t("checkout.payment")}
      </h2>

      <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 text-sm text-gray-700">
        <p className="font-medium text-orange-600 mb-1">📍 {t("checkout.deliver_to")}</p>
        <p>{form.name} · {form.phone}</p>
        <p>{form.address}, {form.city}</p>
        {form.notes && (
          <p className="text-gray-400 mt-1">{form.notes}</p>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
          {t("checkout.card_demo")}
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("checkout.card_number")}
          </label>
          <input
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="1234 5678 9012 3456"
            className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition
              ${cardErrors.cardNumber ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-orange-300"}`}
          />
          {cardErrors.cardNumber && (
            <p className="text-red-500 text-xs mt-1">{cardErrors.cardNumber}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("checkout.expiry")}
            </label>
            <input
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              placeholder="MM/AA"
              className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition
                ${cardErrors.expiry ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-orange-300"}`}
            />
            {cardErrors.expiry && (
              <p className="text-red-500 text-xs mt-1">{cardErrors.expiry}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("checkout.cvv")}
            </label>
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="123"
              className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition
                ${cardErrors.cvv ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-orange-300"}`}
            />
            {cardErrors.cvv && (
              <p className="text-red-500 text-xs mt-1">{cardErrors.cvv}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          disabled={processing}
          className="flex-1 border border-gray-300 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition disabled:opacity-50 cursor-pointer"
        >
          {t("checkout.back")}
        </button>
        <button
          onClick={handlePay}
          disabled={processing}
          className="flex-1 bg-orange-500 text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
        >
          {processing ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              {t("checkout.processing")}
            </>
          ) : `${t("checkout.pay")} $${total.toFixed(2)}`}
        </button>
      </div>
    </div>
  )
}