<template>
  <div class="product-card fade-in">
    <router-link :to="`/products/${product.id}`" class="text-decoration-none">
      <div class="position-relative">
        <img :src="product.image" :alt="product.name" class="product-img w-100">
        <div v-if="product.discount" class="product-badge">
          -{{ product.discount }}%
        </div>
      </div>
      <div class="product-body">
        <h3 class="product-title">{{ product.name }}</h3>
        <div class="product-brand">{{ product.brand }}</div>
        <div class="product-price">${{ product.price.toFixed(2) }}</div>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span class="ms-1">({{ product.reviews }})</span>
        </div>
      </div>
    </router-link>
    <button class="add-to-cart-btn" @click.stop="addToCart">
      <i class="fas fa-shopping-bag me-2"></i>Add to Bag
    </button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  emits: ['add-to-cart'],
  setup(props, { emit }) {
    const addToCart = () => {
      emit('add-to-cart', props.product)
    }
    
    return {
      addToCart
    }
  }
}
</script>

<style scoped>
.product-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  background: #fff;
  margin-bottom: 2rem;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.product-img {
  height: 220px;
  object-fit: cover;
  position: relative;
}

.product-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.product-body {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.product-brand {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.product-price {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.product-rating {
  color: #ffc107;
  margin-bottom: 1rem;
}

.add-to-cart-btn {
  background: var(--light);
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
}

.add-to-cart-btn:hover {
  background: var(--primary);
  color: white;
}
</style>