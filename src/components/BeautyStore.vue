<template>
  <div class="cosmetics-store">
    <!-- Glowing Header with Neon Effects -->
    <header class="header-glow border-bottom py-2 px-4 d-flex justify-content-between align-items-center">
      <!-- Search with Glow Effect -->
      <!-- In your header section (around line 4 in your template) -->
<div class="search-container position-relative">
  <i class="fas fa-search text-purple me-2 position-absolute"></i>
  <input 
    type="text"
    placeholder="Search products..."
    class="form-control search-input ps-4"
    aria-label="Search products"
    aria-describedby="search-help"
    v-model="searchQuery"
    @input="searchProducts"
  >
  <div id="search-help" class="visually-hidden">
    Search for makeup, skincare, haircare, and fragrance products
  </div>
  <div class="search-glow"></div>
</div>

      <!-- Logo with Hover Animation -->
      <div class="logo-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0aA99uigjHT-agnzfVBE9ZcMTflcWJdmlw&s" 
          alt="logo" 
          height="50"
          class="logo-hover"
        >
      </div>

      <!-- Icons with Glow and Pulse Effects -->
      <div class="d-flex align-items-center gap-4">
        <div class="icon-glow" @click="goToProfile">
          <i class="fas fa-user-circle fs-3 text-purple"></i>
        </div>
        <div class="icon-glow position-relative" @click="viewLikes">
          <i class="fas fa-heart fs-3 text-pink"></i>
          <span v-if="likedItems.length" class="badge-glow">{{ likedItems.length }}</span>
        </div>
        <div class="icon-glow position-relative" @click="openCart">
          <i class="fas fa-shopping-cart fs-3 text-cyan"></i>
          <span v-if="cart.length" class="badge-glow">{{ cart.length }}</span>
        </div>
      </div>
    </header>

    <!-- Navigation with RGB Border -->
    <nav class="rgb-border py-2 px-4 d-flex justify-content-center gap-4">
      <a href="#just-launched" class="nav-link-glow" @click.prevent="scrollToSection('just-launched')">New Arrivals</a>
      <a href="#brands" class="nav-link-glow" @click.prevent="scrollToSection('brands')">Brands</a>
      <a href="#" class="nav-link-glow" @click.prevent="filterByCategory('Makeup')">Makeup</a>
      <a href="#" class="nav-link-glow" @click.prevent="filterByCategory('Skin Care')">Skin</a>
      <a href="#" class="nav-link-glow" @click.prevent="filterByCategory('Hair')">Hair</a>
      <a href="#" class="nav-link-glow" @click.prevent="filterByCategory('Fragrance')">Fragrance</a>
    </nav>

    <!-- Hero Carousel with Glow Effects -->
    <div id="mainCarousel" class="carousel slide carousel-glow" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(hero, index) in heroes" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <img :src="hero.img" class="d-block w-100" :alt="hero.alt" style="height: 500px; object-fit: cover;" />
          <div class="carousel-caption d-none d-md-block caption-glow rounded p-3">
            <h2 class="text-white text-stroke">{{ hero.title }}</h2>
            <p class="text-white text-glow">{{ hero.text }}</p>
            <button class="btn btn-glow">Shop Now</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon control-glow"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon control-glow"></span>
      </button>
    </div>

    <!-- Categories with Hover Effects -->
    <section class="container my-5 categories-section">
      <h3 class="mb-4 section-title">Shop by Category</h3>
      <div class="d-flex overflow-auto gap-4 pb-3">
        <div v-for="cat in categories" :key="cat.name" class="category-card">
          <img :src="cat.img" class="category-image" :alt="cat.name">
          <div class="category-overlay">
            <h5>{{ cat.name }}</h5>
            <button class="btn btn-sm btn-glow">Explore</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Promo Poster with Glow Border -->
    <div class="container mb-5 promo-poster">
      <img src="https://hokmakeup.com/cdn/shop/files/Foundation_Finder_Banner_1920x463_84ec4b75-56b0-4587-b569-8426df479283.jpg?v=1741861460&width=1500" 
           class="img-fluid rounded glow-border">
    </div>

    <!-- Just Launched Section with Neon Title -->
    <section id="just-launched" class="container mb-5">
      <h3 class="mb-4 neon-title">Just Launched</h3>
      <div class="row">
        <div class="col-md-3 mb-4" v-for="(item, index) in justLaunched" :key="'launch' + index">
          <div class="product-card">
            <img :src="item.img" class="product-image">
            <div class="product-info">
              <h5>{{ item.name }}</h5>
              <p>{{ item.desc }}</p>
              <!-- In your All Products section (around line 139) -->
