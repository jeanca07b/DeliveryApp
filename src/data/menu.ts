export interface MenuItem {
  id: number
  restaurantId: number
  name: string
  description: string
  price: number
  image: string
}

export const menu: MenuItem[] = [

  // ─── Pizza House (id: 1) ───────────────────────────────────────────────
  {
    id: 1,
    restaurantId: 1,
    name: "Pepperoni Pizza",
    description: "Pizza clásica con pepperoni y queso mozzarella",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    restaurantId: 1,
    name: "Cheese Pizza",
    description: "Pizza con salsa de tomate y queso mozzarella",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    restaurantId: 1,
    name: "BBQ Chicken Pizza",
    description: "Pizza con pollo a la BBQ, cebolla y cilantro",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    restaurantId: 1,
    name: "Veggie Pizza",
    description: "Pizza con vegetales frescos y queso",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop"
  },

  // ─── Burger City (id: 2) ───────────────────────────────────────────────
  {
    id: 5,
    restaurantId: 2,
    name: "Classic Burger",
    description: "Hamburguesa con carne, queso y lechuga",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    restaurantId: 2,
    name: "Double Burger",
    description: "Hamburguesa doble carne con queso cheddar",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&auto=format&fit=crop"
  },
  {
    id: 7,
    restaurantId: 2,
    name: "Bacon Burger",
    description: "Hamburguesa con tocino crujiente y salsa especial",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&auto=format&fit=crop"
  },
  {
    id: 8,
    restaurantId: 2,
    name: "Crispy Chicken Burger",
    description: "Pollo crujiente con mayonesa y pepinillos",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop"
  },

  // ─── Sushi World (id: 3) ──────────────────────────────────────────────
  {
    id: 9,
    restaurantId: 3,
    name: "California Roll",
    description: "Cangrejo, aguacate y pepino",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&auto=format&fit=crop"
  },
  {
    id: 10,
    restaurantId: 3,
    name: "Salmon Sushi",
    description: "Sushi fresco de salmón con wasabi",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&auto=format&fit=crop"
  },
  {
    id: 11,
    restaurantId: 3,
    name: "Dragon Roll",
    description: "Rollo con camarón tempura y aguacate",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&auto=format&fit=crop"
  },
  {
    id: 12,
    restaurantId: 3,
    name: "Tuna Sashimi",
    description: "Láminas frescas de atún con salsa de soya",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&auto=format&fit=crop"
  },

  // ─── Taco Loco (id: 4) ────────────────────────────────────────────────
  {
    id: 13,
    restaurantId: 4,
    name: "Tacos al Pastor",
    description: "Tacos de cerdo marinado con piña y cilantro",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop"
  },
  {
    id: 14,
    restaurantId: 4,
    name: "Tacos de Pollo",
    description: "Tacos de pollo a la plancha con salsa verde",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop"
  },
  {
    id: 15,
    restaurantId: 4,
    name: "Burrito Supremo",
    description: "Burrito con carne, frijoles, arroz y guacamole",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&auto=format&fit=crop"
  },
  {
    id: 16,
    restaurantId: 4,
    name: "Quesadilla",
    description: "Quesadilla de queso con jalapeños y crema",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&auto=format&fit=crop"
  },

  // ─── Ramen House (id: 5) ──────────────────────────────────────────────
  {
    id: 17,
    restaurantId: 5,
    name: "Tonkotsu Ramen",
    description: "Ramen con caldo de cerdo, chashu y huevo marinado",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop"
  },
  {
    id: 18,
    restaurantId: 5,
    name: "Shoyu Ramen",
    description: "Ramen con caldo de soya, pollo y bambú",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&auto=format&fit=crop"
  },
  {
    id: 19,
    restaurantId: 5,
    name: "Spicy Miso Ramen",
    description: "Ramen picante con pasta de miso y maíz",
    price: 13.49,
    image: "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=400&auto=format&fit=crop"
  },
  {
    id: 20,
    restaurantId: 5,
    name: "Gyoza",
    description: "Dumplings japoneses de cerdo y vegetales",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&auto=format&fit=crop"
  },

  // ─── Golden Dragon (id: 6) ────────────────────────────────────────────
  {
    id: 21,
    restaurantId: 6,
    name: "Fried Rice",
    description: "Arroz frito con huevo, vegetales y salsa de soya",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop"
  },
  {
    id: 22,
    restaurantId: 6,
    name: "Kung Pao Chicken",
    description: "Pollo con maní, chiles y salsa kung pao",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&auto=format&fit=crop"
  },
  {
    id: 23,
    restaurantId: 6,
    name: "Dim Sum",
    description: "Selección de dumplings al vapor",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop"
  },
  {
    id: 24,
    restaurantId: 6,
    name: "Spring Rolls",
    description: "Rollitos primavera crujientes con salsa agridulce",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop"
  },

  // ─── The Grill House (id: 7) ──────────────────────────────────────────
  {
    id: 25,
    restaurantId: 7,
    name: "BBQ Ribs",
    description: "Costillas de cerdo a la BBQ con salsa ahumada",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop"
  },
  {
    id: 26,
    restaurantId: 7,
    name: "Grilled Chicken",
    description: "Pollo a la parrilla con hierbas y limón",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&auto=format&fit=crop"
  },
  {
    id: 27,
    restaurantId: 7,
    name: "T-Bone Steak",
    description: "Corte T-Bone a la parrilla con papas al horno",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&auto=format&fit=crop"
  },
  {
    id: 28,
    restaurantId: 7,
    name: "BBQ Pulled Pork",
    description: "Cerdo desmenuzado a la BBQ en pan artesanal",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&auto=format&fit=crop"
  },

  // ─── Green Bowl (id: 8) ───────────────────────────────────────────────
  {
    id: 29,
    restaurantId: 8,
    name: "Acai Bowl",
    description: "Bowl de acai con frutas frescas y granola",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&auto=format&fit=crop"
  },
  {
    id: 30,
    restaurantId: 8,
    name: "Buddha Bowl",
    description: "Bowl con quinoa, vegetales asados y tahini",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop"
  },
  {
    id: 31,
    restaurantId: 8,
    name: "Green Smoothie",
    description: "Smoothie de espinaca, manzana y jengibre",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&auto=format&fit=crop"
  },
  {
    id: 32,
    restaurantId: 8,
    name: "Avocado Toast",
    description: "Pan integral con aguacate, tomate y semillas",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&auto=format&fit=crop"
  },

  // ─── Pasta Roma (id: 9) ───────────────────────────────────────────────
  {
    id: 33,
    restaurantId: 9,
    name: "Spaghetti Carbonara",
    description: "Spaghetti con tocino, huevo y queso parmesano",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&auto=format&fit=crop"
  },
  {
    id: 34,
    restaurantId: 9,
    name: "Penne Arrabiata",
    description: "Penne con salsa de tomate picante y ajo",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&auto=format&fit=crop"
  },
  {
    id: 35,
    restaurantId: 9,
    name: "Lasagna",
    description: "Lasagna con carne, bechamel y queso gratinado",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&auto=format&fit=crop"
  },
  {
    id: 36,
    restaurantId: 9,
    name: "Tiramisu",
    description: "Postre italiano con mascarpone y café",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop"
  },

  // ─── Spice Garden (id: 10) ────────────────────────────────────────────
  {
    id: 37,
    restaurantId: 10,
    name: "Chicken Tikka Masala",
    description: "Pollo en salsa cremosa de tomate y especias",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop"
  },
  {
    id: 38,
    restaurantId: 10,
    name: "Butter Chicken",
    description: "Pollo en salsa de mantequilla y curry suave",
    price: 13.49,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop"
  },
  {
    id: 39,
    restaurantId: 10,
    name: "Vegetable Curry",
    description: "Curry de vegetales con leche de coco y arroz basmati",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop"
  },
  {
    id: 40,
    restaurantId: 10,
    name: "Garlic Naan",
    description: "Pan naan con mantequilla de ajo y cilantro",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop"
  },
]