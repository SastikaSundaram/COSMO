<template>
  <div class="modal fade show" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Your Shopping Cart ({{ cart.length }})</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div v-if="cart.length === 0" class="text-center py-4">
            <i class="fas fa-shopping-bag fa-3x text-muted mb-3"></i>
            <h5>Your cart is empty</h5>
            <p class="text-muted">Start shopping to add items to your cart</p>
            <button class="btn btn-primary mt-3" @click="$emit('close')">Continue Shopping</button>
          </div>
          <div v-else>
            <div class="cart-item d-flex align-items-center mb-3" v-for="(item, index) in cart" :key="index">
              <img :src="item.image" class="img-thumbnail me-3" style="width: 80px; height: 80px; object-fit: cover;" alt="Product">
              <div class="flex-grow-1">
                <h6 class="mb-0">{{ item.name }}</h6>
                <small class="text-muted">{{ item.brand }}</small>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <div class="fw-bold">${{ item.price.toFixed(2) }}</div>
                  <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary" @click="$emit('update-quantity', { product: item, change: -1 })">-</button>
                    <span class="mx-2">{{ item.quantity }}</span>
                    <button class="btn btn-sm btn-outline-secondary" @click="$emit('update-quantity', { product: item, change: 1 })">+</button>
                  </div>
                </div>
              </div>
              <button class="btn btn-sm btn-link text-danger" @click="$emit('remove-from-cart', item)">
                <i class="fas fa-trash"></i>
              </button>
            </div>
            <hr>
            <div class="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Subtotal:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between text-muted mb-3">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div class="d-flex justify-content-between fw-bold fs-4">
              <span>Total:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" @click="$emit('close')">Continue Shopping</button>
          <router-link 
            to="/checkout" 
            class="btn btn-primary" 
            :class="{ disabled: cart.length === 0 }"
            @click="$emit('close')">
            Proceed to Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  emits: ['close', 'remove-from-cart', 'update-quantity'],
  setup() {
    const store = useStore()
    
    const cart = computed(() => store.state.cart)
    const cartTotal = computed(() => store.getters.cartTotal)
    
    return {
      cart,
      cartTotal
    }
  }
}
</script>

<style scoped>
.cart-item {
  transition: all 0.3s ease;
  padding: 0.5rem;
}

.cart-item:hover {
  background-color: #f9f9f9;
  border-radius: 8px;
}

.modal.show {
  display: block;
  background: rgba(0,0,0,0.5);
}

.modal-content {
  border-radius: 15px;
  overflow: hidden;
}

.modal-header {
  border-bottom: 1px solid #eee;
}

.modal-footer {
  border-top: 1px solid #eee;
}

.btn-outline-secondary {
  border-color: #ddd;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
}

.btn-primary {
  min-width: 180px;
}
</style>