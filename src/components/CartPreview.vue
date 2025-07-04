<template>
  <div class="cart-preview" :class="{ active: isVisible }">
    <div class="cart-header">
      <h3>Your Cart</h3>
      <button class="close-cart" @click="closeCart">
        <i class="fas fa-times"></i>
      </button>
    </div>
    
    <div class="cart-items" v-if="cartItems.length > 0">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" :alt="item.name" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-name">{{ item.name }}</div>
          <div class="cart-item-price">${{ item.price }}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" @click="updateQuantity(item, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="quantity-btn" @click="updateQuantity(item, item.quantity + 1)">+</button>
          </div>
        </div>
        <button class="remove-item" @click="removeItem(item.id)">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="empty-cart" v-else>
      <i class="fas fa-shopping-bag fa-3x mb-3"></i>
      <p>Your cart is empty</p>
    </div>
    
    <div class="cart-total" v-if="cartItems.length > 0">
      <span>Total:</span>
      <span>${{ cartTotal }}</span>
    </div>
    
    <div class="cart-actions" v-if="cartItems.length > 0">
      <router-link to="/cart" class="btn view-cart" @click="closeCart">View Cart</router-link>
<router-link to="/checkout" class="btn checkout" @click="closeCart">Checkout</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
    isVisible() {
      return this.$store.state.cartPreviewVisible;
    }
  },
  methods: {
    ...mapMutations(['UPDATE_CART_ITEM_QUANTITY', 'REMOVE_FROM_CART', 'TOGGLE_CART_PREVIEW']),
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
    },
    closeCart() {
      this.TOGGLE_CART_PREVIEW();
    }
  }
};
</script>

<style scoped>
.cart-preview {
  position: fixed;
  top: 80px;
  right: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow-hover);
  width: 350px;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: var(--transition);
}

.cart-preview.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.cart-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h3 {
  color: var(--primary);
}

.close-cart {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--gray);
  transition: var(--transition);
}

.close-cart:hover {
  color: var(--primary);
}

.cart-items {
  max-height: 300px;
  overflow-y: auto;
  padding: 20px;
}

.empty-cart {
  padding: 40px 20px;
  text-align: center;
  color: var(--gray);
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--primary);
}

.cart-item-price {
  color: var(--secondary);
  font-weight: 600;
  margin-bottom: 10px;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.quantity-btn:hover {
  background: var(--secondary);
  color: white;
}

.remove-item {
  background: none;
  border: none;
  color: var(--gray);
  cursor: pointer;
  transition: var(--transition);
}

.remove-item:hover {
  color: var(--error);
}

.cart-total {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.1rem;
}

.cart-actions {
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.view-cart {
  background: var(--primary);
  color: white;
}

.checkout {
  background: var(--secondary);
  color: var(--primary);
}

@media (max-width: 576px) {
  .cart-preview {
    width: 90%;
    right: 5%;
  }
}
</style>