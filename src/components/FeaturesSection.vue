<template>
  <section class="features-section py-5 bg-light">
    <div class="container">
      <h2 class="section-title">Why Choose Us</h2>
      <div class="row">
        <div class="col-md-4 mb-4 fade-in">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-leaf"></i>
            </div>
            <h3 class="feature-title">Natural Ingredients</h3>
            <p class="feature-desc">Our products are made with ethically sourced, natural ingredients for the best results.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4 fade-in">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3 class="feature-title">Cruelty-Free</h3>
            <p class="feature-desc">We never test on animals. All our products are certified cruelty-free.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4 fade-in">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-truck"></i>
            </div>
            <h3 class="feature-title">Free Shipping</h3>
            <p class="feature-desc">Enjoy free shipping on all orders over $50. Fast delivery to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  background: linear-gradient(to bottom, #fcf0f7 0%, #fff 100%);
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.4s ease;
  height: 100%;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-desc {
  color: #777;
}
</style>