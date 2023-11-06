<template>
  <div class="container">
    <img :src="blogPost.bannerImage" class="blog-image" alt="Blog cover image" />
    <h2 :title="blogPost.title">
      <span class="line-clamp line-clamp_2">
        {{ blogPost.title }}
      </span>
    </h2>
    <p class="overview-paragraph">
      {{ blogPost.summary?.substring(0, 200) + ' ...' }}
    </p>
    <router-link :to="'/blog/' + blogPost.id">
        <a class="btn btn-dark" href="#">Read More</a>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['blogPost']
}
</script>

<style scoped>
.blog-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
  letter-spacing: 2px;
  padding-bottom: 10px;
  text-transform: none;
  font-weight: bold;
  margin: 20px 0 10px;
}

.line-clamp {
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp_2 {
  -webkit-line-clamp: 2;
}

.line-clamp_5 {
  -webkit-line-clamp: 5;
}

.overview-paragraph {
  margin: 10px 0 20px;
  line-height: 1.8rem;
  font-size: 1.1rem;
  color: #707070;
  letter-spacing: 0.4px;
}
</style>
