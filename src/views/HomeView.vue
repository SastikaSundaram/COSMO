<template>
  <div>
    <AppHeader />
    <HeroSection />
    
    <section class="section">
      <div class="container">
        <div class="section-title fade-in">
          <h2>Shop By Category</h2>
          <p>Explore our carefully curated collection of premium beauty products</p>
        </div>
        
        <div class="categories">
          <router-link 
            v-for="(category, index) in categories" 
            :key="index"
            :to="category.route"
            class="category-card fade-in"
            :class="'delay-' + (index + 1)"
          >
            <img :src="category.image" :alt="category.name" class="category-image">
            <div class="category-info">
              <h3>{{ category.name }}</h3>
              <span class="btn">Explore</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    
    <section class="section" style="background-color: #f9f7f5;">
      <div class="container">
        <div class="section-title fade-in">
          <h2>New Arrivals</h2>
          <p>Discover our latest premium beauty products</p>
        </div>
        
        <div class="products-grid">
          <ProductCard 
            v-for="(product, index) in newArrivals" 
            :key="'new-' + index"
            :product="product"
            :delay="index + 1"
          />
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="section-title fade-in">
          <h2>Featured Brands</h2>
          <p>Discover premium brands available at Luxe Cosmetics</p>
        </div>
        
        <div class="brands">
          <img 
            v-for="(brand, index) in brands" 
            :key="'brand-' + index"
            :src="brand.image" 
            :alt="brand.name" 
            class="brand-logo"
          >
        </div>
      </div>
    </section>
    
    <NewsletterSection />
    <AppFooter />
    <CartPreview />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import HeroSection from '@/components/HeroSection.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    HeroSection
  },
  data() {
    return {
      categories: [
        {
          name: 'Makeup',
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480',
          route: '/makeup'
        },
        {
          name: 'Skincare',
          image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1470',
          route: '/skincare'
        },
        {
          name: 'Fragrance',
          image: 'https://images.unsplash.com/photo-1595425977371-6a19b02d6cbc?q=80&w=1470',
          route: '/fragrance'
        },
        {
          name: 'Hair Care',
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1374',
          route: '/haircare'
        }
      ],
      newArrivals: [
        {
          id: 1,
          name: 'Velvet Matte Lipstick',
          brand: 'LUXE Cosmetics',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480',
          stock: 15,
          badge: 'New'
        },
        {
          id: 2,
          name: 'Hydrating Serum',
          brand: 'LUXE Skincare',
          price: 39.99,
          image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=1470',
          stock: 8
        },
        {
          id: 3,
          name: 'Nourishing Hair Oil',
          brand: 'LUXE Haircare',
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1374',
          stock: 12
        },
        {
          id: 4,
          name: 'Eau de Parfum',
          brand: 'LUXE Fragrances',
          price: 39.99,
          originalPrice: 49.99,
          image: 'https://images.unsplash.com/photo-1595425977371-6a19b02d6cbc?q=80&w=1470',
          stock: 5,
          badge: 'Sale'
        }
      ],
      brands: [
        { name: 'CHANEL', image: 'https://via.placeholder.com/150x60?text=CHANEL' },
        { name: 'DIOR', image: 'https://via.placeholder.com/150x60?text=DIOR' },
        { name: 'GUCCI', image: 'https://via.placeholder.com/150x60?text=GUCCI' },
        { name: 'LA MER', image: 'https://via.placeholder.com/150x60?text=LA+MER' },
        { name: 'LA PRAIRIE', image: 'https://via.placeholder.com/150x60?text=LA+PRAIRIE' }
      ]
    };
  }
};
</script>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.category-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.category-image {
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.category-card:hover .category-image {
  transform: scale(1.05);
}

.category-info {
  padding: 20px;
  text-align: center;
}

.category-info h3 {
  margin-bottom: 10px;
  color: var(--primary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.brands {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
}

.brand-logo {
  height: 60px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: var(--transition);
}

.brand-logo:hover {
  filter: grayscale(0);
  opacity: 1;
  transform: scale(1.1);
}
</style>