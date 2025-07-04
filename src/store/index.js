import { createStore } from 'vuex';

export default createStore({
  state: {
    wishlist: [],
    cart: [],
    user: null,
    shippingAddress: null,
    paymentMethod: null
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ 
          ...product, 
          quantity: 1 
        });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
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
    },
    TOGGLE_WISHLIST_ITEM(state, product) {
      const index = state.wishlist.findIndex(item => item.id === product.id);
      if (index === -1) {
        state.wishlist.push(product);
      } else {
        state.wishlist.splice(index, 1);
      }
    }
  },
  actions: {
    checkout({ commit }, { address, paymentMethod }) {
      return new Promise((resolve) => {
        commit('SET_SHIPPING_ADDRESS', address);
        commit('SET_PAYMENT_METHOD', paymentMethod);
        setTimeout(() => {
          commit('CLEAR_CART');
          resolve();
        }, 1000);
      });
    }
  },
  getters: {
    cartItems: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    cartItemCount: state => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    isAuthenticated: state => !!state.user,
    wishlist: state => state.wishlist
  }
});