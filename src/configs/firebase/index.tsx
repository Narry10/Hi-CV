// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRKvSJGhauPUepbU9GxHxJxXYksfkxsU8",
  authDomain: "hicv-8be71.firebaseapp.com",
  projectId: "hicv-8be71",
  storageBucket: "hicv-8be71.appspot.com",
  messagingSenderId: "769218275134",
  appId: "1:769218275134:web:add4e5c9b8d4470848ae6f",
  measurementId: "G-8YDXJ1FVZR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;