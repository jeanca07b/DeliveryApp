import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Restaurants from "./pages/Restaurants"
import NotFound from "./pages/NotFound"
import RestaurantDetail from "./pages/RestaurantDetail"


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App