<template>
  <div class="login-wrapper d-flex align-items-center justify-content-center">
    <div class="login-card card p-4 shadow-lg">
      <div class="card-body">
        <!-- Logo -->
        <div class="text-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Logo"
            class="logo mb-2"
          />
          <h4 class="text-white">Welcome Back</h4>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin">
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
              :title="showPassword ? 'Hide' : 'Show'"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </span>
          </div>

          <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="remember"
              v-model="remember"
            />
            <label class="form-check-label text-light" for="remember">Remember me</label>
          </div>

          <div v-if="error" class="alert alert-danger small py-2">{{ error }}</div>

          <button type="submit" class="btn btn-login w-100" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <!-- Footer Links -->
        <div class="text-center mt-4 small">
          <p class="text-light mb-1">
            Forgot password?
            <a href="#" class="text-warning text-decoration-none" data-bs-toggle="modal" data-bs-target="#resetModal">Reset here</a>
          </p>
          <p class="text-light">
            Don't have an account?
            <a href="#" class="text-warning text-decoration-none" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Reset Password Modal -->
    <div class="modal fade" id="resetModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title">Reset Password</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <input
              type="email"
              class="form-control mb-3"
              placeholder="Enter your email"
              v-model="resetEmail"
            />
            <div v-if="resetSuccess" class="alert alert-success p-2">
              Reset link sent to {{ resetEmail }}!
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-warning" @click="sendResetEmail">Send Email</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Register Modal -->
    <div class="modal fade" id="registerModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title">Register</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control mb-2" placeholder="Full Name" v-model="register.name" />
            <input type="email" class="form-control mb-2" placeholder="Email" v-model="register.email" />
            <input type="password" class="form-control mb-2" placeholder="Password" v-model="register.password" />

            <div v-if="registerSuccess" class="alert alert-success p-2">
              Account registered for {{ register.name }}!
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-warning" @click="registerAccount">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global bootstrap */

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      remember: false,
      showPassword: false,
      error: null,
      loading: false,
      resetEmail: '',
      resetSuccess: false,
      register: {
        name: '',
        email: '',
        password: '',
      },
      registerSuccess: false,
    };
  },
  methods: {
    handleLogin() {
  this.loading = true;

  setTimeout(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      user => user.email === this.email && user.password === this.password
    );

    if (foundUser) {
      this.error = null;
      this.$router.push('/home');
    } else {
      this.error = 'Invalid email or password.';
    }

    this.loading = false;
  }, 1000);
},

    sendResetEmail() {
      if (this.resetEmail) {
        this.resetSuccess = true;
        setTimeout(() => {
          this.resetSuccess = false;
          this.resetEmail = '';
          // eslint-disable-next-line no-undef
          bootstrap.Modal.getInstance(document.getElementById('resetModal')).hide();
        }, 2000);
      }
    },
    registerAccount() {
  if (this.register.name && this.register.email && this.register.password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    const exists = users.find(user => user.email === this.register.email);
    if (exists) {
      alert('Email already registered.');
      return;
    }

    users.push({ ...this.register });
    localStorage.setItem('users', JSON.stringify(users));

    this.registerSuccess = true;
    setTimeout(() => {
      this.registerSuccess = false;
      this.register = { name: '', email: '', password: '' };
      bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    }, 2000);
  }
}

  },
};
</script>



<style scoped>
.login-wrapper {
  background: url('https://st3.depositphotos.com/5124971/16459/i/450/depositphotos_164591042-stock-photo-set-of-cosmetics-makeup-on.jpg')
    no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.logo {
  height: 40px;
  max-width: 120px;
  filter: brightness(0) invert(1);
}

.btn-login {
  background-color: gold;
  border: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  color: #000;
}

.btn-login:hover {
  background-color: #ffcc00;
}

.form-control {
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.form-control:focus {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: gold;
  box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.3);
}

label {
  color: #ccc;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
}

.modal-content {
  border-radius: 16px;
}
</style>
