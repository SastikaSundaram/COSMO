<template>
  <section class="newsletter">
    <div class="container">
      <div class="newsletter-content fade-in">
        <h2>Join Our Beauty Community</h2>
        <p>Subscribe to receive exclusive offers, beauty tips, and early access to new products.</p>
        
        <form class="newsletter-form" @submit.prevent="subscribe">
          <input type="email" placeholder="Your email address" v-model="email" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    subscribe() {
      this.$toast.success('Thank you for subscribing!');
      this.email = '';
    }
  }
};
</script>

<style scoped>
.newsletter {
  background: linear-gradient(to right, var(--primary), #3a1c6e);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
}

.newsletter h2 {
  margin-bottom: 20px;
}

.newsletter p {
  margin-bottom: 30px;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
}

.newsletter-form input:focus {
  outline: none;
}

.newsletter-form button {
  background: var(--secondary);
  color: var(--primary);
  border: none;
  padding: 0 30px;
  border-radius: 0 30px 30px 0;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.newsletter-form button:hover {
  background: var(--accent);
}

@media (max-width: 768px) {
  .newsletter-form {
    flex-direction: column;
    gap: 10px;
  }
  
  .newsletter-form input {
    border-radius: 30px;
  }
  
  .newsletter-form button {
    border-radius: 30px;
    padding: 15px;
  }
}
</style>