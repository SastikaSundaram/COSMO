<template>
  <section class="testimonials-section py-5">
    <div class="container">
      <h2 class="section-title">What Our Customers Say</h2>
      <div class="row">
        <div class="col-md-4 mb-4 fade-in">
          <div class="testimonial-card">
            <p class="testimonial-text">The lipstick shades are absolutely gorgeous and long-lasting. I get compliments every time I wear them!</p>
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Customer" class="author-img">
              <div>
                <div class="author-name">Sarah Johnson</div>
                <div class="author-title">Beauty Blogger</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4 fade-in">
          <div class="testimonial-card">
            <p class="testimonial-text">The skincare products transformed my skin in just 2 weeks. I've never been happier with my complexion!</p>
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Customer" class="author-img">
              <div>
                <div class="author-name">Michael Chen</div>
                <div class="author-title">Makeup Artist</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4 fade-in">
          <div class="testimonial-card">
            <p class="testimonial-text">The fragrance selection is incredible. I found my new signature scent that lasts all day long.</p>
            <div class="testimonial-author">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Customer" class="author-img">
              <div>
                <div class="author-name">Emma Rodriguez</div>
                <div class="author-title">Fashion Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background: linear-gradient(to right, #fff 0%, #fff 50%, #fcf0f7 50%, #fcf0f7 100%);
}

.testimonial-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin: 1rem;
  position: relative;
  height: 100%;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  color: rgba(255, 45, 142, 0.1);
  font-family: Georgia, serif;
}

.testimonial-text {
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.author-name {
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.author-title {
  color: #777;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .testimonials-section {
    background: #fcf0f7;
  }
}
</style>