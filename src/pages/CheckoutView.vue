<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-8">
        <h1 class="display-4 mb-4">Checkout</h1>
        
        <div class="card mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0">Shipping Information</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" required>
                </div>
                <div class="col-md-6">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" required>
                </div>
                <div class="col-12">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                </div>
                <div class="col-md-6">
                  <label for="city" class="form-label">City</label>
                  <input type="text" class="form-control" id="city" required>
                </div>
                <div class="col-md-4">
                  <label for="state" class="form-label">State</label>
                  <select class="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>New York</option>
                    <option>Texas</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <label for="zip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="zip" required>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0">Payment Method</h5>
          </div>
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="paymentMethod" id="creditCard" checked>
              <label class="form-check-label" for="creditCard">
                Credit Card
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="paymentMethod" id="paypal">
              <label class="form-check-label" for="paypal">
                PayPal
              </label>
            </div>
            
            <div class="mt-4">
              <div class="row g-3">
                <div class="col-12">
                  <label for="cc-name" class="form-label">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" required>
                  <small class="text-muted">Full name as displayed on card</small>
                </div>
                <div class="col-12">
                  <label for="cc-number" class="form-label">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" required>
                </div>
                <div class="col-md-4">
                  <label for="cc-expiration" class="form-label">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" required>
                </div>
                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" required>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-light">
            <h5 class="mb-0">Order Summary</h5>
          </div>
          <div class="card-body">
            <div v-for="(item, index) in cart" :key="index" class="d-flex justify-content-between mb-2">
              <div>
                <span>{{ item.name }}</span>
                <small class="text-muted d-block">x{{ item.quantity }}</small>
              </div>
              <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div class="d-flex justify-content-between fw-bold mb-4">
              <span>Total:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            <button class="btn btn-primary w-100" @click="placeOrder">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const cart = computed(() => store.state.cart)
    const cartTotal = computed(() => store.getters.cartTotal)
    
    const placeOrder = () => {
      store.dispatch('clearCart')
      router.push({ name: 'home', query: { orderSuccess: true } })
    }
    
    return {
      cart,
      cartTotal,
      placeOrder
    }
  }
}
</script>

<style scoped>
.card-header {
  padding: 1rem 1.5rem;
}
</style>