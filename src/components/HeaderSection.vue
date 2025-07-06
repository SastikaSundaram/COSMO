<template>
  <header class="header sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand logo">
          Glow<span>Cosmetics</span>
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul class="dropdown-menu">
                <li v-for="(category, index) in categories" :key="index">
                  <router-link 
                    :to="`/products?category=${category.name}`" 
                    class="dropdown-item">
                    {{ category.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
          
          <div class="d-flex align-items-center">
            <button class="btn position-relative mx-2">
              <i class="far fa-user"></i>
            </button>
            <button class="btn position-relative mx-2">
              <i class="far fa-heart"></i>
              <span class="cart-count">3</span>
            </button>
            <button class="btn position-relative mx-2" @click="$emit('toggleCart')">
              <i class="fas fa-shopping-bag"></i>
              <span class="cart-count">{{ cartItemCount }}</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  emits: ['toggleCart'],
  setup() {
    const store = useStore()
    
    const cartItemCount = computed(() => store.getters.cartItemCount)
    const categories = computed(() => store.state.categories)
    
    return {
      cartItemCount,
      categories
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #fff 0%, #fff 90%, #ffe6f2 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.logo {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--primary);
  letter-spacing: 1px;
  text-decoration: none;
}

.logo span {
  color: var(--accent);
}

.nav-link {
  font-weight: 500;
  color: #555 !important;
  position: relative;
  padding: 0.5rem 1.5rem !important;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary) !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 70%;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>