import { useTranslation } from "react-i18next"
import { useOrderTracking } from "../hooks/useOrderTracking"
import TrackingMap from "../components/order-tracking/TrackingMap"
import DriverCard from "../components/order-tracking/DriverCard"
import TrackingSteps from "../components/order-tracking/TrackingSteps"
import OrderInfo from "../components/order-tracking/OrderInfo"
import DeliveryRating from "../components/order-tracking/DeliveryRating"

export default function OrderTracking() {
  const { t } = useTranslation()
  const { currentStep, eta, driverPos, route, steps, isDelivered, isOnTheWay } = useOrderTracking()

  return (
    <section className="max-w-2xl mx-auto px-6 py-12">

      <div className="text-center mb-10">
        <p className="text-5xl mb-3">{isDelivered ? "🎉" : "🛵"}</p>
        <h1 className="text-3xl font-bold mb-1">
          {isDelivered ? t("order_tracking.delivered_title") : t("order_tracking.title")}
        </h1>
        {!isDelivered && (
          <p className="text-gray-500 text-sm">
            {t("order_tracking.eta")}:{" "}
            <span className="font-semibold text-orange-500">
              {eta} {t("order_tracking.minutes")}
            </span>
          </p>
        )}
      </div>

      {isOnTheWay && <TrackingMap driverPos={driverPos} route={route} isDelivered={isDelivered} />}
      {isOnTheWay && <DriverCard />}

      <TrackingSteps steps={steps} currentStep={currentStep} isDelivered={isDelivered} />
      <OrderInfo steps={steps} currentStep={currentStep} isDelivered={isDelivered} />

      {isDelivered && <DeliveryRating />}

    </section>
  )
}