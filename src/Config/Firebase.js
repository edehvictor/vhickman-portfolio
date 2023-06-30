// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from  "firebase/auth";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCyQbRdOcIQXGSfn6ZsA9LsMpOEWK-fYtI",
  authDomain: "vhickman-blog.firebaseapp.com",
  projectId: "vhickman-blog",
  storageBucket: "vhickman-blog.appspot.com",
  messagingSenderId: "110488644002",
  appId: "1:110488644002:web:a802d31b5d50fa1af2aafb",
  measurementId: "G-XE1P7TG8SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleProvider =new GoogleAuthProvider(app)
export const auth = getAuth(app);
// const analytics = getAnalytics(app);