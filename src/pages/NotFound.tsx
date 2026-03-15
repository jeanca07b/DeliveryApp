import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-6xl font-bold text-orange-500">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Página no encontrada
      </h2>

      <p className="text-gray-500 mt-2">
        La página que buscas no existe.
      </p>

      <Link
        to="/"
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        Volver al inicio
      </Link>

    </section>
  )
}