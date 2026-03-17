import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">{t("not_found.title")}</h2>
      <p className="text-gray-500 mt-2">{t("not_found.subtitle")}</p>
      <Link
        to="/"
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        {t("not_found.back_home")}
      </Link>
    </section>
  )
}