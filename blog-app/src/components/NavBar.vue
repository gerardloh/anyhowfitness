<template>
    <div class="container">
        <div class="blog-name">
            Anyhow Fitness Blogs
        </div>
        <div class="blog-links">
            <a href="/">Home</a>
            <a href="#">Write a Blog</a>
            <a href="#">Write a Blog</a>
            <a href="#">Write a Blog</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>
<style scoped>
@import"../../public/css/style.css";
.container {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #5e5e5e;
    background: #fff;
    border-bottom: 2px solid #f9f9f9;
    box-shadow: none;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    max-width: none;

}

a {
    margin-right:200px;
    text-decoration: none !important;
    color: rgb(153, 153, 153);
    font-size: 24px;
    font-weight: 300;
    line-height: 60px;
    letter-spacing: 0.6px;
    transition: all 0.4s ease-in-out 0s;
}

a:hover {
    color: #000;
    background-color: transparent;
}

.blog-name {
    width: 40%;
    margin-left:250px;
}

</style>
