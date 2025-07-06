<template>
  <div id="app">
    <HeaderSection @toggle-cart="showCart = true" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterSection />
    <ShoppingCart v-if="showCart" @close="showCart = false" />
    
    <!-- Order Success Modal -->
    <div v-if="showOrderSuccess" class="order-success-modal">
      <div class="modal-content">
        <i class="fas fa-check-circle"></i>
        <h3>Order Placed Successfully!</h3>
        <p>Thank you for your purchase. Your order has been confirmed.</p>
        <button class="btn btn-primary" @click="showOrderSuccess = false">Continue Shopping</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: {
    HeaderSection,
    FooterSection,
    ShoppingCart
  },
  setup() {
    const route = useRoute()
    const showCart = ref(false)
    const showOrderSuccess = ref(false)

    // Watch for order success query param
    watch(() => route.query.orderSuccess, (newVal) => {
      if (newVal) {
        showOrderSuccess.value = true
        // Remove the query param after showing the modal
        window.history.replaceState({}, document.title, window.location.pathname)
      }
    })

    return {
      showCart,
      showOrderSuccess
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Global styles */
:root {
  --primary: #ff2d8e;
  --secondary: #ff6bae;
  --dark: #1a1a2e;
  --light: #f8f9fa;
  --accent: #7e3af2;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Order Success Modal */
.order-success-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.order-success-modal .modal-content {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.order-success-modal i {
  font-size: 4rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.order-success-modal h3 {
  color: var(--dark);
  margin-bottom: 1rem;
}

.order-success-modal p {
  color: #666;
  margin-bottom: 2rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .order-success-modal .modal-content {
    padding: 1.5rem;
  }
}
</style>