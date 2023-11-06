<script setup>
import { doc } from '@firebase/firestore'
import { useRoute } from 'vue-router'
import { useDocument } from 'vuefire'
import { blogPostsRef } from '../firebase'

const route = useRoute()
const blogPostId = route.params.id
const blogPost = useDocument(doc(blogPostsRef, blogPostId)) 

</script>

<template>
  <div class="banner" v-bind:style="{ backgroundImage: 'url(' + blogPost.bannerImage + ')' }"></div>
  <div class="container" v-bind:style="margin-left:0px !important; margin-right:0px !important;">
    <router-link to="/blog/">
      <h3 class="back-link">&lt; Back to overview</h3>
    </router-link>

    <div class="blog-content">
      <h1 class="title">{{ blogPost.title }}</h1>
      <p class="published"><span>Published on </span>{{ blogPost.publishedAt }}</p>
      <div class="article" v-html="blogPost.article.replace('\n', '<br/> <br/>')"></div>
    </div>
  </div>
</template>

<style scoped>

.container {
  margin: 50px 20%;
}

h3.back-link {
  color: rgb(153, 153, 153);
  font-weight: 300;
  font-size: 1.5rem;
}

.blog,
.article {
  position: relative;
  height: fit-content;
  padding-bottom: 0;
}

.title {
  width: 100%;
  min-height: 100px;
  height: auto;
  outline: none;
  font-size: 4rem;
  font-weight: 600;
  color: #2d2d2d;
  resize: none;
  border: none;
  padding: 10px;
  border-radius: 10px;
}

.article,
.title {
  min-height: auto;
  height: fit-content;
  padding: 0 10px;
  white-space: normal;
}

.published {
  margin: 20px 0 60px;
  padding: 0 10px;
  text-transform: capitalize;
  font-style: italic;
  color: rgba(0, 0, 0, 0.5);
}

.published span {
  font-weight: 700;
  font-style: normal;
  font-size: 1.25rem;
}

.article {
  font-size: 1.5rem;
  margin-top: 20px;
  line-height: 1.8rem;
  font-weight: 500;
}

.article * {
  margin: 30px 0;
  color: #2d2d2d;
}

.article-image {
  max-width: 100%;
  height: 100px;
  display: block;
  margin: 10px auto;
  object-fit: contain;
}

.sub-heading {
  padding: 0 5vw;
  color: #2d2d2d;
  font-weight: 500;
  font-size: 40px;
  margin-top: 80px;
}

.banner {
  height: 450px;
  position: relative;
  width: 100%;
  position: relative;
  background: #e7e7e7;
  background-size: cover;
  background-position: center;
}

.blog-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

p {
  color: #707070;
  font-size: 1rem;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
}
</style>
