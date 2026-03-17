import type { TrackingStep } from "../../hooks/useOrderTracking"

interface Props {
  steps: TrackingStep[]
  currentStep: number
  isDelivered: boolean
}

export default function TrackingSteps({ steps, currentStep, isDelivered }: Props) {
  return (
    <div className="relative mb-10">
      <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200" />
      <div
        className="absolute left-6 top-6 w-0.5 bg-orange-400 transition-all duration-700"
        style={{ height: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
      />
      <ul className="space-y-8 relative">
        {steps.map((step) => {
          const isDone = currentStep > step.id
          const isActive = currentStep === step.id
          return (
            <li key={step.id} className="flex items-start gap-5">
              <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-sm transition-all duration-500
                ${isDone ? "bg-orange-500 scale-100" : isActive ? "bg-orange-100 ring-2 ring-orange-400 scale-110" : "bg-gray-100"}`}>
                {isDone ? "✓" : step.icon}
              </div>
              <div className={`pt-2.5 transition-opacity duration-300 ${isDone || isActive ? "opacity-100" : "opacity-40"}`}>
                <p className={`font-semibold ${isActive ? "text-orange-500" : isDone ? "text-gray-800" : "text-gray-400"}`}>
                  {step.label}
                </p>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
              {isActive && !isDelivered && (
                <span className="ml-auto pt-3">
                  <span className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full animate-spin inline-block" />
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}