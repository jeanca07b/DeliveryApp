import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white">
            FoodExpress
          </h3>

          <p className="mt-3 text-sm">
            Encuentra los mejores restaurantes cerca de ti y recibe tu comida en minutos.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">
            Enlaces
          </h4>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/restaurants" className="hover:text-white">
                Restaurantes
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-white">
                Carrito
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">
            Síguenos
          </h4>

          <p className="text-sm">
            Instagram · Facebook · Twitter
          </p>
        </div>

      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} FoodExpress. Todos los derechos reservados.
      </div>

    </footer>
  )
}