import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAuv9pHvIhlo_wNj4tdkzNanWoGtQ-5-t4",
    authDomain: "is216-g2.firebaseapp.com",
    databaseURL: "https://is216-g2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "is216-g2",
    storageBucket: "is216-g2.appspot.com",
    messagingSenderId: "426453655797",
    appId: "1:426453655797:web:b36588777f86a6d32365bc",
    measurementId: "G-QXTL2H3M37"
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
export const blogPostsRef = collection(db, 'blogs')

const storage = getStorage();
export const bannerImagesRef = ref(storage, 'banners');