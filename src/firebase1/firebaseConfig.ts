import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
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


/**
 * @returns a store with the current firebase user
 */
function userStore() {
  // Don't render if firebase sdk is not available
  let unsubscribe: () => void;
  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const {subscribe} = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}


// Initialize Realtime Database and get a reference to the service

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const user = userStore();
export default app;