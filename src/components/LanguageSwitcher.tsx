import { useTranslation } from "react-i18next"
import { ES, US } from "country-flag-icons/react/3x2"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang)
    localStorage.setItem("foodexpress_lang", lang)
  }

  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden text-sm font-medium">
      <button
        onClick={() => changeLanguage("es")}
        className={`px-3 py-1.5 transition flex items-center gap-1.5 cursor-pointer
          ${i18n.language === "es" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-orange-500"}`}
      >
        <ES className="w-5 h-auto" /> ES
      </button>
      <div className="w-px h-4 bg-gray-200" />
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1.5 transition flex items-center gap-1.5 cursor-pointer
          ${i18n.language === "en" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-orange-500"}`}
      >
        <US className="w-5 h-auto" /> EN
      </button>
    </div>
  )
}