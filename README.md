# 🛵 FoodExpress

A food delivery web app inspired by Uber Eats, built as a portfolio project to demonstrate modern frontend development with React and TypeScript.

🔗 **[Live Demo](#)** <!-- Replace with your Vercel URL -->

---

## 📸 Screenshots

<!-- Add screenshots after deploy -->

---

## ✨ Features

- 🏪 **10 restaurants** with full menus and real food images
- 🛒 **Multiple carts** — one per restaurant, just like Uber Eats
- 🗺️ **Real-time order tracking** with an animated delivery driver on a live map of San José, Costa Rica
- 📍 **Real routing** via OSRM (Open Source Routing Machine) — the driver follows actual streets
- 💳 **Checkout flow** with delivery form and simulated payment
- 🌐 **Full i18n** — Spanish / English with flag selector
- 🤖 **AI-powered chatbot** — recommends dishes based on your preferences
- 💾 **Cart persistence** via localStorage
- 📱 **Fully responsive** — mobile and desktop
- ♻️ **Clean Code** — SOLID principles, custom hooks, separated components

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| State | Context API + Custom Hooks |
| Maps | Leaflet + React Leaflet |
| Routing Engine | OSRM (OpenStreetMap) |
| i18n | react-i18next |
| Build Tool | Vite |

---

## 🚀 Getting Started
```bash
# Clone the repo
git clone https://github.com/jeanca07b/DeliveryApp.git
cd DeliveryApp

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 📁 Project Structure
```
src/
├── components/
│   ├── ai/              # Chatbot components
│   ├── cart/            # Cart components
│   ├── checkout/        # Checkout form components
│   └── order-tracking/  # Map and tracking components
├── context/             # CartContext
├── data/                # Static restaurant and menu data
├── hooks/               # Custom hooks (useCart, useOrderTracking, useChat)
├── i18n/                # Translations (ES/EN)
├── pages/               # Route pages
├── types/               # TypeScript interfaces
└── utils/               # Helper functions
```

---

## 🗺️ App Flow
```
Home → Search restaurant → Restaurant detail → Add to cart → Checkout → Order tracking (live map)
```

---

## 🔮 Roadmap

- [ ] Backend with Node.js + Express
- [ ] PostgreSQL database (Supabase)
- [ ] Firebase Authentication (Google login)
- [ ] Stripe payment integration
- [ ] AWS S3 for image storage
- [ ] Real-time tracking with Socket.io
- [ ] Order history
- [ ] Admin dashboard

---

## 👨‍💻 Author

**Jean Carlos Arias Baltodano**
React Developer · TypeScript · Node.js

[LinkedIn](https://linkedin.com/in/jeancarlosariasb) · [GitHub](https://github.com/jeanca07b)

---

## 📄 License

MIT
