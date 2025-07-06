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
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 128,
        discount: 15,
        category: "Makeup",
        description: "Long-lasting matte lipstick with rich pigmentation. Perfect for all-day wear without drying your lips.",
        colors: ["#ff2d8e", "#d42a7a", "#b02765"],
        ingredients: ["Jojoba Oil", "Shea Butter", "Vitamin E"],
        rating: 4.5
      },
      {
        id: 2,
        name: "Hydrating Face Serum",
        brand: "The Ordinary",
        price: 22.50,
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 342,
        discount: 0,
        category: "Skincare",
        description: "Lightweight serum that deeply hydrates and plumps skin. Reduces fine lines and improves texture.",
        colors: ["#f5f5f5"],
        ingredients: ["Hyaluronic Acid", "B5", "Marine Algae"],
        rating: 4.8
      },
      {
        id: 3,
        name: "Volume Mascara",
        brand: "Maybelline",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 287,
        discount: 10,
        category: "Makeup",
        description: "Lengthens and volumizes lashes without clumping. Water-resistant formula lasts all day.",
        colors: ["#000000", "#333333"],
        ingredients: ["Beeswax", "Panthenol", "Nylon Fibers"],
        rating: 4.3
      },
      {
        id: 4,
        name: "Satin Foundation",
        brand: "Fenty Beauty",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 421,
        discount: 0,
        category: "Makeup",
        description: "Medium coverage foundation with a natural satin finish. 40 shade range for all skin tones.",
        colors: ["#f5d0b9", "#e3b78e", "#c88d61", "#a5643a"],
        ingredients: ["Glycerin", "Squalane", "Vitamin C"],
        rating: 4.7
      },
      {
        id: 5,
        name: "Moisturizing Cream",
        brand: "CeraVe",
        price: 18.75,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 512,
        discount: 20,
        category: "Skincare",
        description: "Rich moisturizer that restores skin barrier. Fragrance-free and non-comedogenic.",
        colors: ["#f5f5f5"],
        ingredients: ["Ceramides", "Hyaluronic Acid", "Niacinamide"],
        rating: 4.9
      },
      {
        id: 6,
        name: "Eyeshadow Palette",
        brand: "Huda Beauty",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 198,
        discount: 0,
        category: "Makeup",
        description: "18 highly pigmented shades with matte and shimmer finishes. Blendable and long-wearing.",
        colors: ["#ff2d8e", "#7e3af2", "#000000", "#ffc107"],
        ingredients: ["Mica", "Talc", "Magnesium Stearate"],
        rating: 4.6
      },
      {
        id: 7,
        name: "Repairing Hair Mask",
        brand: "Olaplex",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1595425977377-3f2140d1a6e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 376,
        discount: 5,
        category: "Hair Care",
        description: "Intensive treatment that repairs damaged hair bonds. Restores strength and shine.",
        colors: ["#f5f5f5"],
        ingredients: ["Bis-Aminopropyl Diglycol Dimaleate", "Coconut Oil"],
        rating: 4.7
      },
      {
        id: 8,
        name: "Setting Spray",
        brand: "Urban Decay",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        reviews: 265,
        discount: 0,
        category: "Makeup",
        description: "Extends makeup wear for up to 16 hours. Oil-free formula works for all skin types.",
        colors: ["#f5f5f5"],
        ingredients: ["Green Tea Extract", "Aloe Vera"],
        rating: 4.4
      }
    ],
    categories: [
      {
        name: "Makeup",
        description: "Lipsticks, foundations, eyeshadows and more",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Skincare",
        description: "Cleansers, moisturizers, serums and treatments",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Hair Care",
        description: "Shampoos, conditioners, styling products",
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
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