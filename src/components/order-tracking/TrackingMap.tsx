import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { RESTAURANT, DESTINATION, DRIVER } from "../../hooks/useOrderTracking"


delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})


const makeEmojiIcon = (emoji: string, anchorY = 14) =>
  L.divIcon({
    html: `<div style="font-size:26px;line-height:1;filter:drop-shadow(0 2px 2px rgba(0,0,0,0.3))">${emoji}</div>`,
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, anchorY],
  })

const restaurantIcon = makeEmojiIcon("🏪")
const deliveryIcon = makeEmojiIcon("🛵")
const destinationIcon = makeEmojiIcon("🏠", 28)

function MapController({ center }: { center: [number, number] }) {
  const map = useMap()
  useEffect(() => {
    map.panTo(center, { animate: true, duration: 0.8 })
  }, [center, map])
  return null
}


interface Props {
  driverPos: [number, number]
  route: [number, number][]
  isDelivered: boolean
}


export default function TrackingMap({ driverPos, route, isDelivered }: Props) {
  return (
    <div className="relative z-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 mb-6">
      <MapContainer
        center={RESTAURANT.position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />

        <MapController center={driverPos} />

        <Marker position={RESTAURANT.position} icon={restaurantIcon}>
          <Popup>{RESTAURANT.name}</Popup>
        </Marker>

        <Marker position={DESTINATION.position} icon={destinationIcon}>
          <Popup>{DESTINATION.address}</Popup>
        </Marker>

        {route.length > 0 && (
          <Polyline
            positions={route}
            pathOptions={{ color: "#f97316", weight: 4, dashArray: "8 4" }}
          />
        )}

        {!isDelivered && (
          <Marker position={driverPos} icon={deliveryIcon}>
            <Popup>{DRIVER.name} 🛵</Popup>
          </Marker>
        )}

      </MapContainer>
    </div>
  )
}


