<template>
  <div class="product-card fade-in" :class="'delay-' + delay">
    <img :src="product.image" :alt="product.name" class="product-image">
    <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
    <div class="product-actions">
      <button class="action-btn" @click="toggleWishlist">
        <i class="fas fa-heart" :class="{ 'text-danger': isInWishlist }"></i>
      </button>
      <button class="action-btn" @click="viewDetails">
        <i class="fas fa-eye"></i>
      </button>
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <div class="product-brand">{{ product.brand }}</div>
      <div class="product-price">
        <span v-if="product.originalPrice" class="original-price">${{ product.originalPrice }}</span>
        ${{ product.price }}
      </div>
      <div class="product-stock">
        <i class="fas fa-check-circle" :class="product.stock > 0 ? 'in-stock' : 'out-stock'"></i>
        <span>{{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}</span>
      </div>
      <button class="add-to-cart" @click="addToCart" :disabled="product.stock <= 0">
        <i class="fas fa-shopping-bag"></i> {{ product.stock > 0 ? 'Add to Cart' : 'Notify Me' }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { useToast } from 'vue-toastification';
export default {
  props: {
    product: Object,
    delay: {
      type: Number,
      default: 1
    }
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  computed: {
    isInWishlist() {
      return this.$store.state.wishlist.some(item => item.id === this.product.id);
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', this.product);
      this.toast.success(`${this.product.name} added to cart`);
    },
    toggleWishlist() {
      this.$store.commit('TOGGLE_WISHLIST_ITEM', this.product);
      const action = this.isInWishlist ? 'added to' : 'removed from';
      this.toast.info(`${this.product.name} ${action} wishlist`);
    },
    viewDetails() {
      this.$router.push(`/product/${this.product.id}`);
    }
  }
};
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.product-image {
  height: 300px;
  width: 100%;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--secondary);
  color: var(--primary);
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.product-actions {
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: var(--transition);
  color: var(--primary);
}

.action-btn:hover {
  background: var(--secondary);
  color: white;
  transform: scale(1.1);
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  margin-bottom: 10px;
  color: var(--primary);
}

.product-brand {
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.product-price {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.original-price {
  text-decoration: line-through;
  color: var(--gray);
  margin-right: 10px;
  font-size: 0.9rem;
}

.product-stock {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.in-stock {
  color: var(--success);
}

.out-stock {
  color: var(--error);
}

.add-to-cart {
  width: 100%;
  padding: 12px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.add-to-cart:hover {
  background: #3a1c6e;
}

.add-to-cart:disabled {
  background: var(--gray);
  cursor: not-allowed;
}
</style>