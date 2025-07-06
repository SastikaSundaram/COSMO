import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ProductList from '../pages/ProductList.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import CartView from '../pages/CartView.vue'
import CheckoutView from '../pages/CheckoutView.vue'

// Get base URL safely
const getBaseUrl = () => {
  try {
    // For Vue CLI projects
    if (process.env.BASE_URL) {
      return process.env.BASE_URL
    }
    // For Vite projects
    if (import.meta.env.BASE_URL) {
      return import.meta.env.BASE_URL
    }
    return '/'
  } catch {
    return '/'
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'GlowCosmetics - Premium Beauty Products'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList,
    meta: {
      title: 'Our Products - GlowCosmetics'
    }
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: ProductDetail,
    props: true,
    meta: {
      title: 'Product Details - GlowCosmetics'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      title: 'Your Shopping Cart - GlowCosmetics'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
    meta: {
      title: 'Checkout - GlowCosmetics',
      requiresAuth: false // Set to true if you implement authentication
    }
  },
  // 404 Catch-all route - now using a simple inline component
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'), // Lazy-loaded
    meta: {
      title: 'Page Not Found - GlowCosmetics'
    }
  }
]

const router = createRouter({
  history: createWebHistory(getBaseUrl()),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'GlowCosmetics'
  next()
})

export default router