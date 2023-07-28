import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdSzS5Xavw0lGDZo6AHkkVNSKT_t4Mc-w",
  authDomain: "sample-59b88.firebaseapp.com",
  projectId: "sample-59b88",
  storageBucket: "sample-59b88.appspot.com",
  messagingSenderId: "656390122188",
  appId: "1:656390122188:web:242eb0f5b3fda1d86bb069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
