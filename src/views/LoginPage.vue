<template>
  <div class="login-wrapper d-flex align-items-center justify-content-center">
    <div class="login-card card p-4 shadow-lg">
      <div class="card-body">
        <div class="text-center mb-4">
          <div class="logo mb-3">
            <i class="fas fa-crown fa-2x text-gold"></i>
            <h3 class="mt-2">LUXE COSMETICS</h3>
          </div>
          <h4 class="text-dark">Welcome Back</h4>
        </div>

        <form @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
              placeholder="Email"
              required
            />
            <label for="email">Email address</label>
          </div>

          <div class="form-floating mb-3 position-relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              class="form-control"
              v-model="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
            <span
              class="toggle-password"
              @click="showPassword = !showPassword"
            >
              <i :class="showPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
            </span>
          </div>

          <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="remember"
              v-model="remember"
            />
            <label class="form-check-label" for="remember">Remember me</label>
          </div>

          <div v-if="error" class="alert alert-danger small py-2">{{ error }}</div>

          <button type="submit" class="btn btn-login w-100" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <div class="text-center mt-4 small">
          <p class="mb-1">
            Forgot password?
            <a href="#" class="text-primary">Reset here</a>
          </p>
          <p>
            Don't have an account?
            <router-link to="/register" class="text-primary">Register</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      showPassword: false,
      error: null,
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.error = null;
      
      // Simulate API call
      setTimeout(() => {
        this.loading = false;
        this.$store.commit('SET_USER', {
          name: 'Jane Doe',
          email: this.email
        });
        this.$router.push('/');
      }, 1500);
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  background: url('https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1470') center/cover;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.logo {
  color: var(--primary);
}

.text-gold {
  color: var(--secondary);
}

.btn-login {
  background-color: var(--primary);
  color: white;
  border: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background-color: #3a1c6e;
}

.form-control {
  border-radius: 12px;
  padding: 16px;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--gray);
}
</style>