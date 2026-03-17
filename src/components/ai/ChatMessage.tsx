interface Props {
  role: "user" | "bot"
  text: string
}

export default function ChatMessage({ role, text }: Props) {
  const isBot = role === "bot"

  const formattedText = text.split("\n").map((line, i) => {
    const bold = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    return (
      <span key={i} dangerouslySetInnerHTML={{ __html: bold }} className="block" />
    )
  })

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm mr-2 flex-shrink-0 mt-1">
          🤖
        </div>
      )}
      <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed
        ${isBot
          ? "bg-gray-100 text-gray-800 rounded-tl-none"
          : "bg-orange-500 text-white rounded-tr-none"
        }`}
      >
        {formattedText}
      </div>
    </div>
  )
}