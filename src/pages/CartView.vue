<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-8">
        <h1 class="display-4 mb-4">Your Shopping Cart</h1>
        <div v-if="cart.length === 0" class="text-center py-5">
          <i class="fas fa-shopping-bag fa-4x text-muted mb-4"></i>
          <h3>Your cart is empty</h3>
          <p class="text-muted">Start shopping to add items to your cart</p>
          <router-link to="/products" class="btn btn-primary mt-3">
            Browse Products
          </router-link>
        </div>
        <div v-else>
          <div v-for="(item, index) in cart" :key="index" class="cart-item mb-4 p-3 rounded">
            <div class="row align-items-center">
              <div class="col-md-2">
                <img :src="item.image" :alt="item.name" class="img-fluid rounded">
              </div>
              <div class="col-md-5">
                <h5>{{ item.name }}</h5>
                <p class="text-muted mb-0">{{ item.brand }}</p>
              </div>
              <div class="col-md-3">
                <div class="d-flex align-items-center">
                  <button class="btn btn-sm btn-outline-secondary" @click="updateQuantity(item, -1)">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="mx-3">{{ item.quantity }}</span>
                  <button class="btn btn-sm btn-outline-secondary" @click="updateQuantity(item, 1)">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-2 text-end">
                <span class="fw-bold">${{ (item.price * item.quantity).toFixed(2) }}</span>
                <button class="btn btn-link text-danger ms-2" @click="removeFromCart(item)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Order Summary</h5>
            <div class="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between fw-bold mb-4">
              <span>Total:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            <router-link 
              to="/checkout" 
              class="btn btn-primary w-100"
              :class="{ disabled: cart.length === 0 }">
              Proceed to Checkout
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    
    const cart = computed(() => store.state.cart)
    const cartTotal = computed(() => store.getters.cartTotal)
    
    const removeFromCart = (product) => {
      store.dispatch('removeFromCart', product)
    }
    
    const updateQuantity = (product, change) => {
      store.dispatch('updateQuantity', { product, change })
    }
    
    return {
      cart,
      cartTotal,
      removeFromCart,
      updateQuantity
    }
  }
}
</script>

<style scoped>
.cart-item {
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.cart-item:hover {
  background-color: #f0f0f0;
}
</style>