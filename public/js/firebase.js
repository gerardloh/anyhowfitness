let firebaseConfig = {
    apiKey: "AIzaSyAuv9pHvIhlo_wNj4tdkzNanWoGtQ-5-t4",
    authDomain: "is216-g2.firebaseapp.com",
    databaseURL: "https://is216-g2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "is216-g2",
    storageBucket: "is216-g2.appspot.com",
    messagingSenderId: "426453655797",
    appId: "1:426453655797:web:26878838329ce6c02365bc",
    measurementId: "G-HYZ4GSYP9Y"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();