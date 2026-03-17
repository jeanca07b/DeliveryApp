interface Props {
  label: string
  name: string
  type?: string
  value: string
  error?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CheckoutField({
  label,
  name,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition
          ${error ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-orange-300"}`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  )
}