<button 
  :disabled="product.stock === 0" 
  class="btn btn-glow mt-2"
  aria-label="Add to cart"
  :aria-disabled="product.stock === 0"
  @click="addToCart(product)"
>
  {{ product.stock > 0 ? 'Add to Cart' : 'Notify Me' }}
</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid with Hover Effects -->
    <section class="container mb-5">
      <h3 class="mb-4 neon-title">All Products</h3>
      <div class="row">
        <div class="col-md-3 mb-4" v-for="(product, index) in products" :key="'prod' + index">
          <div class="game-card" :class="{ 'out-of-stock': product.stock === 0 }">
            <div class="game-card-inner">
              <div class="game-card-front">
                <img :src="product.img" class="product-image">
                <div class="stock-indicator" :class="{ 'in-stock': product.stock > 0, 'out-stock': product.stock === 0 }">
                  {{ product.stock > 0 ? 'In Stock' : 'Sold Out' }}
                </div>
              </div>
              <div class="game-card-back">
                <h6>{{ product.name }}</h6>
                <small>Brand: {{ product.brand }}</small>
                <div class="price-tag">₹{{ product.price }}</div>
                <button :disabled="product.stock === 0" class="btn btn-glow mt-2">
                  {{ product.stock > 0 ? 'Add to Cart' : 'Notify Me' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands Section with Glow -->
    <section id="brands" class="py-5 brands-section">
      <div class="container">
        <h2 class="mb-4 neon-title">Popular Brands</h2>
        <div class="row text-center">
          <div class="col-md-2 mb-4" v-for="brand in brands" :key="brand.id">
            <div class="brand-logo">
              <img :src="brand.image" class="img-fluid" :alt="brand.name" />
            </div>
            <p class="brand-name">{{ brand.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer with RGB Accents -->
    <footer class="footer-glow py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-4">
            <h5 class="footer-title">About Us</h5>
            <p>Founded in 2025<br>Global Cosmetic Marketplace</p>
          </div>
          <div class="col-md-3 mb-4">
            <h5 class="footer-title">Brands</h5>
            <ul class="list-unstyled">
              <li v-for="brand in brands.slice(0,4)" :key="brand.id">{{ brand.name }}</li>
            </ul>
          </div>
          <div class="col-md-3 mb-4">
            <h5 class="footer-title">Support</h5>
            <ul class="list-unstyled">
              <li>Orders</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div class="col-md-3 mb-4">
            <h5 class="footer-title">Features</h5>
            <p>✓ Free Shipping<br>✓ Secure Payments<br>✓ 24x7 Support</p>
          </div>
        </div>
        <div class="text-center mt-4 copyright">&copy; 2025 Cosmo Beauty Store</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      showCartModal: false,
      showWishlistModal: false,
      activeCategory: null,
      showProductDetail: false,
      isLoading: false,
    selectedProduct: null,
    error: null,
    checkoutSteps: ['Cart', 'Shipping', 'Payment', 'Confirmation'],
    currentStep: 0,
    isAuthenticated: false,
    user: null,
    showAuthModal: false,
    authMode: 'login', // 'login' or 'register'
    loginForm: {
      email: '',
      password: ''
    },
    registerForm: {
      name: '',
      email: '',
      password: ''
    },
    shippingInfo: {
      name: '',
      address: '',
      // ... other fields
    },
    paymentInfo: {
      cardNumber: '',
      // ... other fields
    },
    filteredProducts: [],
      cart: [],
      likedItems: [1, 2], // example liked items
      heroes: [
        {
          img: "https://www.therougecosmetics.com/cdn/shop/files/cosmetics_9e3b1985-0d38-46d7-8ab4-385439bedde3_1600x.png?v=1613559291",
          title: "Unleash Your Beauty",
          text: "Shop the latest trends in skincare and cosmetics.",
          alt: "Hero 1"
        },
        {
          img: "https://juicecosmetics.in/cdn/shop/collections/485x485_liptintpsd_1.jpg?v=1707393236",
          title: "Glow Like Never Before",
          text: "Discover premium skin and hair care essentials.",
          alt: "Hero 2"
        },
        {
          img: "https://slae.com.my/cdn/shop/files/2.png?v=1725242308&width=3840",
          title: "Luxury Meets Skincare",
          text: "Upgrade your glow with our newest product line.",
          alt: "Hero 3"
        }
      ],
      categories: [
        {
          name: 'Lipstick',
          img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494284841/c9K2Ze9W4B-000000000494284841_06.jpeg'
        },
        {
          name: 'Foundation',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKl3BLsocKW71Mjc2XK5SfbId4G3Avsi3qQ&s'
        },
        {
          name: 'Serum',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BsUOzIN5cfD8JLG3UU782zfnyxiTHPgOvQ&s'
        },
        {
          name: 'Brushes',
          img: 'https://kyliecosmetics.com/cdn/shop/files/v1b_Skin-Tint_Bundle-1._46cae4b4-303a-418f-aba1-ec9b20073f69_400x.jpg?v=1721752623'
        },
        {
          name: 'Skin Care',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBzOUOIaKtXu_VdD_GRgyZxY-h7Or5LHCXg&s'
        }
      ],
      justLaunched: [
        {
          name: "Crimson Shine",
          desc: "Bold red, high pigment gloss.",
          img: "https://m.media-amazon.com/images/I/31wIVPpZxzL._AC_.jpg"
        },
        {
          name: "Coral Crush",
          desc: "Smooth finish for a radiant smile.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7IH5DbEZHmocVeluGoU5RBNOft0yGsdXsg&s"
        },
        {
          name: "Nude Bliss",
          desc: "Soft matte everyday wear.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXeiYbjss6MhFHRwSWEQmk3OOd8mdAZv3rQ&s"
        },
        {
          name: "Berry Pop",
          desc: "Moisturizing berry tint.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQkfiOSB0eUjR85zTzmZ4NYZD7pv_h_x9Uw&s"
        }
      ],
      products: [
        {
          name: "Lip Suede Matte Lipstick",
          brand: "Matte",
          stock: 15,
          price: 1599,
          img: "https://imgix.bustle.com/uploads/image/2024/3/20/50fad8ea-d678-43f3-bbaa-8b164ea395d6-screen-shot-2024-03-20-at-31557-pm.png?w=390&h=395&fit=crop&crop=faces&dpr=2"
        },
        {
          name: "Velvet Matte Lipstick",
          brand: "ColorPop",
          stock: 8,
          price: 849,
          img: "https://www.beautyberry.co.in/cdn/shop/files/01_aadcff32-aee9-41cc-8ed6-03345d1d9fa5.jpg?v=1742207430&width=1946"
        },
        {
          name: "Mettle liquid lipstick",
          brand: "Sugar",
          stock: 12,
          price: 1299,
          img: "https://www.sugarcosmetics.com/cdn/shop/files/Mettle-Liquid-Lipstick-5_65fd6049.jpg?v=1743677226"
        },
        {
          name: "Fit Me Liquid Foundation",
          brand: "Maybelline",
          stock: 0,
          price: 629,
          img: "https://m.media-amazon.com/images/I/418-0bNNQgL._UF1000,1000_QL80_.jpg"
        }
      ],
      brands: [
        { id: 1, name: 'Garnier', image: 'https://via.placeholder.com/100?text=Garnier' },
        { id: 2, name: "L'Oréal", image: 'https://via.placeholder.com/100?text=Loreal' },
        { id: 3, name: 'Maybelline', image: 'https://via.placeholder.com/100?text=Maybelline' },
        { id: 4, name: 'Lakmé', image: 'https://via.placeholder.com/100?text=Lakme' },
        { id: 5, name: 'MAC', image: 'https://via.placeholder.com/100?text=MAC' },
        { id: 6, name: 'Huda', image: 'https://via.placeholder.com/100?text=Huda' }
      ]
    };
  },
  methods: {
    async fetchProducts() {
    this.error = null;
    this.isLoading = true;
    try {
      this.products = await ProductService.getProducts();
    } catch (error) {
      this.error = "Failed to load products. Please try again later.";
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
    searchProducts() {
  if (this.searchQuery.trim() === '') {
    this.searchResults = [...this.products];
    return;
  }
  const query = this.searchQuery.toLowerCase();
  this.searchResults = this.products.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.brand.toLowerCase().includes(query)
  );
},
    openCart() {
    this.showCartModal = true;
  },
  removeFromCart(index) {
    this.cart.splice(index, 1);
  },
  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  },
    toggleLike(product) {
    const index = this.likedItems.findIndex(id => id === product.id);
    if (index === -1) {
      this.likedItems.push(product.id);
    } else {
      this.likedItems.splice(index, 1);
    }
  },
  viewLikes() {
    this.showWishlistModal = true;
  },
    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    filterByCategory(category) {
    this.activeCategory = category;
    if (!category) {
      this.filteredProducts = [...this.products];
      return;
    }
    this.filteredProducts = this.products.filter(
      product => product.category === category
    );
  },
  showProductDetails(product) {
    this.selectedProduct = product;
    this.showProductDetail = true;
  },
  nextStep() {
    if (this.currentStep < this.checkoutSteps.length - 1) {
      this.currentStep++;
    }
  },
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  },
  completeOrder() {
    // Process order logic
    this.currentStep = 0;
    this.cart = [];
    this.$router.push('/order-confirmation');
  },
  goToProfile() {
    if (this.isAuthenticated) {
      this.$router.push('/profile');
    } else {
      this.showAuthModal = true;
      this.authMode = 'login';
    }
  },
  async login() {
    // Authentication logic
    this.isAuthenticated = true;
    this.user = { name: this.loginForm.email };
    this.showAuthModal = false;
  },
  async register() {
    // Registration logic
    this.isAuthenticated = true;
    this.user = { name: this.registerForm.name };
    this.showAuthModal = false;
  },
  logout() {
    this.isAuthenticated = false;
    this.user = null;
  },
    addToCart(item) {
      this.cart.push(item);
      console.log("Added to cart:", item);
    }
  }
};
</script>

