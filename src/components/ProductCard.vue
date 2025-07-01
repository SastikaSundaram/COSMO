<template>
  <div class="card h-100">
    <img :src="product.image" class="card-img-top" alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="text-danger">Offer: {{ product.offer }}</p>
      <button class="btn btn-outline-dark w-100" @click="$store.commit('ADD_TO_CART', product)">Add to Cart - ${{ product.price }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
};
</script>