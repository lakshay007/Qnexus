
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { writable } from "svelte/store";
// Firebase credentials to not touch
const firebaseConfig = {
  apiKey: "AIzaSyB7IJYAOLlSu9__gxX8RZZmBS9zB1vjooE",
  authDomain: "svelteproj-b80fb.firebaseapp.com",
  projectId: "svelteproj-b80fb",
  storageBucket: "svelteproj-b80fb.appspot.com",
  messagingSenderId: "56478471242",
  appId: "1:56478471242:web:aa6cf0d822a804e8b4c2b3"
};



// Initialize Realtime Database and get a reference to the service

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;