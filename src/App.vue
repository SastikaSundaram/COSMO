<template>
  <router-view />
  <Toast />
</template>

<script>
import { Toast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default {
  name: 'App',
  components: { Toast }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

:root {
  --primary: #2a0c4e;
  --secondary: #d4af37;
  --accent: #e6c567;
  --light: #f8f5f0;
  --dark: #1a1423;
  --gray: #8a8a8a;
  --success: #4caf50;
  --error: #f44336;
  --transition: all 0.3s ease;
  --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.2);
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--light);
  color: var(--dark);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: var(--secondary);
  color: var(--primary);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
  font-size: 1rem;
}

.btn:hover {
  background: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--secondary);
  color: white;
  margin-left: 15px;
}

.btn-outline:hover {
  background: rgba(212, 175, 55, 0.2);
}

.section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.section-title h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.section-title p {
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 2s infinite;
}
</style>