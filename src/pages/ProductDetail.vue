<template>
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="display-4">Our Products</h1>
        <p class="lead">Discover our premium collection</p>
      </div>
    </div>
    <ProductsSection 
      :products="products"
      :show-categories="true"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ProductsSection from '../components/ProductsSection.vue'

export default {
  components: {
    ProductsSection
  },
  setup() {
    const store = useStore()
    const products = computed(() => store.state.products)
    
    return {
      products
    }
  }
}
</script>