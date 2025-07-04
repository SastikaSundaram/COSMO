<template>
  <header>
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <i class="fas fa-crown logo-icon"></i>
          <span>LUXE COSMETICS</span>
        </router-link>
        
        <nav class="nav-links" :class="{ active: mobileMenuOpen }">
          <router-link to="/">Home</router-link>
          <router-link to="/makeup">Makeup</router-link>
          <router-link to="/skincare">Skincare</router-link>
          <router-link to="/fragrance">Fragrance</router-link>
          <router-link to="/haircare">Haircare</router-link>
          <router-link to="/wishlist">
            <i class="fas fa-heart"></i> Wishlist
          </router-link>
        </nav>
        
        <div class="header-actions">
          <div class="search-container">
            <i class="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Search products..."
              v-model="searchQuery"
              @input="searchProducts"
            >
          </div>
          
          <div class="action-icon" @click="goToAccount">
            <i class="fas fa-user"></i>
          </div>
          
          <div class="action-icon" @click="goToWishlist">
            <i class="fas fa-heart"></i>
            <span class="badge" v-if="wishlistCount > 0">{{ wishlistCount }}</span>
          </div>
          
          <div class="action-icon" @click="toggleCartPreview">
            <i class="fas fa-shopping-bag"></i>
            <span class="badge" v-if="cartCount > 0">{{ cartCount }}</span>
          </div>
          
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
      mobileMenuOpen: false
    };
  },
  computed: {
    ...mapGetters(['cartItemCount']),
    cartCount() {
      return this.cartItemCount;
    },
    wishlistCount() {
      return this.$store.state.wishlist.length;
    }
  },
  methods: {
    searchProducts() {
      this.$store.dispatch('searchProducts', this.searchQuery);
    },
    toggleCartPreview() {
      this.$store.commit('TOGGLE_CART_PREVIEW');
    },
    goToAccount() {
      if (this.$store.getters.isAuthenticated) {
        this.$router.push('/account');
      } else {
        this.$router.push('/login');
      }
    },
    goToWishlist() {
      this.$router.push('/wishlist');
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
};
</script>

<style scoped>
header {
  background: linear-gradient(to right, var(--primary), #3a1c6e);
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.logo-icon {
  color: var(--secondary);
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 5px 0;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--secondary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-container {
  position: relative;
}

.search-container input {
  padding: 10px 15px 10px 40px;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transition: var(--transition);
  width: 250px;
}

.search-container input:focus {
  background: rgba(255, 255, 255, 0.25);
  outline: none;
  width: 300px;
}

.search-container i {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary);
}

.action-icon {
  position: relative;
  font-size: 1.3rem;
  cursor: pointer;
  transition: var(--transition);
}

.action-icon:hover {
  color: var(--secondary);
  transform: scale(1.1);
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--secondary);
  color: var(--primary);
  font-size: 0.7rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 80px;
    left: -100%;
    background: var(--primary);
    width: 80%;
    height: calc(100vh - 80px);
    flex-direction: column;
    padding: 40px 20px;
    transition: var(--transition);
  }
  
  .nav-links.active {
    left: 0;
  }
  
  .search-container {
    display: none;
  }
}
</style>