<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content fade-in">
        <h1>Discover Your Radiance</h1>
        <p>Premium cosmetics crafted with care to enhance your natural beauty. Experience luxury skincare and makeup that makes you feel confident and beautiful.</p>
        <div>
          <router-link to="/shop" class="btn">Shop Collection</router-link>
          <router-link to="/about" class="btn btn-outline">Learn More</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(rgba(42, 12, 78, 0.8), rgba(42, 12, 78, 0.8)), 
              url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480') center/cover;
  height: 80vh;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

@media (max-width: 992px) {
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    height: 70vh;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .btn-outline {
    margin-left: 0;
  }
}
</style>