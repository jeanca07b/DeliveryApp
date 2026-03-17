import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useChat } from "../../hooks/useChat"
import ChatMessage from "./ChatMessage"

export default function ChatBot() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, setInput, sendMessage, handleKeyDown, isTyping, limitReached } = useChat()
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: "480px" }}
        >
          {/* Header */}
          <div className="bg-orange-500 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white font-semibold text-sm">{t("chatbot.title")}</p>
              <p className="text-orange-100 text-xs">{t("chatbot.subtitle")}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange-200 transition text-xl font-bold"
            >
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
            ))}

            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm mr-2 flex-shrink-0">
                  🤖
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {limitReached && (
              <p className="text-center text-xs text-gray-400 mt-2">
                {t("chatbot.limit_reached")}
              </p>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("chatbot.placeholder")}
              disabled={limitReached}
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || limitReached}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t("chatbot.send")}
            </button>
          </div>

        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-500 text-white rounded-full shadow-xl hover:bg-orange-600 transition flex items-center justify-center text-2xl hover:scale-110 active:scale-95"
      >
        {isOpen ? "✕" : "💬"}
      </button>

    </div>
  )
}