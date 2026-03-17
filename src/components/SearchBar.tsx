import { useTranslation } from "react-i18next"

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  const { t } = useTranslation()

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={t("restaurants.search_placeholder")}
      className="px-4 py-3 rounded-lg w-full text-gray-800"
    />
  )
}