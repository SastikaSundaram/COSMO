<template>
  <div class="products-section">
    <div v-if="title" class="section-header">
      <h2>{{ title }}</h2>
      <div v-if="selectedCategory" class="current-category">
        Showing: {{ selectedCategory }}
        <button @click="clearFilter" class="clear-filter">
          <i class="fas fa-times"></i> Clear
        </button>
      </div>
    </div>
    
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
    products: Array,
    title: String,
    selectedCategory: String
  },
  methods: {
    clearFilter() {
      this.$router.push({ query: {} })
    }
  }
}
</script>