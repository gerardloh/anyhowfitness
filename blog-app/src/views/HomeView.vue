<script setup>
import BlogOverview from '../components/BlogOverview.vue';
import TheWelcome from '../components/TheWelcome.vue';
</script>

<template>
  <section id="home">
    <TheWelcome />
  </section>
  
  <section id="blog-overview">
    <BlogOverview />
  </section>
</template>

<style scoped>
.container{
  margin-left: 0;
  margin-right: 0; 
}

html{
  width: 100%;
}
</style>
