<template>
  <div>
    <!-- Header -->
    <ThreeBackground />
    <header class="bg-light border-bottom py-2 px-4 d-flex justify-content-between align-items-center">
      <input type="text" placeholder="Search products..." class="form-control w-25">
      <div class="d-flex align-items-center position-relative">
        <i class="fas fa-user-circle fs-4 me-3"></i>
        <i class="fas fa-heart fs-4 me-3"></i>
        <div class="position-relative">
          <i class="fas fa-shopping-cart fs-4 me-3" @click="openCart"></i>
          <span v-if="cartItemCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cartItemCount }}
          </span>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-white shadow-sm p-2 d-flex justify-content-between align-items-center px-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0aA99uigjHT-agnzfVBE9ZcMTflcWJdmlw&s" alt="logo" height="40">
      <div class="nav-links d-flex gap-3">
        <a href="#" class="text-dark text-decoration-none">New Arrivals</a>
        <a href="#" class="text-dark text-decoration-none">Brands</a>
        <a href="#" class="text-dark text-decoration-none">Makeup</a>
        <a href="#" class="text-dark text-decoration-none">Skin</a>
      </div>
    </nav>

    <!-- Cart Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Your Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Your cart is empty.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Carousel -->
    <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(hero, index) in heroes" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <img :src="hero.img" class="d-block w-100" :alt="hero.alt" style="height: 500px; object-fit: cover;" />
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h2 class="text-white">{{ hero.title }}</h2>
            <p class="text-white">{{ hero.text }}</p>
            <button class="btn btn-outline-light">Shop Now</button>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Categories -->
    <div class="container my-5">
      <h3 class="mb-4">Shop by Category</h3>
      <div class="d-flex overflow-auto gap-3">
        <div v-for="cat in categories" :key="cat.name" class="card flex-shrink-0" style="width: 12rem;">
          <img :src="cat.img" class="card-img-top object-fit-cover" :alt="cat.name" style="height: 180px;">
          <div class="card-body">
            <h5 class="card-title">{{ cat.name }}</h5>
            <a href="#" class="btn btn-outline-primary btn-sm">Explore</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Promo Poster -->
    <div class="container mb-5">
      <img src="https://hokmakeup.com/cdn/shop/files/Foundation_Finder_Banner_1920x463_84ec4b75-56b0-4587-b569-8426df479283.jpg?v=1741861460&width=1500" class="img-fluid rounded shadow">
    </div>

    <!-- Just Launched -->
    <div class="container mb-5">
      <h3 class="mb-4">Just Launched</h3>
      <div class="row">
        <div class="col-md-3" v-for="(item, index) in justLaunched" :key="'launch' + index">
          <div class="card h-100">
            <img :src="item.img" class="card-img-top object-fit-cover" style="height: 200px;">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.desc }}</p>
              <a href="#" class="btn btn-primary btn-sm">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="container mb-5">
      <h3 class="mb-4">All Products</h3>
      <div class="row">
        <div class="col-md-3 mb-4" v-for="(product, index) in products" :key="'prod' + index">
          <div class="card h-100 shadow-sm border-0">
            <img :src="product.img" class="card-img-top product-image" :alt="product.name">
            <div class="card-body d-flex flex-column">
              <h6 class="fw-bold mb-1">{{ product.name }}</h6>
              <small class="text-muted mb-1">Brand: {{ product.brand }}</small>
              <p class="text-success mb-1" v-if="product.stock > 0">In Stock: {{ product.stock }}</p>
              <p class="text-danger mb-1" v-else>Out of Stock</p>
              <h6 class="mt-auto mb-2">₹{{ product.price }}</h6>
              <button :disabled="product.stock === 0" class="btn btn-outline-dark btn-sm w-100" @click="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h5>About Us</h5>
            <p>Founded in 2025<br>Global Cosmetic Marketplace</p>
          </div>
          <div class="col-md-3">
            <h5>Brands</h5>
            <ul class="list-unstyled">
              <li>Garnier</li>
              <li>L'Oréal</li>
              <li>Maybelline</li>
              <li>Lakmé</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Support</h5>
            <ul class="list-unstyled">
              <li>Orders</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Features</h5>
            <p>✓ Free Shipping<br>✓ Secure Payments<br>✓ 24x7 Support</p>
          </div>
        </div>
        <div class="text-center mt-4">&copy; 2025 Cosmo Beauty Store</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import ThreeBackground from './ThreeBackground.vue';

const store = useStore();
const router = useRouter();
const toast = useToast();

let modal = null;

onMounted(() => {
  const modalElement = document.getElementById('cartModal');
  if (modalElement && window.bootstrap && window.bootstrap.Modal) {
    modal = new window.bootstrap.Modal(modalElement);
  }
});

