<script setup>
import { blogPostsRef, bannerImagesRef } from '../firebase'
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { doc, setDoc } from '@firebase/firestore'
import router from '../router'
import { getDownloadURL, uploadBytes, ref as storageRef } from '@firebase/storage'

let buttonState = ref({buttonLabel: 'Upload', buttonDisabled: false});
let bannerUrl = ref('');
let bannerImage;
const contentHTML = ref('<p> Add your article content here </p>')
const articleTitle = ref('Your article title');
const articleSummary = ref('');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const generateId = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let id = ''
    for (let i = 0; i < 4; i++) {
        id += letters[Math.floor(Math.random() * letters.length)]
    }
    return id;
}

const storeBannerImage = async (filename) => {
    return new Promise((resolve, reject) => {
        const newBannerRef = storageRef(bannerImagesRef, filename)
        uploadBytes(newBannerRef, bannerImage, { contentType: 'image/jpeg'}).then(({ref}) => {
            getDownloadURL(ref).then((bannerImageUrl) => {
                resolve(bannerImageUrl);
            })
        })
        .catch((err) => reject(err));
    })
}

const upload = () => {
    if (!contentHTML.value || !articleTitle.value) {
        //avoid nesting code - use guard clauses
        return
    }
    buttonState.value = { buttonDisabled: true, buttonLabel: 'Loading ...'}
    
    const articleId = generateId();

    storeBannerImage(`${bannerImage?.name}`)
        .then((imageUrl) => uploadArticle(articleId, imageUrl))
        .catch((err) => console.error(err))
        .finally(() => {
            buttonState.value = { buttonDisabled: false, buttonLabel: 'Upload'}
        })
}

const uploadArticle = (id, bannerImageUrl) => {
  // setting up article data
  let docName = `${articleTitle.value.replace(' ', '-')}-${id}`
  let date = new Date() // for published at info
  const articleData = {
    title: articleTitle.value,
    article: contentHTML.value,
    summary: articleSummary.value,
    bannerImage: bannerImageUrl,
    publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  };

  // save to firestore
  const articleRef = doc(blogPostsRef, docName)
  setDoc(articleRef, articleData)
    .then(() => router.push({ path: `/blog/${docName}` }))
}


const onBannerPicked = (event) => {
    const fileName = event.target.files[0].name
    if (!fileName) return

    bannerImage = event.target.files[0]
    bannerUrl.value = URL.createObjectURL(bannerImage)
}
</script>

<template>
    <div v-if="bannerUrl" class="banner-image">
        <img :src="bannerUrl" />
    </div>
    <div class="container">
        <div class="form-container">
            <label for="bannerImage" class="form-label">Banner image</label>
            <input class="form-control" type="file" id="bannerImage" accept="image/*" @change="onBannerPicked">
        </div>
        <div class="form-container">
            <label class="form-label" for="articleTitle">Article Title</label>
            <input class="form-control" id="articleTitle" v-model="articleTitle" type="text" label="Article Title"/>
        </div>
        <div class="form-container">
            <label class="form-label" for="articleTitle">Article Content</label>
            <QuillEditor theme="snow" toolbar="full" v-model:content="contentHTML" contentType="html" />
        </div>  
        <div class="form-container">
            <label class="form-label" for="articleSummary">Summary</label>
            <textarea class="form-control" name="articleSummary" v-model="articleSummary" id="articleSummary" rows="3"></textarea>
        </div>  
        <button class="btn btn-dark" @click="upload" :disabled="buttonState.buttonDisabled">{{ buttonState.buttonLabel }}</button>
    </div>
</template>

<style scoped>
.banner-image > img {
    width: 100%;
    height: 200px;
    max-height: 100%;
    object-fit: cover;
}

.container {
    margin: 20px 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

.min-height {
    min-height: 600px;
}

.form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.btn {
    font-size: 1.5rem;
}
</style>