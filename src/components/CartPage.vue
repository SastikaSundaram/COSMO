<template>
  <div class="cart-page">
    <!-- Header -->
     <ThreeBackground />
    <header class="bg-light border-bottom py-2 px-4 d-flex justify-content-between align-items-center">
      <router-link to="/home" class="btn btn-outline-secondary">Continue Shopping</router-link>
      <h4 class="mb-0">Your Shopping Cart</h4>
      <div class="d-flex align-items-center">
        <span class="badge bg-primary rounded-pill me-2">{{ cartItemCount }}</span>
        <i class="fas fa-shopping-cart fs-4"></i>
      </div>
    </header>

    <div class="container my-5">
      <div class="row">
        <!-- Cart Items -->
        <div class="col-lg-8">
          <div v-if="!cartItems.length" class="alert alert-info">
            Your cart is empty. <router-link to="/home">Start shopping</router-link>
          </div>

          <div v-else class="card shadow-sm mb-4">
            <div class="card-body">
              <div v-for="item in cartItems" :key="item.id" class="cart-item d-flex mb-4 pb-4 border-bottom">
                <div class="flex-shrink-0">
                  <img :src="item.img" alt="Product" class="cart-item-image rounded" />
                </div>
                <div class="flex-grow-1 ms-3">
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-1">{{ item.name }}</h5>
                    <button @click="removeFromCart(item.id)" class="btn btn-sm btn-outline-danger">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                  <p class="mb-1 text-muted">Brand: {{ item.brand }}</p>
                  <div class="d-flex align-items-center justify-content-between mt-2">
                    <div class="input-group quantity-selector" style="width: 120px;">
                      <button class="btn btn-outline-secondary" @click="updateQuantity(item.id, item.qty - 1)" :disabled="item.qty <= 1">
                        -
                      </button>
                      <input type="number" class="form-control text-center" v-model.number="item.qty" @change="updateQuantity(item.id, item.qty)" min="1" />
                      <button class="btn btn-outline-secondary" @click="updateQuantity(item.id, item.qty + 1)">
                        +
                      </button>
                    </div>
                    <h5 class="mb-0 text-primary">₹{{ (item.price * item.qty).toFixed(2) }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="col-lg-4">
          <div class="card shadow-sm sticky-top" style="top: 20px;">
            <div class="card-body">
              <h5 class="card-title mb-4">Order Summary</h5>
              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal ({{ cartItemCount }} items)</span>
                <span>₹{{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span class="text-success">FREE</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>₹{{ (cartTotal * 0.18).toFixed(2) }}</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-4">
                <h5>Total</h5>
                <h5>₹{{ (cartTotal * 1.18).toFixed(2) }}</h5>
              </div>
              <router-link to="/checkout" class="btn btn-primary w-100 py-2">
                Proceed to Checkout
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ThreeBackground from './ThreeBackground.vue';

export default {
  components: {
    ThreeBackground,
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartItemCount'])
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CART', 'UPDATE_QUANTITY']),
    removeFromCart(productId) {
      this.REMOVE_FROM_CART(productId);
    },
    updateQuantity(productId, qty) {
      if (qty < 1) qty = 1;
      this.UPDATE_QUANTITY({ productId, qty });
    }
  }
};
</script>

<style scoped>
.cart-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.cart-item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.quantity-selector input {
  -moz-appearance: textfield;
}

.quantity-selector input::-webkit-outer-spin-button,
.quantity-selector input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sticky-top {
  z-index: 1;
}
</style>