// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxzswwNZK0oDXBnEfGGmmsiBZwiNqy2E4",
  authDomain: "specs-shop.firebaseapp.com",
  projectId: "specs-shop",
  storageBucket: "specs-shop.appspot.com", // 👈 fixed typo here
  messagingSenderId: "46806414332",
  appId: "1:46806414332:web:598aec7dc33d644e5d3879",
  measurementId: "G-YE2P1M0VC2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
