interface Props {
  query: string
  setQuery: (value: string) => void
}

export default function Hero({ query, setQuery }: Props) {

  return (
    <section className="bg-linear-to-r from-orange-500 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Encuentra tu comida favorita
          </h1>

          <p className="mt-4 text-lg opacity-90">
            Ordena de los mejores restaurantes cerca de ti y recibe tu comida en minutos.
          </p>

          <div className="mt-6">

            <div className="relative w-full">

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-10 py-3 rounded-lg bg-white text-gray-800 w-full
                focus:outline-none focus:ring-2 focus:ring-orange-300"
                placeholder="Buscar restaurante o platillo"
              />

              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

            </div>

          </div>
        </div>

        <div>
          <img
            src="/images/food-hero.png"
            alt="Food delivery"
            className="w-full drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}