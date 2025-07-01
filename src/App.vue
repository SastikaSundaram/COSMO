<template>
  <router-view />
  <Toast />
</template>

<script>
import { Toast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default {
  name: 'App',
  components: {
    Toast
  }
};
</script>
<style>
.app{
  background-color: aqua;
}
</style>