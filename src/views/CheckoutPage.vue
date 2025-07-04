<template>
  <div class="checkout-page">
    <AppHeader />
    <div class="container my-5 py-5">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h1 class="page-title">Checkout</h1>
        <router-link to="/cart" class="btn btn-outline-primary">
          <i class="fas fa-arrow-left me-2"></i>Back to Cart
        </router-link>
      </div>
      
      <div class="row">
        <div class="col-lg-8">
          <div class="mb-4">
            <ul class="nav nav-pills nav-justified mb-4">
              <li class="nav-item">
                <a class="nav-link" :class="{ 'active': currentStep === 1 }" @click="setStep(1)">
                  <span class="step-number">1</span>
                  Shipping
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ 'active': currentStep === 2, 'disabled': currentStep < 2 }" @click="setStep(2)">
                  <span class="step-number">2</span>
                  Payment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ 'active': currentStep === 3, 'disabled': currentStep < 3 }" @click="setStep(3)">
                  <span class="step-number">3</span>
                  Review
                </a>
              </li>
            </ul>
            
            <div v-if="currentStep === 1" class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title mb-4">Shipping Information</h5>
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label">First Name</label>
                      <input type="text" class="form-control" v-model="shipping.firstName" required>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Last Name</label>
                      <input type="text" class="form-control" v-model="shipping.lastName" required>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Address</label>
                      <input type="text" class="form-control" v-model="shipping.address" required>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">City</label>
                      <input type="text" class="form-control" v-model="shipping.city" required>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">State</label>
                      <select class="form-select" v-model="shipping.state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                        <option>New York</option>
                        <option>Texas</option>
                        <option>Florida</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label class="form-label">Zip</label>
                      <input type="text" class="form-control" v-model="shipping.zip" required>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Phone Number</label>
                      <input type="tel" class="form-control" v-model="shipping.phone" required>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end mt-4">
                    <button type="button" class="btn btn-primary" @click="nextStep">Continue to Payment</button>
                  </div>
                </form>
              </div>
            </div>
            
            <div v-if="currentStep === 2" class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title mb-4">Payment Method</h5>
                <form>
                  <div class="form-check mb-3 border-bottom pb-3">
                    <input class="form-check-input" type="radio" name="paymentMethod" 
                      value="credit_card" v-model="payment.method" required>
                    <label class="form-check-label d-flex align-items-center">
                      <i class="fab fa-cc-visa fs-3 mx-2 text-primary"></i>
                      <i class="fab fa-cc-mastercard fs-3 mx-2 text-danger"></i>
                      <i class="fab fa-cc-amex fs-3 mx-2 text-info"></i>
                      Credit/Debit Card
                    </label>
                  </div>

                  <div v-if="payment.method === 'credit_card'" class="ps-4 mb-4">
                    <div class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Card Number</label>
                        <input type="text" class="form-control" v-model="payment.card.number" 
                          placeholder="1234 5678 9012 3456" required>
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Name on Card</label>
                        <input type="text" class="form-control" v-model="payment.card.name" required>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Expiry Date</label>
                        <input type="text" class="form-control" v-model="payment.card.expiry" 
                          placeholder="MM/YY" required>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">CVV</label>
                        <input type="text" class="form-control" v-model="payment.card.cvv" required>
                      </div>
                    </div>
                  </div>

                  <div class="form-check mb-3 border-bottom pb-3">
                    <input class="form-check-input" type="radio" name="paymentMethod" 
                      value="paypal" v-model="payment.method">
                    <label class="form-check-label">
                      <i class="fab fa-paypal fs-3 mx-2 text-primary"></i>
                      PayPal
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="paymentMethod" 
                      value="cod" v-model="payment.method">
                    <label class="form-check-label">
                      <i class="fas fa-money-bill-wave fs-3 mx-2 text-success"></i>
                      Cash on Delivery
                    </label>
                  </div>

                  <div class="d-flex justify-content-between mt-4">
                    <button type="button" class="btn btn-outline-secondary" @click="prevStep">Back</button>
                    <button type="button" class="btn btn-primary" @click="nextStep">Review Order</button>
                  </div>
                </form>
              </div>
            </div>
            
            <div v-if="currentStep === 3" class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title mb-4">Review Your Order</h5>
                
                <div class="mb-4">
                  <h6>Shipping Information</h6>
                  <div class="card bg-light p-3">
                    <p class="mb-1">{{ shipping.firstName }} {{ shipping.lastName }}</p>
                    <p class="mb-1">{{ shipping.address }}</p>
                    <p class="mb-1">{{ shipping.city }}, {{ shipping.state }} {{ shipping.zip }}</p>
                    <p class="mb-0">Phone: {{ shipping.phone }}</p>
                  </div>
                </div>

                <div class="mb-4">
                  <h6>Payment Method</h6>
                  <div class="card bg-light p-3">
                    <p class="mb-0" v-if="payment.method === 'credit_card'">
                      <i class="far fa-credit-card me-2"></i> Credit/Debit Card ending in **** {{ payment.card.number.slice(-4) }}
                    </p>
                    <p class="mb-0" v-else-if="payment.method === 'paypal'">
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
                        <span class="text-muted"> × {{ item.quantity }}</span>
                      </div>
                      <div>${{ (item.price * item.quantity).toFixed(2) }}</div>
                    </div>
                    <div class="d-flex justify-content-between py-2 border-bottom">
                      <div>Subtotal</div>
                      <div>${{ cartTotal.toFixed(2) }}</div>
                    </div>
                    <div class="d-flex justify-content-between py-2 border-bottom">
                      <div>Shipping</div>
                      <div class="text-success">FREE</div>
                    </div>
                    <div class="d-flex justify-content-between py-2 border-bottom">
                      <div>Tax (18%)</div>
                      <div>${{ (cartTotal * 0.18).toFixed(2) }}</div>
                    </div>
                    <div class="d-flex justify-content-between py-2 fw-bold">
                      <div>Total</div>
                      <div>${{ (cartTotal * 1.18).toFixed(2) }}</div>
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
                  <button type="button" class="btn btn-outline-secondary" @click="prevStep">Back</button>
                  <button type="button" class="btn btn-success" @click="placeOrder" :disabled="!agreeTerms || processing">
                    <span v-if="processing" class="spinner-border spinner-border-sm me-2"></span>
                    {{ processing ? 'Processing...' : 'Place Order' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card shadow-sm sticky-top">
            <div class="card-body">
              <h5 class="card-title mb-3">Order Summary</h5>
              
              <div v-for="item in cartItems" :key="item.id" class="d-flex mb-3">
                <img :src="item.image" :alt="item.name" class="rounded me-3" style="width: 60px; height: 60px; object-fit: cover;">
                <div class="flex-grow-1">
                  <h6 class="mb-1">{{ item.name }}</h6>
                  <p class="text-muted small mb-1">Qty: {{ item.quantity }}</p>
                  <p class="mb-0 text-primary">${{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
              </div>
              
              <hr>
              
              <div class="d-flex justify-content-between mb-1">
                <span>Subtotal</span>
                <span>${{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-1">
                <span>Shipping</span>
                <span class="text-success">FREE</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>Tax (18%)</span>
                <span>${{ (cartTotal * 0.18).toFixed(2) }}</span>
              </div>
              
              <div class="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${{ (cartTotal * 1.18).toFixed(2) }}</span>
              </div>
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
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      currentStep: 1,
      shipping: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
      },
      payment: {
        method: 'credit_card',
        card: {
          number: '',
          name: '',
          expiry: '',
          cvv: ''
        }
      },
      agreeTerms: false,
      processing: false
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapActions(['checkout']),
    setStep(step) {
      if (step > this.currentStep && !this.validateStep(step - 1)) return;
      this.currentStep = step;
    },
    nextStep() {
      if (!this.validateStep(this.currentStep)) return;
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    },
    validateStep(step) {
      if (step === 1) {
        return Object.values(this.shipping).every(val => val.trim() !== '');
      } else if (step === 2) {
        return this.payment.method !== '';
      }
      return true;
    },
    async placeOrder() {
      this.processing = true;
      try {
        await this.checkout({
          shipping: this.shipping,
          payment: this.payment
        });
        this.$toast.success('Order placed successfully!');
        this.$router.push('/order-confirmation');
      } catch (error) {
        this.$toast.error('Error processing your order');
        console.error(error);
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
  background-color: #f9f9f9;
}

.page-title {
  color: var(--primary);
  font-weight: 700;
}

.nav-pills .nav-link {
  position: relative;
  color: var(--gray);
  font-weight: 500;
}

.nav-pills .nav-link.active {
  color: var(--primary);
  background: none;
}

.step-number {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  margin-right: 8px;
  background: var(--light);
  color: var(--gray);
}

.nav-pills .nav-link.active .step-number {
  background: var(--primary);
  color: white;
}

.sticky-top {
  top: 100px;
  z-index: 1;
}
</style>