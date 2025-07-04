<template>
  <div class="cart-page">
    <AppHeader />
    <div class="container my-5 py-5">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h1 class="page-title">Your Shopping Cart</h1>
        <router-link to="/" class="btn btn-outline-primary">
          <i class="fas fa-arrow-left me-2"></i>Continue Shopping
        </router-link>
      </div>
      
      <div v-if="cartItems.length === 0" class="empty-cart text-center py-5">
        <i class="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
        <h3 class="mb-3">Your cart is empty</h3>
        <p class="text-muted mb-4">Looks like you haven't added anything to your cart yet</p>
        <router-link to="/" class="btn btn-primary">Start Shopping</router-link>
      </div>
      
      <div v-else class="row">
        <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="cart-item" v-for="item in cartItems" :key="item.id">
                <div class="row align-items-center">
                  <div class="col-md-2">
                    <img :src="item.image" :alt="item.name" class="img-fluid rounded">
                  </div>
                  <div class="col-md-5">
                    <h5 class="mb-1">{{ item.name }}</h5>
                    <p class="mb-1 text-muted">{{ item.brand }}</p>
                    <p class="mb-0 text-success" v-if="item.stock > 0">In Stock</p>
                    <p class="mb-0 text-danger" v-else>Out of Stock</p>
                  </div>
                  <div class="col-md-3">
                    <div class="input-group quantity-selector">
                      <button class="btn btn-outline-secondary" @click="updateQuantity(item, item.quantity - 1)" :disabled="item.quantity <= 1">
                        -
                      </button>
                      <input type="number" class="form-control text-center" v-model.number="item.quantity" @change="updateQuantity(item, item.quantity)" min="1">
                      <button class="btn btn-outline-secondary" @click="updateQuantity(item, item.quantity + 1)">
                        +
                      </button>
                    </div>
                  </div>
                  <div class="col-md-2 text-end">
                    <h5 class="mb-0">${{ (item.price * item.quantity).toFixed(2) }}</h5>
                    <button class="btn btn-link text-danger p-0 mt-1" @click="removeItem(item.id)">
                      <i class="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
                <hr class="my-3">
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card shadow-sm sticky-top">
            <div class="card-body">
              <h5 class="card-title mb-4">Order Summary</h5>
              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal ({{ cartItemCount }} items)</span>
                <span>${{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span class="text-success">FREE</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>${{ (cartTotal * 0.18).toFixed(2) }}</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-4 fw-bold fs-5">
                <span>Total</span>
                <span>${{ (cartTotal * 1.18).toFixed(2) }}</span>
              </div>
              <router-link to="/checkout" class="btn btn-primary w-100 py-3">
                Proceed to Checkout
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartItemCount'])
  },
  methods: {
    ...mapMutations(['UPDATE_CART_ITEM_QUANTITY', 'REMOVE_FROM_CART']),
    updateQuantity(item, newQuantity) {
      if (newQuantity > 0) {
        this.UPDATE_CART_ITEM_QUANTITY({ 
          id: item.id, 
          quantity: newQuantity 
        });
      }
    },
    removeItem(productId) {
      this.REMOVE_FROM_CART(productId);
      this.$toast.info('Item removed from cart');
    }
  }
};
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  background-color: #f9f9f9;
}

.page-title {
  color: var(--primary);
  font-weight: 700;
}

.empty-cart {
  background: white;
  border-radius: 15px;
  padding: 50px;
  box-shadow: var(--shadow);
}

.quantity-selector .btn {
  width: 40px;
}

.quantity-selector input {
  width: 60px;
  text-align: center;
}

.sticky-top {
  top: 100px;
  z-index: 1;
}
</style>