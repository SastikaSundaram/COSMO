<template>
  <div class="checkout-page">
    <!-- Header -->
     <ThreeBackground />
    <header class="bg-light border-bottom py-2 px-4 d-flex justify-content-between align-items-center">
      <router-link to="/cart" class="btn btn-outline-secondary">
        <i class="fas fa-arrow-left me-2"></i>Back to Cart
      </router-link>
      <h4 class="mb-0">Checkout</h4>
      <div class="d-flex align-items-center">
        <span class="badge bg-primary rounded-pill me-2">{{ cartItemCount }}</span>
        <i class="fas fa-shopping-cart fs-4"></i>
      </div>
    </header>

    <div class="container my-5">
      <div class="row">
        <!-- Checkout Steps -->
        <div class="col-12 mb-4">
          <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
              <a class="nav-link" :class="{ 'active': currentStep === 1, 'text-success': currentStep > 1 }" href="#">
                <span class="step-number" :class="{ 'bg-success': currentStep > 1, 'bg-primary': currentStep === 1 }">1</span>
                Shipping
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ 'active': currentStep === 2, 'text-success': currentStep > 2, 'disabled': currentStep < 2 }" href="#">
                <span class="step-number" :class="{ 'bg-success': currentStep > 2, 'bg-primary': currentStep === 2 }">2</span>
                Payment
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ 'active': currentStep === 3, 'text-success': currentStep > 3, 'disabled': currentStep < 3 }" href="#">
                <span class="step-number" :class="{ 'bg-success': currentStep > 3, 'bg-primary': currentStep === 3 }">3</span>
                Review
              </a>
            </li>
          </ul>
        </div>

        <!-- Main Content -->
        <div class="col-lg-8">
          <!-- Step 1: Shipping Information -->
          <div v-if="currentStep === 1" class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title mb-4">Shipping Information</h5>
              <form @submit.prevent="goToStep(2)">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" v-model="shippingAddress.firstName" required>
                  </div>
                  <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" v-model="shippingAddress.lastName" required>
                  </div>
                  <div class="col-12">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" v-model="shippingAddress.address" required>
                  </div>
                  <div class="col-md-6">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city" v-model="shippingAddress.city" required>
                  </div>
                  <div class="col-md-4">
                    <label for="state" class="form-label">State</label>
                    <select id="state" class="form-select" v-model="shippingAddress.state" required>
                      <option value="">Choose...</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>West Bengal</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <label for="zip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="zip" v-model="shippingAddress.zip" required>
                  </div>
                  <div class="col-12">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" class="form-control" id="phone" v-model="shippingAddress.phone" required>
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-4">
                  <button type="submit" class="btn btn-primary">Continue to Payment</button>
                </div>
              </form>
            </div>
          </div>

          <!-- Step 2: Payment Method -->
          <div v-if="currentStep === 2" class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title mb-4">Payment Method</h5>
              <form @submit.prevent="goToStep(3)">
                <div class="form-check mb-3 border-bottom pb-3">
                  <input class="form-check-input" type="radio" name="paymentMethod" id="creditCard" 
                    value="credit_card" v-model="paymentMethod" required>
                  <label class="form-check-label d-flex align-items-center" for="creditCard">
                    <i class="fab fa-cc-visa fs-3 mx-2 text-primary"></i>
                    <i class="fab fa-cc-mastercard fs-3 mx-2 text-danger"></i>
                    <i class="fab fa-cc-amex fs-3 mx-2 text-info"></i>
                    Credit/Debit Card
                  </label>
                </div>

                <div v-if="paymentMethod === 'credit_card'" class="ps-4 mb-4">
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="cardNumber" class="form-label">Card Number</label>
                      <input type="text" class="form-control" id="cardNumber" v-model="cardDetails.number" 
                        placeholder="1234 5678 9012 3456" required>
                    </div>
                    <div class="col-md-6">
                      <label for="cardName" class="form-label">Name on Card</label>
                      <input type="text" class="form-control" id="cardName" v-model="cardDetails.name" required>
                    </div>
                    <div class="col-md-3">
                      <label for="cardExpiry" class="form-label">Expiry Date</label>
                      <input type="text" class="form-control" id="cardExpiry" v-model="cardDetails.expiry" 
                        placeholder="MM/YY" required>
                    </div>
                    <div class="col-md-3">
                      <label for="cardCvv" class="form-label">CVV</label>
                      <input type="text" class="form-control" id="cardCvv" v-model="cardDetails.cvv" required>
                    </div>
                  </div>
                </div>

                <div class="form-check mb-3 border-bottom pb-3">
                  <input class="form-check-input" type="radio" name="paymentMethod" id="paypal" 
                    value="paypal" v-model="paymentMethod">
                  <label class="form-check-label" for="paypal">
                    <i class="fab fa-paypal fs-3 mx-2 text-primary"></i>
                    PayPal
                  </label>
                </div>

                <div class="form-check mb-3">
                  <input class="form-check-input" type="radio" name="paymentMethod" id="cod" 
                    value="cod" v-model="paymentMethod">
                  <label class="form-check-label" for="cod">
                    <i class="fas fa-money-bill-wave fs-3 mx-2 text-success"></i>
                    Cash on Delivery
                  </label>
                </div>

                <div class="d-flex justify-content-between mt-4">
                  <button type="button" class="btn btn-outline-secondary" @click="goToStep(1)">Back</button>
                  <button type="submit" class="btn btn-primary">Review Order</button>
                </div>
              </form>
            </div>
          </div>

          <!-- Step 3: Order Review -->
          <div v-if="currentStep === 3" class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title mb-4">Review Your Order</h5>
              
              <div class="mb-4">
                <h6>Shipping Information</h6>
                <div class="card bg-light p-3">
                  <p class="mb-1">{{ shippingAddress.firstName }} {{ shippingAddress.lastName }}</p>
                  <p class="mb-1">{{ shippingAddress.address }}</p>
                  <p class="mb-1">{{ shippingAddress.city }}, {{ shippingAddress.state }} {{ shippingAddress.zip }}</p>
                  <p class="mb-0">Phone: {{ shippingAddress.phone }}</p>
                </div>
              </div>

              <div class="mb-4">
                <h6>Payment Method</h6>
                <div class="card bg-light p-3">
                  <p class="mb-0" v-if="paymentMethod === 'credit_card'">
                    <i class="far fa-credit-card me-2"></i> Credit/Debit Card ending in {{ cardDetails.number.slice(-4) }}
                  </p>
                  <p class="mb-0" v-else-if="paymentMethod === 'paypal'">
                    <i class="fab fa-paypal me-2"></i> PayPal
                  </p>
                  <p class="mb-0" v-else>
                    <i class="fas fa-money-bill-wave me-2"></i> Cash on Delivery
                  </p>
                </div>
              </div>

              <div class="mb-4">
                <h6>Order Summary</h6>
                <div class="card bg-light p-3">
                  <div v-for="item in cartItems" :key="item.id" class="d-flex justify-content-between py-2 border-bottom">
                    <div>
                      <span class="fw-bold">{{ item.name }}</span>
                      <span class="text-muted"> × {{ item.qty }}</span>
                    </div>
                    <div>₹{{ (item.price * item.qty).toFixed(2) }}</div>
                  </div>
                  <div class="d-flex justify-content-between py-2 border-bottom">
                    <div>Subtotal</div>
                    <div>₹{{ cartTotal.toFixed(2) }}</div>
                  </div>
                  <div class="d-flex justify-content-between py-2 border-bottom">
                    <div>Shipping</div>
                    <div class="text-success">FREE</div>
                  </div>
                  <div class="d-flex justify-content-between py-2 border-bottom">
                    <div>Tax (18%)</div>
                    <div>₹{{ (cartTotal * 0.18).toFixed(2) }}</div>
                  </div>
                  <div class="d-flex justify-content-between py-2 fw-bold">
                    <div>Total</div>
                    <div>₹{{ (cartTotal * 1.18).toFixed(2) }}</div>
                  </div>
                </div>
              </div>

              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="terms" v-model="agreeTerms" required>
                <label class="form-check-label" for="terms">
                  I agree to the <a href="#">Terms and Conditions</a>
                </label>
              </div>

              <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-outline-secondary" @click="goToStep(2)">Back</button>
                <button type="button" class="btn btn-success" @click="placeOrder" :disabled="!agreeTerms || processing">
                  <span v-if="processing" class="spinner-border spinner-border-sm me-2"></span>
                  {{ processing ? 'Processing...' : 'Place Order' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary Sidebar -->
        <div class="col-lg-4">
          <div class="card shadow-sm sticky-top" style="top: 20px;">
            <div class="card-body">
              <h5 class="card-title mb-3">Order Summary</h5>
              
              <div v-for="item in cartItems" :key="item.id" class="d-flex mb-3">
                <img :src="item.img" alt="Product" class="rounded me-3" style="width: 60px; height: 60px; object-fit: cover;">
                <div class="flex-grow-1">
                  <h6 class="mb-1">{{ item.name }}</h6>
                  <p class="text-muted small mb-1">Qty: {{ item.qty }}</p>
                  <p class="mb-0 text-primary">₹{{ (item.price * item.qty).toFixed(2) }}</p>
                </div>
              </div>
              
              <hr>
              
              <div class="d-flex justify-content-between mb-1">
                <span>Subtotal</span>
                <span>₹{{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-1">
                <span>Shipping</span>
                <span class="text-success">FREE</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>Tax (18%)</span>
                <span>₹{{ (cartTotal * 0.18).toFixed(2) }}</span>
              </div>
              
              <div class="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{{ (cartTotal * 1.18).toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { useToast } from 'vue-toastification'; // Import useToast
import ThreeBackground from './ThreeBackground.vue';

export default {
  data() {
    return {
      currentStep: 1,
      shippingAddress: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
      },
      paymentMethod: 'credit_card',
      cardDetails: {
        number: '',
        name: '',
        expiry: '',
        cvv: ''
      },
      agreeTerms: false,
      processing: false
    };
  },
  
  components: {
    ThreeBackground,
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'cartItemCount'])
  },
  methods: {
    ...mapActions(['checkout']),
    ...mapMutations(['SET_SHIPPING_ADDRESS', 'SET_PAYMENT_METHOD']),
    goToStep(step) {
      if (step === 2) {
        this.SET_SHIPPING_ADDRESS(this.shippingAddress);
      } else if (step === 3) {
        this.SET_PAYMENT_METHOD(this.paymentMethod);
      }
      this.currentStep = step;
    },
    async placeOrder() {
      // Initialize toast
      const toast = useToast();
      
      // Validate terms agreement
      if (!this.agreeTerms) {
        toast.error('Please agree to the terms and conditions', {
          position: 'top-right',
          timeout: 3000
        });
        return;
      }
      
      this.processing = true;
      
      try {
        await this.checkout({
          address: this.shippingAddress,
          paymentMethod: this.paymentMethod
        });
        
        this.$router.push({ name: 'Home' });
        toast.success('Order placed successfully!', {
          position: 'top-right',
          timeout: 3000
        });
      } catch (error) {
        console.error('Checkout error:', error);
        toast.error('Error processing your order. Please try again.', {
          position: 'top-right',
          timeout: 3000
        });
      } finally {
        this.processing = false;
      }
    }
  }
};
</script>
<style scoped>
.checkout-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.step-number {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  margin-right: 8px;
  color: white;
  font-size: 14px;
}

.nav-pills .nav-link {
  color: #6c757d;
  position: relative;
}

.nav-pills .nav-link.active {
  color: #0d6efd;
  background: none;
  font-weight: 500;
}

.nav-pills .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -11px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #0d6efd;
}

.sticky-top {
  z-index: 1;
}
</style>