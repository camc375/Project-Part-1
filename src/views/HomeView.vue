<template>
  <main class="home-content">
    <div class="content-container">
        <div class="left-side">
          <img class="image" src="@/assets/placeholder.jpg" alt="placeholder">
        </div>
        <div class="middle">
          <div class="centered-text">
          Surrey Park Swimming is one of the oldest Swimming Schools in Victoria, having been established in 1904.
          Since that time, we have provided swimming lessons to students of all ages. Our goal is to provide lessons 
          to as many people as possible to ensure that everyone can be safe and have fun around the water.
          </div>
          <div class="programs">
            <h2>Our Programs include:</h2>
            <ul>
              <li>Toddler Lessons - 6 months to 3 years - $20.00 per 30 minute lesson</li>
              <li>Child Lessons - 3 to 12 years - $25.00 per lesson per 30 minute</li>
              <li>Teen Lessons - 12 to 18 years - $25.00 per lesson per 30 minute</li>
              <li>Adult lessons - 18+ years - $27.00 per 30 minute</li>
            </ul>
          </div>
          <div class="locations">
            <p>We currently run all of these programs out of our two locations, Aqualink Box Hill and Blackburn. 
            For more details on programs and availability, please click the link for the pool you would like to swim at.</p>
          </div>
        </div>
        <div class="right-side">
          <img class="image" src="@/assets/placeholder.jpg" alt="placeholder">
        </div>
    </div>
  </main>
</template>

<style scoped>
.home-content {
  
  max-width: 100vw;
  margin: 0 auto;
  padding: 2rem;
}

.content-container {
  display: flex;
  padding-bottom: 2vw;
}
.left-side {
  width: 20%;
}

.middle {
  width: 60%;
  padding: 0 1rem;
}

.right-side {
  width: 20%;
}

.image{
  width: 18vw;
  max-width: 250px;
  height: auto;
}

.centered-text {
  text-align: center;
  margin-bottom: 2rem;
}

.programs {
  text-align: center;
  margin-bottom: 2rem;
}

.programs h2 {
  font-size: calc(16px + 0.75vw);
  margin-bottom: 1rem;
}

.locations {
  font-size: 0.9rem;
}

.locations p {
  margin-bottom: 0.5rem;
}
</style>
