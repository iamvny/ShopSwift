
import { Product } from '@/types/product';

export const products: Product[] = [
  // Original Electronics Products
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Experience crystal clear sound with these premium wireless headphones. Featuring noise cancellation technology, comfortable ear cushions, and long battery life for extended listening sessions. Perfect for music lovers and professionals alike.",
    price: 199.99,
    discountedPrice: 179.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1450&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1632&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.8,
    reviews: 128,
    inStock: true,
    featured: true,
    bestSeller: true,
    specs: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smart watch. Features heart rate monitoring, sleep tracking, and workout analytics. Water-resistant and compatible with iOS and Android devices.",
    price: 149.95,
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1327&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.6,
    reviews: 95,
    inStock: true,
    new: true
  },
  // Original Clothing Products
  {
    id: 3,
    name: "Casual Cotton T-Shirt",
    description: "A comfortable, everyday cotton t-shirt made from 100% organic materials. Features a classic fit and comes in multiple colors for versatile styling options.",
    price: 24.99,
    discountedPrice: 19.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1630&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.3,
    reviews: 210,
    inStock: true,
    specs: {
      "Material": "100% Organic Cotton",
      "Care": "Machine wash cold",
      "Fit": "Regular fit"
    }
  },
  // Original Electronics Products
  {
    id: 4,
    name: "Professional Digital Camera",
    description: "Capture stunning photos and videos with this professional-grade digital camera. Equipped with a high-resolution sensor, 4K video capabilities, and intuitive controls for both beginners and experts.",
    price: 1299.99,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.9,
    reviews: 64,
    inStock: true,
    featured: true,
    specs: {
      "Resolution": "24.2MP",
      "Video": "4K/60fps",
      "Storage": "Dual SD card slots",
      "Battery": "1500 shots per charge"
    }
  },
  // Original Accessories Products
  {
    id: 5,
    name: "Leather Crossbody Bag",
    description: "A stylish and functional leather crossbody bag perfect for everyday use. Features multiple compartments, adjustable strap, and premium materials that will last for years.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1394&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1438&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.5,
    reviews: 87,
    inStock: true,
    bestSeller: true
  },
  // Original Home Products
  {
    id: 6,
    name: "Scented Soy Candle",
    description: "Create a relaxing atmosphere with this hand-poured soy candle. Features a blend of essential oils for a long-lasting, clean-burning aroma that transforms any space.",
    price: 29.99,
    discountedPrice: 24.99,
    images: [
      "https://images.unsplash.com/photo-1602523961854-d8f0e591db7e?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603006905393-c3bbbced0f27?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.7,
    reviews: 153,
    inStock: true
  },
  // Original Beauty Products
  {
    id: 7,
    name: "Skincare Gift Set",
    description: "A comprehensive skincare routine in one elegant package. Includes cleanser, toner, serum, and moisturizer made from natural ingredients suitable for all skin types.",
    price: 79.95,
    images: [
      "https://images.unsplash.com/photo-1570194065650-d99fb4632c3e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531895861208-8504b98fe814?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.4,
    reviews: 76,
    inStock: true,
    new: true
  },
  // Original Electronics Products
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with this compact, waterproof Bluetooth speaker. Delivers impressive sound quality, has 12 hours of battery life, and includes a built-in microphone for calls.",
    price: 59.99,
    discountedPrice: 49.99,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1631&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?q=80&w=1469&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.2,
    reviews: 118,
    inStock: true,
    specs: {
      "Battery Life": "12 hours",
      "Connectivity": "Bluetooth 5.0",
      "Waterproof": "IPX7 Rating",
      "Weight": "340g"
    }
  },
  // Original Sports Products
  {
    id: 9,
    name: "Yoga Mat",
    description: "A non-slip, eco-friendly yoga mat perfect for all types of yoga and fitness activities. Provides optimal cushioning and support for your practice.",
    price: 39.95,
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=1412&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.6,
    reviews: 92,
    inStock: true
  },
  // Original Toys Products
  {
    id: 10,
    name: "Wooden Building Blocks",
    description: "Educational wooden building blocks for children. Made from sustainable wood and safe, water-based paints. Helps develop motor skills and creativity.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1509224863479-ab583ee78692?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569399078436-da10fbd60f12?q=80&w=1471&auto=format&fit=crop"
    ],
    category: "toys",
    rating: 4.8,
    reviews: 41,
    inStock: true,
    featured: true
  },
  // Original Home Products
  {
    id: 11,
    name: "Designer Wall Clock",
    description: "Add a touch of elegance to any room with this modern designer wall clock. Features silent movement and a unique design that serves as both timekeeper and wall art.",
    price: 49.95,
    images: [
      "https://images.unsplash.com/photo-1507045042292-0d7d1add101a?q=80&w=1377&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1469&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.5,
    reviews: 67,
    inStock: true
  },
  // Original Home Products
  {
    id: 12,
    name: "Premium Coffee Maker",
    description: "Brew barista-quality coffee at home with this premium coffee maker. Features customizable brew strength, programmable timer, and thermal carafe to keep your coffee hot for hours.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.7,
    reviews: 109,
    inStock: true,
    specs: {
      "Capacity": "12 cups",
      "Programs": "5 brew settings",
      "Features": "Auto shut-off, Timer",
      "Warranty": "3 years"
    }
  },
  // Additional Electronics Products
  {
    id: 13,
    name: "Ultra HD Smart TV",
    description: "Experience cinema-quality entertainment at home with this 55-inch Ultra HD Smart TV. Features vivid colors, sharp contrast, and integrated streaming apps.",
    price: 799.99,
    discountedPrice: 699.99,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=1467&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.7,
    reviews: 83,
    inStock: true,
    featured: true,
    specs: {
      "Screen Size": "55 inches",
      "Resolution": "4K Ultra HD",
      "Connectivity": "WiFi, Bluetooth, HDMI",
      "Features": "Voice control, HDR"
    }
  },
  {
    id: 14,
    name: "Wireless Gaming Mouse",
    description: "Enhance your gaming experience with this high-precision wireless gaming mouse. Features customizable buttons, adjustable DPI, and comfortable ergonomics for marathon gaming sessions.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1465&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1628&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.5,
    reviews: 120,
    inStock: true,
    new: true
  },
  {
    id: 15,
    name: "Mechanical Keyboard",
    description: "Type with precision and satisfaction on this mechanical keyboard with customizable RGB lighting and durable key switches for both gaming and productivity.",
    price: 129.95,
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595044778792-33c0241b4ab8?q=80&w=1467&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.6,
    reviews: 74,
    inStock: true
  },
  {
    id: 16,
    name: "Wireless Charging Pad",
    description: "Eliminate cable clutter with this sleek wireless charging pad compatible with all Qi-enabled devices. Features fast charging and a non-slip surface.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1622039738125-e0ff9956f13a?q=80&w=1372&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618751295548-8b49fec3b816?q=80&w=1472&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.4,
    reviews: 56,
    inStock: true
  },
  {
    id: 17,
    name: "Smart Home Security Camera",
    description: "Keep your home secure with this easy-to-install HD security camera featuring night vision, motion detection, and smartphone alerts.",
    price: 89.95,
    images: [
      "https://images.unsplash.com/photo-1583011018157-83acbb53e8a7?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557324232-b4d98c9429bf?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  // Additional Clothing Products
  {
    id: 18,
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans made from premium denim with just the right amount of stretch for comfort and style.",
    price: 59.99,
    discountedPrice: 49.99,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1626&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    specs: {
      "Material": "98% Cotton, 2% Elastane",
      "Care": "Machine wash cold",
      "Fit": "Slim fit"
    }
  },
  {
    id: 19,
    name: "Wool Blend Cardigan",
    description: "A versatile, warm cardigan made from a premium wool blend. Perfect for layering in cooler weather.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1522&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.6,
    reviews: 83,
    inStock: true,
    bestSeller: true
  },
  {
    id: 20,
    name: "Cotton Polo Shirt",
    description: "Classic polo shirt made from soft cotton piqué fabric. Features a ribbed collar and a two-button placket.",
    price: 39.95,
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.3,
    reviews: 129,
    inStock: true
  },
  {
    id: 21,
    name: "Summer Dress",
    description: "Light and flowy summer dress with floral pattern and adjustable straps. Perfect for warm days and casual outings.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618554754947-e01d5ce3c549?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.7,
    reviews: 118,
    inStock: true,
    featured: true
  },
  {
    id: 22,
    name: "Lightweight Jacket",
    description: "Versatile lightweight jacket perfect for transitional weather. Features a water-resistant finish and multiple pockets.",
    price: 89.95,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.5,
    reviews: 92,
    inStock: true
  },
  // Additional Accessories Products
  {
    id: 23,
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these designer sunglasses featuring UV protection and a classic design that complements any outfit.",
    price: 129.99,
    discountedPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625591339971-4c9a87a66871?q=80&w=1364&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.8,
    reviews: 54,
    inStock: true,
    bestSeller: true
  },
  {
    id: 24,
    name: "Minimalist Watch",
    description: "Elegant minimalist watch with a stainless steel case and leather band. Perfect for both casual and formal occasions.",
    price: 149.95,
    images: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535449425-adc6f5faa71c?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.7,
    reviews: 77,
    inStock: true,
    new: true
  },
  {
    id: 25,
    name: "Leather Wallet",
    description: "Handcrafted leather wallet with multiple card slots and compartments. The perfect blend of functionality and classic style.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1559003616-06466a50faee?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1374&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.4,
    reviews: 103,
    inStock: true
  },
  {
    id: 26,
    name: "Silk Scarf",
    description: "Luxurious silk scarf with a vibrant pattern that adds an elegant touch to any outfit. Perfect for all seasons.",
    price: 49.95,
    images: [
      "https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=1365&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1498&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.6,
    reviews: 61,
    inStock: true
  },
  {
    id: 27,
    name: "Leather Belt",
    description: "Classic leather belt with a timeless design that complements both casual and formal attire.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1308&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.5,
    reviews: 89,
    inStock: true
  },
  // Additional Home Products
  {
    id: 28,
    name: "Throw Pillow Set",
    description: "Add comfort and style to your living space with this set of decorative throw pillows featuring premium fabrics and modern designs.",
    price: 49.99,
    discountedPrice: 39.99,
    images: [
      "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.3,
    reviews: 72,
    inStock: true
  },
  {
    id: 29,
    name: "Ceramic Dinner Set",
    description: "Elevate your dining experience with this elegant ceramic dinner set featuring plates, bowls, and mugs for four people.",
    price: 89.95,
    images: [
      "https://images.unsplash.com/photo-1567193259760-fb87558d0252?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606706851667-17a401c60b59?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.6,
    reviews: 58,
    inStock: true,
    featured: true
  },
  {
    id: 30,
    name: "Bamboo Cutting Board",
    description: "Sustainable and durable bamboo cutting board with a sleek design that's perfect for food preparation and serving.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1608085575984-d61d8335340e?q=80&w=1380&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525197134083-506934486c76?q=80&w=1350&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.4,
    reviews: 83,
    inStock: true
  },
  {
    id: 31,
    name: "Cotton Bed Sheets",
    description: "Soft and breathable 100% cotton bed sheets for a comfortable night's sleep. Set includes fitted sheet, flat sheet, and pillowcases.",
    price: 59.95,
    images: [
      "https://images.unsplash.com/photo-1583908701673-4bb31f4e62a0?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.7,
    reviews: 129,
    inStock: true,
    bestSeller: true
  },
  {
    id: 32,
    name: "Decorative Vase",
    description: "Stylish ceramic vase with a unique design that adds a decorative touch to any room. Perfect for fresh or dried flowers.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1603204077859-fde5b8a70b9e?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "home",
    rating: 4.5,
    reviews: 46,
    inStock: true
  },
  // Additional Beauty Products
  {
    id: 33,
    name: "Moisturizing Face Cream",
    description: "Hydrating face cream with natural ingredients that nourishes and rejuvenates your skin for a radiant complexion.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=1480&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.6,
    reviews: 95,
    inStock: true,
    bestSeller: true
  },
  {
    id: 34,
    name: "Premium Hair Dryer",
    description: "Professional-grade hair dryer with multiple heat and speed settings for quick drying and styling without damaging your hair.",
    price: 79.95,
    discountedPrice: 69.95,
    images: [
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1288&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.5,
    reviews: 68,
    inStock: true
  },
  {
    id: 35,
    name: "Essential Oil Set",
    description: "Collection of pure essential oils for aromatherapy, skin care, and home fragrance. Includes lavender, eucalyptus, peppermint, and more.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601300576570-56c15b6c5131?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.7,
    reviews: 116,
    inStock: true,
    new: true
  },
  {
    id: 36,
    name: "Cosmetic Brush Set",
    description: "Professional makeup brush set with soft synthetic bristles for flawless makeup application. Includes brushes for face, eyes, and lips.",
    price: 34.95,
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599733391957-8769103fde24?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.4,
    reviews: 79,
    inStock: true
  },
  {
    id: 37,
    name: "Natural Bath Bombs",
    description: "Set of six handcrafted bath bombs made with natural ingredients and essential oils for a relaxing and aromatic bath experience.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608383910944-b8611bbba566?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.8,
    reviews: 143,
    inStock: true,
    featured: true
  },
  // Additional Sports Products
  {
    id: 38,
    name: "Fitness Resistance Bands",
    description: "Set of five resistance bands of varying strengths for effective home workouts. Perfect for strength training, physical therapy, and stretching.",
    price: 24.95,
    images: [
      "https://images.unsplash.com/photo-1598447857968-52417401af1f?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1325&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.5,
    reviews: 87,
    inStock: true,
    bestSeller: true
  },
  {
    id: 39,
    name: "Insulated Water Bottle",
    description: "Double-walled stainless steel water bottle that keeps beverages cold for 24 hours or hot for 12 hours. Perfect for workouts and outdoor activities.",
    price: 34.99,
    discountedPrice: 29.99,
    images: [
      "https://images.unsplash.com/photo-1585082868368-68c3918b6dc3?q=80&w=1364&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.7,
    reviews: 112,
    inStock: true
  },
  {
    id: 40,
    name: "Running Shoes",
    description: "Lightweight and supportive running shoes with responsive cushioning for comfort during long runs and workouts.",
    price: 89.95,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1325&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.6,
    reviews: 105,
    inStock: true,
    featured: true
  },
  {
    id: 41,
    name: "Jump Rope",
    description: "Adjustable jump rope with comfortable handles for an effective cardio workout. Suitable for all fitness levels.",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?q=80&w=1364&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=1470&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.4,
    reviews: 74,
    inStock: true
  },
  {
    id: 42,
    name: "Dumbbell Set",
    description: "Set of neoprene-coated dumbbells in various weights for strength training and toning exercises at home.",
    price: 59.95,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638536532686-d610adcd3c14?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.5,
    reviews: 93,
    inStock: true,
    new: true
  },
  // Additional Toys Products
  {
    id: 43,
    name: "Interactive Learning Tablet",
    description: "Child-friendly tablet with educational games, puzzles, and activities to promote learning through play. Suitable for ages 3-7.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-162257363d8dc0-de6ac3eb5a0f?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588691543673-f216f89473b9?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "toys",
    rating: 4.6,
    reviews: 58,
    inStock: true,
    featured: true
  },
  {
    id: 44,
    name: "Plush Teddy Bear",
    description: "Super soft and huggable teddy bear made from premium materials. The perfect companion for children of all ages.",
    price: 24.95,
    discountedPrice: 19.95,
    images: [
      "https://images.unsplash.com/photo-1559169536-f2436b347fe5?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544587995-56e578ce45ad?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "toys",
    rating: 4.8,
    reviews: 127,
    inStock: true,
    bestSeller: true
  },
  {
    id: 45,
    name: "Remote Control Car",
    description: "Fast and durable remote control car with responsive controls and long battery life. Suitable for indoor and outdoor play.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1288&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584812283883-907ab87ef837?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "toys",
    rating: 4.5,
    reviews: 86,
    inStock: true
  },
  {
    id: 46,
    name: "Art and Craft Kit",
    description: "Complete arts and crafts kit with various materials to inspire creativity and imagination in children of all ages.",
    price: 29.95,
    images: [
      "https://images.unsplash.com/photo-1605153402294-28f220a198cd?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566754440692-60a4cad5cc26?q=80&w=1287&auto=format&fit=crop"
    ],
    category: "toys",
    rating: 4.7,
    reviews: 69,
    inStock: true,
    new: true
  },
  {
    id: 47,
    name: "Board Game Collection",
    description: "Set of classic board games for family fun nights. Includes chess, checkers, backgammon, and more in an elegant wooden box.",
    price: 44.99,
    images: [
      "https://images.unsplash.com/photo-1632501641765-e568d28b0015?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?q=80&w=1364&auto=format&fit=crop"
    ],
    category: "toys",
    rating: 4.6,
    reviews: 52,
    inStock: true
  }
];

export const featuredProducts = products.filter(product => product.featured);
export const newArrivals = products.filter(product => product.new);
export const bestSellers = products.filter(product => product.bestSeller);

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (productId: number, limit = 4): Product[] => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.id !== productId && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'home', name: 'Home & Living' },
  { id: 'beauty', name: 'Beauty' },
  { id: 'sports', name: 'Sports & Fitness' },
  { id: 'toys', name: 'Toys & Games' }
];
