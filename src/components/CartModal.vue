<template>
  <div class="modal fade" id="cartModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title">Your Shopping Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div v-if="!items.length" class="text-center py-4">
            <i class="fas fa-shopping-cart fs-1 text-muted mb-3"></i>
            <p class="mb-4">Your cart is empty</p>
            <router-link to="/home" class="btn btn-primary" data-bs-dismiss="modal">
              Start Shopping
            </router-link>
          </div>
          <div v-else>
            <div v-for="item in items" :key="item.id" class="d-flex align-items-center mb-3">
              <img :src="item.img" :alt="item.name" class="rounded me-3" style="width: 60px; height: 60px; object-fit: cover;">
              <div class="flex-grow-1">
                <h6 class="mb-1">{{ item.name }}</h6>
                <p class="mb-0 text-muted small">₹{{ item.price }} × {{ item.qty }}</p>
              </div>
              <div class="text-end">
                <p class="mb-1 fw-bold">₹{{ (item.price * item.qty).toFixed(2) }}</p>
                <button @click="removeItem(item.id)" class="btn btn-sm btn-outline-danger">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="items.length" class="modal-footer border-0">
          <div class="w-100 d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0">Total:</h6>
            <h5 class="mb-0">₹{{ cartTotal.toFixed(2) }}</h5>
          </div>
          <router-link to="/cart" class="btn btn-primary w-100 py-2" data-bs-dismiss="modal">
            View Cart
          </router-link>
          <router-link to="/checkout" class="btn btn-success w-100 py-2 mt-2" data-bs-dismiss="modal">
            Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
    items() {
      return this.cartItems;
    }
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CART']),
    removeItem(productId) {
      this.REMOVE_FROM_CART(productId);
    }
  }
};
</script>

<style scoped>
.modal-content {
  border-radius: 12px;
  overflow: hidden;
}
</style>