import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import HomePage from '../components/HomePage.vue';
import CartPage from '../components/CartPage.vue';
import CheckoutPage from '../components/CheckoutPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Login', component: LoginPage },
    { path: '/home', name: 'Home', component: HomePage },
    { path: '/cart', name: 'Cart', component: CartPage },
    { path: '/checkout', name: 'Checkout', component: CheckoutPage },
  ],
});