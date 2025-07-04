<template>
  <div>
    <AppHeader />
    <div class="container my-5 py-5">
      <h1 class="page-title">{{ categoryName }} Collection</h1>
      <p class="text-muted mb-5">Discover our premium {{ categoryName }} products</p>
      
      <div class="products-grid">
        <ProductCard 
          v-for="(product, index) in filteredProducts" 
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
  data() {
    return {
      allProducts: [
        // Makeup products
        { id: 1, name: 'Velvet Matte Lipstick', brand: 'LUXE Cosmetics', price: 24.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480', stock: 15, category: 'makeup' },
        { id: 2, name: 'Liquid Foundation', brand: 'LUXE Cosmetics', price: 34.99, image: 'https://images.unsplash.com/photo-1610548822783-33fb5cb666ed?q=80&w=1470', stock: 8, category: 'makeup' },
        
        // Skincare products
        { id: 3, name: 'Hydrating Serum', brand: 'LUXE Skincare', price: 39.99, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1470', stock: 12, category: 'skincare' },
        { id: 4, name: 'Night Repair Cream', brand: 'LUXE Skincare', price: 49.99, image: 'https://images.unsplash.com/photo-1620916297395-9d6d8b3c7f1d?q=80&w=1470', stock: 5, category: 'skincare' },
        
        // Fragrance products
        { id: 5, name: 'Eau de Parfum', brand: 'LUXE Fragrances', price: 39.99, image: 'https://images.unsplash.com/photo-1595425977371-6a19b02d6cbc?q=80&w=1470', stock: 10, category: 'fragrance' },
        { id: 6, name: 'Signature Perfume', brand: 'LUXE Fragrances', price: 59.99, image: 'https://images.unsplash.com/photo-1600004588020-6e0b1b7a2f2d?q=80&w=1470', stock: 7, category: 'fragrance' },
        
        // Haircare products
        { id: 7, name: 'Nourishing Hair Oil', brand: 'LUXE Haircare', price: 29.99, image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1374', stock: 12, category: 'haircare' },
        { id: 8, name: 'Repairing Shampoo', brand: 'LUXE Haircare', price: 24.99, image: 'https://images.unsplash.com/photo-1595425888691-374faca5a0d3?q=80&w=1470', stock: 15, category: 'haircare' },
      ]
    };
  },
  computed: {
    categoryName() {
      return this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1);
    },
    categorySlug() {
      return this.$route.name.toLowerCase();
    },
    filteredProducts() {
      return this.allProducts.filter(
        product => product.category === this.categorySlug
      );
    }
  }
};
</script>

<style scoped>
.page-title {
  color: var(--primary);
  font-weight: 700;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
</style>