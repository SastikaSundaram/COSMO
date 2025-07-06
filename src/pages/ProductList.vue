<template>
  <div class="product-list-page py-5">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="display-4">Our Products</h1>
          <div class="d-flex justify-content-between align-items-center">
            <p class="lead mb-0">Discover our premium collection</p>
            <div class="category-filter">
              <select v-model="selectedCategory" class="form-select">
                <option value="">All Categories</option>
                <option v-for="category in categories" :key="category.name" :value="category.name">
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <ProductsSection 
        :products="filteredProducts"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import ProductsSection from '../components/ProductsSection.vue'

export default {
  components: {
    ProductsSection
  },
  setup() {
    const store = useStore()
    const selectedCategory = ref('')

    const products = computed(() => store.state.products)
    const categories = computed(() => store.state.categories)

    const filteredProducts = computed(() => {
      if (!selectedCategory.value) return products.value
      return products.value.filter(
        product => product.category === selectedCategory.value
      )
    })

    const addToCart = (product) => {
      store.dispatch('addToCart', product)
    }

    return {
      products,
      categories,
      filteredProducts,
      selectedCategory,
      addToCart
    }
  }
}
</script>

<style scoped>
.product-list-page {
  background-color: #f8f9fa;
  min-height: 80vh;
}

.category-filter {
  width: 250px;
}

@media (max-width: 768px) {
  .category-filter {
    width: 100%;
    margin-top: 1rem;
  }
  
  .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
  }
}
</style>