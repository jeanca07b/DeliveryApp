interface Props {
  number: number
  label: string
  active: boolean
  done: boolean
}

export default function StepBadge({ number, label, active, done }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition
        ${done ? "bg-green-500 text-white" : active ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}>
        {done ? "✓" : number}
      </span>
      <span className={`text-sm font-medium ${active ? "text-orange-500" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  )
}