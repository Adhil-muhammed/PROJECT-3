import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyASSiuur_d-dozo3hUKB1JV20NLAPOG-qg",
    authDomain: "back-end-9fad9.firebaseapp.com",
    projectId: "back-end-9fad9",
    storageBucket: "back-end-9fad9.appspot.com",
    messagingSenderId: "376188481770",
    appId: "1:376188481770:web:96b3b39561403bf652a793",
    measurementId: "G-DG9KLXRTJY"
  };
  export default firebase.initializeApp(firebaseConfig);