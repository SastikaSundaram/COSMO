<template>
  <section class="showcase-section py-5">
    <div class="container">
      <h2 class="section-title">Interactive Product Showcase</h2>
      <div class="showcase-container">
        <ThreeScene />
        <div class="showcase-content">
          <div class="showcase-text">
            <h3>Explore Our New Fragrance</h3>
            <p>Experience our new signature scent in stunning 3D. Rotate and zoom to explore every detail of this exquisite bottle design.</p>
            <div class="showcase-controls">
              <button class="btn btn-primary" @click="$emit('rotate')">
                <i class="fas fa-sync-alt me-2"></i>Rotate Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ThreeScene from './ThreeScene.vue'

export default {
  components: {
    ThreeScene
  }
}
</script>

<style scoped>
.showcase-section {
  background: linear-gradient(135deg, #fff 0%, #fcf0f7 100%);
}

.showcase-container {
  height: 500px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.showcase-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 2rem;
}

.showcase-text {
  max-width: 500px;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.showcase-controls {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .showcase-container {
    height: 400px;
  }
  
  .showcase-text {
    padding: 1.5rem;
  }
}
</style>