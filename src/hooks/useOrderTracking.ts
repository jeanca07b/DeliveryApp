import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"


export const RESTAURANT = {
  name: "Pizza House",
  position: [9.9355, -84.0841] as [number, number],
}

export const DESTINATION = {
  address: "Av. Central, San José",
  position: [9.9312, -84.0789] as [number, number],
}

export const DRIVER = {
  name: "Carlos Méndez",
  photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  rating: 4.9,
  plate: "SJB-4821",
  phone: "+506 8123-4567",
  vehicle: "Honda CB 125",
}

export interface TrackingStep {
  id: number
  label: string
  icon: string
  description: string
}


function interpolate(
  from: [number, number],
  to: [number, number],
  steps: number
): [number, number][] {
  const result: [number, number][] = []
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    result.push([
      from[0] + (to[0] - from[0]) * t,
      from[1] + (to[1] - from[1]) * t,
    ])
  }
  return result
}


export function useOrderTracking() {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)
  const [eta, setEta] = useState(30)
  const [driverPos, setDriverPos] = useState<[number, number]>(RESTAURANT.position)
  const [route, setRoute] = useState<[number, number][]>([])
  const [routeFinished, setRouteFinished] = useState(false)
  const routeIndexRef = useRef(0)

  const steps: TrackingStep[] = [
    { id: 1, label: t("order_tracking.steps.confirmed_label"), icon: "✅", description: t("order_tracking.steps.confirmed_desc") },
    { id: 2, label: t("order_tracking.steps.preparing_label"), icon: "👨‍🍳", description: t("order_tracking.steps.preparing_desc") },
    { id: 3, label: t("order_tracking.steps.on_the_way_label"), icon: "🛵", description: t("order_tracking.steps.on_the_way_desc") },
    { id: 4, label: t("order_tracking.steps.delivered_label"), icon: "🎉", description: t("order_tracking.steps.delivered_desc") },
  ]


  useEffect(() => {
    if (currentStep >= 3) return
    const timeout = setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
      setEta((prev) => Math.max(0, prev - 8))
    }, 4000)
    return () => clearTimeout(timeout)
  }, [currentStep])


  useEffect(() => {
    if (!routeFinished) return
    setCurrentStep(4)
  }, [routeFinished])


  useEffect(() => {
    if (currentStep !== 3) return
    const origin = `${RESTAURANT.position[1]},${RESTAURANT.position[0]}`
    const destination = `${DESTINATION.position[1]},${DESTINATION.position[0]}`
    const url = `https://router.project-osrm.org/route/v1/driving/${origin};${destination}?overview=full&geometries=geojson`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const coords = data.routes[0].geometry.coordinates as [number, number][]
        const latLngPoints = coords.map(([lng, lat]) => [lat, lng] as [number, number])
        const smooth: [number, number][] = latLngPoints.reduce(
          (acc, point, i) => i === 0 ? [point] : [...acc, ...interpolate(latLngPoints[i - 1], point, 10)],
          [] as [number, number][]
        )
        setRoute(smooth)
        setDriverPos(smooth[0])
        routeIndexRef.current = 0
      })
      .catch(() => setRoute([RESTAURANT.position, DESTINATION.position]))
  }, [currentStep])


  useEffect(() => {
    if (route.length === 0) return
    const interval = setInterval(() => {
      routeIndexRef.current += 1
      if (routeIndexRef.current >= route.length) {
        clearInterval(interval)
        setRouteFinished(true)
        return
      }
      setDriverPos(route[routeIndexRef.current])
    }, 100)
    return () => clearInterval(interval)
  }, [route])

  return {
    currentStep,
    eta,
    driverPos,
    route,
    steps,
    isDelivered: currentStep === steps.length,
    isOnTheWay: currentStep >= 3,
  }
}