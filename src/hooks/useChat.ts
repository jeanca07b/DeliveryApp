import { useState } from "react"
import { useTranslation } from "react-i18next"
import { menu } from "../data/menu"
import { restaurants } from "../data/restaurants"

export interface Message {
  id: number
  role: "user" | "bot"
  text: string
}

const MAX_MESSAGES = 20

function generateResponse(userMessage: string, lang: string): string {
  const msg = userMessage.toLowerCase()
  const isEn = lang === "en"

  if (msg.match(/^(hola|hi|hello|hey|buenos|buenas|qué tal|que tal)/)) {
    return isEn
      ? "Hi there! 👋 How can I help you today? I can recommend dishes by category, price or delivery time."
      : "¡Hola! 👋 ¿Cómo puedo ayudarte hoy? Puedo recomendarte platos por categoría, precio o tiempo de entrega."
  }

  if (msg.match(/(gracias|thank|bye|adios|adiós|hasta luego)/)) {
    return isEn
      ? "You're welcome! 😊 Hope I helped you find something delicious. Enjoy your meal!"
      : "¡Hasta pronto! 😊 Espero haberte ayudado a encontrar algo delicioso. ¡Buen provecho!"
  }

  if (msg.match(/(barato|económico|economico|precio bajo|menos de|low cost|cheap|affordable)/)) {
    const cheap = menu
      .filter((item) => item.price < 9)
      .slice(0, 3)
      .map((item) => {
        const restaurant = restaurants.find((r) => r.id === item.restaurantId)
        return `• **${item.name}** — $${item.price} (${restaurant?.name})`
      })
      .join("\n")
    return isEn
      ? `Here are some affordable options 💰:\n${cheap}`
      : `Aquí tienes opciones económicas 💰:\n${cheap}`
  }

  if (msg.match(/(caro|premium|especial|lujo|best|mejor|recomendado|recommended)/)) {
    const premium = menu
      .filter((item) => item.price >= 15)
      .slice(0, 3)
      .map((item) => {
        const restaurant = restaurants.find((r) => r.id === item.restaurantId)
        return `• **${item.name}** — $${item.price} (${restaurant?.name})`
      })
      .join("\n")
    return isEn
      ? `Our premium options 🌟:\n${premium}`
      : `Nuestras opciones premium 🌟:\n${premium}`
  }

  if (msg.match(/(picante|spicy|hot|chile|jalapeño|jalapeno)/)) {
    const spicy = menu
      .filter((item) =>
        item.name.toLowerCase().includes("spicy") ||
        item.description.toLowerCase().includes("picante") ||
        item.description.toLowerCase().includes("jalapeño") ||
        item.description.toLowerCase().includes("chiles")
      )
      .slice(0, 3)
      .map((item) => {
        const restaurant = restaurants.find((r) => r.id === item.restaurantId)
        return `• **${item.name}** — $${item.price} (${restaurant?.name})`
      })
      .join("\n")
    return spicy
      ? isEn ? `For spicy food lovers 🌶️!\n${spicy}` : `¡Para los amantes del picante 🌶️!\n${spicy}`
      : isEn ? "Hmm, not many spicy options right now. Can I suggest something else?" : "Hmm, no tenemos muchas opciones picantes ahora mismo. ¿Te puedo recomendar otra cosa?"
  }

  if (msg.match(/(vegetariano|vegetarian|vegano|vegan|saludable|healthy|ensalada|salad|bowl)/)) {
    const healthy = menu
      .filter((item) =>
        item.restaurantId === 8 ||
        item.name.toLowerCase().includes("veggie") ||
        item.name.toLowerCase().includes("vegetable") ||
        item.name.toLowerCase().includes("bowl")
      )
      .slice(0, 3)
      .map((item) => {
        const restaurant = restaurants.find((r) => r.id === item.restaurantId)
        return `• **${item.name}** — $${item.price} (${restaurant?.name})`
      })
      .join("\n")
    return isEn
      ? `Healthy options for you 🥗:\n${healthy}`
      : `Opciones saludables para ti 🥗:\n${healthy}`
  }

  if (msg.match(/(pizza|pizzeria|italiana?)/)) {
    const pizzas = menu
      .filter((item) => item.restaurantId === 1)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🍕 Pizza House menu:\n${pizzas}`
      : `🍕 Menú de Pizza House:\n${pizzas}`
  }

  if (msg.match(/(burger|hamburguesa|hamburgesa)/)) {
    const burgers = menu
      .filter((item) => item.restaurantId === 2)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🍔 Burger City menu:\n${burgers}`
      : `🍔 Menú de Burger City:\n${burgers}`
  }

  if (msg.match(/(sushi|japones|japonés|roll|ramen|japonesa)/)) {
    const japanese = menu
      .filter((item) => item.restaurantId === 3 || item.restaurantId === 5)
      .slice(0, 4)
      .map((item) => {
        const restaurant = restaurants.find((r) => r.id === item.restaurantId)
        return `• **${item.name}** — $${item.price} (${restaurant?.name})`
      })
      .join("\n")
    return isEn
      ? `🍣 Japanese options:\n${japanese}`
      : `🍣 Opciones japonesas:\n${japanese}`
  }

  if (msg.match(/(taco|mexican|mexicano|burrito|quesadilla)/)) {
    const mexican = menu
      .filter((item) => item.restaurantId === 4)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🌮 Taco Loco menu:\n${mexican}`
      : `🌮 Menú de Taco Loco:\n${mexican}`
  }

  if (msg.match(/(bbq|parrilla|grill|carne|steak|costillas|ribs)/)) {
    const bbq = menu
      .filter((item) => item.restaurantId === 7)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🥩 The Grill House menu:\n${bbq}`
      : `🥩 Menú de The Grill House:\n${bbq}`
  }

  if (msg.match(/(pasta|italiano|italia|spaghetti|lasagna|carbonara)/)) {
    const pasta = menu
      .filter((item) => item.restaurantId === 9)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🍝 Pasta Roma menu:\n${pasta}`
      : `🍝 Menú de Pasta Roma:\n${pasta}`
  }

  if (msg.match(/(indio|india|curry|tikka|masala|naan)/)) {
    const indian = menu
      .filter((item) => item.restaurantId === 10)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🍛 Spice Garden menu:\n${indian}`
      : `🍛 Menú de Spice Garden:\n${indian}`
  }

  if (msg.match(/(chino|china|chinese|arroz frito|dim sum|spring roll)/)) {
    const chinese = menu
      .filter((item) => item.restaurantId === 6)
      .map((item) => `• **${item.name}** — $${item.price}`)
      .join("\n")
    return isEn
      ? `🥡 Golden Dragon menu:\n${chinese}`
      : `🥡 Menú de Golden Dragon:\n${chinese}`
  }

  if (msg.match(/(restaurante|restaurant|opciones|que tienen|qué tienen|menu|menú|ver todo|options)/)) {
    const list = restaurants
      .map((r) => `• **${r.name}** — ${r.category} · ${r.deliveryTime} min`)
      .join("\n")
    return isEn
      ? `Our restaurants 🏪:\n${list}`
      : `Estos son nuestros restaurantes 🏪:\n${list}`
  }

  if (msg.match(/(rapido|rápido|pronto|tiempo|entrega|delivery|cuanto tarda|cuánto tarda|fast|quick)/)) {
    const fast = restaurants
      .sort((a, b) => a.deliveryTime - b.deliveryTime)
      .slice(0, 3)
      .map((r) => `• **${r.name}** — ${r.deliveryTime} min`)
      .join("\n")
    return isEn
      ? `Fastest delivery right now 🚀:\n${fast}`
      : `Los más rápidos ahora mismo 🚀:\n${fast}`
  }

  if (msg.match(/(postre|dessert|dulce|sweet|tiramisu)/)) {
    return isEn
      ? "🍮 We have **Tiramisu** from Pasta Roma for $6.99 — our customers' favorite dessert!"
      : "🍮 Tenemos **Tiramisu** de Pasta Roma por $6.99 — ¡el postre favorito de nuestros clientes!"
  }

  const random = menu[Math.floor(Math.random() * menu.length)]
  const restaurant = restaurants.find((r) => r.id === random.restaurantId)
  return isEn
    ? `I'm not sure I understood 😅 But I recommend trying **${random.name}** from ${restaurant?.name} for $${random.price}. Would you like to see all available restaurants?`
    : `No estoy seguro de entenderte 😅 Pero te recomiendo probar **${random.name}** de ${restaurant?.name} por $${random.price}. ¿O prefieres que te muestre todos los restaurantes disponibles?`
}

export function useChat() {
  const { t, i18n } = useTranslation()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: t("chatbot.greeting"),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const limitReached = messages.filter((m) => m.role === "user").length >= MAX_MESSAGES

  function sendMessage() {
    if (!input.trim() || limitReached) return

    const userMessage: Message = {
      id: messages.length,
      role: "user",
      text: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 1,
        role: "bot",
        text: generateResponse(input.trim(), i18n.language),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 800)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return {
    messages,
    input,
    setInput,
    sendMessage,
    handleKeyDown,
    isTyping,
    limitReached,
  }
}