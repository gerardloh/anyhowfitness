<template>
  <div class="container">
    <section id="home" class="parallax-section">
      <div class="home-title">
        <h3 class="wow bounceIn" data-wow-delay="0.9s">Anyhow Fitness</h3>
        <h1 class="wow fadeInUp col-sm-12" data-wow-delay="1.6s" style="text-align: center;">Community Forum</h1>
        <router-link to="/editor/">
          <button class="btn" id="editor">
            WRITE A BLOG
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>


<style scoped>
.container {
  max-width: none;
  color: #ffffff;
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  background-attachment: fixed !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  min-width:575px;
}

.home-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  font-family: 'Lora', sans-serif;
  font-style: italic;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 0px;
}

h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 600;
  letter-spacing: 10px;
  text-transform: uppercase;
  padding-top: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.btn {
  background: #26253a;
  border: none;
  border-radius: 0px;
  color: #999;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 4px;
  padding: 16px 38px;
  margin-top: 28px;
  transition: all 0.4s ease-in-out;
  display: inline-block;
  margin-bottom: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>