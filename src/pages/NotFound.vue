<template>
  <div class="not-found-page">
    <div class="container text-center py-5">
      <h1 class="display-1 text-primary">404</h1>
      <h2 class="mb-4">Page Not Found</h2>
      <p class="lead mb-4">Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/" class="btn btn-primary btn-lg">
        <i class="fas fa-home me-2"></i>Return Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: 'Page Not Found - GlowCosmetics'
  }
}
</script>

<style scoped>
.not-found-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.display-1 {
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>