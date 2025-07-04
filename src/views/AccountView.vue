<template>
  <div>
    <AppHeader />
    <div class="container my-5 py-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <div class="avatar mb-3">
                <i class="fas fa-user-circle fa-5x text-secondary"></i>
              </div>
              <h4>{{ user.name }}</h4>
              <p class="text-muted">{{ user.email }}</p>
              
              <div class="list-group">
                <router-link to="/account" class="list-group-item list-group-item-action active">
                  Account Overview
                </router-link>
                <router-link to="/orders" class="list-group-item list-group-item-action">
                  My Orders
                </router-link>
                <router-link to="/wishlist" class="list-group-item list-group-item-action">
                  Wishlist
                </router-link>
                <router-link to="/settings" class="list-group-item list-group-item-action">
                  Settings
                </router-link>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-8">
          <div class="card shadow-sm">
            <div class="card-body">
              <h3 class="mb-4">Account Overview</h3>
              
              <div class="row mb-4">
                <div class="col-md-6">
                  <div class="card bg-light p-3 h-100">
                    <h5>Personal Information</h5>
                    <p>{{ user.name }}</p>
                    <p>{{ user.email }}</p>
                    <p>Member since: {{ user.joinDate }}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card bg-light p-3 h-100">
                    <h5>Shipping Address</h5>
                    <p v-if="user.address">{{ user.address }}</p>
                    <p v-else class="text-muted">No address saved</p>
                    <button class="btn btn-sm btn-outline-primary mt-2">Edit Address</button>
                  </div>
                </div>
              </div>
              
              <div class="card bg-light p-3 mb-4">
                <h5 class="mb-3">Recent Orders</h5>
                <p v-if="orders.length === 0" class="text-muted">No recent orders</p>
                <div v-else>
                  <div v-for="order in orders" :key="order.id" class="border-bottom pb-3 mb-3">
                    <div class="d-flex justify-content-between">
                      <strong>Order #{{ order.id }}</strong>
                      <span>{{ order.date }}</span>
                    </div>
                    <p class="mb-1">{{ order.items }} items - ${{ order.total }}</p>
                    <span :class="statusClass(order.status)">{{ order.status }}</span>
                  </div>
                </div>
              </div>
              
              <button class="btn btn-outline-danger" @click="logout">
                <i class="fas fa-sign-out-alt me-2"></i>Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      user: {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        joinDate: 'January 15, 2023',
        address: '123 Beauty Street, Paris, France'
      },
      orders: [
        { id: 'ORD-12345', date: 'Oct 12, 2023', items: 3, total: 89.97, status: 'Delivered' },
        { id: 'ORD-12346', date: 'Sep 28, 2023', items: 2, total: 64.98, status: 'Delivered' },
      ]
    };
  },
  methods: {
    statusClass(status) {
      return {
        'text-success': status === 'Delivered',
        'text-warning': status === 'Processing',
        'text-info': status === 'Shipped'
      };
    },
    logout() {
      this.$store.commit('SET_USER', null);
      this.$router.push('/');
      this.$toast.success('You have been logged out');
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.list-group-item {
  text-align: left;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.125);
}

.list-group-item:last-child {
  border-bottom: none;
}

.list-group-item.active {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>