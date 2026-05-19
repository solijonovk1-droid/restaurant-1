export interface MenuItem {
  id: string
  restaurantId: string
  name: string
  description: string
  price: number
  image: string
  category: string
  popular?: boolean
}

export const menuItems: MenuItem[] = [
  // Restaurant 1 - Milliy Taomlar
  { id: "m1", restaurantId: "1", name: "Palov", description: "An'anaviy o'zbek palovi, mol go'shti, sabzi va ziravorlar bilan", price: 45000, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m2", restaurantId: "1", name: "Lag'mon", description: "Qo'lda cho'zilgan lag'mon, ko'katlar va mol go'shti bilan", price: 38000, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m3", restaurantId: "1", name: "Manti", description: "Bug'da pishirilgan manti, qo'y go'shti va piyoz bilan", price: 35000, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80", category: "Asosiy taom" },
  { id: "m4", restaurantId: "1", name: "Somsa", description: "Tandirda pishirilgan somsa, go'shtli va piyozli", price: 12000, image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80", category: "Pishiriqlar" },
  { id: "m5", restaurantId: "1", name: "Shashlik", description: "Mol go'shtidan tayyorlangan shashlik, marinadlangan", price: 48000, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", category: "Grill", popular: true },
  { id: "m6", restaurantId: "1", name: "Ko'k choy", description: "An'anaviy o'zbek ko'k choyi", price: 8000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80", category: "Ichimliklar" },

  // Restaurant 2 - Silk Road
  { id: "m7", restaurantId: "2", name: "Fusion Palov", description: "Zamonaviy uslubda tayyorlangan palov, krevetka va saffron bilan", price: 72000, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m8", restaurantId: "2", name: "Silk Road Salad", description: "Toza ko'katlar, yong'oq va maxsus sous bilan", price: 35000, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", category: "Salatlar" },
  { id: "m9", restaurantId: "2", name: "Lamb Steak", description: "Premium qo'y go'shti steyk, rozarin va asal sous bilan", price: 95000, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m10", restaurantId: "2", name: "Tiramisu", description: "Italyan tiramisu desserti", price: 32000, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", category: "Desertlar" },

  // Restaurant 3 - Samarqand Oasis
  { id: "m11", restaurantId: "3", name: "Samarqand Palovi", description: "Samarqand uslubida tayyorlangan palov, nok va behi bilan", price: 52000, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m12", restaurantId: "3", name: "Tandir Go'sht", description: "Tandirda sekin pishirilgan qo'y go'shti", price: 68000, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m13", restaurantId: "3", name: "Chuchvara", description: "Kichik pelmeni, qaymog'li smetana bilan", price: 30000, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80", category: "Asosiy taom" },
  { id: "m14", restaurantId: "3", name: "Non", description: "Tandirda yangi pishirilgan non", price: 5000, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80", category: "Non" },
  { id: "m15", restaurantId: "3", name: "Qatiq", description: "Uy qatig'i, yangi tayyorlangan", price: 10000, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80", category: "Ichimliklar" },

  // Restaurant 4 - Buxoro Grill
  { id: "m16", restaurantId: "4", name: "Mix Grill", description: "Turli xil go'shtlar grillda: mol, qo'y va tovuq", price: 85000, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80", category: "Grill", popular: true },
  { id: "m17", restaurantId: "4", name: "Lyulya Kabob", description: "Qo'lda tayyorlangan lyulya kabob, ziravorlar bilan", price: 42000, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", category: "Grill" },
  { id: "m18", restaurantId: "4", name: "Jigar Kabob", description: "Yangi jigardan tayyorlangan kabob", price: 38000, image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80", category: "Grill" },
  { id: "m19", restaurantId: "4", name: "Achichuk", description: "Yangi pomidor, piyoz va ko'k qalampir salati", price: 15000, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80", category: "Salatlar" },

  // Restaurant 5 - La Piazza
  { id: "m20", restaurantId: "5", name: "Margherita Pizza", description: "Klassik neapolitan pitsa, mozzarella va bazlik bilan", price: 55000, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", category: "Pitsa", popular: true },
  { id: "m21", restaurantId: "5", name: "Carbonara", description: "Spagetti carbonara, panchetta va parmezan bilan", price: 48000, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80", category: "Pasta", popular: true },
  { id: "m22", restaurantId: "5", name: "Bruschetta", description: "Qovurilgan non, pomidor va bazlik bilan", price: 25000, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80", category: "Aperitiv" },
  { id: "m23", restaurantId: "5", name: "Panna Cotta", description: "Italyan desserti, yog'li krem va mevali sous", price: 28000, image: "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=400&q=80", category: "Desertlar" },

  // Restaurant 6 - Tokyo Ramen House
  { id: "m24", restaurantId: "6", name: "Tonkotsu Ramen", description: "Klassik yapon ramen, cho'chqa suyagi bulyon va chashu bilan", price: 52000, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80", category: "Ramen", popular: true },
  { id: "m25", restaurantId: "6", name: "Salmon Sushi Set", description: "8 dona salmon sushi, vosabi va imbir bilan", price: 68000, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80", category: "Sushi", popular: true },
  { id: "m26", restaurantId: "6", name: "Gyoza", description: "Yapon pelmeni, go'sht va sabzavotlar bilan", price: 32000, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80", category: "Aperitiv" },
  { id: "m27", restaurantId: "6", name: "Matcha Latte", description: "Yapon matcha choyi, sut bilan", price: 22000, image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&q=80", category: "Ichimliklar" },

  // Restaurant 7 - Choyxona №1
  { id: "m28", restaurantId: "7", name: "Osh (Palov)", description: "Klassik choyxona palovi, katta porsiya", price: 35000, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80", category: "Asosiy taom", popular: true },
  { id: "m29", restaurantId: "7", name: "Sho'rva", description: "Issiq go'shtli sho'rva, kartoshka va sabzavotlar bilan", price: 25000, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80", category: "Sho'rva" },
  { id: "m30", restaurantId: "7", name: "Patir Non", description: "Yog'li patir non, tandirda pishirilgan", price: 8000, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80", category: "Non" },
  { id: "m31", restaurantId: "7", name: "Qora Choy", description: "Kuchli qora choy, limon bilan", price: 6000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80", category: "Ichimliklar" },

  // Restaurant 8 - Golden Kebab
  { id: "m32", restaurantId: "8", name: "Golden Shashlik", description: "Maxsus marinaddagi oltin shashlik, 6 dona", price: 65000, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", category: "Grill", popular: true },
  { id: "m33", restaurantId: "8", name: "Tandir Tovuq", description: "Tandirda butun holda pishirilgan tovuq", price: 72000, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&q=80", category: "Grill", popular: true },
  { id: "m34", restaurantId: "8", name: "Caesar Salad", description: "Klassik Tsezar salati, tovuq va parmezan bilan", price: 32000, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80", category: "Salatlar" },
  { id: "m35", restaurantId: "8", name: "Kompot", description: "Uy kompoti, quritilgan mevalardan", price: 10000, image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&q=80", category: "Ichimliklar" },
]
