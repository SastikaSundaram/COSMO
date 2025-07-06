import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

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
    component: () => import('../pages/ProductList.vue'),
    meta: {
      title: 'Our Products - GlowCosmetics'
    }
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('../pages/ProductDetail.vue'), // Note the file name
    props: true,
    meta: {
      title: 'Product Details - GlowCosmetics'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/CartView.vue'),
    meta: {
      title: 'Your Shopping Cart - GlowCosmetics'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../pages/CheckoutView.vue'),
    meta: {
      title: 'Checkout - GlowCosmetics'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: 'Page Not Found - GlowCosmetics'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'GlowCosmetics'
})

export default router