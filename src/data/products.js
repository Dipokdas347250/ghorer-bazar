export const categories = [
  { slug: "mustard-oil", name: "Mustard Oil", emoji: "🫙", tint: "from-amber-100 to-yellow-50" },
  { slug: "ghee", name: "Ghee", emoji: "🧈", tint: "from-yellow-100 to-orange-50" },
  { slug: "honey", name: "Honey", emoji: "🍯", tint: "from-orange-100 to-amber-50" },
  { slug: "dates", name: "Dates", emoji: "🌴", tint: "from-stone-200 to-amber-50" },
  { slug: "spices", name: "Spices", emoji: "🌶️", tint: "from-red-100 to-orange-50" },
  { slug: "nuts-seeds", name: "Nuts & Seeds", emoji: "🥜", tint: "from-amber-100 to-stone-50" },
  { slug: "tea-coffee", name: "Tea & Coffee", emoji: "🍵", tint: "from-emerald-100 to-lime-50" },
  { slug: "rice-pulses", name: "Rice & Pulses", emoji: "🌾", tint: "from-lime-100 to-yellow-50" },
  { slug: "organic-oil", name: "Organic Oil", emoji: "🥥", tint: "from-sky-100 to-cyan-50" },
  { slug: "combo", name: "Combo Pack", emoji: "🎁", tint: "from-pink-100 to-rose-50" },
];

export const products = [
  { id: 1, name: "Deshi Mustard Oil (Ghani Vanga) 5 Litre", category: "mustard-oil", price: 1450, oldPrice: 1650, emoji: "🫙", rating: 4.9, reviews: 812, badge: "Best Seller" },
  { id: 2, name: "Deshi Mustard Oil (Ghani Vanga) 2 Litre", category: "mustard-oil", price: 600, oldPrice: 680, emoji: "🫙", rating: 4.8, reviews: 540 },
  { id: 3, name: "Gawa Ghee (Premium) 1 KG", category: "ghee", price: 1650, oldPrice: 1850, emoji: "🧈", rating: 4.9, reviews: 1204, badge: "Best Seller" },
  { id: 4, name: "Gawa Ghee (Premium) 500 gm", category: "ghee", price: 850, oldPrice: 950, emoji: "🧈", rating: 4.8, reviews: 690 },
  { id: 5, name: "Sundarban Natural Honey 1 KG", category: "honey", price: 1100, oldPrice: 1300, emoji: "🍯", rating: 4.7, reviews: 430, badge: "New" },
  { id: 6, name: "Mustard Flower Honey 500 gm", category: "honey", price: 450, oldPrice: 520, emoji: "🍯", rating: 4.6, reviews: 288 },
  { id: 7, name: "Black Seed (Kalojira) Honey 500 gm", category: "honey", price: 650, oldPrice: 750, emoji: "🍯", rating: 4.8, reviews: 315 },
  { id: 8, name: "Ajwa Dates Premium 1 KG", category: "dates", price: 1800, oldPrice: 2100, emoji: "🌴", rating: 4.9, reviews: 377, badge: "Hot" },
  { id: 9, name: "Medjool Dates Jumbo 1 KG", category: "dates", price: 1950, oldPrice: 2200, emoji: "🌴", rating: 4.8, reviews: 256 },
  { id: 10, name: "Mariyam Dates 500 gm", category: "dates", price: 750, oldPrice: 850, emoji: "🌴", rating: 4.7, reviews: 198 },
  { id: 11, name: "Turmeric Powder (Holud Gura) 500 gm", category: "spices", price: 320, oldPrice: 380, emoji: "🌶️", rating: 4.7, reviews: 402 },
  { id: 12, name: "Chili Powder (Morich Gura) 500 gm", category: "spices", price: 360, oldPrice: 420, emoji: "🌶️", rating: 4.6, reviews: 351 },
  { id: 13, name: "Cashew Nut (Kaju Badam) 500 gm", category: "nuts-seeds", price: 750, oldPrice: 850, emoji: "🥜", rating: 4.8, reviews: 222 },
  { id: 14, name: "Chia Seeds Premium 500 gm", category: "nuts-seeds", price: 480, oldPrice: 550, emoji: "🌱", rating: 4.6, reviews: 167 },
  { id: 15, name: "Premium Green Tea 200 gm", category: "tea-coffee", price: 380, oldPrice: 450, emoji: "🍵", rating: 4.5, reviews: 132 },
  { id: 16, name: "Kalijira Chinigura Rice 5 KG", category: "rice-pulses", price: 850, oldPrice: 950, emoji: "🌾", rating: 4.7, reviews: 146 },
  { id: 17, name: "Extra Virgin Coconut Oil 500 ml", category: "organic-oil", price: 690, oldPrice: 790, emoji: "🥥", rating: 4.7, reviews: 188 },
  { id: 18, name: "Family Combo: Oil + Ghee + Honey", category: "combo", price: 3100, oldPrice: 3600, emoji: "🎁", rating: 4.9, reviews: 96, badge: "Save 500৳" },
];

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

export const formatPrice = (n) => `৳ ${n.toLocaleString("en-IN")}`;
