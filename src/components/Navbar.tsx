import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { carts } = useCart()
  const { t } = useTranslation()

  const totalItems = Object.values(carts).reduce(
    (acc, restaurantCart) =>
      acc + restaurantCart.items.reduce((a, item) => a + item.quantity, 0),
    0
  )


  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-black text-orange-500">
          FoodExpress
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium items-center">

          <Link className="hover:text-orange-500 transition" to="/">
            {t("navbar.home")}
          </Link>

          <Link className="hover:text-orange-500 transition" to="/restaurants">
            {t("navbar.restaurants")}
          </Link>

          <Link className="hover:text-orange-500 transition" to="/cart">
            🛒 {totalItems > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full ml-1">
                {totalItems}
              </span>
            )}
          </Link>
          
          
          <LanguageSwitcher/>

          <Link
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            to="/login"
          >
            {t("navbar.login")}
          </Link>

        </div>


        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>


      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 font-medium bg-white shadow">

          <Link onClick={() => setOpen(false)} to="/">
            {t("navbar.home")}
          </Link>

          <Link onClick={() => setOpen(false)} to="/restaurants">
            {t("navbar.restaurants")}
          </Link>

          <Link className="hover:text-orange-500 transition" to="/cart" onClick={() => setOpen(false)}>
            🛒 {totalItems > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full ml-1">
                {totalItems}
              </span>
            )}
          </Link>

          <LanguageSwitcher/>

          <Link
            onClick={() => setOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center"
            to="/login"
          >
            {t("navbar.login")}
          </Link>

        </div>
      )}
    </nav>
  )
}