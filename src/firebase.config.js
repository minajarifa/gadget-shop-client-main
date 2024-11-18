import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5eP1UQGP9Tl4ANbT6YR_1i01UKo6mnp0",
  authDomain: "gadget-shop-9b564.firebaseapp.com",
  projectId: "gadget-shop-9b564",
  storageBucket: "gadget-shop-9b564.firebasestorage.app",
  messagingSenderId: "492475913229",
  appId: "1:492475913229:web:7cb0a1d0ff409c80e3f144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
