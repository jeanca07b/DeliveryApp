import { useTranslation } from "react-i18next"
import type { TrackingStep } from "../../hooks/useOrderTracking"

interface Props {
  steps: TrackingStep[]
  currentStep: number
  isDelivered: boolean
}


const ORDER_NUMBER = "#FE-" + (Math.floor(Math.random() * 90000) + 10000)

export default function OrderInfo({ steps, currentStep, isDelivered }: Props) {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 rounded-2xl p-5 mb-8 text-sm text-gray-600 space-y-2">
      <div className="flex justify-between">
        <span>{t("order_tracking.order_number")}</span>
        <span className="font-mono font-semibold text-gray-800">{ORDER_NUMBER}</span>
      </div>
      <div className="flex justify-between">
        <span>{t("order_tracking.payment_method")}</span>
        <span className="font-medium text-gray-800">{t("order_tracking.payment_demo")}</span>
      </div>
      <div className="flex justify-between">
        <span>{t("order_tracking.status")}</span>
        <span className={`font-semibold ${isDelivered ? "text-green-500" : "text-orange-500"}`}>
          {steps[currentStep - 1]?.label}
        </span>
      </div>
    </div>
  )
}