// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQcCIj2PilFD0PNyerLd3tF0eDzc7fQrI",
  authDomain: "lutfullah-todo-55ce8.firebaseapp.com",
  projectId: "lutfullah-todo-55ce8",
  storageBucket: "lutfullah-todo-55ce8.appspot.com",
  messagingSenderId: "247112800605",
  appId: "1:247112800605:web:92a1915ef672429c83b0b4",
  measurementId: "G-VM8M3670F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);