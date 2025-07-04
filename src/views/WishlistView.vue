<template>
  <div>
    <AppHeader />
    <div class="container my-5 py-5">
      <h1 class="page-title mb-4">My Wishlist</h1>
      
      <div v-if="wishlist.length === 0" class="empty-cart text-center py-5">
        <i class="fas fa-heart fa-4x text-muted mb-4"></i>
        <h3 class="mb-3">Your wishlist is empty</h3>
        <p class="text-muted mb-4">Save your favorite items here for later</p>
        <router-link to="/" class="btn btn-primary">Continue Shopping</router-link>
      </div>
      
      <div v-else class="products-grid">
        <ProductCard 
          v-for="(product, index) in wishlist" 
          :key="index"
          :product="product"
          :delay="index % 4 + 1"
        />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    ProductCard
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist;
    }
  }
};
</script>

<style scoped>
.page-title {
  color: var(--primary);
  font-weight: 700;
}

.empty-cart {
  background: white;
  border-radius: 15px;
  padding: 50px;
  box-shadow: var(--shadow);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
</style>