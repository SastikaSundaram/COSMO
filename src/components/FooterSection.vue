<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="logo mb-3">Glow<span>Cosmetics</span></div>
          <p class="mb-4">Premium beauty products for every skin type. Cruelty-free, ethically sourced, and environmentally conscious.</p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 mb-4">
          <h4 class="footer-title">Shop</h4>
          <ul class="footer-links">
            <li><router-link to="/products">All Products</router-link></li>
            <li><router-link to="/products?category=Makeup">Makeup</router-link></li>
            <li><router-link to="/products?category=Skincare">Skincare</router-link></li>
            <li><router-link to="/products?category=Hair Care">Hair Care</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4 mb-4">
          <h4 class="footer-title">Help</h4>
          <ul class="footer-links">
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/faq">FAQs</router-link></li>
            <li><router-link to="/shipping">Shipping Policy</router-link></li>
            <li><router-link to="/returns">Returns & Exchanges</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4 mb-4">
          <h4 class="footer-title">Newsletter</h4>
          <p class="mb-3">Subscribe to get special offers, free giveaways, and beauty tips.</p>
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Your email address">
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 GlowCosmetics. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark);
  color: #fff;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #bbb;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 5px;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary);
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-top: 3rem;
  text-align: center;
  color: #999;
  font-size: 0.9rem;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--primary);
  letter-spacing: 1px;
}

.logo span {
  color: var(--accent);
}
</style>