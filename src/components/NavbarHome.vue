<template>
  <nav class="navbar">
    <router-link 
      v-for="(item, index) in navItems" 
      :key="index" 
      :to="item.path"
      exact-active-class="active"
    >
      {{ item.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #f8f9fa;
}

.navbar a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
}

.navbar a.active {
  font-weight: bold;
  border-bottom: 2px solid #42b983;
}
</style>