// Hero images
const heroes = ref([
  {
    img: "https://www.therougecosmetics.com/cdn/shop/files/cosmetics_9e3b1985-0d38-46d7-8ab4-385439bedde3_1600x.png?v=1613559291",
    title: "Unleash Your Beauty",
    text: "Shop the latest trends in skincare and cosmetics.",
    alt: "Hero 1"
  },
  {
    img: "https://juicecosmetics.in/cdn/shop/collections/485x485_liptintpsd_1.jpg?v=1707393236",
    title: "Glow Like Never Before",
    text: "Discover premium skin and hair care essentials.",
    alt: "Hero 2"
  },
  {
    img: "https://slae.com.my/cdn/shop/files/2.png?v=1725242308&width=3840",
    title: "Luxury Meets Skincare",
    text: "Upgrade your glow with our newest product line.",
    alt: "Hero 3"
  },
  {
    img: "https://slae.com.my/cdn/shop/files/4_8e92169f-6245-4af3-a5ea-f797f978a4f3.png?v=1747716882&width=3840",
    title: "Refined Radiance",
    text: "Skin nourishment meets style.",
    alt: "Hero 4"
  },
  {
    img: "https://beauty-depot.ca/cdn/shop/files/Banner_girl_5_1600x.jpg?v=1652808031",
    title: "Timeless Glow",
    text: "Beauty that transcends seasons.",
    alt: "Hero 5"
  }
]);

// Category items
const categories = ref([
  {
    name: 'Lipstick',
    img: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494284841/c9K2Ze9W4B-000000000494284841_06.jpeg'
  },
  {
    name: 'Foundation',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKl3BLsocKW71Mjc2XK5SfbId4G3Avsi3qQ&s'
  },
  {
    name: 'Serum',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BsUOzIN5cfD8JLG3UU782zfnyxiTHPgOvQ&s'
  },
  {
    name: 'Brushes',
    img: 'https://kyliecosmetics.com/cdn/shop/files/v1b_Skin-Tint_Bundle-1._46cae4b4-303a-418f-aba1-ec9b20073f69_400x.jpg?v=1721752623'
  },
  {
    name: 'Skin Care',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBzOUOIaKtXu_VdD_GRgyZxY-h7Or5LHCXg&s'
  },
  {
    name: 'Nail Polish',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWuMzF2GI6ZNNegOy5LjI8Zg_vhDhlDEleA&s'
  }
]);

// Just launched
const justLaunched = ref([
  {
    name: "Crimson Shine",
    desc: "Bold red, high pigment gloss.",
    img: "https://m.media-amazon.com/images/I/31wIVPpZxzL._AC_.jpg"
  },
  {
    name: "Coral Crush",
    desc: "Smooth finish for a radiant smile.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7IH5DbEZHmocVeluGoU5RBNOft0yGsdXsg&s"
  },
  {
    name: "Nude Bliss",
    desc: "Soft matte everyday wear.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXeiYbjss6MhFHRwSWEQmk3OOd8mdAZv3rQ&s"
  },
  {
    name: "Berry Pop",
    desc: "Moisturizing berry tint.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRQkfiOSB0eUjR85zTzmZ4NYZD7pv_h_x9Uw&s"
  }
]);

