<template>
  <div>
    <AppHeader />
    <div class="container my-5 py-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image" :alt="product.name" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
          <h1 class="page-title">{{ product.name }}</h1>
          <p class="text-muted">{{ product.brand }}</p>
          
          <div class="d-flex align-items-center mb-4">
            <h3 class="mb-0 me-3">${{ product.price }}</h3>
            <span v-if="product.originalPrice" class="text-decoration-line-through text-muted">
              ${{ product.originalPrice }}
            </span>
          </div>
          
          <div class="mb-4">
            <div class="product-stock mb-3">
              <i class="fas fa-check-circle me-2" :class="product.stock > 0 ? 'in-stock' : 'out-stock'"></i>
              <span>{{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}</span>
            </div>
            
            <div class="d-flex align-items-center mb-4">
              <button class="btn btn-outline-secondary me-2" @click="quantity > 1 ? quantity-- : null">
                <i class="fas fa-minus"></i>
              </button>
              <input type="number" class="form-control text-center" v-model.number="quantity" min="1" style="max-width: 70px;">
              <button class="btn btn-outline-secondary ms-2" @click="quantity++">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            
            <button class="btn btn-primary w-100 py-3 mb-3" @click="addToCart" :disabled="product.stock <= 0">
              <i class="fas fa-shopping-bag me-2"></i>
              {{ product.stock > 0 ? 'Add to Cart' : 'Notify When Available' }}
            </button>
            
            <button class="btn btn-outline-primary w-100 py-3" @click="toggleWishlist">
              <i class="fas fa-heart me-2" :class="{ 'text-danger': isInWishlist }"></i>
              {{ isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}
            </button>
          </div>
          
          <div class="product-details">
            <h4 class="mb-3">Product Details</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      quantity: 1,
      products: [
        // Sample products with IDs
        { id: 1, name: 'Velvet Matte Lipstick', brand: 'LUXE Cosmetics', price: 24.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480', stock: 15 },
        { id: 2, name: 'Liquid Foundation', brand: 'LUXE Cosmetics', price: 34.99, image: 'https://images.unsplash.com/photo-1610548822783-33fb5cb666ed?q=80&w=1470', stock: 8 },
        { id: 3, name: 'Hydrating Serum', brand: 'LUXE Skincare', price: 39.99, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1470', stock: 12 },
        { id: 4, name: 'Night Repair Cream', brand: 'LUXE Skincare', price: 49.99, image: 'https://images.unsplash.com/photo-1620916297395-9d6d8b3c7f1d?q=80&w=1470', stock: 5 },
        { id: 5, name: 'Eau de Parfum', brand: 'LUXE Fragrances', price: 39.99, image: 'https://images.unsplash.com/photo-1595425977371-6a19b02d6cbc?q=80&w=1470', stock: 10 },
        { id: 6, name: 'Signature Perfume', brand: 'LUXE Fragrances', price: 59.99, image: 'https://images.unsplash.com/photo-1600004588020-6e0b1b7a2f2d?q=80&w=1470', stock: 7 },
        { id: 7, name: 'Nourishing Hair Oil', brand: 'LUXE Haircare', price: 29.99, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1374', stock: 12 },
        { id: 8, name: 'Repairing Shampoo', brand: 'LUXE Haircare', price: 24.99, image: 'https://images.unsplash.com/photo-1595425888691-374faca5a0d3?q=80&w=1470', stock: 15 },
      ]
    };
  },
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    product() {
      return this.products.find(p => p.id === this.productId) || this.products[0];
    },
    isInWishlist() {
      return this.$store.state.wishlist.some(item => item.id === this.productId);
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART', 'TOGGLE_WISHLIST_ITEM']),
    addToCart() {
      if (this.product.stock > 0) {
        const cartItem = {
          ...this.product,
          quantity: this.quantity
        };
        this.ADD_TO_CART(cartItem);
        this.$toast.success(`${this.product.name} added to cart`);
      }
    },
    toggleWishlist() {
      this.TOGGLE_WISHLIST_ITEM(this.product);
      const action = this.isInWishlist ? 'removed from' : 'added to';
      this.$toast.info(`${this.product.name} ${action} wishlist`);
    }
  }
};
</script>

<style scoped>
.page-title {
  color: var(--primary);
  font-weight: 700;
}

.in-stock {
  color: var(--success);
}

.out-stock {
  color: var(--error);
}

.product-details {
  border-top: 1px solid #eee;
  padding-top: 20px;
  margin-top: 30px;
}
</style>