<style scoped>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
/* Base Styles */
.cosmetics-store {
  background-color: #0f0e17;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

/* Color Variables */
:root {
  --purple: #a239ca;
  --pink: #ff2a6d;
  --cyan: #05d9e8;
  --blue: #005678;
  --dark: #0f0e17;
  --neon-glow: 0 0 10px rgba(5, 217, 232, 0.8),
               0 0 20px rgba(5, 217, 232, 0.6),
               0 0 30px rgba(5, 217, 232, 0.4);
}

.text-purple { color: var(--purple); }
.text-pink { color: var(--pink); }
.text-cyan { color: var(--cyan); }

/* Header Styles */
.header-glow {
  background: linear-gradient(to right, #0f0e17, #1a1a2e, #0f0e17);
  position: relative;
}

.header-glow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, 
              transparent, 
              var(--cyan), 
              var(--pink), 
              var(--purple), 
              transparent);
  box-shadow: 0 0 10px var(--cyan),
              0 0 20px var(--pink);
}

.search-container {
  width: 25%;
}

.search-input {
  background-color: rgba(15, 14, 23, 0.7);
  border: 1px solid var(--purple);
  color: white;
  border-radius: 20px;
  padding-left: 35px;
  transition: all 0.3s ease;
}

.search-input:focus {
  background-color: rgba(15, 14, 23, 0.9);
  border-color: var(--cyan);
  box-shadow: 0 0 10px var(--cyan);
  outline: none;
}

