import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

const EMOJIS = ["😍", "😊", "😐", "😞"]

export default function DeliveryRating() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="text-center space-y-3">
      <p className="text-gray-500 text-sm">{t("order_tracking.experience")}</p>
      <div className="flex justify-center gap-2 text-2xl mb-4">
        {EMOJIS.map((emoji) => (
          <button key={emoji} className="hover:scale-125 transition-transform cursor-pointer">
            {emoji}
          </button>
        ))}
      </div>
      <button
        onClick={() => navigate("/restaurants")}
        className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl hover:bg-orange-600 transition cursor-pointer"
      >
        {t("order_tracking.order_again")}
      </button>
    </div>
  )
}