import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCqbPQm-U0WNu-ZfpqR2b-ec-wLQug2PRY",
  authDomain: "twitter-7119b.firebaseapp.com",
  projectId: "twitter-7119b",
  storageBucket: "twitter-7119b.appspot.com",
  messagingSenderId: "721681637881",
  appId: "1:721681637881:web:bbd3f89fc367e89ba19d28",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

