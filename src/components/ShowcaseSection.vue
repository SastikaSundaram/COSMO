<template>
  <section class="showcase-section py-5">
    <div class="container">
      <h2 class="section-title text-center mb-5">Interactive Product Showcase</h2>
      <div class="showcase-wrapper">
        <!-- Centered 3D Viewer Container -->
        <div class="viewer-container mx-auto">
          <ThreeScene ref="threeScene" />
        </div>
        
        <!-- Text Content - Now positioned below -->
        
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import ThreeScene from './ThreeScene.vue'

export default {
  components: { ThreeScene },
  setup() {
    const threeScene = ref(null)
    const isRotating = ref(false)

    const toggleRotation = () => {
      isRotating.value = !isRotating.value
      if (threeScene.value) {
        threeScene.value.toggleRotation()
      }
    }

    return {
      isRotating,
      toggleRotation,
      threeScene
    }
  }
}
</script>

<style scoped>
.showcase-section {
  background: linear-gradient(135deg, #fff 0%, #fcf0f7 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.showcase-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.viewer-container {
  width: 100%;
  max-width: 600px;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.showcase-content {
  width: 100%;
  max-width: 600px;
}

.showcase-text {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.btn-primary {
  background-color: #ff6b9e;
  border: none;
  padding: 10px 25px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #ff4785;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 158, 0.3);
}

.section-title {
  font-size: 2.5rem;
  color: #333;
  font-weight: 600;
}

@media (max-width: 768px) {
  .viewer-container {
    height: 400px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>