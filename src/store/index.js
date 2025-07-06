import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    products: [
      {
        id: 1,
        name: "Matte Liquid Lipstick",
        brand: "Nyx Cosmetics",
        price: 12.99,
        image: "https://swissbeauty.in/cdn/shop/files/SB-302_22C_1080x.jpg?v=1748634915", // Makeup category image
        reviews: 128,
        discount: 15,
        category: "Makeup",
        description: "Long-lasting matte lipstick with rich pigmentation.",
        colors: ["#ff2d8e", "#d42a7a", "#b02765"],
        ingredients: ["Jojoba Oil", "Shea Butter", "Vitamin E"],
        rating: 4.5
      },
      {
        id: 2,
        name: "Hydrating Face Serum",
        brand: "The Ordinary",
        price: 22.50,
        image: "https://naturali.co.in/cdn/shop/files/1.1.jpg?v=1732614136&width=1946",
        reviews: 342,
        discount: 0,
        category: "Skincare",
        description: "Lightweight serum that deeply hydrates and plumps skin.",
        colors: ["#f5f5f5"],
        ingredients: ["Hyaluronic Acid", "B5", "Marine Algae"],
        rating: 4.8
      },
      {
        id: 3,
        name: "Volume Mascara",
        brand: "Maybelline",
        price: 9.99,
        image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/wnw/wnw36418/y/14.jpg",
        reviews: 287,
        discount: 10,
        category: "Makeup",
        description: "Lengthens and volumizes lashes without clumping.",
        colors: ["#000000", "#333333"],
        ingredients: ["Beeswax", "Panthenol", "Nylon Fibers"],
        rating: 4.3
      },
      {
        id: 4,
        name: "Satin Foundation",
        brand: "Fenty Beauty",
        price: 35.00,
        image: "https://www.serycosmetics.com/wp-content/uploads/2023/06/SERY-Satin-Flawless-Long-Wearing-foundation-SLF-01-1.webp",
        reviews: 421,
        discount: 0,
        category: "Makeup",
        description: "Medium coverage foundation with natural satin finish.",
        colors: ["#f5d0b9", "#e3b78e", "#c88d61", "#a5643a"],
        ingredients: ["Glycerin", "Squalane", "Vitamin C"],
        rating: 4.7
      },
      {
        id: 5,
        name: "Moisturizing Cream",
        brand: "CeraVe",
        price: 18.75,
        image: "https://www.netmeds.com/images/product-v1/400x400/1124769/cerave_moisturising_cream_for_dry_to_very_dry_skin_340_gm_721577_11_0.webp",
        reviews: 512,
        discount: 20,
        category: "Skincare",
        description: "Rich moisturizer that restores skin barrier.",
        colors: ["#f5f5f5"],
        ingredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide"],
        rating: 4.9
      },
      {
        id: 6,
        name: "Eyeshadow Palette",
        brand: "Huda Beauty",
        price: 45.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-SzxBuuC34BR057BbbgGqO9tkt9X0u0Ndw&s",
        reviews: 198,
        discount: 0,
        category: "Makeup",
        description: "18 highly pigmented shades with matte and shimmer finishes.",
        colors: ["#ff2d8e", "#7e3af2", "#000000", "#ffc107"],
        ingredients: ["Mica", "Talc", "Magnesium Stearate"],
        rating: 4.6
      },
      {
        id: 7,
        name: "Repairing Hair Mask",
        brand: "Olaplex",
        price: 28.00,
        image: "https://bblunt.com/cdn/shop/files/1_1_63_3b8f34f7-d438-45e5-8989-5131bc2a9b27.jpg?v=1734338701",
        reviews: 376,
        discount: 5,
        category: "Hair Care",
        description: "Intensive treatment that repairs damaged hair bonds.",
        colors: ["#f5f5f5"],
        ingredients: ["Bis-Aminopropyl Diglycol Dimaleate", "Coconut Oil"],
        rating: 4.7
      },
      {
        id: 8,
        name: "Setting Spray",
        brand: "Urban Decay",
        price: 15.99,
        image: "https://fashioncolour.in/cdn/shop/files/mf09a.jpg?v=1728979775",
        reviews: 265,
        discount: 0,
        category: "Makeup",
        description: "Extends makeup wear for up to 16 hours.",
        colors: ["#f5f5f5"],
        ingredients: ["Green Tea Extract", "Aloe Vera"],
        rating: 4.4
      }
    ],
    categories: [
      {
        name: "Makeup",
        description: "Lipsticks, foundations, eyeshadows and more",
        image: "https://i.pinimg.com/736x/c1/35/bd/c135bdcd4c05d0d8d08516c47ada213d.jpg"
      },
      {
        name: "Skincare",
        description: "Cleansers, moisturizers, serums and treatments",
        image: "https://i.pinimg.com/736x/b5/0c/11/b50c1168f0ebd5eafe97bd08a1484a18.jpg"
      },
      {
        name: "Hair Care",
        description: "Shampoos, conditioners, styling products",
        image: "https://i.pinimg.com/736x/b8/49/64/b84964474f755e3647a74b333a0251b1.jpg"
      }
    ]
  },
  getters: {
    cartItemCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    featuredProducts: (state) => {
      return state.products.slice(0, 8)
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    },
    productsByCategory: (state) => (category) => {
      if (!category) return state.products
      return state.products.filter(product => product.category === category)
    }
  },
  mutations: {
    addToCart(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter(item => item.id !== product.id)
    },
    updateQuantity(state, { product, change }) {
      const cartItem = state.cart.find(item => item.id === product.id)
      
      if (cartItem) {
        cartItem.quantity += change
        
        if (cartItem.quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== product.id)
        }
      }
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, product) {
      commit('removeFromCart', product)
    },
    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload)
    },
    clearCart({ commit }) {
      commit('clearCart')
    }
  }
})