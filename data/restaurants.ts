export interface Restaurant {
  id: string
  name: string
  description: string
  address: string
  rating: number
  reviewCount: number
  priceRange: string
  category: string
  image: string
  gallery: string[]
  openHours: string
  phone: string
  features: string[]
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Milliy Taomlar",
    description: "An'anaviy o'zbek oshxonasining eng yaxshi namunalari. Qo'l bilan tayyorlangan lag'mon, manti va palov sizni kutmoqda.",
    address: "Toshkent, Amir Temur shoh ko'chasi, 45",
    rating: 4.8,
    reviewCount: 342,
    priceRange: "$$",
    category: "O'zbek oshxonasi",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
    ],
    openHours: "10:00 - 23:00",
    phone: "+998 71 234 56 78",
    features: ["Wi-Fi", "Bolalar uchun", "Tashqi joy", "Avtoturargoh"]
  },
  {
    id: "2",
    name: "Silk Road Restaurant",
    description: "Ipak yo'li bo'ylab sayohat qilganday his eting. Sharq va G'arb oshxonasining noyob uyg'unligi.",
    address: "Toshkent, Navoiy ko'chasi, 12",
    rating: 4.6,
    reviewCount: 218,
    priceRange: "$$$",
    category: "Fusion",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
    ],
    openHours: "11:00 - 00:00",
    phone: "+998 71 345 67 89",
    features: ["Wi-Fi", "Live musiqa", "VIP xonalar", "Avtoturargoh"]
  },
  {
    id: "3",
    name: "Samarqand Oasis",
    description: "Samarqandning qadimiy ta'mlarini zamonaviy uslubda taqdim etamiz. Siz uchun maxsus tayyorlangan taomlar.",
    address: "Samarqand, Registon ko'chasi, 8",
    rating: 4.9,
    reviewCount: 456,
    priceRange: "$$",
    category: "O'zbek oshxonasi",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
    ],
    openHours: "09:00 - 22:00",
    phone: "+998 66 234 56 78",
    features: ["Wi-Fi", "Bog'", "Oilaviy", "Avtoturargoh"]
  },
  {
    id: "4",
    name: "Buxoro Grill",
    description: "Eng mazali kaboblar va grillda tayyorlangan taomlar. Olovda pishirilgan go'sht sevuvchilar uchun.",
    address: "Buxoro, Mekhtar Anbar ko'chasi, 23",
    rating: 4.7,
    reviewCount: 189,
    priceRange: "$$",
    category: "Grill",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80"
    ],
    openHours: "11:00 - 23:00",
    phone: "+998 65 345 67 89",
    features: ["Tashqi joy", "Avtoturargoh", "Oilaviy"]
  },
  {
    id: "5",
    name: "La Piazza",
    description: "Italiya oshxonasining eng sara namunalari. Haqiqiy neapolitan pitsa va yangi pasta.",
    address: "Toshkent, Shota Rustaveli ko'chasi, 56",
    rating: 4.5,
    reviewCount: 267,
    priceRange: "$$$",
    category: "Italyan",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
    ],
    openHours: "12:00 - 23:00",
    phone: "+998 71 456 78 90",
    features: ["Wi-Fi", "Romantik", "Yetkazib berish"]
  },
  {
    id: "6",
    name: "Tokyo Ramen House",
    description: "Yaponiya oshxonasining haqiqiy ta'mini his eting. Yangi tayyorlangan sushi va issiq ramen.",
    address: "Toshkent, Bobur ko'chasi, 34",
    rating: 4.4,
    reviewCount: 156,
    priceRange: "$$$",
    category: "Yapon",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80",
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80"
    ],
    openHours: "11:00 - 22:00",
    phone: "+998 71 567 89 01",
    features: ["Wi-Fi", "Zamonaviy dizayn", "Yetkazib berish"]
  },
  {
    id: "7",
    name: "Choyxona №1",
    description: "An'anaviy choyxona muhitida mazali taomlar va xushbo'y choylar. Oilangiz bilan dam oling.",
    address: "Toshkent, Chorsu bozori yoni, 3",
    rating: 4.3,
    reviewCount: 523,
    priceRange: "$",
    category: "O'zbek oshxonasi",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
    ],
    openHours: "08:00 - 22:00",
    phone: "+998 71 678 90 12",
    features: ["Tashqi joy", "Bolalar uchun", "Oilaviy", "Choy seremonyasi"]
  },
  {
    id: "8",
    name: "Golden Kebab",
    description: "Premium sifatli kabob va tandir taomlar. Har bir taom olovda mukammal pishiriladi.",
    address: "Toshkent, Mirzo Ulug'bek ko'chasi, 78",
    rating: 4.6,
    reviewCount: 312,
    priceRange: "$$",
    category: "Grill",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80"
    ],
    openHours: "10:00 - 23:00",
    phone: "+998 71 789 01 23",
    features: ["Wi-Fi", "Katta zal", "To'ylar uchun", "Avtoturargoh"]
  }
]

export const categories = [
  { id: "all", name: "Barchasi", icon: "🍽️" },
  { id: "uzbek", name: "O'zbek", icon: "🫓" },
  { id: "grill", name: "Grill", icon: "🔥" },
  { id: "italian", name: "Italyan", icon: "🍕" },
  { id: "japanese", name: "Yapon", icon: "🍣" },
  { id: "fusion", name: "Fusion", icon: "🌏" },
]
