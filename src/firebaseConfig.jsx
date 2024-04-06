// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDP6fPRzzC0U2msrafSHuXb3dmKdNUJ54",
  authDomain: "shop-7c084.firebaseapp.com",
  projectId: "shop-7c084",
  storageBucket: "shop-7c084.appspot.com",
  messagingSenderId: "57136312641",
  appId: "1:57136312641:web:0192d6da79d93c56cc31c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)