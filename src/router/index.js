import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginPage from '@/views/LoginPage.vue';
import CartPage from '@/views/CartPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';
import CategoryView from '@/views/CategoryView.vue';
import ProductView from '@/views/ProductView.vue';
import AccountView from '@/views/AccountView.vue';
import WishlistView from '@/views/WishlistView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/checkout', name: 'Checkout', component: CheckoutPage },
  { path: '/makeup', name: 'Makeup', component: CategoryView, props: { category: 'makeup' } },
  { path: '/skincare', name: 'Skincare', component: CategoryView, props: { category: 'skincare' } },
  { path: '/fragrance', name: 'Fragrance', component: CategoryView, props: { category: 'fragrance' } },
  { path: '/haircare', name: 'Haircare', component: CategoryView, props: { category: 'haircare' } },
  { path: '/product/:id', name: 'Product', component: ProductView },
  { path: '/account', name: 'Account', component: AccountView },
  { path: '/wishlist', name: 'Wishlist', component: WishlistView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.path}`);
  next();
});

export default router;