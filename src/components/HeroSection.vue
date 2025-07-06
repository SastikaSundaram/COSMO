<template>
  <section class="hero-section">
    <div class="circle-decoration"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 hero-content">
          <h1 class="hero-title">Discover Your <span>Inner Glow</span></h1>
          <p class="hero-subtitle">Premium cosmetics and skincare products to enhance your natural beauty. Cruelty-free and ethically sourced.</p>
          <router-link to="/products" class="btn btn-primary">Shop Now</router-link>
        </div>
        <div class="col-lg-6 text-center">
          <img src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Beauty Products" class="img-fluid hero-image">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #fff 0%, #fff 50%, #fcf0f7 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--dark);
}

.hero-title span {
  color: var(--primary);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-image {
  position: relative;
  z-index: 2;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.circle-decoration {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1e4 0%, #ffeff7 100%);
  top: -200px;
  right: -200px;
  z-index: 1;
}

@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.3rem;
  }
}
</style>