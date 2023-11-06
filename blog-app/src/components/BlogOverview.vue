<script setup>
import { useCollection } from 'vuefire'
import BlogCard from './BlogCard.vue';
import { blogPostsRef } from '../firebase';

const blogs = useCollection(blogPostsRef)
</script>

<template>
    <div class="grid-container">
        <BlogCard v-for="blogPost in blogs" :key="blogPost.id" :blogPost="blogPost"/>
    </div>
</template>


<style scoped>
    .grid-container {
        padding: 50px 15%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 80px;
    }
</style>