.search-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 0 15px var(--cyan);
}

.search-input:focus + .search-glow {
  opacity: 0.7;
}

.logo-container {
  transition: transform 0.3s ease;
}

.logo-hover:hover {
  animation: logo-pulse 1.5s infinite;
}

@keyframes logo-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.icon-glow {
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
}

.icon-glow:hover {
  transform: scale(1.2);
  text-shadow: 0 0 10px currentColor;
}

.badge-glow {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--pink);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  box-shadow: 0 0 10px var(--pink);
}

/* Navigation Styles */
.rgb-border {
  background-color: #1a1a2e;
  position: relative;
  overflow: hidden;
}

.rgb-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, 
              var(--purple), 
              var(--cyan), 
              var(--pink), 
              var(--purple));
  animation: rgb-border-animate 3s linear infinite;
  background-size: 200% auto;
}

@keyframes rgb-border-animate {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

.nav-link-glow {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.nav-link-glow:hover {
  color: var(--cyan);
}

.nav-link-glow::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--cyan);
  transition: width 0.3s ease;
}

.nav-link-glow:hover::after {
  width: 100%;
}

/* Carousel Styles */
.carousel-glow {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(5, 217, 232, 0.5);
}

.caption-glow {
  background: rgba(15, 14, 23, 0.7);
  backdrop-filter: blur(5px);
  border-left: 3px solid var(--cyan);
}

.text-stroke {
  text-shadow: -1px -1px 0 #000,  
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000;
}

