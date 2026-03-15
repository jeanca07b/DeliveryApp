interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar restaurante..."
      className="px-4 py-3 rounded-lg w-full text-gray-800"
    />
  )
}