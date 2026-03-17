import { useTranslation } from "react-i18next"
import { DRIVER } from "../../hooks/useOrderTracking"

export default function DriverCard() {
  const { t } = useTranslation()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4 mb-8">
      <img
        src={DRIVER.photo}
        alt={DRIVER.name}
        className="w-14 h-14 rounded-full bg-orange-100"
      />
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{DRIVER.name}</p>
        <p className="text-sm text-gray-500">{DRIVER.vehicle} · {DRIVER.plate}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-sm font-medium text-gray-700">{DRIVER.rating}</span>
        </div>
      </div>
      <a
        href={"tel:" + DRIVER.phone}
        className="bg-orange-50 border border-orange-200 text-orange-500 px-4 py-2 rounded-xl text-sm font-medium hover:bg-orange-100 transition"
      >
        {t("order_tracking.call")}
      </a>
    </div>
  )
}