<template>
  <div class="products-section">
    <div class="row">
      <div 
        class="col-md-4 col-lg-3 mb-4 fade-in" 
        v-for="(product, index) in products" 
        :key="index"
      >
        <ProductCard 
          :product="product" 
          @add-to-cart="$emit('add-to-cart', $event)"
        />
      </div>
      
      <div v-if="products.length === 0" class="col-12 text-center py-5">
        <h4>No products found</h4>
        <p class="text-muted">Try adjusting your filters</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.products-section {
  background: linear-gradient(to bottom, #fcf0f7 0%, #fff 100%);
  padding: 1rem 0;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>