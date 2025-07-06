<template>
  <section class="categories-section py-5">
    <div class="container">
      <h2 class="section-title">Shop By Category</h2>
      <div class="row">
        <div class="col-md-4 mb-4 fade-in" v-for="(category, index) in categories" :key="index">
          <router-link 
            :to="`/products?category=${category.name}`" 
            class="text-decoration-none">
            <div class="category-card">
              <img :src="category.image" class="category-img w-100" :alt="category.name">
              <div class="category-body">
                <h3 class="category-title">{{ category.name }}</h3>
                <p class="category-desc">{{ category.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const categories = computed(() => store.state.categories)
    
    return {
      categories
    }
  }
}
</script>

<style scoped>
.category-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  background: #fff;
  position: relative;
  height: 100%;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.category-img {
  height: 200px;
  object-fit: cover;
  transition: all 0.4s ease;
}

.category-card:hover .category-img {
  transform: scale(1.05);
}

.category-body {
  padding: 1.5rem;
}

.category-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.category-desc {
  color: #777;
  font-size: 0.95rem;
}
</style>