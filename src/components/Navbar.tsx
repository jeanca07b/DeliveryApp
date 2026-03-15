import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart()

const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-black text-orange-500">
          FoodExpress
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium items-center">

          <Link className="hover:text-orange-500 transition" to="/">
            Inicio
          </Link>

          <Link className="hover:text-orange-500 transition" to="/restaurants">
            Restaurantes
          </Link>

        <Link
        className="hover:text-orange-500 transition"
        to="/cart"
        >
        🛒 ({totalItems})
        </Link>

          <Link
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            to="/login"
          >
            Iniciar sesión
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 font-medium bg-white shadow">

          <Link onClick={() => setOpen(false)} to="/">
            Inicio
          </Link>

          <Link onClick={() => setOpen(false)} to="/restaurants">
            Restaurantes
          </Link>

            <Link
            className="hover:text-orange-500 transition"
            to="/cart"
            >
            🛒 ({totalItems})
            </Link>

          <Link
            onClick={() => setOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center"
            to="/login"
          >
            Iniciar sesión
          </Link>

        </div>
      )}
    </nav>
  );
}