// Products list with unique identifiers
const products = ref([
  {
    id: 1,
    name: "Lip Suede Matte Lipstick",
    brand: "Matte",
    stock: 15,
    price: 1599,
    img: "https://imgix.bustle.com/uploads/image/2024/3/20/50fad8ea-d678-43f3-bbaa-8b164ea395d6-screen-shot-2024-03-20-at-31557-pm.png?w=390&h=395&fit=crop&crop=faces&dpr=2"
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    brand: "ColorPop",
    stock: 8,
    price: 849,
    img: "https://www.beautyberry.co.in/cdn/shop/files/01_aadcff32-aee9-41cc-8ed6-03345d1d9fa5.jpg?v=1742207430&width=1946"
  },
  {
    id: 3,
    name: "Mettle liquid lipstick",
    brand: "Sugar",
    stock: 12,
    price: 1299,
    img: "https://www.sugarcosmetics.com/cdn/shop/files/Mettle-Liquid-Lipstick-5_65fd6049.jpg?v=1743677226"
  },
  {
    id: 4,
    name: "Fit Me Liquid Foundation",
    brand: "Maybelline",
    stock: 0,
    price: 629,
    img: "https://m.media-amazon.com/images/I/418-0bNNQgL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    name: "Breathable Matte Foundation",
    brand: "Matte",
    stock: 5,
    price: 425,
    img: "https://images-cdn.ubuy.co.in/65b93fae3da779558e4479c5-sheglam-full-coverage-foundation-makeup.jpg"
  },
  {
    id: 6,
    name: "Alix Avin Paris",
    brand: "SkinGenic",
    stock: 22,
    price: 1379,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmv60YzTIjOSja5Hmg8R5B6W-p0OIt46_PoA&s"
  },
  {
    id: 7,
    name: "Glutone Skin Brightening Serum",
    brand: "Faces Canada",
    stock: 7,
    price: 1475,
    img: "https://www.glutone.in/cdn/shop/files/Glutone-Skin-Brightening-Serum-Glutone-87129887.png"
  },
  {
    id: 8,
    name: "Kombucha Hydra Repair Face Serum",
    brand: "Huda Beauty",
    stock: 18,
    price: 1799,
    img: "https://www.mcaffeine.com/cdn/shop/files/card-1_1_06e184c5-64a2-400b-8f4f-27aa7ddf8c20.jpg?v=1693928553"
  },
  {
    id: 9,
    name: "Derma Co 10 Percent Niacinamide Serum",
    brand: "Derma Co.",
    stock: 6,
    price: 599,
    img: "https://www.netmeds.com/images/product-v1/400x400/1084796/the_derma_co_10_percent_niacinamide_serum_30_ml_629326_0_1.webp"
  },
  {
    id: 10,
    name: "MCM-face brush JAF Brand 12pc Makeup Brush",
    brand: "MAC",
    stock: 3,
    price: 899,
    img: "https://images-cdn.ubuy.co.in/634009c3e14685277a3acd74-soft-jaf-brand-12pcs-makeup-brushes-kit.jpg"
  },
  {
    id: 11,
    name: "Nanchy Makeup Brushes",
    brand: "Nykaa",
    stock: 30,
    price: 189,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdOlCgktpWpZhR6raGqqV5svElMCk-LCzwg&s"
  },
  {
    id: 12,
    name: "Aurora Powder Brushes",
    brand: "Nivea",
    stock: 0,
    price: 129,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSIT4dazqjeEr71gYgUBFxVdjkep2QgTb63A&s"
  },
  {
    id: 13,
    name: "Ayurvedic Skin Glow Serum",
    brand: "Sense Naturals",
    stock: 16,
    price: 325,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuCG2ebGX8CBJ4lAfn9VyM1X28DmaQJANtw&s"
  },
  {
    id: 14,
    name: "Ceramide Face Cream",
    brand: "Mamaearth",
    stock: 9,
    price: 450,
    img: "https://plumgoodness.com/cdn/shop/files/0001_ae2eacc0-5b86-4fb1-98e8-663d2dd2acfb.jpg?v=1731391326"
  },
  {
    id: 15,
    name: "Natural Glow Kesar Face Cream",
    brand: "Himalaya",
    stock: 4,
    price: 100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc0dnCI0pTy6shkf55d6Y5EQkON8xP-t4Eg&s"
  },
  {
    id: 16,
    name: "BAD COMPANY Nude Nail Polish",
    brand: "Bad",
    stock: 21,
    price: 210,
    img: "https://m.media-amazon.com/images/I/710Q5NepyaL._UF1000,1000_QL80_.jpg"
  },
  {
    id: 17,
    name: "Leverns Nail Polish",
    brand: "Channel",
    stock: 11,
    price: 149,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3PrbmzQTtU_b04dMA7-LNM-g4ckV2cnCgg&s"
  },
  {
    id: 18,
    name: "MI Luxury Nail Polish",
    brand: "MI",
    stock: 10,
    price: 650,
    img: "https://www.mifashion.in/cdn/shop/products/p_121b6eef-78d9-4c41-995a-503c747d9fe6.jpg?v=1679995077"
  }
]);

// Computed cart count
const cartItemCount = computed(() => store.state.cart.length);

// Add to cart
function addToCart(product) {
  // Add unique ID to product before adding to cart
  const productWithId = {
    ...product,
    uniqueId: `${product.name}-${product.brand}`
  };
  
  store.commit('ADD_TO_CART', productWithId);
  toast.success(`${product.name} added to cart`, {
    position: 'top-right',
    timeout: 2000
  });
}

// Open cart logic
function openCart() {
  if (cartItemCount.value > 0) {
    router.push('/cart');
  } else {
    if (modal) {
      modal.show();
    } else {
      const modalElement = document.getElementById('cartModal');
      if (modalElement && window.bootstrap && window.bootstrap.Modal) {
        const fallbackModal = new window.bootstrap.Modal(modalElement);
        fallbackModal.show();
      } else {
        alert('Your cart is empty!');
      }
    }
  }
}
</script>

<style scoped>
.product-image {
  object-fit: cover;
  height: 250px;
}
</style>