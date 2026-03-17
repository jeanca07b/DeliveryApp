import { BrowserRouter, Routes, Route } from "react-router-dom"
import "leaflet/dist/leaflet.css"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderTracking from "./pages/OrderTracking"
import Restaurants from "./pages/Restaurants"
import RestaurantDetail from "./pages/RestaurantDetail"
import NotFound from "./pages/NotFound"


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-tracking" element={<OrderTracking />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App