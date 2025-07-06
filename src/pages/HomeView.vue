<template>
  <div>
    <HeroSection />
    <CategoriesSection />
    <ProductsSection 
      title="Best Sellers"
      :products="featuredProducts"
    />
    <FeaturesSection />
    <TestimonialsSection />
    <ShowcaseSection />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import HeroSection from '../components/HeroSection.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ShowcaseSection from '../components/ShowcaseSection.vue'

export default {
  components: {
    HeroSection,
    CategoriesSection,
    ProductsSection,
    FeaturesSection,
    TestimonialsSection,
    ShowcaseSection
  },
  setup() {
    const store = useStore()
    const featuredProducts = computed(() => store.getters.featuredProducts)
    
    return {
      featuredProducts
    }
  }
}
</script>