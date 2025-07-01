import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
    user: null,
    shippingAddress: null,
    paymentMethod: null
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const uniqueId = `${product.name}-${product.brand}`;
      const existingItem = state.cart.find(item => item.uniqueId === uniqueId);
      
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.cart.push({ 
          ...product, 
          qty: 1,
          uniqueId // Add unique identifier
        });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, qty }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.qty = qty;
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    SET_SHIPPING_ADDRESS(state, address) {
      state.shippingAddress = address;
    },
    SET_PAYMENT_METHOD(state, method) {
      state.paymentMethod = method;
    },
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
  checkout({ commit }, { address, paymentMethod }) {
    return new Promise((resolve, reject) => {
      try {
        // Validate inputs
        if (!address || !paymentMethod) {
          throw new Error('Missing required information');
        }
        
        commit('SET_SHIPPING_ADDRESS', address);
        commit('SET_PAYMENT_METHOD', paymentMethod);
        
        // Simulate API call
        setTimeout(() => {
          commit('CLEAR_CART');
          resolve();
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }
},
  getters: {
    cartItems: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + (item.price * item.qty), 0);
    },
    cartItemCount: state => {
      return state.cart.reduce((count, item) => count + item.qty, 0);
    },
    isAuthenticated: state => !!state.user
  }
});