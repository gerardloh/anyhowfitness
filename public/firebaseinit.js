{/* <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
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
const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
</script> */}

{/* <script type="module">
  function initializeFirebase() {
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
    
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

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase(app);
    
    // Add further Firebase code or event listeners here
  }

  // Run the Firebase initialization function when the page is fully loaded
  window.addEventListener('load', initializeFirebase);
</script> */}

import firebase from "firebase/app"
import "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

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

//recondigured to isgt2 database as of 2:16pm 


const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const database = getDatabase(app)
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export {timestamp};
// export default firebaseApp.firestore();
