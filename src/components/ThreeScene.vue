<template>
  <div ref="container" class="three-container"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

export default {
  setup() {
    const container = ref(null)
    let scene, camera, renderer, cube
    let animationId = null

    const initThreeJS = () => {
      // Scene setup
      scene = new THREE.Scene()
      scene.background = null
      
      // Camera
      camera = new THREE.PerspectiveCamera(
        75, 
        container.value.clientWidth / container.value.clientHeight, 
        0.1, 
        1000
      )
      camera.position.z = 5
      
      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(container.value.clientWidth, container.value.clientHeight)
      container.value.appendChild(renderer.domElement)
      
      // Geometry
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      
      // Animation
      const animate = () => {
        animationId = requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
      
      // Handle resize
      window.addEventListener('resize', onWindowResize)
    }

    const onWindowResize = () => {
      camera.aspect = container.value.clientWidth / container.value.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.value.clientWidth, container.value.clientHeight)
    }

    onMounted(() => {
      initThreeJS()
    })

    onUnmounted(() => {
      if (animationId) cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onWindowResize)
      if (container.value && container.value.contains(renderer.domElement)) {
        container.value.removeChild(renderer.domElement)
      }
    })

    return {
      container
    }
  }
}
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>