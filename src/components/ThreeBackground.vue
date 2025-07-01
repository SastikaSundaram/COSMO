<template>
  <div ref="bgContainer" class="three-bg"></div>
</template>

<script setup>
import * as THREE from 'three';
import { onMounted, ref, onBeforeUnmount } from 'vue';

const bgContainer = ref(null);
let scene, camera, renderer, animationFrameId, particles;

onMounted(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(width, height);
  bgContainer.value.appendChild(renderer.domElement);

  // Particles
  const particleCount = 500;
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < particleCount; i++) {
    positions.push((Math.random() - 0.5) * 10);
    positions.push((Math.random() - 0.5) * 10);
    positions.push((Math.random() - 0.5) * 10);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({ color: 0x888888, size: 0.05 });
  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Animate
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;
    renderer.render(scene, camera);
  };

  animate();

  // Resize listener
  window.addEventListener('resize', onWindowResize);
});

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', onWindowResize);
});
</script>

<style scoped>
.three-bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%);
}
canvas {
  display: block;
}
</style>