.text-glow {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
}

.btn-glow {
  background: linear-gradient(45deg, var(--purple), var(--pink));
  border: none;
  color: white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
}

.btn-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--pink), var(--purple));
  transition: all 0.3s ease;
  z-index: -1;
}

.btn-glow:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(162, 57, 202, 0.4);
}

.btn-glow:hover::before {
  left: 0;
}

.control-glow {
  filter: drop-shadow(0 0 5px var(--cyan));
}

/* Category Styles */
.categories-section {
  position: relative;
}

.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--purple), var(--cyan));
}

.category-card {
  position: relative;
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-10px);
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image {
  transform: scale(1.1);
}

.category-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(15, 14, 23, 0.9), transparent);
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.category-card:hover .category-overlay {
  transform: translateY(0);
}

/* Promo Poster */
.promo-poster {
  position: relative;
}

.glow-border {
  border: 2px solid transparent;
  border-radius: 10px;
  animation: border-glow 3s infinite alternate;
}

@keyframes border-glow {
  0% { box-shadow: 0 0 10px var(--purple); }
  50% { box-shadow: 0 0 20px var(--cyan); }
  100% { box-shadow: 0 0 10px var(--pink); }
}

/* Product Card Styles */
.neon-title {
  color: var(--cyan);
  text-shadow: 0 0 5px var(--cyan),
               0 0 10px var(--cyan);
  position: relative;
  display: inline-block;
}

.neon-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--cyan);
  box-shadow: 0 0 10px var(--cyan);
}

.product-card {
  background: #1a1a2e;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(5, 217, 232, 0.3);
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-info {
  padding: 15px;
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(5px);
}

.price-glow {
  color: var(--cyan);
  font-weight: bold;
  text-shadow: 0 0 5px rgba(5, 217, 232, 0.5);
}

/* Game-Inspired Card Flip Effect */
.game-card {
  background: transparent;
  perspective: 1000px;
  height: 350px;
}

.game-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.game-card:hover .game-card-inner {
  transform: rotateY(180deg);
}

.game-card-front, .game-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
}

.game-card-front {
  background-color: #1a1a2e;
}

.game-card-back {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stock-indicator {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.in-stock {
  background-color: rgba(0, 200, 0, 0.7);
  color: white;
}

.out-stock {
  background-color: rgba(200, 0, 0, 0.7);
  color: white;
}

.price-tag {
  background: linear-gradient(45deg, var(--purple), var(--pink));
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  display: inline-block;
  margin: 10px 0;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(162, 57, 202, 0.5);
}

/* Brands Section */
.brands-section {
  background: linear-gradient(to bottom, #0f0e17, #1a1a2e);
  position: relative;
}

.brands-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--cyan), transparent);
}

.brand-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--cyan);
  transition: all 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px var(--cyan);
}

.brand-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-name {
  margin-top: 10px;
  color: var(--cyan);
  font-weight: 500;
}

/* Footer Styles */
.footer-glow {
  background: linear-gradient(to bottom, #1a1a2e, #0f0e17);
  position: relative;
}

.footer-glow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--purple), var(--cyan), var(--pink));
  box-shadow: 0 0 10px var(--purple),
              0 0 20px var(--cyan);
}

.footer-title {
  color: var(--cyan);
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--cyan);
}

.copyright {
  color: #aaa;
  position: relative;
  padding-top: 20px;
}

.copyright::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--cyan), transparent);
}

/* Out of Stock Effect */
.out-of-stock .game-card-front {
  position: relative;
}

.out-of-stock .game-card-front::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

/* Responsive Adjustments */
/* Enhanced responsive styles */
@media (max-width: 768px) {
  .header-glow {
    flex-direction: column;
    padding: 15px;
    gap: 15px;
  }
  
  .search-container {
    width: 100%;
    order: 2;
  }
  
  .logo-container {
    order: 1;
  }
  
  .icon-group {
    order: 3;
    width: 100%;
    justify-content: space-around;
  }
  
  .rgb-border {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  }
  
  .category-card {
    width: 150px;
    height: 150px;
  }
  
  .product-card, .game-card {
    margin-bottom: 20px;
  }
  
  .brand-logo {
    width: 70px;
    height: 70px;
  }
  
  .footer-glow .row {
    flex-direction: column;
    gap: 30px;
  }
}

/* Add these to your styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse-animation {
  animation: pulse 2s infinite;
}

</style>