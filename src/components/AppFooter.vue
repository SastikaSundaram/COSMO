<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>LUXE COSMETICS</h3>
          <p>Premium cosmetics for the modern beauty enthusiast. Discover products that enhance your natural radiance.</p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><router-link to="/"><i class="fas fa-chevron-right"></i> Home</router-link></li>
            <li><router-link to="/shop"><i class="fas fa-chevron-right"></i> Shop</router-link></li>
            <li><router-link to="/about"><i class="fas fa-chevron-right"></i> About Us</router-link></li>
            <li><router-link to="/contact"><i class="fas fa-chevron-right"></i> Contact</router-link></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Categories</h3>
          <ul class="footer-links">
            <li><router-link to="/makeup"><i class="fas fa-chevron-right"></i> Makeup</router-link></li>
            <li><router-link to="/skincare"><i class="fas fa-chevron-right"></i> Skincare</router-link></li>
            <li><router-link to="/fragrance"><i class="fas fa-chevron-right"></i> Fragrance</router-link></li>
            <li><router-link to="/haircare"><i class="fas fa-chevron-right"></i> Haircare</router-link></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h3>Contact Us</h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-map-marker-alt"></i> 123 Beauty St, Paris</a></li>
            <li><a href="#"><i class="fas fa-phone"></i> +1 (555) 123-4567</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i> info@luxecosmetics.com</a></li>
          </ul>
        </div>
      </div>
      
      <div class="copyright">
        &copy; 2023 Luxe Cosmetics. All rights reserved. Designed with passion for beauty.
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--dark);
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
}

.footer-column h3 {
  color: var(--secondary);
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a:hover {
  color: var(--secondary);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  color: white;
}

.social-link:hover {
  background: var(--secondary);
  color: var(--primary);
  transform: translateY(-5px);
}

.copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
}
</style>